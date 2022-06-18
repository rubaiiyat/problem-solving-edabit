function nextEdge(side1, side2) {
  return side1 + side2 - 1;
}
const triangle = nextEdge(8, 10);
console.log(triangle);
