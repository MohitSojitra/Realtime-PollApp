/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addReactionInput = {|
  questionId: string,
  answer: string,
  userId: string,
  clientMutationId?: ?string,
|};
export type AddReactionMutationVariables = {|
  input: addReactionInput
|};
export type AddReactionMutationResponse = {|
  +addReaction: ?{|
    +success: ?boolean
  |}
|};
export type AddReactionMutation = {|
  variables: AddReactionMutationVariables,
  response: AddReactionMutationResponse,
|};
*/


/*
mutation AddReactionMutation(
  $input: addReactionInput!
) {
  addReaction(input: $input) {
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
    "concreteType": "addReactionPayload",
    "kind": "LinkedField",
    "name": "addReaction",
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
    "name": "AddReactionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddReactionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "35e1f36b7739e041c289432d25d9fa75",
    "id": null,
    "metadata": {},
    "name": "AddReactionMutation",
    "operationKind": "mutation",
    "text": "mutation AddReactionMutation(\n  $input: addReactionInput!\n) {\n  addReaction(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c2a20e8688c2c1df14b0f8c7723482f2';

module.exports = node;
