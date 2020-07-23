const caesar = function(inputString,numShift) {
let inputArr=[];
for(let i=0;i<inputString.length;i++){
    inputArr[i]=inputString.charCodeAt(i);
}
const outputArray= inputArr.map(a=>{
    if(a>=65&&a<=90){
        let b=a+numShift-65;
        return ((b%26+26)%26)+65;
    } else if (a>=97&&a<=122){
        let b=a+numShift-97;
        return ((b%26+26)%26)+97;
    } else return a;
});
let cipher="";
for(i=0;i<outputArray.length;i++){
    let outputString = String.fromCharCode(outputArray[i]);
    cipher+=outputString;
}
return cipher
}

module.exports = caesar
