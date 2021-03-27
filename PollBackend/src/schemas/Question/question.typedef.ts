import mongoose from "mongoose";

/**
 * options of Question
 */
interface Options extends mongoose.Document {
  a: string;
  b: string;
  c: string;
  d: string;
}

/**
 * reaction of Questions
 */
interface OptionStatus extends mongoose.Document {
  a: number;
  b: number;
  c: number;
  d: number;
}

/**
 * Track of user answered
 */
interface UserReaction extends mongoose.Document {
  userId: string;
  selectOption: string;
}

/**
 * main Question model
 */
export interface QuestionModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  question: string;
  options: [Options];
  optionStatus: [OptionStatus];
  totalAnswered: number;
  reaction: [UserReaction];
}
