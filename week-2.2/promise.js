//A promise in JS is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//promises are syntactically superior way to write instead of callbacks

//callback version
setTimeout(main, 3000);
//promisified verison
setTimeoutPromisified(3000).then(callback)