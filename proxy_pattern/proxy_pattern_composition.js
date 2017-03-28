/*

  Proxy Pattern is also known as Surrogate Pattern

• Data validation: The proxy validates the input before forwarding it
to the subject

• Security: The proxy verifies that the client is authorized to perform the
operation and it passes the request to the subject only if the outcome of
the check is positive

• Caching: The proxy keeps an internal cache so that the operations are
executed on the subject only if the data is not yet present in the cache

• Lazy initialization: If the creation of the subject is expensive, the proxy
can delay it to when it's really necessary

• Logging: The proxy intercepts the method invocations and the relative
parameters, recoding them as they happen

• Remote objects: A proxy can take an object that is located remotely,
and make it appear local

*/

function createProxy(subject) {
  const proto = Object.getPrototypeOf(subject);

  function Proxy(subject) {
    this.subject = subject;
  }

  Proxy.prototype = Object.create(proto);

  // Proxied Method
  Proxy.prototype.getLabel = function () {
    console.info(" [Composition] This Method is proxied and added extra 'world'");
    const _return = this.subject.getLabel() + '-world-';
    console.log(' [Composition] Returns --> ', _return);
    return _return;
  };

  // Delegated Method
  Proxy.prototype.setLabel = function () {
    console.info(' [Composition] This Method is delegated to the super class');
    return this.subject.setLabel.apply(this.subject, arguments);
  };

  return new Proxy(subject);
}

module.exports = createProxy;
