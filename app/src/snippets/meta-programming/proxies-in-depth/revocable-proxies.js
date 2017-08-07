
/*
revocable references work as follows:

a client is not allowed to access a resource directly, only via an intermediate object, which is a wrapper around the resource.

normally, every operation applied to the reference is forwarded to the resource. after the client is done, the resource is protected by revoking the reference (switching it off).

henceforth, applying operations to the reference throws exceptions and nothing is forwarded, anymore.
*/


const resource = {x: 11, y: 8};
const {reference, revoke} = createRevocableReference(resource);

// access granted
console.log(reference.x);

revoke();

try {
  // access denied
  console.log(reference.x);
} catch (ex) {
  console.error(ex);
}



// ES6 lets you create proxies that can be revoked:

function createRevocableReference(target) {
  const handler = {}; // forward everything
  const {proxy, revoke} = Proxy.revocable(target, handler);
  return {reference: proxy, revoke};
}



// bonus topic: what are membranes?
