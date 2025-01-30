class Promise2{
    constructor(fn){
        this.fn = fn;
        this.fn(() => {
            this.resolves.forEach((fn) => fn());
        });
    }
    then(fn){
        if(!this.resolves){
            this.resolves = [];
        }
        this.resolves.push(fn);
    }
}

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        console.log(resolve);
        setTimeout(resolve, duration);
    });
}