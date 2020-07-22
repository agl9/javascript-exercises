const repeatString = function(word,num) {
    let str="";
    if(num<0){
        str="ERROR"
    } else {
    for(i=0;i<num;i++){
        str+=word;
    }
    }
return str;
}

module.exports = repeatString
