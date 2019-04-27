module.exports = function(){
    var arr=[1,2,3,4,5];
    var n=3;
    function a2(n){
        var a = arr.slice(arr.length-n);
        return(a);
    }
    return a2(n);
}