function onSegment([[x1, y1], [x2, y2]], [x3, y3]) {
  return x1 <= x3 && x3 <= x2 && y1 <= y3 && y3 <= y2;
}

// def ccw(A,B,C):
//     return (C.y-A.y) * (B.x-A.x) > (B.y-A.y) * (C.x-A.x)

// # Return true if line segments AB and CD intersect
// def intersect(A,B,C,D):
//     return ccw(A,C,D) != ccw(B,C,D) and ccw(A,B,C) != ccw(A,B,D)

function ccw(a, b, c) {
  let [[x1, y1], [x2, y2], [x3, y3]] = [a, b, c];
  return (y3 - y1) * (x2 - x1) > (y2 - y1) * (x3 - x1);
}

function segmentIntersect([a, b], [c, d]) {
  let [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = [a, b, c, d];
  var dis = (x2 - x1) * (y3 - y4) - (y2 - y1) * (x3 - x4);
  // console.log(a, b, c, d, dis);
  if (dis == 0) {
    return (
      onSegment([[x1, y1], [x2, y2]], [x3, y3]) ||
      onSegment([[x1, y1], [x2, y2]], [x4, y4])
    );
  }
  return ccw(a, c, d) != ccw(b, c, d) && ccw(a, b, c) != ccw(a, b, d);
}

/**
 *
 * @param {x,y,r,dx,dy} ball object
 * @param {x,y,w,h} rect object
 * @return [dx, dy] speed of the ball
 */
function ballRectCollide(ball, rect) {
  let { x, y, r, dx, dy } = ball;
  let p = rect;
  let f = segmentIntersect;
  // left side
  if (f([[p.x, py], [p.x, py + p.h]], [[x + r - dx, y - dy], [x + r, y]])) {
    return -dx, dy;
  }
  // rigth side
  if (
    f([[p.x + w, py], [p.x + w, py + p.h]], [[x - r - dx, y - dy], [x - r, y]])
  ) {
    return -dx, dy;
  }
  // top
  if (f([[p.x, py], [p.x + p.w, py]], [[x - dx, y + r - dy], [x, y + r]])) {
    return dx, -dy;
  }
  // bottom
  if (
    f(
      [[p.x, py + p.h], [p.x + p.w, py + p.h]],
      [[x - dx, y - r - dy], [x, y - r]],
    )
  ) {
    return dx, -dy;
  }
}

if (typeof window === 'undefined') {
  exports.segmentIntersect = segmentIntersect;
}

// function segmentIntersect([[x1, y1], [x2, y2]], [[x3, y3], [x4, y4]]) {
//   var d = (x2 - x1) * (y3 - y4) - (y2 - y1) * (x3 - x4);
//   var s = (x3 - x1) * (y3 - y4) - (y3 - y1) * (x3 - x4);
//   var t = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);
//   console.log(x1, y1, x2, y2);
//   console.log(x3, y3, x4, y4);
//   console.log(d, s, t);
//   if (d == 0) {
//     return (
//       onSegment([[x1, y1], [x2, y2]], [x3, y3]) ||
//       onSegment([[x1, y1], [x2, y2]], [x4, y4])
//     );
//   }
//   s = s / d;
//   d = d / d;
//   console.log(d, s, t);
//   return s >= 0 && s <= 1 && t >= 0 && t <= 1;
// }
