<p align="center"><a href="https://github.com/sakura90/sorted-array-operations"><img src="https://sakura90.github.io/moduleLogo.png" height="180"/></a></p>
<h1 align="center">Sorted Array Operations</h1>
<p align="center">Sorted array operation module that has a broad operation coverage.</p>

<p align="center">
	<a href="#"><img src="https://img.shields.io/badge/Unit%20test-passing-brightgreen" height="20"/></a>
	<a href="#"><img src="https://img.shields.io/badge/Size-2.9kB-green" height="20"/></a>
	<a href="#"><img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" height="20"/></a>
  <a href="https://twitter.com/intent/tweet?text=Sorted%20array%20operation%20JavaScript%20module&url=https://github.com/sakura90/sorted-array-operations&hashtags=javascript,opensource,js,webdev,developers"><img src="http://randojs.com/images/tweetShield.svg" alt="Tweet" height="20"/></a>
</p><br/><br/>

<p align="center"><img src="https://sakura90.github.io/sorted-array-operations-demo-use.gif" width="50%"/></p><br/>

## Overview
Existing libraries cover non-standard operations or cover the operations partially on sorted arrays.
This library is created to provide a wide range of operations on sorted arrays found in the standard libraries 
of major programming languages so that developers can get almost all (if not all) standard operations on sorted arrays in a library.

This library features:

* Language: Supports both JavaScript and TypeScript
* Module: Includes both CommonJS module and ES module

## Installation
Yarn & npm

```
$ yarn add sorted-array-operations
$ npm install sorted-array-operations
```

CDN

```
<script src="https://unpkg.com/sorted-array-operations@1.0.0/dist/utils.esm.js"></script>
```

## Usage of all library functions
```js
const ops = require('sorted-array-operations');

console.log(ops.union([2, 3, 5, 6], [2, 6, 8])); // [ 2, 3, 5, 6, 8 ]
console.log(ops.intersection([2, 3, 5, 6], [2, 6, 8])); // [ 2 ]
console.log(ops.difference([2, 3, 5, 6], [2, 6, 8])); // [ 3, 5 ]
console.log(ops.symmetric_difference([2, 3, 5, 6], [2, 6, 8])); // [ 3, 5, 8 ]
console.log(ops.merge([2, 3, 5, 6], [2, 6, 8])); // [ 2, 2, 3, 5, 6, 6, 8 ]

const arr1 = [2, 5, 3];
console.log(ops.inplace_merge(arr1, 2)); // arr1 becomes [ 2, 3, 5 ]

console.log(ops.includes([2, 3, 5, 6], [2, 6, 8])); // false

const arr2 = [2, 3, 5, 6];
console.log(ops.insert(arr2, 2)); // arr2 becomes [ 2, 2, 3, 5, 6 ]

const arr3 = [2, 3, 5, 6];
console.log(ops.remove(arr3, 2)); // Return true. arr3 becomes [ 3, 5, 6 ]
console.log(ops.binary_search([2, 3, 5, 6], 2)); // Return 0
console.log(ops.binary_search_ge([2, 3, 5, 6], 2)); // Return 0
console.log(ops.binary_search_gt([2, 3, 5, 6], 2)); // Return 1
console.log(ops.equal_range([2, 3, 5, 6], 2)); // Return [ 0, 1 ]

function weight_cmp(p1, p2) {
  return p1.weight > p2.weight ? 1 : p1.weight < p2.weight ? -1 : 0;
}

console.log(ops.union([{weight: 2}, {weight: 3}], [{weight: 3}], weight_cmp)); // [ {weight: 2}, {weight: 3} ]
console.log(ops.intersection([{weight: 2}, {weight: 3}], [{weight: 3}], weight_cmp)); // [ {weight: 3} ]
console.log(ops.difference([{weight: 2}, {weight: 3}], [{weight: 3}], weight_cmp)); // [ {weight: 2} ]
console.log(ops.symmetric_difference([{weight: 2}, {weight: 3}], [{weight: 3},{weight: 4}], weight_cmp)); // [ {weight: 2}, {weight: 4} ]
console.log(ops.merge([{weight: 2}, {weight: 3}], [{weight: 3}], weight_cmp)); // [ {weight: 2}, {weight: 3}, {weight: 3} ]

const arr4 = [{weight: 3}, {weight: 1}];
console.log(ops.inplace_merge(arr4, 1, weight_cmp)); // arr4 becomes [ {weight: 1}, {weight: 3} ]

console.log(ops.includes([{weight: 2}, {weight: 3}], [{weight: 3}], weight_cmp)); // true

const arr5 = [{weight: 3}];
console.log(ops.insert(arr5, {weight: 2}, weight_cmp)); // arr5 becomes [ {weight: 2}, {weight: 3} ]

const arr6 = [{weight: 3}];
console.log(ops.remove(arr6, {weight: 3}, weight_cmp)); // Return true. arr6 becomes [ ]
console.log(ops.binary_search([{weight: 2}, {weight: 3}], {weight: 2}, weight_cmp)); // Return 0
console.log(ops.binary_search_ge([{weight: 2}, {weight: 3}], {weight: 2}, weight_cmp)); // Return 0
console.log(ops.binary_search_gt([{weight: 2}, {weight: 3}], {weight: 2}, weight_cmp)); // Return 1
console.log(ops.equal_range([{weight: 2}, {weight: 3}], {weight: 2}, weight_cmp)); // Return [ 0, 1 ]
```

## Related libraries
The library most similar to this library is [sorted-array-functions](https://www.npmjs.com/package/sorted-array-functions).
This library has the set operations on sorted arrays and follows the way of implementing `lower_bound` and `upper_bound`
in the standard libraries in C++ and Python.  These 2 differences are the major differences between this library and 
[sorted-array-functions](https://www.npmjs.com/package/sorted-array-functions).
Other related libraries can be found in Google search.

## Contributing
The sorted array operation library welcomes patches/pulls for features and bug fixes.  Please open an issue and send a PR request!
