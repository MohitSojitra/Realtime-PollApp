/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type useQuestionReactionSubscriptionVariables = {|
  questionId: string
|};
export type useQuestionReactionSubscriptionResponse = {|
  +pollReaction: ?{|
    +id: string,
    +questionId: ?string,
    +question: ?string,
    +options: ?{|
      +a: ?string,
      +b: ?string,
      +c: ?string,
      +d: ?string,
    |},
    +optionStatus: ?{|
      +a: ?number,
      +b: ?number,
      +c: ?number,
      +d: ?number,
    |},
    +totalAnswered: ?number,
  |}
|};
export type useQuestionReactionSubscription = {|
  variables: useQuestionReactionSubscriptionVariables,
  response: useQuestionReactionSubscriptionResponse,
|};
*/


/*
subscription useQuestionReactionSubscription(
  $questionId: String!
) {
  pollReaction(questionId: $questionId) {
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
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "questionId"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "a",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "b",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "c",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "d",
    "storageKey": null
  }
],
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "questionId",
        "variableName": "questionId"
      }
    ],
    "concreteType": "question",
    "kind": "LinkedField",
    "name": "pollReaction",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "questionId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "question",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "options",
        "kind": "LinkedField",
        "name": "options",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "optionStatus",
        "kind": "LinkedField",
        "name": "optionStatus",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalAnswered",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useQuestionReactionSubscription",
    "selections": (v2/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useQuestionReactionSubscription",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "e574ed925845c550981df3bff8d58701",
    "id": null,
    "metadata": {},
    "name": "useQuestionReactionSubscription",
    "operationKind": "subscription",
    "text": "subscription useQuestionReactionSubscription(\n  $questionId: String!\n) {\n  pollReaction(questionId: $questionId) {\n    id\n    questionId\n    question\n    options {\n      a\n      b\n      c\n      d\n    }\n    optionStatus {\n      a\n      b\n      c\n      d\n    }\n    totalAnswered\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '394aedfdea154a35756d0fa765d5c2af';

module.exports = node;
