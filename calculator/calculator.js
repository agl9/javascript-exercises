function add (a,b){
return a+b
}

function subtract (a,b) {
	return a-b;
}

function sum (args){
	const sumTotal=args.reduce((total,num)=>(total+num),0);
	return sumTotal;
}

function multiply (args) {
	return args.reduce((total,num)=>(total*num),1);
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(a) {
	let total=1;
	for(let i=a;i>0;i--){
		total*=i
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}