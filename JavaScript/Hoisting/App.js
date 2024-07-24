//   HOISTING 
Test("first");
function Test(par){
    console.log(par)
}
Test("second");


var rate = 10
 function Totalrate() {
    if (rate === undefined) {
        var rate = 6 
        return rate
    } else {
        return 10
    }
 }

 console.log(Totalrate())