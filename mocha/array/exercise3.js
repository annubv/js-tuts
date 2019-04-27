module.exports = function(){
    var  a=[1,1,1,2,2,2,2,3,4,4,5];
    function a4(arry){
        var m=0;
        var ele=arry[0];
        var temp;
        var na=[...new Set(arry)];
        for(var i=0;i<na.length;i++){
            temp=0;
            for (var j=0;j<arry.length;j++){
                if (arry[j]===na[i]){
                    temp+=1;
                }
            if (temp>m){
                m=temp;
                ele=na[i];
            }
            }
        }
        
        var str={element:ele,index:m};
        return(str);
    }
    var out=a4(a);
    return(out); 
}
