
function bmi () {
	var height = Number(document.getElementById("height").value);
	var weight = Number(document.getElementById("weight").value);
	//height = height*12;
	var result = (weight*703) / (height *height);
	result = result.toFixed(2);
	document.getElementById("result").innerHTML = " Your BMI is : " + result;
	}

