/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type useGetCountQueryVariables = {||};
export type useGetCountQueryResponse = {|
  +viewer: ?{|
    +id: string,
    +count: ?number,
  |}
|};
export type useGetCountQuery = {|
  variables: useGetCountQueryVariables,
  response: useGetCountQueryResponse,
|};
*/


/*
query useGetCountQuery {
  viewer {
    id
    count
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "user",
    "kind": "LinkedField",
    "name": "viewer",
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
        "name": "count",
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
    "name": "useGetCountQuery",
    "selections": (v0/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useGetCountQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "82c5ec93f7adbdce682622419343937a",
    "id": null,
    "metadata": {},
    "name": "useGetCountQuery",
    "operationKind": "query",
    "text": "query useGetCountQuery {\n  viewer {\n    id\n    count\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6e131034f2049b28b484f662f433ec78';

module.exports = node;
