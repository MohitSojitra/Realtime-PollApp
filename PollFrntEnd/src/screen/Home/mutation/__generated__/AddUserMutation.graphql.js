/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type userEnterSiteInput = {|
  userName: string,
  clientMutationId?: ?string,
|};
export type AddUserMutationVariables = {|
  input: userEnterSiteInput
|};
export type AddUserMutationResponse = {|
  +userEnterSite: ?{|
    +success: ?boolean,
    +userId: ?string,
  |}
|};
export type AddUserMutation = {|
  variables: AddUserMutationVariables,
  response: AddUserMutationResponse,
|};
*/


/*
mutation AddUserMutation(
  $input: userEnterSiteInput!
) {
  userEnterSite(input: $input) {
    success
    userId
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
    "concreteType": "userEnterSitePayload",
    "kind": "LinkedField",
    "name": "userEnterSite",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userId",
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
    "name": "AddUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ceff5c588d265ff23bfea009452bc42e",
    "id": null,
    "metadata": {},
    "name": "AddUserMutation",
    "operationKind": "mutation",
    "text": "mutation AddUserMutation(\n  $input: userEnterSiteInput!\n) {\n  userEnterSite(input: $input) {\n    success\n    userId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '274f18b3fe9529e02f48b1a7909c4015';

module.exports = node;
