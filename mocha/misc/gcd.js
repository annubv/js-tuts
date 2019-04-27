module.exports = function(){
    var count=0;
    function gcd(a,b){
        count+=1;
        if(a===0){
            return b;
        }
        return gcd(b%a,a);
    }

    var arr=[];
    arr.push(gcd(1078,153));
    arr.push(count);
    return arr;
}