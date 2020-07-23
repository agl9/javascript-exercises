const fibonacci = function(num) {
    let first=0;
    let second=1;
    let total=1;
    count=parseInt(num);
    if(count<=0){return "OOPS"};
    for(i=1;i<count;i++){
        total=first+second;
        first=second;
        second=total;
    }
return total;
}

module.exports = fibonacci
