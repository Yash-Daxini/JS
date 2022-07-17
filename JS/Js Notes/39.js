function f1() {
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            const err = false;
            if(!err){
                console.log(`function : Your promise has been resolved`);
                resolve(`Resolved`);
            }
            else{
                console.log(`funciton : Your promise has not been resolved`);
                reject(`Rejected`);
            }
        }, 2000);
    })
}

f1().then((str) => {
    console.log("Promise : Resoloving " + str);
}).catch((str) => {
    console.log(`Promise : Rejecting ` + str);
});