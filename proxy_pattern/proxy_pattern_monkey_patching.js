/*

  Proxy Pattern / Monkey Patching / Object Augumentation

*/


function createProxy(subject) {
  const getLabelOriginal = subject.getLabel;
  subject.getLabel = function() {
    console.info(' [MonkeyPatching] This method is delegated and added extra word -World- ');
    return getLabelOriginal.call(this) + '-World-';
  }
  return subject;
}

module.exports = createProxy;
