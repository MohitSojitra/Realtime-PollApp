/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type useLiveCountSubscriptionVariables = {||};
export type useLiveCountSubscriptionResponse = {|
  +liveOnlineCount: ?{|
    +userCount: ?number
  |}
|};
export type useLiveCountSubscription = {|
  variables: useLiveCountSubscriptionVariables,
  response: useLiveCountSubscriptionResponse,
|};
*/


/*
subscription useLiveCountSubscription {
  liveOnlineCount {
    userCount
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "liveOnlineCountPayload",
    "kind": "LinkedField",
    "name": "liveOnlineCount",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userCount",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useLiveCountSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useLiveCountSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5c5d768904edfbeb787c9090b88117ba",
    "id": null,
    "metadata": {},
    "name": "useLiveCountSubscription",
    "operationKind": "subscription",
    "text": "subscription useLiveCountSubscription {\n  liveOnlineCount {\n    userCount\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c576762047b1c020c0a07c4ac4fa8039';

module.exports = node;
