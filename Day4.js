/**
 *
 *triangle equal type, "equilateral" , "isoscles" or "scalene"
 */

const checkTriangleType = (a, b, c) => {
  if (a === b && b === c) return "equilateral";
  if (a === b || b === c || a === c) return "isoscles";
  return "scalene";
};

console.log(checkTriangleType(4, 4, 4));
