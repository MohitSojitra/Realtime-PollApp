import { useEffect } from "react";
import { requestSubscription } from "relay-runtime";

const subscription = graphql`
  subscription useLiveCountSubscription {
    liveOnlineCount {
      userCount
    }
  }
`;

export function useLiveCountSubscription({ environment, onNext }) {
  useEffect(() => {
    const { dispose } = requestSubscription(environment, {
      subscription,
      updater: (store) => {
        let rf = store.getRootField("liveOnlineCount");
        onNext(rf.getValue("userCount"));
      },
      onError: (error) => console.log("Count Subscription error", error),
    });
    return dispose;
  }, [environment]);
}
