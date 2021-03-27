import { graphql } from "graphql";
import { useEffect } from "react";
import { useQuery } from "relay-hooks";
import { requestSubscription } from "relay-runtime";

const countQuery = graphql`
  query useGetCountQuery {
    viewer {
      id
      count
    }
  }
`;

export function useGetCountQuery() {
  const { props, error, retry, cached } = useQuery(countQuery);
  return { count: props?.viewer?.count };
}
