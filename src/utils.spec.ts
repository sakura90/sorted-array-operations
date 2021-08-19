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

const utils = require("./utils");

function polygon_cmp(p1, p2) {
  if (p1.edge === p2.edge) {
    return p1.name > p2.name ? 1 : p1.name < p2.name ? -1 : 0;
  } else if (p1.edge < p2.edge) {
    return -1;
  }
  return 1;
}

describe("intersection", () => {
  test("intersectionEmptyRetvalObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };

    const testArr = utils.intersection(
      [triangle, pentagon],
      [square, hexagon],
      polygon_cmp
    );
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("intersectionEmptyArrArgObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const pentagon = { name: "pentagon", edge: 5 };

    const testArr = utils.intersection([triangle, pentagon], [], polygon_cmp);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("intersectionSubarrayIntersectObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const expectedTriangle = { name: "triangle", edge: 3 };

    const testArr = utils.intersection(
      [triangle1, pentagon],
      [triangle2, square],
      polygon_cmp
    );
    const expectedArr = [expectedTriangle];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("intersectionSubarrayIntersectDupValObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const triangle4 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const expectedTriangle1 = { name: "triangle", edge: 3 };
    const expectedTriangle2 = { name: "triangle", edge: 3 };

    const testArr = utils.intersection(
      [triangle1, triangle2, pentagon],
      [triangle3, triangle4, square],
      polygon_cmp
    );
    const expectedArr = [expectedTriangle1, expectedTriangle2];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("intersectionDupValObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const expectedTriangle = { name: "triangle", edge: 3 };

    const testArr = utils.intersection(
      [triangle1, triangle2],
      [triangle3],
      polygon_cmp
    );
    const expectedArr = [expectedTriangle];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("intersectionAllValSameObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const pentagon2 = { name: "pentagon", edge: 5 };
    const expectedPentagon = { name: "pentagon", edge: 5 };
    const expectedTriangle = { name: "triangle", edge: 3 };

    const testArr = utils.intersection(
      [triangle1, pentagon1],
      [triangle2, pentagon2],
      polygon_cmp
    );
    const expectedArr = [expectedTriangle, expectedPentagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("intersectionEmptyRetval", () => {
    const testArr = utils.intersection([1, 3], [2, 4]);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("intersectionEmptyArrArg", () => {
    const testArr = utils.intersection([1, 3], []);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("intersectionSubarrayIntersect", () => {
    const testArr = utils.intersection([1, 3], [1, 2]);
    const expectedArr = [1];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("intersectionSubarrayIntersectDupVal", () => {
    const testArr = utils.intersection([1, 1, 3], [1, 1, 2]);
    const expectedArr = [1, 1];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("intersectionDupVal", () => {
    const testArr = utils.intersection([1, 1], [1]);
    const expectedArr = [1];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("intersectionAllValSame", () => {
    const testArr = utils.intersection([1, 3], [1, 3]);
    const expectedArr = [1, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });
});

describe("union", () => {
  test("unionEmptyRetvalObjArrVal", () => {
    const testArr = utils.union([], [], polygon_cmp);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("unionNoIntersectedValObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedPentagon = { name: "pentagon", edge: 5 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = utils.union(
      [triangle, pentagon],
      [square, hexagon],
      polygon_cmp
    );
    const expectedArr = [
      expectedTriangle,
      expectedSquare,
      expectedPentagon,
      expectedHexagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("unionEmptyArrArgObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const pentagon = { name: "pentagon", edge: 5 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedPentagon = { name: "pentagon", edge: 5 };

    const testArr = utils.union([triangle, pentagon], [], polygon_cmp);
    const expectedArr = [expectedTriangle, expectedPentagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("union2DiffArrObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedPentagon = { name: "pentagon", edge: 5 };

    const testArr = utils.union(
      [triangle1, pentagon],
      [triangle2, square],
      polygon_cmp
    );
    const expectedArr = [expectedTriangle, expectedSquare, expectedPentagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("union2DiffArrDupValObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const triangle4 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const expectedTriangle1 = { name: "triangle", edge: 3 };
    const expectedTriangle2 = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedPentagon = { name: "pentagon", edge: 5 };

    const testArr = utils.union(
      [triangle1, triangle2, pentagon],
      [triangle3, triangle4, square],
      polygon_cmp
    );
    const expectedArr = [
      expectedTriangle1,
      expectedTriangle2,
      expectedSquare,
      expectedPentagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("union2DiffArr1ValDiffInNumOfValObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const expectedTriangle1 = { name: "triangle", edge: 3 };
    const expectedTriangle2 = { name: "triangle", edge: 3 };

    const testArr = utils.union(
      [triangle1, triangle2],
      [triangle3],
      polygon_cmp
    );
    const expectedArr = [expectedTriangle1, expectedTriangle2];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("union2SameArrObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const pentagon2 = { name: "pentagon", edge: 5 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedPentagon = { name: "pentagon", edge: 5 };

    const testArr = utils.union(
      [triangle1, pentagon1],
      [triangle2, pentagon2],
      polygon_cmp
    );
    const expectedArr = [expectedTriangle, expectedPentagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("unionEmptyRetval", () => {
    const testArr = utils.union([], []);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("unionNoIntersectedVal", () => {
    const testArr = utils.union([1, 3], [2, 4]);
    const expectedArr = [1, 2, 3, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("unionEmptyArrArg", () => {
    const testArr = utils.union([1, 3], []);
    const expectedArr = [1, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("union2DiffArr", () => {
    const testArr = utils.union([1, 3], [1, 2]);
    const expectedArr = [1, 2, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("union2DiffArrDupVal", () => {
    const testArr = utils.union([1, 1, 3], [1, 1, 2]);
    const expectedArr = [1, 1, 2, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("union2DiffArr1ValDiffInNumOfVal", () => {
    const testArr = utils.union([1, 1], [1]);
    const expectedArr = [1, 1];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("union2SameArr", () => {
    const testArr = utils.union([1, 3], [1, 3]);
    const expectedArr = [1, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });
});

describe("difference", () => {
  test("difference2ArrNoIntersectObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedPentagon = { name: "pentagon", edge: 5 };

    const testArr = utils.difference(
      [triangle, pentagon],
      [square, hexagon],
      polygon_cmp
    );
    const expectedArr = [expectedTriangle, expectedPentagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("difference2ndArrEmptyObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const pentagon = { name: "pentagon", edge: 5 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedPentagon = { name: "pentagon", edge: 5 };

    const testArr = utils.difference([triangle, pentagon], [], polygon_cmp);
    const expectedArr = [expectedTriangle, expectedPentagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("difference1stArrEmptyObjArrVal", () => {
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };

    const testArr = utils.difference([], [square, hexagon], polygon_cmp);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("differenceOneElemIntersectObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const expectedPentagon = { name: "pentagon", edge: 5 };

    const testArr = utils.difference(
      [triangle1, pentagon],
      [triangle2, square],
      polygon_cmp
    );
    const expectedArr = [expectedPentagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("differenceDupValIntersectObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const triangle4 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const expectedPentagon = { name: "pentagon", edge: 5 };

    const testArr = utils.difference(
      [triangle1, triangle2, pentagon],
      [triangle3, triangle4, square],
      polygon_cmp
    );
    const expectedArr = [expectedPentagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("differenceOneDupValIntersectObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const expectedTriangle = { name: "triangle", edge: 3 };

    const testArr = utils.difference(
      [triangle1, triangle2],
      [triangle3],
      polygon_cmp
    );
    const expectedArr = [expectedTriangle];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("differenceDupValIntersectEmptyArrObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };

    const testArr = utils.difference(
      [triangle1],
      [triangle2, triangle3],
      polygon_cmp
    );
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("differenceSameArrObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const pentagon2 = { name: "pentagon", edge: 5 };

    const testArr = utils.difference(
      [triangle1, pentagon1],
      [triangle2, pentagon2],
      polygon_cmp
    );
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("difference2ArrNoIntersect", () => {
    const testArr = utils.difference([1, 3], [2, 4]);
    const expectedArr = [1, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("difference2ndArrEmpty", () => {
    const testArr = utils.difference([1, 3], []);
    const expectedArr = [1, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("difference1stArrEmpty", () => {
    const testArr = utils.difference([], [2, 4]);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("differenceOneElemIntersect", () => {
    const testArr = utils.difference([1, 3], [1, 2]);
    const expectedArr = [3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("differenceDupValIntersect", () => {
    const testArr = utils.difference([1, 1, 3], [1, 1, 2]);
    const expectedArr = [3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("differenceOneDupValIntersect", () => {
    const testArr = utils.difference([1, 1], [1]);
    const expectedArr = [1];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("differenceDupValIntersectEmptyArr", () => {
    const testArr = utils.difference([1], [1, 1]);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("differenceSameArr", () => {
    const testArr = utils.difference([1, 3], [1, 3]);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });
});

describe("symmetric_difference", () => {
  test("symmetric_differenceElemNoIntersectObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedPentagon = { name: "pentagon", edge: 5 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = utils.symmetric_difference(
      [triangle, pentagon],
      [square, hexagon],
      polygon_cmp
    );
    const expectedArr = [
      expectedTriangle,
      expectedSquare,
      expectedPentagon,
      expectedHexagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceOneElemIntersectObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const pentagon2 = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = utils.symmetric_difference(
      [triangle, pentagon1],
      [pentagon2, hexagon],
      polygon_cmp
    );
    const expectedArr = [expectedTriangle, expectedHexagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceAll2ndArrElemIn1stArrObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const pentagon2 = { name: "pentagon", edge: 5 };
    const expectedTriangle1 = { name: "triangle", edge: 3 };
    const expectedTriangle2 = { name: "triangle", edge: 3 };

    const testArr = utils.symmetric_difference(
      [triangle1, triangle2, pentagon1],
      [pentagon2],
      polygon_cmp
    );
    const expectedArr = [expectedTriangle1, expectedTriangle2];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceAll1stArrElemIn2ndArrObjArrVal", () => {
    const square = { name: "square", edge: 4 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const pentagon2 = { name: "pentagon", edge: 5 };
    const expectedSquare = { name: "square", edge: 4 };

    const testArr = utils.symmetric_difference(
      [pentagon1],
      [square, pentagon2],
      polygon_cmp
    );
    const expectedArr = [expectedSquare];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceSameArrObjArrVal", () => {
    const square1 = { name: "square", edge: 4 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const square2 = { name: "square", edge: 4 };
    const pentagon2 = { name: "pentagon", edge: 5 };

    const testArr = utils.symmetric_difference(
      [square1, pentagon1],
      [square2, pentagon2],
      polygon_cmp
    );
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceEmpty1stArrObjArrVal", () => {
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedPentagon = { name: "pentagon", edge: 5 };

    const testArr = utils.symmetric_difference(
      [],
      [square, pentagon],
      polygon_cmp
    );
    const expectedArr = [expectedSquare, expectedPentagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceEmpty2ndArrObjArrVal", () => {
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedPentagon = { name: "pentagon", edge: 5 };

    const testArr = utils.symmetric_difference(
      [square, pentagon],
      [],
      polygon_cmp
    );
    const expectedArr = [expectedSquare, expectedPentagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceEmpty1stAnd2ndArrObjArrVal", () => {
    const testArr = utils.symmetric_difference([], [], polygon_cmp);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceDupValAll2ndArrElemIn1stArrObjArrVal", () => {
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const square4 = { name: "square", edge: 4 };
    const square5 = { name: "square", edge: 4 };
    const expectedSquare = { name: "square", edge: 4 };

    const testArr = utils.symmetric_difference(
      [square1, square2, square3],
      [square4, square5],
      polygon_cmp
    );
    const expectedArr = [expectedSquare];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceDupValAll1stArrElemIn2ndArrObjArrVal", () => {
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const square4 = { name: "square", edge: 4 };
    const square5 = { name: "square", edge: 4 };
    const square6 = { name: "square", edge: 4 };
    const square7 = { name: "square", edge: 4 };
    const square8 = { name: "square", edge: 4 };
    const expectedSquare1 = { name: "square", edge: 4 };
    const expectedSquare2 = { name: "square", edge: 4 };

    const testArr = utils.symmetric_difference(
      [square1, square2, square3],
      [square4, square5, square6, square7, square8],
      polygon_cmp
    );
    const expectedArr = [expectedSquare1, expectedSquare2];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceElemNoIntersect", () => {
    const testArr = utils.symmetric_difference([1, 3], [2, 4]);
    const expectedArr = [1, 2, 3, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceOneElemIntersect", () => {
    const testArr = utils.symmetric_difference([1, 3], [3, 4]);
    const expectedArr = [1, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceAll2ndArrElemIn1stArr", () => {
    const testArr = utils.symmetric_difference([1, 1, 3], [3]);
    const expectedArr = [1, 1];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceAll1stArrElemIn2ndArr", () => {
    const testArr = utils.symmetric_difference([3], [2, 3]);
    const expectedArr = [2];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceSameArr", () => {
    const testArr = utils.symmetric_difference([2, 3], [2, 3]);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceEmpty1stArr", () => {
    const testArr = utils.symmetric_difference([], [2, 3]);
    const expectedArr = [2, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceEmpty2ndArr", () => {
    const testArr = utils.symmetric_difference([2, 3], []);
    const expectedArr = [2, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceEmpty1stAnd2ndArr", () => {
    const testArr = utils.symmetric_difference([], []);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceDupValAll2ndArrElemIn1stArr", () => {
    const testArr = utils.symmetric_difference([2, 2, 2], [2, 2]);
    const expectedArr = [2];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("symmetric_differenceDupValAll1stArrElemIn2ndArr", () => {
    const testArr = utils.symmetric_difference([2, 2, 2], [2, 2, 2, 2, 2]);
    const expectedArr = [2, 2];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });
});

describe("merge", () => {
  test("mergeNonEmptyArrNoDupValObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedPentagon = { name: "pentagon", edge: 5 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = utils.merge(
      [triangle, pentagon],
      [square, hexagon],
      polygon_cmp
    );
    const expectedArr = [
      expectedTriangle,
      expectedSquare,
      expectedPentagon,
      expectedHexagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("mergeDupValIn1stArrObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const pentagon2 = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedPentagon1 = { name: "pentagon", edge: 5 };
    const expectedPentagon2 = { name: "pentagon", edge: 5 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = utils.merge(
      [triangle, pentagon1, pentagon2],
      [square, hexagon],
      polygon_cmp
    );
    const expectedArr = [
      expectedTriangle,
      expectedSquare,
      expectedPentagon1,
      expectedPentagon2,
      expectedHexagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("mergeDupValIn2ndArrObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare1 = { name: "square", edge: 4 };
    const expectedSquare2 = { name: "square", edge: 4 };
    const expectedPentagon = { name: "pentagon", edge: 5 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = utils.merge(
      [triangle, pentagon],
      [square1, square2, hexagon],
      polygon_cmp
    );
    const expectedArr = [
      expectedTriangle,
      expectedSquare1,
      expectedSquare2,
      expectedPentagon,
      expectedHexagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("mergeDupValInTwoArrObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const pentagon2 = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare1 = { name: "square", edge: 4 };
    const expectedSquare2 = { name: "square", edge: 4 };
    const expectedPentagon1 = { name: "pentagon", edge: 5 };
    const expectedPentagon2 = { name: "pentagon", edge: 5 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = utils.merge(
      [triangle, pentagon1, pentagon2],
      [square1, square2, hexagon],
      polygon_cmp
    );
    const expectedArr = [
      expectedTriangle,
      expectedSquare1,
      expectedSquare2,
      expectedPentagon1,
      expectedPentagon2,
      expectedHexagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("mergeEmpty2ndArrObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const pentagon = { name: "pentagon", edge: 5 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedPentagon = { name: "pentagon", edge: 5 };

    const testArr = utils.merge([triangle, pentagon], [], polygon_cmp);
    const expectedArr = [expectedTriangle, expectedPentagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("mergeEmpty1stArrObjArrVal", () => {
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedPentagon = { name: "pentagon", edge: 5 };

    const testArr = utils.merge([], [square, pentagon], polygon_cmp);
    const expectedArr = [expectedSquare, expectedPentagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("mergeTwoEmptyArrObjArrVal", () => {
    const testArr = utils.merge([], [], polygon_cmp);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("mergeNonEmptyArrNoDupVal", () => {
    const testArr = utils.merge([1, 3], [2, 4]);
    const expectedArr = [1, 2, 3, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("mergeDupValIn1stArr", () => {
    const testArr = utils.merge([1, 3, 3], [2, 4]);
    const expectedArr = [1, 2, 3, 3, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("mergeDupValIn2ndArr", () => {
    const testArr = utils.merge([1, 3], [2, 2, 4]);
    const expectedArr = [1, 2, 2, 3, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("mergeDupValInTwoArr", () => {
    const testArr = utils.merge([1, 3, 3], [2, 2, 4]);
    const expectedArr = [1, 2, 2, 3, 3, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("mergeEmpty2ndArr", () => {
    const testArr = utils.merge([1, 3], []);
    const expectedArr = [1, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("mergeEmpty1stArr", () => {
    const testArr = utils.merge([], [2, 3]);
    const expectedArr = [2, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("mergeTwoEmptyArr", () => {
    const testArr = utils.merge([], []);
    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });
});

describe("inplace_merge", () => {
  test("inplace_mergeNoDupValTwoArrObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedPentagon = { name: "pentagon", edge: 5 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = [triangle, pentagon, square, hexagon];
    utils.inplace_merge(testArr, 2, polygon_cmp);
    const expectedArr = [
      expectedTriangle,
      expectedSquare,
      expectedPentagon,
      expectedHexagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("inplace_mergeDupValIn1stArrObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const pentagon2 = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedPentagon1 = { name: "pentagon", edge: 5 };
    const expectedPentagon2 = { name: "pentagon", edge: 5 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = [triangle, pentagon1, pentagon2, square, hexagon];
    utils.inplace_merge(testArr, 3, polygon_cmp);

    const expectedArr = [
      expectedTriangle,
      expectedSquare,
      expectedPentagon1,
      expectedPentagon2,
      expectedHexagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("inplace_mergeDupValIn2ndArrObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare1 = { name: "square", edge: 4 };
    const expectedSquare2 = { name: "square", edge: 4 };
    const expectedPentagon = { name: "pentagon", edge: 5 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = [triangle, pentagon, square1, square2, hexagon];
    utils.inplace_merge(testArr, 2, polygon_cmp);

    const expectedArr = [
      expectedTriangle,
      expectedSquare1,
      expectedSquare2,
      expectedPentagon,
      expectedHexagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("inplace_mergeDupValInTwoArrObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const square2 = { name: "square", edge: 4 };
    const pentagon2 = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare1 = { name: "square", edge: 4 };
    const expectedPentagon1 = { name: "pentagon", edge: 5 };
    const expectedSquare2 = { name: "square", edge: 4 };
    const expectedPentagon2 = { name: "pentagon", edge: 5 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = [triangle, pentagon1, pentagon2, square1, square2, hexagon];
    utils.inplace_merge(testArr, 3, polygon_cmp);
    const expectedArr = [
      expectedTriangle,
      expectedSquare1,
      expectedSquare2,
      expectedPentagon1,
      expectedPentagon2,
      expectedHexagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("inplace_mergeNo1stArrObjArrVal", () => {
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedSquare1 = { name: "square", edge: 4 };
    const expectedSquare2 = { name: "square", edge: 4 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = [square1, square2, hexagon];
    utils.inplace_merge(testArr, 0, polygon_cmp);

    const expectedArr = [expectedSquare1, expectedSquare2, expectedHexagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("inplace_mergeDupValExistInTwoArrObjArrVal", () => {
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedSquare1 = { name: "square", edge: 4 };
    const expectedSquare2 = { name: "square", edge: 4 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = [square1, square2, hexagon];
    utils.inplace_merge(testArr, 1, polygon_cmp);
    const expectedArr = [expectedSquare1, expectedSquare2, expectedHexagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("inplace_mergeNo2ndArrObjArrVal", () => {
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const expectedSquare1 = { name: "square", edge: 4 };
    const expectedSquare2 = { name: "square", edge: 4 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = [square1, square2, hexagon];
    utils.inplace_merge(testArr, 3, polygon_cmp);
    const expectedArr = [expectedSquare1, expectedSquare2, expectedHexagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("inplace_mergeNoDupValTwoArr", () => {
    const testArr = [1, 3, 2, 4];
    utils.inplace_merge(testArr, 2);
    const expectedArr = [1, 2, 3, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("inplace_mergeDupValIn1stArr", () => {
    const testArr = [1, 3, 3, 2, 4];
    utils.inplace_merge(testArr, 3);

    const expectedArr = [1, 2, 3, 3, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("inplace_mergeDupValIn2ndArr", () => {
    const testArr = [1, 3, 2, 2, 4];
    utils.inplace_merge(testArr, 2);

    const expectedArr = [1, 2, 2, 3, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("inplace_mergeDupValInTwoArr", () => {
    const testArr = [1, 3, 3, 2, 2, 4];
    utils.inplace_merge(testArr, 3);
    const expectedArr = [1, 2, 2, 3, 3, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("inplace_mergeNo1stArr", () => {
    const testArr = [2, 2, 4];
    utils.inplace_merge(testArr, 0);

    const expectedArr = [2, 2, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("inplace_mergeDupValExistInTwoArr", () => {
    const testArr = [2, 2, 4];
    utils.inplace_merge(testArr, 1);
    const expectedArr = [2, 2, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("inplace_mergeNo2ndArr", () => {
    const testArr = [2, 2, 4];
    utils.inplace_merge(testArr, 3);
    const expectedArr = [2, 2, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });
});

describe("includes", () => {
  test("includesNoDupVal2ndArrElemAsSomeOf1stArrElemObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };

    expect(
      utils.includes(
        [triangle, square1, pentagon, hexagon],
        [square2],
        polygon_cmp
      )
    ).toEqual(true);
  });

  test("includesNoDupValAll2ndArrElemNotIn1stArrObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.includes(
        [triangle, square, pentagon, hexagon],
        [heptagon],
        polygon_cmp
      )
    ).toEqual(false);
  });

  test("includes2ndArrEmptyObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };

    expect(
      utils.includes([triangle, square, pentagon, hexagon], [], polygon_cmp)
    ).toEqual(true);
  });

  test("includesTwoArrEmptyObjArrVal", () => {
    expect(utils.includes([], [], polygon_cmp)).toEqual(true);
  });

  test("includes1stArrEmptyObjArrVal", () => {
    const heptagon = { name: "heptagon", edge: 7 };

    expect(utils.includes([], [heptagon], polygon_cmp)).toEqual(false);
  });

  test("includesDupVal2ndArrElemAsSomeOf1stArrElemObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const square4 = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };

    expect(
      utils.includes(
        [triangle, square1, square2, pentagon, hexagon],
        [square3, square4],
        polygon_cmp
      )
    ).toEqual(true);
  });

  test("includesDupValAndNonDupVal2ndArrElemAsSomeOf1stArrElemObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const square4 = { name: "square", edge: 4 };
    const square5 = { name: "square", edge: 4 };
    const square6 = { name: "square", edge: 4 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const pentagon2 = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };

    expect(
      utils.includes(
        [triangle, square1, square2, square3, square4, pentagon1, hexagon],
        [square5, square6, pentagon2],
        polygon_cmp
      )
    ).toEqual(true);
  });

  test("includes3DupValIn2ndArrAnd2DupValIn1stArrObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const square4 = { name: "square", edge: 4 };
    const square5 = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };

    expect(
      utils.includes(
        [triangle, square1, square2, pentagon, hexagon],
        [square3, square4, square5],
        polygon_cmp
      )
    ).toEqual(false);
  });

  test("includes2DupValIn2ndArrAnd1DupValIn1stArrPlus1NonDupValIn2ndArrObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const square4 = { name: "square", edge: 4 };
    const square5 = { name: "square", edge: 4 };
    const square6 = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.includes(
        [triangle, square1, square2, square3, square4, pentagon, hexagon],
        [square5, square6, heptagon],
        polygon_cmp
      )
    ).toEqual(false);
  });

  test("includesTwoArraySame", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const square4 = { name: "square", edge: 4 };
    const square5 = { name: "square", edge: 4 };
    const square6 = { name: "square", edge: 4 };
    const square7 = { name: "square", edge: 4 };
    const square8 = { name: "square", edge: 4 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const pentagon2 = { name: "pentagon", edge: 5 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const hexagon4 = { name: "hexagon", edge: 6 };
    const hexagon5 = { name: "hexagon", edge: 6 };
    const hexagon6 = { name: "hexagon", edge: 6 };

    expect(
      utils.includes(
        [
          triangle1,
          square1,
          square2,
          square3,
          square4,
          pentagon1,
          hexagon1,
          hexagon2,
          hexagon3,
        ],
        [
          triangle2,
          square5,
          square6,
          square7,
          square8,
          pentagon2,
          hexagon4,
          hexagon5,
          hexagon6,
        ],
        polygon_cmp
      )
    ).toEqual(true);
  });

  test("includesAllElemIn1stArrIn2ndArrAndOneElemIn2ndArrGreaterThanAllIn1stArrObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const square4 = { name: "square", edge: 4 };
    const square5 = { name: "square", edge: 4 };
    const square6 = { name: "square", edge: 4 };
    const square7 = { name: "square", edge: 4 };
    const square8 = { name: "square", edge: 4 };
    const pentagon1 = { name: "pentagon", edge: 5 };
    const pentagon2 = { name: "pentagon", edge: 5 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.includes(
        [triangle1, square1, square2, square3, square4, pentagon1, hexagon1],
        [
          triangle2,
          square5,
          square6,
          square7,
          square8,
          pentagon2,
          hexagon2,
          heptagon,
        ],
        polygon_cmp
      )
    ).toEqual(false);
  });

  test("includesAllElemIn1stArrIn2ndArrAndOneElemIn2ndArrInRangeOf1stArrElemObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const square4 = { name: "square", edge: 4 };
    const square5 = { name: "square", edge: 4 };
    const square6 = { name: "square", edge: 4 };
    const heptagon = { name: "heptagon", edge: 5 };
    const enneagon1 = { name: "enneagon", edge: 7 };
    const enneagon2 = { name: "enneagon", edge: 7 };
    const decagon1 = { name: "decagon", edge: 8 };
    const decagon2 = { name: "decagon", edge: 8 };
    const hendecagon1 = { name: "hendecagon", edge: 9 };
    const hendecagon2 = { name: "hendecagon", edge: 9 };
    const hendecagon3 = { name: "hendecagon", edge: 9 };
    const hendecagon4 = { name: "hendecagon", edge: 9 };

    expect(
      utils.includes(
        [
          triangle1,
          square1,
          square2,
          square3,
          enneagon1,
          decagon1,
          hendecagon1,
          hendecagon2,
        ],
        [
          triangle2,
          square4,
          square5,
          square6,
          heptagon,
          enneagon2,
          decagon2,
          hendecagon3,
          hendecagon4,
        ],
        polygon_cmp
      )
    ).toEqual(false);
  });

  test("includesAllElemIn1stArrIn2ndArrAndOneElemIn2ndArrSmallerThanAllIn1stArrObjArrVal", () => {
    const digon = { name: "digon", edge: 2 };
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const square4 = { name: "square", edge: 4 };
    const square5 = { name: "square", edge: 4 };
    const square6 = { name: "square", edge: 4 };
    const enneagon1 = { name: "enneagon", edge: 7 };
    const enneagon2 = { name: "enneagon", edge: 7 };
    const decagon1 = { name: "decagon", edge: 8 };
    const decagon2 = { name: "decagon", edge: 8 };
    const hendecagon1 = { name: "hendecagon", edge: 9 };
    const hendecagon2 = { name: "hendecagon", edge: 9 };
    const hendecagon3 = { name: "hendecagon", edge: 9 };
    const hendecagon4 = { name: "hendecagon", edge: 9 };

    expect(
      utils.includes(
        [
          triangle1,
          square1,
          square2,
          square3,
          enneagon1,
          decagon1,
          hendecagon1,
          hendecagon2,
        ],
        [
          digon,
          triangle2,
          square4,
          square5,
          square6,
          enneagon2,
          decagon2,
          hendecagon3,
          hendecagon4,
        ],
        polygon_cmp
      )
    ).toEqual(false);
  });

  test("includesAllElemIn1stArrIn2ndArrAnd2DupValIn2ndArrAnd1DupValIn1stArrObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const square4 = { name: "square", edge: 4 };
    const square5 = { name: "square", edge: 4 };
    const square6 = { name: "square", edge: 4 };
    const enneagon1 = { name: "enneagon", edge: 7 };
    const enneagon2 = { name: "enneagon", edge: 7 };
    const enneagon3 = { name: "enneagon", edge: 7 };
    const decagon1 = { name: "decagon", edge: 8 };
    const decagon2 = { name: "decagon", edge: 8 };
    const hendecagon1 = { name: "hendecagon", edge: 9 };
    const hendecagon2 = { name: "hendecagon", edge: 9 };
    const hendecagon3 = { name: "hendecagon", edge: 9 };
    const hendecagon4 = { name: "hendecagon", edge: 9 };

    expect(
      utils.includes(
        [
          triangle1,
          square1,
          square2,
          square3,
          enneagon1,
          decagon1,
          hendecagon1,
          hendecagon2,
        ],
        [
          triangle2,
          square4,
          square5,
          square6,
          enneagon2,
          enneagon3,
          decagon2,
          hendecagon3,
          hendecagon4,
        ],
        polygon_cmp
      )
    ).toEqual(false);
  });

  test("includesNoDupVal2ndArrElemAsSomeOf1stArrElem", () => {
    expect(utils.includes([1, 2, 3, 4], [2])).toEqual(true);
  });

  test("includesNoDupValAll2ndArrElemNotIn1stArr", () => {
    expect(utils.includes([1, 2, 3, 4], [5])).toEqual(false);
  });

  test("includes2ndArrEmpty", () => {
    expect(utils.includes([1, 2, 3, 4], [])).toEqual(true);
  });

  test("includesTwoArrEmpty", () => {
    expect(utils.includes([], [])).toEqual(true);
  });

  test("includes1stArrEmpty", () => {
    expect(utils.includes([], [5])).toEqual(false);
  });

  test("includesDupVal2ndArrElemAsSomeOf1stArrElem", () => {
    expect(utils.includes([1, 2, 2, 3, 4], [2, 2])).toEqual(true);
  });

  test("includesDupValAndNonDupVal2ndArrElemAsSomeOf1stArrElem", () => {
    expect(utils.includes([1, 2, 2, 2, 2, 3, 4], [2, 2, 3])).toEqual(true);
  });

  test("includes3DupValIn2ndArrAnd2DupValIn1stArr", () => {
    expect(utils.includes([1, 2, 2, 3, 4], [2, 2, 2])).toEqual(false);
  });

  test("includes2DupValIn2ndArrAnd1DupValIn1stArrPlus1NonDupValIn2ndArr", () => {
    expect(utils.includes([1, 2, 2, 2, 2, 3, 4], [2, 2, 5])).toEqual(false);
  });

  test("includesTwoArraySame", () => {
    expect(
      utils.includes([1, 2, 2, 2, 2, 3, 4, 4, 4], [1, 2, 2, 2, 2, 3, 4, 4, 4])
    ).toEqual(true);
  });

  test("includesAllElemIn1stArrIn2ndArrAndOneElemIn2ndArrGreaterThanAllIn1stArr", () => {
    expect(
      utils.includes([1, 2, 2, 2, 2, 3, 4], [1, 2, 2, 2, 2, 3, 4, 5])
    ).toEqual(false);
  });

  test("includesAllElemIn1stArrIn2ndArrAndOneElemIn2ndArrInRangeOf1stArrElem", () => {
    expect(
      utils.includes([1, 2, 2, 2, 7, 8, 9, 9], [1, 2, 2, 2, 5, 7, 8, 9, 9])
    ).toEqual(false);
  });

  test("includesAllElemIn1stArrIn2ndArrAndOneElemIn2ndArrSmallerThanAllIn1stArr", () => {
    expect(
      utils.includes([1, 2, 2, 2, 7, 8, 9, 9], [0, 1, 2, 2, 2, 7, 8, 9, 9])
    ).toEqual(false);
  });

  test("includesAllElemIn1stArrIn2ndArrAnd2DupValIn2ndArrAnd1DupValIn1stArr", () => {
    expect(
      utils.includes([1, 2, 2, 2, 7, 8, 9, 9], [1, 2, 2, 2, 7, 7, 8, 9, 9])
    ).toEqual(false);
  });
});

describe("insert", () => {
  test("insertInArrNoDupValObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedPentagon = { name: "pentagon", edge: 5 };
    const expectedHexagon = { name: "hexagon", edge: 6 };
    const expectedHeptagon = { name: "heptagon", edge: 7 };

    const testArr = [triangle, square, hexagon, heptagon];
    utils.insert(testArr, pentagon, polygon_cmp);
    const expectedArr = [
      expectedTriangle,
      expectedSquare,
      expectedPentagon,
      expectedHexagon,
      expectedHeptagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("insertEmptyArrObjArrVal", () => {
    const pentagon = { name: "pentagon", edge: 5 };
    const expectedPentagon = { name: "pentagon", edge: 5 };

    const testArr = [];
    utils.insert(testArr, pentagon, polygon_cmp);
    const expectedArr = [expectedPentagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("insertToFrontOfArrObjArrVal", () => {
    const digon = { name: "digon", edge: 2 };
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };
    const octagon = { name: "octagon", edge: 8 };
    const enneagon = { name: "enneagon", edge: 9 };
    const decagon = { name: "decagon", edge: 10 };

    const expectedDigon = { name: "digon", edge: 2 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedHexagon = { name: "hexagon", edge: 6 };
    const expectedHeptagon = { name: "heptagon", edge: 7 };
    const expectedOctagon = { name: "octagon", edge: 8 };
    const expectedEnneagon = { name: "enneagon", edge: 9 };
    const expectedDecagon = { name: "decagon", edge: 10 };

    const testArr = [
      triangle,
      square,
      hexagon,
      heptagon,
      octagon,
      enneagon,
      decagon,
    ];
    utils.insert(testArr, digon, polygon_cmp);

    const expectedArr = [
      expectedDigon,
      expectedTriangle,
      expectedSquare,
      expectedHexagon,
      expectedHeptagon,
      expectedOctagon,
      expectedEnneagon,
      expectedDecagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("insertNonDupValToMidOfArrObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const hexagon4 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };
    const octagon = { name: "octagon", edge: 8 };
    const enneagon = { name: "enneagon", edge: 9 };
    const decagon = { name: "decagon", edge: 10 };
    const expectedTriangle1 = { name: "triangle", edge: 3 };
    const expectedTriangle2 = { name: "triangle", edge: 3 };
    const expectedTriangle3 = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedPentagon = { name: "pentagon", edge: 5 };
    const expectedHexagon1 = { name: "hexagon", edge: 6 };
    const expectedHexagon2 = { name: "hexagon", edge: 6 };
    const expectedHexagon3 = { name: "hexagon", edge: 6 };
    const expectedHexagon4 = { name: "hexagon", edge: 6 };
    const expectedHeptagon = { name: "heptagon", edge: 7 };
    const expectedOctagon = { name: "octagon", edge: 8 };
    const expectedEnneagon = { name: "enneagon", edge: 9 };
    const expectedDecagon = { name: "decagon", edge: 10 };

    const testArr = [
      triangle1,
      triangle2,
      triangle3,
      square,
      hexagon1,
      hexagon2,
      hexagon3,
      hexagon4,
      heptagon,
      octagon,
      enneagon,
      decagon,
    ];
    utils.insert(testArr, pentagon, polygon_cmp);

    const expectedArr = [
      expectedTriangle1,
      expectedTriangle2,
      expectedTriangle3,
      expectedSquare,
      expectedPentagon,
      expectedHexagon1,
      expectedHexagon2,
      expectedHexagon3,
      expectedHexagon4,
      expectedHeptagon,
      expectedOctagon,
      expectedEnneagon,
      expectedDecagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("insertDupValToMidOfArrObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const hexagon4 = { name: "hexagon", edge: 6 };
    const hexagon5 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };
    const octagon = { name: "octagon", edge: 8 };
    const enneagon = { name: "enneagon", edge: 9 };
    const decagon = { name: "decagon", edge: 10 };
    const expectedTriangle1 = { name: "triangle", edge: 3 };
    const expectedTriangle2 = { name: "triangle", edge: 3 };
    const expectedTriangle3 = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedHexagon1 = { name: "hexagon", edge: 6 };
    const expectedHexagon2 = { name: "hexagon", edge: 6 };
    const expectedHexagon3 = { name: "hexagon", edge: 6 };
    const expectedHexagon4 = { name: "hexagon", edge: 6 };
    const expectedHexagon5 = { name: "hexagon", edge: 6 };
    const expectedHeptagon = { name: "heptagon", edge: 7 };
    const expectedOctagon = { name: "octagon", edge: 8 };
    const expectedEnneagon = { name: "enneagon", edge: 9 };
    const expectedDecagon = { name: "decagon", edge: 10 };

    const testArr = [
      triangle1,
      triangle2,
      triangle3,
      square,
      hexagon1,
      hexagon2,
      hexagon3,
      hexagon4,
      heptagon,
      octagon,
      enneagon,
      decagon,
    ];
    utils.insert(testArr, hexagon5, polygon_cmp);
    const expectedArr = [
      expectedTriangle1,
      expectedTriangle2,
      expectedTriangle3,
      expectedSquare,
      expectedHexagon1,
      expectedHexagon2,
      expectedHexagon3,
      expectedHexagon4,
      expectedHexagon5,
      expectedHeptagon,
      expectedOctagon,
      expectedEnneagon,
      expectedDecagon,
    ];

    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("insertToEndOfArrObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const hexagon4 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };
    const octagon = { name: "octagon", edge: 8 };
    const enneagon = { name: "enneagon", edge: 9 };
    const decagon = { name: "decagon", edge: 10 };
    const hendecagon = { name: "hendecagon", edge: 11 };
    const expectedTriangle1 = { name: "triangle", edge: 3 };
    const expectedTriangle2 = { name: "triangle", edge: 3 };
    const expectedTriangle3 = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedHexagon1 = { name: "hexagon", edge: 6 };
    const expectedHexagon2 = { name: "hexagon", edge: 6 };
    const expectedHexagon3 = { name: "hexagon", edge: 6 };
    const expectedHexagon4 = { name: "hexagon", edge: 6 };
    const expectedHeptagon = { name: "heptagon", edge: 7 };
    const expectedOctagon = { name: "octagon", edge: 8 };
    const expectedEnneagon = { name: "enneagon", edge: 9 };
    const expectedDecagon = { name: "decagon", edge: 10 };
    const expectedHendecagon = { name: "hendecagon", edge: 11 };

    const testArr = [
      triangle1,
      triangle2,
      triangle3,
      square,
      hexagon1,
      hexagon2,
      hexagon3,
      hexagon4,
      heptagon,
      octagon,
      enneagon,
      decagon,
    ];
    utils.insert(testArr, hendecagon, polygon_cmp);

    const expectedArr = [
      expectedTriangle1,
      expectedTriangle2,
      expectedTriangle3,
      expectedSquare,
      expectedHexagon1,
      expectedHexagon2,
      expectedHexagon3,
      expectedHexagon4,
      expectedHeptagon,
      expectedOctagon,
      expectedEnneagon,
      expectedDecagon,
      expectedHendecagon,
    ];

    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("insertInArrNoDupVal", () => {
    const testArr = [1, 2, 4, 5];
    utils.insert(testArr, 3);
    const expectedArr = [1, 2, 3, 4, 5];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("insertEmptyArr", () => {
    const testArr = [];
    utils.insert(testArr, 3);
    const expectedArr = [3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("insertToFrontOfArr", () => {
    const testArr = [1, 2, 4, 5, 6, 7, 8];
    utils.insert(testArr, 0);

    const expectedArr = [0, 1, 2, 4, 5, 6, 7, 8];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("insertNonDupValToMidOfArr", () => {
    const testArr = [1, 1, 1, 2, 4, 4, 4, 4, 5, 6, 7, 8];
    utils.insert(testArr, 3);

    const expectedArr = [1, 1, 1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("insertDupValToMidOfArr", () => {
    const testArr = [1, 1, 1, 2, 4, 4, 4, 4, 5, 6, 7, 8];
    utils.insert(testArr, 4);

    const expectedArr = [1, 1, 1, 2, 4, 4, 4, 4, 4, 5, 6, 7, 8];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("insertToEndOfArr", () => {
    const testArr = [1, 1, 1, 2, 4, 4, 4, 4, 5, 6, 7, 8];
    utils.insert(testArr, 9);

    const expectedArr = [1, 1, 1, 2, 4, 4, 4, 4, 5, 6, 7, 8, 9];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });
});

describe("remove", () => {
  test("removeExistingValInArrNoDupValObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedHeptagon = { name: "heptagon", edge: 7 };

    const testArr = [triangle, square, hexagon1, heptagon];
    const success = utils.remove(testArr, hexagon2, polygon_cmp);
    expect(success).toEqual(true);

    const expectedArr = [expectedTriangle, expectedSquare, expectedHeptagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeEmptyArrObjArrVal", () => {
    const hexagon = { name: "hexagon", edge: 6 };

    const testArr = [];
    const success = utils.remove(testArr, hexagon, polygon_cmp);
    expect(success).toEqual(false);

    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeExistingFirstValInArrNoDupValObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedHexagon = { name: "hexagon", edge: 6 };
    const expectedHeptagon = { name: "heptagon", edge: 7 };

    const testArr = [triangle1, square, hexagon, heptagon];
    const success = utils.remove(testArr, triangle2, polygon_cmp);
    expect(success).toEqual(true);

    const expectedArr = [expectedSquare, expectedHexagon, expectedHeptagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeExistingTheLastValInArrNoDupValObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };
    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedHexagon = { name: "hexagon", edge: 6 };

    const testArr = [triangle, square, hexagon, heptagon1];
    const success = utils.remove(testArr, heptagon2, polygon_cmp);
    expect(success).toEqual(true);

    const expectedArr = [expectedTriangle, expectedSquare, expectedHexagon];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeExistingDupValInArrDupValObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedHexagon = { name: "hexagon", edge: 6 };
    const expectedHeptagon = { name: "heptagon", edge: 7 };

    const testArr = [triangle, square, hexagon1, hexagon2, heptagon];
    const success = utils.remove(testArr, hexagon3, polygon_cmp);
    expect(success).toEqual(true);

    const expectedArr = [
      expectedTriangle,
      expectedSquare,
      expectedHexagon,
      expectedHeptagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeExistingFirstDupValInArrDupValObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedHexagon = { name: "hexagon", edge: 6 };
    const expectedHeptagon = { name: "heptagon", edge: 7 };

    const testArr = [triangle1, triangle2, square, hexagon, heptagon];
    const success = utils.remove(testArr, triangle3, polygon_cmp);
    expect(success).toEqual(true);

    const expectedArr = [
      expectedTriangle,
      expectedSquare,
      expectedHexagon,
      expectedHeptagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeExistingLastDupValInArrDupValObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };
    const heptagon3 = { name: "heptagon", edge: 7 };

    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedHexagon = { name: "hexagon", edge: 6 };
    const expectedHeptagon = { name: "heptagon", edge: 7 };

    const testArr = [triangle, square, hexagon, heptagon1, heptagon2];
    const success = utils.remove(testArr, heptagon3, polygon_cmp);
    expect(success).toEqual(true);

    const expectedArr = [
      expectedTriangle,
      expectedSquare,
      expectedHexagon,
      expectedHeptagon,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeNotExistingValInArrDupValObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };
    const enneagon = { name: "enneagon", edge: 9 };

    const expectedTriangle = { name: "triangle", edge: 3 };
    const expectedSquare = { name: "square", edge: 4 };
    const expectedHexagon = { name: "hexagon", edge: 6 };
    const expectedHeptagon1 = { name: "heptagon", edge: 7 };
    const expectedHeptagon2 = { name: "heptagon", edge: 7 };

    const testArr = [triangle, square, hexagon, heptagon1, heptagon2];
    const success = utils.remove(testArr, enneagon, polygon_cmp);
    expect(success).toEqual(false);

    const expectedArr = [
      expectedTriangle,
      expectedSquare,
      expectedHexagon,
      expectedHeptagon1,
      expectedHeptagon2,
    ];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeExistingValInArrNoDupVal", () => {
    const testArr = [1, 2, 4, 5];
    const success = utils.remove(testArr, 4);
    expect(success).toEqual(true);

    const expectedArr = [1, 2, 5];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeEmptyArr", () => {
    const testArr = [];
    const success = utils.remove(testArr, 4);
    expect(success).toEqual(false);

    const expectedArr = [];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeExistingFirstValInArrNoDupVal", () => {
    const testArr = [1, 2, 4, 5];
    const success = utils.remove(testArr, 1);
    expect(success).toEqual(true);

    const expectedArr = [2, 4, 5];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeExistingTheLastValInArrNoDupVal", () => {
    const testArr = [1, 2, 4, 5];
    const success = utils.remove(testArr, 5);
    expect(success).toEqual(true);

    const expectedArr = [1, 2, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeExistingDupValInArrDupVal", () => {
    const testArr = [1, 2, 4, 4, 5];
    const success = utils.remove(testArr, 4);
    expect(success).toEqual(true);

    const expectedArr = [1, 2, 4, 5];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeExistingFirstDupValInArrDupVal", () => {
    const testArr = [1, 1, 2, 4, 5];
    const success = utils.remove(testArr, 1);
    expect(success).toEqual(true);

    const expectedArr = [1, 2, 4, 5];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeExistingLastDupValInArrDupVal", () => {
    const testArr = [1, 2, 4, 5, 5];
    const success = utils.remove(testArr, 5);
    expect(success).toEqual(true);

    const expectedArr = [1, 2, 4, 5];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("removeNotExistingValInArrDupVal", () => {
    const testArr = [1, 2, 4, 5, 5];
    const success = utils.remove(testArr, 7);
    expect(success).toEqual(false);

    const expectedArr = [1, 2, 4, 5, 5];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });
});

describe("binary_search", () => {
  test("binary_searchExistingValNotInArrEdgeObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search(
        [triangle, square, hexagon1, heptagon],
        hexagon2,
        polygon_cmp
      )
    ).toEqual(2);
  });

  test("binary_searchEmptyArrObjArrVal", () => {
    const hexagon = { name: "hexagon", edge: 6 };

    expect(utils.binary_search([], hexagon, polygon_cmp)).toEqual(-1);
  });

  test("binary_searchExistingValAsLastElemObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search(
        [triangle, square, hexagon, heptagon1],
        heptagon2,
        polygon_cmp
      )
    ).toEqual(3);
  });

  test("binary_searchExistingValAs1stElemObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search(
        [triangle1, square, hexagon, heptagon],
        triangle2,
        polygon_cmp
      )
    ).toEqual(0);
  });

  test("binary_searchValSmallerThan1stElemObjArrVal", () => {
    const digon = { name: "digon", edge: 2 };
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search(
        [triangle, square, hexagon, heptagon],
        digon,
        polygon_cmp
      )
    ).toEqual(-1);
  });

  test("binary_searchNonExistingValInArrRangeObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search(
        [triangle, square, hexagon, heptagon],
        pentagon,
        polygon_cmp
      )
    ).toEqual(-1);
  });

  test("binary_searchValLargerThanLastElemObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };
    const octagon = { name: "octagon", edge: 8 };

    expect(
      utils.binary_search(
        [triangle, square, hexagon, heptagon],
        octagon,
        polygon_cmp
      )
    ).toEqual(-1);
  });

  test("binary_searchExistingDupValNotInArrEdgeObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const hexagon4 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    const index = utils.binary_search(
      [triangle, square, hexagon1, hexagon2, hexagon3, heptagon],
      hexagon4,
      polygon_cmp
    );
    expect(index).toBeGreaterThanOrEqual(2);
    expect(index).toBeLessThanOrEqual(4);
  });

  test("binary_searchExistingDupValAs1stElemObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const triangle4 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    const index = utils.binary_search(
      [
        triangle1,
        triangle2,
        triangle3,
        square,
        hexagon1,
        hexagon2,
        hexagon3,
        heptagon,
      ],
      triangle4,
      polygon_cmp
    );
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThanOrEqual(2);
  });

  test("binary_searchExistingDupValAsLastElemObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };
    const heptagon3 = { name: "heptagon", edge: 7 };
    const heptagon4 = { name: "heptagon", edge: 7 };

    const index = utils.binary_search(
      [
        triangle,
        square,
        hexagon1,
        hexagon2,
        hexagon3,
        heptagon1,
        heptagon2,
        heptagon3,
      ],
      heptagon4,
      polygon_cmp
    );
    expect(index).toBeGreaterThanOrEqual(5);
    expect(index).toBeLessThanOrEqual(7);
  });

  test("binary_searchExistingValNotInArrEdge", () => {
    expect(utils.binary_search([1, 2, 4, 5], 4)).toEqual(2);
  });

  test("binary_searchEmptyArr", () => {
    expect(utils.binary_search([], 4)).toEqual(-1);
  });

  test("binary_searchExistingValAsLastElem", () => {
    expect(utils.binary_search([1, 2, 4, 5], 5)).toEqual(3);
  });

  test("binary_searchExistingValAs1stElem", () => {
    expect(utils.binary_search([1, 2, 4, 5], 1)).toEqual(0);
  });

  test("binary_searchValSmallerThan1stElem", () => {
    expect(utils.binary_search([1, 2, 4, 5], 0)).toEqual(-1);
  });

  test("binary_searchNonExistingValInArrRange", () => {
    expect(utils.binary_search([1, 2, 4, 5], 3)).toEqual(-1);
  });

  test("binary_searchValLargerThanLastElem", () => {
    expect(utils.binary_search([1, 2, 4, 5], 6)).toEqual(-1);
  });

  test("binary_searchExistingDupValNotInArrEdge", () => {
    const index = utils.binary_search([1, 2, 4, 4, 4, 5], 4);
    expect(index).toBeGreaterThanOrEqual(2);
    expect(index).toBeLessThanOrEqual(4);
  });

  test("binary_searchExistingDupValAs1stElem", () => {
    const index = utils.binary_search([1, 1, 1, 2, 4, 4, 4, 5], 1);
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThanOrEqual(2);
  });

  test("binary_searchExistingDupValAsLastElem", () => {
    const index = utils.binary_search([1, 2, 4, 4, 4, 5, 5, 5], 5);
    expect(index).toBeGreaterThanOrEqual(5);
    expect(index).toBeLessThanOrEqual(7);
  });
});

describe("binary_search_ge", () => {
  test("binary_search_geExistingValNotInArrEdgeObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_ge(
        [triangle, square, hexagon1, heptagon],
        hexagon2,
        polygon_cmp
      )
    ).toEqual(2);
  });

  test("binary_search_geEmptyArrObjArrVal", () => {
    const hexagon = { name: "hexagon", edge: 6 };

    expect(utils.binary_search_ge([], hexagon, polygon_cmp)).toEqual(0);
  });

  test("binary_search_geExistingValAsLastElemObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_ge(
        [triangle, square, hexagon, heptagon1],
        heptagon2,
        polygon_cmp
      )
    ).toEqual(3);
  });

  test("binary_search_geExistingValAs1stElemObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_ge(
        [triangle1, square, hexagon, heptagon],
        triangle2,
        polygon_cmp
      )
    ).toEqual(0);
  });

  test("binary_search_geValSmallerThan1stElemObjArrVal", () => {
    const digon = { name: "digon", edge: 2 };
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_ge(
        [triangle, square, hexagon, heptagon],
        digon,
        polygon_cmp
      )
    ).toEqual(0);
  });

  test("binary_search_geNonExistingValInArrRangeObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_ge(
        [triangle, square, hexagon, heptagon],
        pentagon,
        polygon_cmp
      )
    ).toEqual(2);
  });

  test("binary_search_geValLargerThanLastElemObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };
    const octagon = { name: "octagon", edge: 8 };

    expect(
      utils.binary_search_ge(
        [triangle, square, hexagon, heptagon],
        octagon,
        polygon_cmp
      )
    ).toEqual(4);
  });

  test("binary_search_geExistingDupValNotInArrEdgeObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const hexagon4 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_ge(
        [triangle, square, hexagon1, hexagon2, hexagon3, heptagon],
        hexagon4,
        polygon_cmp
      )
    ).toEqual(2);
  });

  test("binary_search_geExistingDupValAs1stElemObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const triangle4 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_ge(
        [
          triangle1,
          triangle2,
          triangle3,
          square,
          hexagon1,
          hexagon2,
          hexagon3,
          heptagon,
        ],
        triangle4,
        polygon_cmp
      )
    ).toEqual(0);
  });

  test("binary_search_geExistingDupValAsLastElemObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };
    const heptagon3 = { name: "heptagon", edge: 7 };
    const heptagon4 = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_ge(
        [
          triangle,
          square,
          hexagon1,
          hexagon2,
          hexagon3,
          heptagon1,
          heptagon2,
          heptagon3,
        ],
        heptagon4,
        polygon_cmp
      )
    ).toEqual(5);
  });

  test("binary_search_geExistingValNotInArrEdge", () => {
    expect(utils.binary_search_ge([1, 2, 4, 5], 4)).toEqual(2);
  });

  test("binary_search_geEmptyArr", () => {
    expect(utils.binary_search_ge([], 4)).toEqual(0);
  });

  test("binary_search_geExistingValAsLastElem", () => {
    expect(utils.binary_search_ge([1, 2, 4, 5], 5)).toEqual(3);
  });

  test("binary_search_geExistingValAs1stElem", () => {
    expect(utils.binary_search_ge([1, 2, 4, 5], 1)).toEqual(0);
  });

  test("binary_search_geValSmallerThan1stElem", () => {
    expect(utils.binary_search_ge([1, 2, 4, 5], 0)).toEqual(0);
  });

  test("binary_search_geNonExistingValInArrRange", () => {
    expect(utils.binary_search_ge([1, 2, 4, 5], 3)).toEqual(2);
  });

  test("binary_search_geValLargerThanLastElem", () => {
    expect(utils.binary_search_ge([1, 2, 4, 5], 6)).toEqual(4);
  });

  test("binary_search_geExistingDupValNotInArrEdge", () => {
    expect(utils.binary_search_ge([1, 2, 4, 4, 4, 5], 4)).toEqual(2);
  });

  test("binary_search_geExistingDupValAs1stElem", () => {
    expect(utils.binary_search_ge([1, 1, 1, 2, 4, 4, 4, 5], 1)).toEqual(0);
  });

  test("binary_search_geExistingDupValAsLastElem", () => {
    expect(utils.binary_search_ge([1, 2, 4, 4, 4, 5, 5, 5], 5)).toEqual(5);
  });
});

describe("binary_search_gt", () => {
  test("binary_search_gtExistingValNotInArrEdgeObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_gt(
        [triangle, square, hexagon1, heptagon],
        hexagon2,
        polygon_cmp
      )
    ).toEqual(3);
  });

  test("binary_search_gtEmptyArrObjArrVal", () => {
    const hexagon = { name: "hexagon", edge: 6 };

    expect(utils.binary_search_gt([], hexagon, polygon_cmp)).toEqual(0);
  });

  test("binary_search_gtExistingValAsLastElemObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_gt(
        [triangle, square, hexagon, heptagon1],
        heptagon2,
        polygon_cmp
      )
    ).toEqual(4);
  });

  test("binary_search_gtExistingValAs1stElemObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_gt(
        [triangle1, square, hexagon, heptagon],
        triangle2,
        polygon_cmp
      )
    ).toEqual(1);
  });

  test("binary_search_gtValSmallerThan1stElemObjArrVal", () => {
    const digon = { name: "digon", edge: 2 };
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_gt(
        [triangle, square, hexagon, heptagon],
        digon,
        polygon_cmp
      )
    ).toEqual(0);
  });

  test("binary_search_gtNonExistingValInArrRangeObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_gt(
        [triangle, square, hexagon, heptagon],
        pentagon,
        polygon_cmp
      )
    ).toEqual(2);
  });

  test("binary_search_gtValLargerThanLastElemObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };
    const octagon = { name: "octagon", edge: 8 };

    expect(
      utils.binary_search_gt(
        [triangle, square, hexagon, heptagon],
        octagon,
        polygon_cmp
      )
    ).toEqual(4);
  });

  test("binary_search_gtExistingDupValNotInArrEdgeObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const hexagon4 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_gt(
        [triangle, square, hexagon1, hexagon2, hexagon3, heptagon],
        hexagon4,
        polygon_cmp
      )
    ).toEqual(5);
  });

  test("binary_search_gtExistingDupValAs1stElemObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const triangle4 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_gt(
        [
          triangle1,
          triangle2,
          triangle3,
          square,
          hexagon1,
          hexagon2,
          hexagon3,
          heptagon,
        ],
        triangle4,
        polygon_cmp
      )
    ).toEqual(3);
  });

  test("binary_search_gtExistingDupValAsLastElemObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const hexagon3 = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };
    const heptagon3 = { name: "heptagon", edge: 7 };
    const heptagon4 = { name: "heptagon", edge: 7 };

    expect(
      utils.binary_search_gt(
        [
          triangle,
          square,
          hexagon1,
          hexagon2,
          hexagon3,
          heptagon1,
          heptagon2,
          heptagon3,
        ],
        heptagon4,
        polygon_cmp
      )
    ).toEqual(8);
  });

  test("binary_search_gtExistingValNotInArrEdge", () => {
    expect(utils.binary_search_gt([1, 2, 4, 5], 4)).toEqual(3);
  });

  test("binary_search_gtEmptyArr", () => {
    expect(utils.binary_search_gt([], 4)).toEqual(0);
  });

  test("binary_search_gtExistingValAsLastElem", () => {
    expect(utils.binary_search_gt([1, 2, 4, 5], 5)).toEqual(4);
  });

  test("binary_search_gtExistingValAs1stElem", () => {
    expect(utils.binary_search_gt([1, 2, 4, 5], 1)).toEqual(1);
  });

  test("binary_search_gtValSmallerThan1stElem", () => {
    expect(utils.binary_search_gt([1, 2, 4, 5], 0)).toEqual(0);
  });

  test("binary_search_gtNonExistingValInArrRange", () => {
    expect(utils.binary_search_gt([1, 2, 4, 5], 3)).toEqual(2);
  });

  test("binary_search_gtValLargerThanLastElem", () => {
    expect(utils.binary_search_gt([1, 2, 4, 5], 6)).toEqual(4);
  });

  test("binary_search_gtExistingDupValNotInArrEdge", () => {
    expect(utils.binary_search_gt([1, 2, 4, 4, 4, 5], 4)).toEqual(5);
  });

  test("binary_search_gtExistingDupValAs1stElem", () => {
    expect(utils.binary_search_gt([1, 1, 1, 2, 4, 4, 4, 5], 1)).toEqual(3);
  });

  test("binary_search_gtExistingDupValAsLastElem", () => {
    expect(utils.binary_search_gt([1, 2, 4, 4, 4, 5, 5, 5], 5)).toEqual(8);
  });
});

describe("equal_range", () => {
  test("equal_rangeExistingValNotInArrEdgeObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon1 = { name: "hexagon", edge: 6 };
    const hexagon2 = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    const testArr = utils.equal_range(
      [triangle, square, hexagon1, heptagon],
      hexagon2,
      polygon_cmp
    );
    const expectedArr = [2, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeEmptyArrObjArrVal", () => {
    const hexagon = { name: "hexagon", edge: 6 };

    const testArr = utils.equal_range([], hexagon, polygon_cmp);
    const expectedArr = [0, 0];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeExistingValAs1stElemObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    const testArr = utils.equal_range(
      [triangle1, square, hexagon, heptagon],
      triangle2,
      polygon_cmp
    );
    const expectedArr = [0, 1];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeExistingValAsLastElemObjArrVal", () => {
    const triangle = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };

    const testArr = utils.equal_range(
      [triangle, square, hexagon, heptagon1],
      heptagon2,
      polygon_cmp
    );
    const expectedArr = [3, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeExistingDupValAs1stElemObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const triangle4 = { name: "triangle", edge: 3 };
    const square = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    const testArr = utils.equal_range(
      [triangle1, triangle2, triangle3, square, hexagon, heptagon],
      triangle4,
      polygon_cmp
    );
    const expectedArr = [0, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeExistingDupValNotInArrEdgeObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const square4 = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon = { name: "heptagon", edge: 7 };

    const testArr = utils.equal_range(
      [
        triangle1,
        triangle2,
        triangle3,
        square1,
        square2,
        square3,
        hexagon,
        heptagon,
      ],
      square4,
      polygon_cmp
    );
    const expectedArr = [3, 6];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeExistingDupValAsLastElemObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };
    const heptagon3 = { name: "heptagon", edge: 7 };

    const testArr = utils.equal_range(
      [
        triangle1,
        triangle2,
        triangle3,
        square1,
        square2,
        square3,
        hexagon,
        heptagon1,
        heptagon2,
      ],
      heptagon3,
      polygon_cmp
    );
    const expectedArr = [7, 9];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeValSmallerThan1stElemObjArrVal", () => {
    const digon = { name: "digon", edge: 2 };
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };

    const testArr = utils.equal_range(
      [
        triangle1,
        triangle2,
        triangle3,
        square1,
        square2,
        square3,
        hexagon,
        heptagon1,
        heptagon2,
      ],
      digon,
      polygon_cmp
    );
    const expectedArr = [0, 0];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeNonExistingValInArrRangeObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const pentagon = { name: "pentagon", edge: 5 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };

    const testArr = utils.equal_range(
      [
        triangle1,
        triangle2,
        triangle3,
        square1,
        square2,
        square3,
        hexagon,
        heptagon1,
        heptagon2,
      ],
      pentagon,
      polygon_cmp
    );

    const expectedArr = [6, 6];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeValLargerThanLastElemObjArrVal", () => {
    const triangle1 = { name: "triangle", edge: 3 };
    const triangle2 = { name: "triangle", edge: 3 };
    const triangle3 = { name: "triangle", edge: 3 };
    const square1 = { name: "square", edge: 4 };
    const square2 = { name: "square", edge: 4 };
    const square3 = { name: "square", edge: 4 };
    const hexagon = { name: "hexagon", edge: 6 };
    const heptagon1 = { name: "heptagon", edge: 7 };
    const heptagon2 = { name: "heptagon", edge: 7 };
    let triacontakaipentagon = { name: "triacontakaipentagon", edge: 35 };

    const testArr = utils.equal_range(
      [
        triangle1,
        triangle2,
        triangle3,
        square1,
        square2,
        square3,
        hexagon,
        heptagon1,
        heptagon2,
      ],
      triacontakaipentagon,
      polygon_cmp
    );

    const expectedArr = [9, 9];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeExistingValNotInArrEdge", () => {
    const testArr = utils.equal_range([1, 2, 4, 5], 4);
    const expectedArr = [2, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeEmptyArr", () => {
    const testArr = utils.equal_range([], 4);
    const expectedArr = [0, 0];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeExistingValAs1stElem", () => {
    const testArr = utils.equal_range([1, 2, 4, 5], 1);
    const expectedArr = [0, 1];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeExistingValAsLastElem", () => {
    const testArr = utils.equal_range([1, 2, 4, 5], 5);
    const expectedArr = [3, 4];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeExistingDupValAs1stElem", () => {
    const testArr = utils.equal_range([1, 1, 1, 2, 4, 5], 1);
    const expectedArr = [0, 3];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeExistingDupValNotInArrEdge", () => {
    const testArr = utils.equal_range([1, 1, 1, 2, 2, 2, 4, 5], 2);
    const expectedArr = [3, 6];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeExistingDupValAsLastElem", () => {
    const testArr = utils.equal_range([1, 1, 1, 2, 2, 2, 4, 5, 5], 5);
    const expectedArr = [7, 9];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeValSmallerThan1stElem", () => {
    const testArr = utils.equal_range([1, 1, 1, 2, 2, 2, 4, 5, 5], 0);
    const expectedArr = [0, 0];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeNonExistingValInArrRange", () => {
    const testArr = utils.equal_range([1, 1, 1, 2, 2, 2, 4, 5, 5], 3);
    const expectedArr = [6, 6];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });

  test("equal_rangeValLargerThanLastElem", () => {
    const testArr = utils.equal_range([1, 1, 1, 2, 2, 2, 4, 5, 5], 33);
    const expectedArr = [9, 9];
    expect(testArr.length).toEqual(expectedArr.length);
    for (let i = 0; i < testArr.length; ++i) {
      expect(testArr[i]).toEqual(expectedArr[i]);
    }
  });
});
