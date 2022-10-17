function removeKFromList(l, k){
  if(l == null){
      return l;
  }
  while(l.value == k){
      l = l.next;
  }
  thisNode = l;
  nextNode = thisNode.next;
  while(nextNode != null){
      if(nextNode.value == k){
          thisNode.next = nextNode.next;
          if(thisNode.next == null)
              break;
      }
      thisNode = thisNode.next;
      nextNode = thisNode.next;       
  }
  return l;
}

module.exports = {
  removeKFromList
};
