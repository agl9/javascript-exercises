const palindromes = function(string) {
newArray=string.toLowerCase().match(/\w/gi);
let p=newArray.length;
for(let i=0;i<p;i++){
    if(newArray[i]!=newArray[p-1-i]){return false};
}
return true;
}
module.exports = palindromes
