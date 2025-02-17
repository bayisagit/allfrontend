function multiply(multiplier,...args){
    return args.map(function(element){
        return multiplier*element;
    });
}
var arr=multiply(2,1,2,3);
console.log(arr);