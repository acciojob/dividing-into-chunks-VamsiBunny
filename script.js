const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let Sum=0;
	let result=[];
    let subArr=[];

	for(let i of arr){

	if(Sum+i<=0){
        subArr.push(i);
		Sum+=i;
	}else{
      if(subArr.length>0){
         result.push(subArr);
	  }
	
	}subArr=[i];
		Sum=i;
	}
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
