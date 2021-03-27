import {
  QUESTION_SUBSCRIPTION_TRIGGER,
  USER_SUBSCRIPTION_TRIGGER,
} from "../../common/constant/common.subscription";
import { environment } from "../../environment";
import { pubSub } from "../../graphql/publisher";
import { Question } from "../../schemas/Question";
import { User } from "../../schemas/User";
import { ValidationRepository } from "../validation/ValidationRepository";
import mongoose from "mongoose";

class QuestionRepository {
  private static instance: QuestionRepository;

  /**
   * admin add question
   * @param param0 
   * @returns 
   */
  public async addQuestion({
    question,
    options,
    auth,
  }: {
    question: string;
    options: { a: string; b: string; c: string; d: string };
    auth: { userName: string; password: string; secret: string };
  }) {
    // check credential valid
    if (ValidationRepository.getInstance().isRequestTrue({ ...auth })) {
      // create a question
      const newQuestion = new Question({
        question,
        options: { ...options },
      });
      
      let q = await newQuestion.save();

      if (!!!q) {
        throw new Error("something wrong!!, Question not created!!");
      }
      return { success: true };
    } else {
      throw new Error("Wrong credential!!!");
    }
  }
  /**
   * get all questions
   * @param auth
   * @returns
   */
  public async getAllQuestions(auth: any) {
    if (ValidationRepository.getInstance().isRequestTrue({ ...auth })) {
      const questions = await Question.find({}).sort({ _id: -1 });
      if (!!questions) {
        return questions;
      }
      throw new Error("something wrong!!, question not found !");
    } else {
      throw new Error("Wrong credential!!!");
    }
  }

  /**
   * submit vote to the poll
   * @param auth
   * @returns
   */
  public async addReactionOnQuestion({
    questionId,
    answer,
    userId,
  }: {
    questionId: string;
    answer: string;
    userId: string;
  }) {
    let fetchedQuestion: any = await Question.findById(questionId);

    

    //check Question is awailable or not
    if (!!!fetchedQuestion) {
      throw new Error("Not available question !!");
    }

    
    // check response already added by user
    const que: any = await Question.aggregate([
      { $match: { ["_id"]: mongoose.Types.ObjectId(questionId) } },
      {
        $unwind: {
          path: "$reaction",
        },
      },
      { $match: { "reaction.userId": userId } },
    ]);
    
    // if not already added response
    if (que.length == 0) {
      // awailable then update value
      fetchedQuestion.totalAnswered += 1;

      //push reaction
      fetchedQuestion.reaction.push({ userId: userId, selectOption: answer });

      let optionStatus: any = {};

      // check if option status is not null

      if (!!fetchedQuestion?.optionStatus) {
        let x = JSON.stringify(fetchedQuestion.optionStatus);

        optionStatus = { ...JSON.parse(x) };

        if (optionStatus.hasOwnProperty(answer)) {
          optionStatus = {
            ...optionStatus,
            [answer]: optionStatus[answer] + 1,
          };
        } else {
          optionStatus = { ...optionStatus, [answer]: 1 };
        }
      } else {
        optionStatus = { ...optionStatus, [answer]: 1 };
      }

      // update optionStatus  value
      fetchedQuestion["optionStatus"] = { ...optionStatus };
      let savedQuestion = await fetchedQuestion.save();
      if (!!!savedQuestion) {
        throw new Error("Something wrong !!");
      }
      // console.log({ savedQuestion });
      // console.log({ savedQuestion: { ...savedQuestion } });
      let x = JSON.stringify(savedQuestion);
      // console.log(JSON.parse(x));
      pubSub.publish(
        `${QUESTION_SUBSCRIPTION_TRIGGER.addReaction}_${savedQuestion._id}`,
        {
          ...JSON.parse(x),
        },
      );
      return { success: true };
    } else {

      // if alredy added response then this edit his response
      let oldAns;

      if (que[0].reaction.selectOption == answer) {
        throw new Error("same answer selected");
      }

      const recs = fetchedQuestion.reaction.map((rec: any) => {
        if (rec._id.toString() == que[0].reaction._id.toString()) {
          // console.log("same");
          oldAns = rec.selectOption;
          rec.selectOption = answer;
          return rec;
        } else {
          return rec;
        }
      });
      console.log({
        oldAns,
        answer,
        op: fetchedQuestion.optionStatus,
        cond: fetchedQuestion.optionStatus.hasOwnProperty(answer),
      });
      fetchedQuestion.reaction = [...recs];

      if (!!oldAns) {
        if (!!fetchedQuestion.optionStatus[answer]) {
          fetchedQuestion.optionStatus[answer] += 1;
        } else {
          fetchedQuestion.optionStatus[answer] = 1;
        }

        fetchedQuestion.optionStatus[oldAns] -= 1;
        console.log({ t: fetchedQuestion.optionStatus });
      }

      let saveQue = await fetchedQuestion.save();
      // console.log(saveQue);
      if (!!!saveQue) {
        throw new Error("something wrong !!");
      } else {
        let x = JSON.stringify(saveQue);
        // console.log(JSON.parse(x));
        pubSub.publish(
          `${QUESTION_SUBSCRIPTION_TRIGGER.addReaction}_${saveQue._id}`,
          {
            ...JSON.parse(x),
          },
        );
        return { success: true };
      }
    }
  }

  /**
   *
   * Singelton Object for whole application, this class method acess threw this instance.
   */
  public static getInstance() {
    if (!QuestionRepository.instance) {
      QuestionRepository.instance = new QuestionRepository();
    }
    return QuestionRepository.instance;
  }
}

export { QuestionRepository };
