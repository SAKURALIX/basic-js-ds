function removeKFromList({value, next}, k) {
  if(value === k){
    return next ? removeKFromList(next, k) : null;
   } else {
      return {
        next : removeKFromList(next, k),
        value
      };
  }
}

module.exports = {
  removeKFromList
};
