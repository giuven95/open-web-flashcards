function objectEquals(obj1, obj2) {
  var props1 = Object.getOwnPropertyNames(obj1);
  var props2 = Object.getOwnPropertyNames(obj2);
  if (props1.length !== props2.length) {
    return false;
  }
  for (var i = 0; i < props1.length; i++) {
    let val1 = obj1[props1[i]];
    let val2 = obj2[props1[i]];
    let isObjects = typeof val1 === "object" && typeof val2 === "object";
    if (
      (isObjects && !objectEquals(val1, val2)) ||
      (!isObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
}

export default objectEquals;
