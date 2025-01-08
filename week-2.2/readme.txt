In a nutshell,Promise will pass the proxy to p by calling the function passed to promise and then that function will do the real async work and then when the result is received, we have to call the first argument of doAyncOp with that result






Imagine you're ordering a pizze. when you place the order,the pizza place gives you a receipt with a promise:"your pizza will be delivered soon"

1)the order(Promise creation):Just like you order a pizza, in javascript ,you create a promise when you start an action that will complete in the future.For example, fetching data from a server.
2)Waiting(Pending state):When you first make the order, you have to wait for it to be delivered.Similarly, the promise is in a "pending" state until the action is complete.
3)Delivery(Promise Fulfillment):If the pizza is delivered successfully, the pizza place fulfills their promise.In javascript, if the action completes successfully, the promise is "resolved", and you get the result you wanted.

Problem(Promise REjection):If there's a problem and the pizza can't be delivered, the pizza place will let you know, and they reject their promise.In javascript, if something goes wrong, the promise is "rejected"

Getting your Pizza(Using the promise):Once





A promise expects a function that performs an actual asynchronous task.
Once the async task is complete, call the argument of that function, passing in the data obtained from the async task.
That data will then be passed to the function you define in `.then`. 