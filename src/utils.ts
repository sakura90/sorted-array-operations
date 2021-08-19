/**
 * @license Apache-2.0
 *
 * Copyright (c) 2021 Patrick Chan
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The type of the optional comparation function used in many of the module functions.
 */
// JSDoc not supporting to parse the following type yet.
// https://github.com/jsdoctypeparser/jsdoctypeparser/issues/50
type cmpFn<T> = (elem1: T, elem2: T) => number;

/**
 * Returns a negative number, zero, or a positive number depending on whether the
 * first argument is less than, equal to, or greater than the second argument.
 * The default comparation function if the optional comparation function is not offered.
 * @param {T} elem1 The first element.
 * @param {T} elem2 The second element.
 * @return {number}
 */
function defaultCmp<T>(elem1: T, elem2: T): number {
  return elem1 > elem2 ? 1 : elem1 < elem2 ? -1 : 0;
}

/**
 * Returns the array after the doing union operation to two arrays.
 * @param {Array<T>} arr1 The first array.
 * @param {Array<T>} arr2 The second array.
 * @param {?function(T,T):number=} opt_cmpFn Optional comparison
 *     function by which the array is to be ordered. It should take 2 arguments to
 *     compare, and it returns a negative number, zero, or a positive number depending on
 *     whether the first argument is less than, equal to, or greater than the second argument.
 * @return {T[]} The array after the union operation.
 */
function union<T>(arr1: T[], arr2: T[], opt_cmpFn: cmpFn<T> = null): T[] {
  const cmp = opt_cmpFn || defaultCmp;
  const retval = [];

  let j = 0;
  let k = 0;

  while (j < arr1.length && k < arr2.length) {
    if (cmp(arr1[j], arr2[k]) === 0) {
      retval.push(arr1[j]);
      j++;
      k++;
    } else {
      if (cmp(arr1[j], arr2[k]) < 0) {
        retval.push(arr1[j]);
        j++;
      } else {
        retval.push(arr2[k]);
        k++;
      }
    }
  }

  if (j === arr1.length) {
    for (let i = k; i < arr2.length; ++i) {
      retval.push(arr2[i]);
    }
  } else {
    for (let i = j; i < arr1.length; ++i) {
      retval.push(arr1[i]);
    }
  }

  return retval;
}

/**
 * Returns the array after the doing intersection operation to two arrays.
 * @param {Array<T>} arr1 The first array.
 * @param {Array<T>} arr2 The second array.
 * @param {?function(T,T):number=} opt_cmpFn Optional comparison
 *     function by which the array is to be ordered. It should take 2 arguments to
 *     compare, and it returns a negative number, zero, or a positive number depending on
 *     whether the first argument is less than, equal to, or greater than the second argument.
 * @return {T[]} The array after the intersection operation.
 */
function intersection<T>(
  arr1: T[],
  arr2: T[],
  opt_cmpFn: cmpFn<T> = null
): T[] {
  const cmp = opt_cmpFn || defaultCmp;
  const retval = [];

  let j = 0;
  let k = 0;

  while (j < arr1.length && k < arr2.length) {
    if (cmp(arr1[j], arr2[k]) === 0) {
      retval.push(arr1[j]);
      j++;
      k++;
    } else {
      if (cmp(arr1[j], arr2[k]) < 0) {
        j++;
      } else {
        k++;
      }
    }
  }

  return retval;
}

/**
 * Returns the array after the doing difference operation to two arrays.
 * @param {Array<T>} arr1 The first array.
 * @param {Array<T>} arr2 The second array.
 * @param {?function(T,T):number=} opt_cmpFn Optional comparison
 *     function by which the array is to be ordered. It should take 2 arguments to
 *     compare, and it returns a negative number, zero, or a positive number depending on
 *     whether the first argument is less than, equal to, or greater than the second argument.
 * @return {T[]} The array after the difference operation.
 */
function difference<T>(arr1: T[], arr2: T[], opt_cmpFn: cmpFn<T> = null): T[] {
  const cmp = opt_cmpFn || defaultCmp;
  const retval = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (cmp(arr1[i], arr2[j]) === 0) {
      i++;
      j++;
    } else if (cmp(arr1[i], arr2[j]) < 0) {
      retval.push(arr1[i]);
      i++;
    } else {
      j++;
    }
  }
  if (j === arr2.length) {
    for (let k = i; k < arr1.length; ++k) {
      retval.push(arr1[k]);
    }
  }

  return retval;
}

/**
 * Returns the array after the doing symmetric difference operation to two arrays.
 * @param {Array<T>} arr1 The first array.
 * @param {Array<T>} arr2 The second array.
 * @param {?function(T,T):number=} opt_cmpFn Optional comparison
 *     function by which the array is to be ordered. It should take 2 arguments to
 *     compare, and it returns a negative number, zero, or a positive number depending on
 *     whether the first argument is less than, equal to, or greater than the second argument.
 * @return {T[]} The array after the symmetric difference operation.
 */
function symmetric_difference<T>(
  arr1: T[],
  arr2: T[],
  opt_cmpFn: cmpFn<T> = null
): T[] {
  const cmp = opt_cmpFn || defaultCmp;
  const retval = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (cmp(arr1[i], arr2[j]) === 0) {
      i++;
      j++;
    } else if (cmp(arr1[i], arr2[j]) < 0) {
      retval.push(arr1[i]);
      i++;
    } else {
      retval.push(arr2[j]);
      j++;
    }
  }
  if (j === arr2.length) {
    for (let k = i; k < arr1.length; ++k) {
      retval.push(arr1[k]);
    }
  } else {
    for (let k = j; k < arr2.length; ++k) {
      retval.push(arr2[k]);
    }
  }

  return retval;
}

/**
 * Returns the array after the doing merge operation to two arrays.
 * @param {Array<T>} arr1 The first array.
 * @param {Array<T>} arr2 The second array.
 * @param {?function(T,T):number=} opt_cmpFn Optional comparison
 *     function by which the array is to be ordered. It should take 2 arguments to
 *     compare, and it returns a negative number, zero, or a positive number depending on
 *     whether the first argument is less than, equal to, or greater than the second argument.
 * @return {T[]} The array after the merge operation.
 */
function merge<T>(arr1: T[], arr2: T[], opt_cmpFn: cmpFn<T> = null): T[] {
  const cmp = opt_cmpFn || defaultCmp;
  const retval = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (cmp(arr1[i], arr2[j]) === 0) {
      retval.push(arr1[i]);
      retval.push(arr2[j]);
      i++;
      j++;
    } else if (cmp(arr1[i], arr2[j]) < 0) {
      retval.push(arr1[i]);
      i++;
    } else {
      retval.push(arr2[j]);
      j++;
    }
  }
  if (j === arr2.length) {
    for (let k = i; k < arr1.length; ++k) {
      retval.push(arr1[k]);
    }
  } else {
    for (let k = j; k < arr2.length; ++k) {
      retval.push(arr2[k]);
    }
  }

  return retval;
}

/**
 * Returns void after the doing merge operation inplace to the argument array.
 * @param {Array<T>} arr The array.
 * @param {number} middle The index of the array that separates it to 2 sorted arrays.
 * @param {?function(T,T):number=} opt_cmpFn Optional comparison
 *     function by which the array is to be ordered. It should take 2 arguments to
 *     compare, and it returns a negative number, zero, or a positive number depending on
 *     whether the first argument is less than, equal to, or greater than the second argument.
 * @return {void}
 */
function inplace_merge<T>(
  arr: T[],
  middle: number,
  opt_cmpFn: cmpFn<T> = null
): void {
  const cmp = opt_cmpFn || defaultCmp;
  const helper = [];

  let i = 0;
  let j = middle;

  while (i < middle && j < arr.length) {
    if (cmp(arr[i], arr[j]) === 0) {
      helper.push(arr[i]);
      helper.push(arr[j]);
      i++;
      j++;
    } else if (cmp(arr[i], arr[j]) < 0) {
      helper.push(arr[i]);
      i++;
    } else {
      helper.push(arr[j]);
      j++;
    }
  }
  if (j === arr.length) {
    for (let k = i; k < middle; ++k) {
      helper.push(arr[k]);
    }
  } else {
    for (let k = j; k < arr.length; ++k) {
      helper.push(arr[k]);
    }
  }

  for (let k = 0; k < arr.length; ++k) {
    arr[k] = helper[k];
  }
}

/**
 * Returns true/false after finding out if all the second array elements are in the first array.
 * Returns true if all the second array elements are in the first array.  False otherwise.
 * @param {Array<T>} arr1 The first array.
 * @param {Array<T>} arr2 The second array.
 * @param {?function(T,T):number=} opt_cmpFn Optional comparison
 *     function by which the array is to be ordered. It should take 2 arguments to
 *     compare, and it returns a negative number, zero, or a positive number depending on
 *     whether the first argument is less than, equal to, or greater than the second argument.
 * @return {boolean}
 */
function includes<T>(
  arr1: T[],
  arr2: T[],
  opt_cmpFn: cmpFn<T> = null
): boolean {
  const cmp = opt_cmpFn || defaultCmp;

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (cmp(arr1[i], arr2[j]) === 0) {
      i++;
      j++;
    } else if (cmp(arr1[i], arr2[j]) < 0) {
      i++;
    } else {
      return false;
    }
  }
  return j === arr2.length;
}

/**
 * Returns void after inserting the argument value to the argument array.
 * @param {Array<T>} arr The array.
 * @param {T} elem The value.
 * @param {?function(T,T):number=} opt_cmpFn Optional comparison
 *     function by which the array is to be ordered. It should take 2 arguments to
 *     compare, and it returns a negative number, zero, or a positive number depending on
 *     whether the first argument is less than, equal to, or greater than the second argument.
 * @return {void}
 */
function insert<T>(arr: T[], elem: T, opt_cmpFn: cmpFn<T> = null): void {
  const cmp = opt_cmpFn || defaultCmp;

  let i = 0;
  for (; i < arr.length; ++i) {
    if (cmp(elem, arr[i]) < 0) {
      break;
    }
  }

  arr.push(arr[arr.length - 1]);
  for (let j = arr.length - 2; j > i; --j) {
    arr[j] = arr[j - 1];
  }
  arr[i] = elem;
}

/**
 * Returns true/false after removing the argument value from the argument array.
 * Returns true if the value is in the array.  False otherwise.
 * @param {Array<T>} arr The array.
 * @param {T} elem The value.
 * @param {?function(T,T):number=} opt_cmpFn Optional comparison
 *     function by which the array is to be ordered. It should take 2 arguments to
 *     compare, and it returns a negative number, zero, or a positive number depending on
 *     whether the first argument is less than, equal to, or greater than the second argument.
 * @return {boolean}
 */
function remove<T>(arr: T[], elem: T, opt_cmpFn: cmpFn<T> = null): boolean {
  const cmp = opt_cmpFn || defaultCmp;

  let i = 0;
  for (; i < arr.length; ++i) {
    if (cmp(elem, arr[i]) === 0) {
      break;
    }
  }
  if (i === arr.length) {
    return false;
  }

  for (let j = i; j < arr.length - 1; ++j) {
    arr[j] = arr[j + 1];
  }
  arr.pop();
  return true;
}

/**
 * Returns an index of the search value of the array if the search value is found,
 * or returns -1 if it is not found.
 * @param {Array<T>} arr The array.
 * @param {T} elem The value.
 * @param {?function(T,T):number=} opt_cmpFn Optional comparison
 *     function by which the array is to be ordered. It should take 2 arguments to
 *     compare, and it returns a negative number, zero, or a positive number depending on
 *     whether the first argument is less than, equal to, or greater than the second argument.
 * @return {number}
 */
function binary_search<T>(
  arr: T[],
  elem: T,
  opt_cmpFn: cmpFn<T> = null
): number {
  const cmp = opt_cmpFn || defaultCmp;

  let i = 0;
  let j = arr.length - 1;
  let mid = 0;

  while (i <= j) {
    mid = i + Math.floor((j - i) / 2);

    if (cmp(elem, arr[mid]) === 0) {
      return mid;
    } else if (cmp(elem, arr[mid]) < 0) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return -1;
}

/**
 * Returns the index of the leftmost value of the array that is >= the search value,
 * or returns the array length if the search value > all values of the array.
 * @param {Array<T>} arr The array.
 * @param {T} elem The value.
 * @param {?function(T,T):number=} opt_cmpFn Optional comparison
 *     function by which the array is to be ordered. It should take 2 arguments to
 *     compare, and it returns a negative number, zero, or a positive number depending on
 *     whether the first argument is less than, equal to, or greater than the second argument.
 * @return {number}
 */
function binary_search_ge<T>(
  arr: T[],
  elem: T,
  opt_cmpFn: cmpFn<T> = null
): number {
  const cmp = opt_cmpFn || defaultCmp;

  if (arr.length === 0) {
    return 0;
  }

  let low = 0;
  let high = arr.length - 1;
  let mid = 0;
  
  while (low < high) {
    mid = low + Math.floor((high - low) / 2);

    if (cmp(elem, arr[mid]) <= 0) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  if (cmp(arr[low], elem) < 0) {
    low++;
  }

  return low;
}

/**
 * Returns the index of the leftmost value of the array that is > the search value,
 * or returns the array length if the search value >= all values of the array.
 * @param {Array<T>} arr The array.
 * @param {T} elem The value.
 * @param {?function(T,T):number=} opt_cmpFn Optional comparison
 *     function by which the array is to be ordered. It should take 2 arguments to
 *     compare, and it returns a negative number, zero, or a positive number depending on
 *     whether the first argument is less than, equal to, or greater than the second argument.
 * @return {number}
 */
function binary_search_gt<T>(
  arr: T[],
  elem: T,
  opt_cmpFn: cmpFn<T> = null
): number {
  const cmp = opt_cmpFn || defaultCmp;

  if (arr.length === 0) {
    return 0;
  }

  let low = 0;
  let high = arr.length - 1;
  let mid = 0;

  while (low < high) {
    mid = low + Math.floor((high - low) / 2);

    if (cmp(elem, arr[mid]) >= 0) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  if (cmp(arr[low], elem) <= 0) {
    low++;
  }
  return low;
}

/**
 * Returns 2 indexes l & r of the array while [l, r) is the half-closed interval of where
 * the search value begins and ends. Returns l & r as the same index as the next greater element index
 * if the search value is not found. Returns l & r as the same index as the array length if the
 * the search value is greater than all array elements.
 * @param {Array<T>} arr The array.
 * @param {T} elem The value.
 * @param {?function(T,T):number=} opt_cmpFn Optional comparison
 *     function by which the array is to be ordered. It should take 2 arguments to
 *     compare, and it returns a negative number, zero, or a positive number depending on
 *     whether the first argument is less than, equal to, or greater than the second argument.
 * @return {number[]}
 */
function equal_range<T>(
  arr: T[],
  elem: T,
  opt_cmpFn: cmpFn<T> = null
): number[] {
  const cmp = opt_cmpFn || defaultCmp;

  return [binary_search_ge(arr, elem, cmp), binary_search_gt(arr, elem, cmp)];
}

module.exports = {
  union: union,
  intersection: intersection,
  difference: difference,
  symmetric_difference: symmetric_difference,
  merge: merge,
  inplace_merge: inplace_merge,
  includes: includes,
  insert: insert,
  remove: remove,
  binary_search: binary_search,
  binary_search_ge: binary_search_ge,
  binary_search_gt: binary_search_gt,
  equal_range: equal_range,
};
