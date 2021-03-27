/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addQuestionInput = {|
  question: string,
  options?: ?inputOptions,
  auth?: ?authInput,
  clientMutationId?: ?string,
|};
export type inputOptions = {|
  a?: ?string,
  b?: ?string,
  c?: ?string,
  d?: ?string,
|};
export type authInput = {|
  userName?: ?string,
  password?: ?string,
  secret?: ?string,
|};
export type AddQuestionMutationVariables = {|
  input: addQuestionInput
|};
export type AddQuestionMutationResponse = {|
  +addQuestion: ?{|
    +success: ?boolean
  |}
|};
export type AddQuestionMutation = {|
  variables: AddQuestionMutationVariables,
  response: AddQuestionMutationResponse,
|};
*/


/*
mutation AddQuestionMutation(
  $input: addQuestionInput!
) {
  addQuestion(input: $input) {
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "addQuestionPayload",
    "kind": "LinkedField",
    "name": "addQuestion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
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
    "name": "AddQuestionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddQuestionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1dc3ed733219a8d0556c0626cf6220d2",
    "id": null,
    "metadata": {},
    "name": "AddQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation AddQuestionMutation(\n  $input: addQuestionInput!\n) {\n  addQuestion(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec79417c9a50c743822c61a27d088ce0';

module.exports = node;
