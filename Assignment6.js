function sum(...numbers) {
	return numbers.reduce((accu, current) => {
		return accu += current;
	});
};
 
// console.log(sum(5,4) )
console.log(sum(6,7,8,9,4))