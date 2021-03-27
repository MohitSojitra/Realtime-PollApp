import { useState } from "react";
import { useQuery, graphql, useRefetch } from "relay-hooks";
import { env } from "../../../../Env";

export default function useGetAllQuestion() {
  const useGetAllQuestionQuery = graphql`
    query useGetAllQuestionQuery(
      $userName: String
      $password: String
      $secret: String
    ) {
      viewer {
        id
        getAllQuestion(
          userName: $userName
          password: $password
          secret: $secret
        ) {
          id
          questionId
          question
          options {
            a
            b
            c
            d
          }
          optionStatus {
            a
            b
            c
            d
          }
          totalAnswered
          reaction {
            userId
            selectOption
          }
        }
      }
    }
  `;

  const { props } = useQuery(useGetAllQuestionQuery, {
    userName: env.userName,
    password: env.password,
    secret: env.secret,
  });

  return {
    questions: props?.viewer?.getAllQuestion,
  };
}
