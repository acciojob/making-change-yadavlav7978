const makeChange = (c) => {

	const key=['q','d','n','p'];
	const val=[25,10,5,1];

	const num=parseInt(c);
	const obj={ "q": 0, "d": 0, "n": 0, "p": 0 };

	let i=0;
	while(num>0){
		while(val[i]>=num){
			obj[key[i]]++;
			num-=val[i];
		}
		i++;
	}

	return obj;
	
 
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
