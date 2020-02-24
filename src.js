

function getValue(s,  source) {
	for (let i = 0; i < source.length; i++) {
		if (source[i] == s) {
			return i;
		}
	}

	return 0;
}

function allienNumber() {
	let n = prompt("enter the number for cases eg(1)");
	n = parseInt(n)

	for (let i = 0; i < n; i++) {
		console.log( `Case # ${i+1}: `)

		let number, source, target;
        number = prompt("enter the number eg(9)");
        source = prompt("enter the source eg(0123456789)");
        target = prompt("enter the target eg(oF8)");

		let sizeS = source.length;
		let  sizeT = target.length;

        number =  manipulateString(number); 

		let representation = 0;
		for (let j = 0; j < number.length; j++) {
			representation += getValue(number[j], source) * Math.pow(sizeS, j);
		}

		let ret = "";
		while ( Math.trunc( representation ) > 0) {
			ret += target[representation % sizeT];
			representation = representation/ sizeT;
		}

        ret = manipulateString(ret)

        console.log(ret)
	}
}

function manipulateString(str) {
    let temp =  str[str.length -1]
    str = str.replace(str[str.length -1], str[0]);
    str = str.replace(str[0], temp);
    return str;
}

allienNumber();