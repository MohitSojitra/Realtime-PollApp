/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type userLeaveSiteInput = {|
  userName: string,
  clientMutationId?: ?string,
|};
export type LeaveUserMutationVariables = {|
  input: userLeaveSiteInput
|};
export type LeaveUserMutationResponse = {|
  +userLeaveSite: ?{|
    +success: ?boolean
  |}
|};
export type LeaveUserMutation = {|
  variables: LeaveUserMutationVariables,
  response: LeaveUserMutationResponse,
|};
*/


/*
mutation LeaveUserMutation(
  $input: userLeaveSiteInput!
) {
  userLeaveSite(input: $input) {
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
    "concreteType": "userLeaveSitePayload",
    "kind": "LinkedField",
    "name": "userLeaveSite",
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
    "name": "LeaveUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LeaveUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "81633d14a8f323be2e600754a9d938ce",
    "id": null,
    "metadata": {},
    "name": "LeaveUserMutation",
    "operationKind": "mutation",
    "text": "mutation LeaveUserMutation(\n  $input: userLeaveSiteInput!\n) {\n  userLeaveSite(input: $input) {\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '14c3b12912f62a55ad280be950d5e4be';

module.exports = node;
