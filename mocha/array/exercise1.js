module.exports = function(){
    var arr=[1,2,3,4,5,6]
    var n=3;
    function a1(n){
        var a=arr.slice(0,n);
        return(a);
    }
    return a1(n);
}