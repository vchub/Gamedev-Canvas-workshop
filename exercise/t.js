function myId(x) {
  return x;
}

if (typeof window === 'undefined') {
  exports.myId = myId;
}
