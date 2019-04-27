module.exports = function(){
    var num=15;
    if (num%3===0 && num%5===0){
        return "foobar";
    }
    else if(num%3===0){
        return "foo";
    }
    else if(num%5===0){
        return "bar";
    }
}