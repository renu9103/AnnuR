// // console.log("value of var", a)
// // var a = 19;
// // console.log("value of var a", a);

// // const newArray = originalArray.filter(callback(element, index, array));

// const arr = [{user :"annu", pass :"123"}, {user :"rahul", pass :"1263"}, {user :"aaru", pass :"1273"} , {user :"aman", pass :"6123"}];

// // Filter out even numbers using arrow function
// const newArray = arr.filter((username) => {return username.user !== "aman"});

// console.log(newArray); // Output: [1, 3, 5]

// Outer function
function outer() {
	function create_Closure(val) {
		return function () {
			return val;
		}
	}
	let arr = [];
	let i;
	for (i = 0; i < 4; i++) {
		arr[i] = create_Closure(i);
       
	}
	return arr;
}
let get_arr = outer();
console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());

