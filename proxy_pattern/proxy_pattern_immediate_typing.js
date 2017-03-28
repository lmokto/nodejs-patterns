/*

  Immediate Typing Proxy without Inheritence

*/

function createProxy(subject) {
  return {
    setLabel: function() {
      console.info(' [Immediate] This method is delegated to the subject!!!');
      return subject.setLabel.apply(subject, arguments)
    },
    getLabel: function() {
      console.info(' [Immediate] This method is delegated and added extra word -World- ');
      return subject.getLabel() + '-World-';
    }
  }
}

module.exports = createProxy;
