module.exports = function(){
    var email="anubhavsingh@live.com";
    function a25(x){
        var ind = x.indexOf("@")
        return x.slice(0,4)+"...."+x.slice(ind);
    }
    return a25(email);
}