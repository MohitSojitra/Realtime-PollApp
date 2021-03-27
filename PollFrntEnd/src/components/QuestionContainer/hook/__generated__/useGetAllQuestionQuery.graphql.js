/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type useGetAllQuestionQueryVariables = {|
  userName?: ?string,
  password?: ?string,
  secret?: ?string,
|};
export type useGetAllQuestionQueryResponse = {|
  +viewer: ?{|
    +id: string,
    +getAllQuestion: ?$ReadOnlyArray<?{|
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
      +reaction: ?$ReadOnlyArray<?{|
        +userId: ?string,
        +selectOption: ?string,
      |}>,
    |}>,
  |}
|};
export type useGetAllQuestionQuery = {|
  variables: useGetAllQuestionQueryVariables,
  response: useGetAllQuestionQueryResponse,
|};
*/


/*
query useGetAllQuestionQuery(
  $userName: String
  $password: String
  $secret: String
) {
  viewer {
    id
    getAllQuestion(userName: $userName, password: $password, secret: $secret) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "secret"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userName"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
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
v5 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "user",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      (v3/*: any*/),
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          },
          {
            "kind": "Variable",
            "name": "secret",
            "variableName": "secret"
          },
          {
            "kind": "Variable",
            "name": "userName",
            "variableName": "userName"
          }
        ],
        "concreteType": "question",
        "kind": "LinkedField",
        "name": "getAllQuestion",
        "plural": true,
        "selections": [
          (v3/*: any*/),
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
            "selections": (v4/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "optionStatus",
            "kind": "LinkedField",
            "name": "optionStatus",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalAnswered",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "reaction",
            "kind": "LinkedField",
            "name": "reaction",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "userId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "selectOption",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useGetAllQuestionQuery",
    "selections": (v5/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "useGetAllQuestionQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "967ec1d410baaecf52a89a696570d73d",
    "id": null,
    "metadata": {},
    "name": "useGetAllQuestionQuery",
    "operationKind": "query",
    "text": "query useGetAllQuestionQuery(\n  $userName: String\n  $password: String\n  $secret: String\n) {\n  viewer {\n    id\n    getAllQuestion(userName: $userName, password: $password, secret: $secret) {\n      id\n      questionId\n      question\n      options {\n        a\n        b\n        c\n        d\n      }\n      optionStatus {\n        a\n        b\n        c\n        d\n      }\n      totalAnswered\n      reaction {\n        userId\n        selectOption\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ef087d2ce00191f3fe3db3121b9a9996';

module.exports = node;
