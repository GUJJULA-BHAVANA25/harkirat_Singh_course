 step1(10, function(result,error){
    if(!error){
        step2(result1, function(result2, error){
            if(!error){
                step3(result2, function(result3, error){
                    if(!error){
                        console.log("Results " + result3);              //what if there are n no.of callbacks like this .it is not easy to manage that many callbacks.this is also called as callback hell.it will be like a pyramid.one solution to solve this problem is writing comments.
                    }
                })
            }
        })
    }
 });

function step1(value, callback){
    callback(value + 10, false);
}
function step2(value, callback){
    callback(value + 10, false);
}
function step3(value, callback){
    callback(value + 10, false);
}