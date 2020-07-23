const caesar = function(inputString,numShift) {
let inputArr=[];
for(let i=0;i<inputString.lenth;i++){
    inputArr[i]=inputString.charCodeAt(i);
}
const outputArray= inputArr.map(a=>{
    if(a>=65&&a<=90){
        let b=a+numShift;
        if(b<65){return (b+26)}
        else if(b>90){return (b-26)}
        else return b;
    } else if (a>=97&&a<=122){
        let b=a+numShift;
        if(b<97){return (b+26)}
        else if(b>122){return (b-26)}
        else return b;
    } else return a;
});
let outputString;
return  outputString.fromCharCode(outputArray.join(","))

}

module.exports = caesar
