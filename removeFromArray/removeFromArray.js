const removeFromArray = function(originalArray, ...args) {
   
for(let i=0;i<args.length;i++){
    const index = originalArray.indexOf(args[i]);
    if(index!=-1){
    originalArray.splice(index,1);}
}
return originalArray;
}

module.exports = removeFromArray
