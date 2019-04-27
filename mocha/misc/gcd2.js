module.exports = function(){
    var count=0;
    function gcd(a,b){
        count+=1
        if(a===0){
            return b;
        }
        if(b===0){
            return a;
        }
        if(a===b){
            return a;
        }
        if(a>b){
            return(gcd(a-b,b));
        }
        return(gcd(a,b-a))
    }

    var arr=[];
    arr.push(gcd(1078,153));
    arr.push(count);
    return arr;    
}