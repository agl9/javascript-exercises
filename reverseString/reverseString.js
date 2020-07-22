const reverseString = function(string) {
let array=[];
for(i=0;i<=string.length;i++){
    array[i]=string.charAt(string.length-i);
}
return array.join("");
}

module.exports = reverseString
