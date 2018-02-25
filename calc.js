var myBtn = document.getElementsByClassName("cbutton");
var output = document.getElementById("output");
var calc = "";
var reset = false;
var mySwitch = false;
var operators = ['+','-','*','/'];

console.log(myBtn);

for(var i = 0; i<myBtn.length; i++){
	myBtn[i].addEventListener("click",function(){
		var myValue = this.innerHTML;
		if(reset || calc == "0"){
			reset = false;
			calc = '';
		}

		if (myValue == "+" || myValue == "-" || myValue == "*" || myValue == "/"){
			if(mySwitch){
				mySwitch = false;
				if(operators.indexOf(output.innerHTML.slice(-1)) > -1){
					calc = calc.substring(0,calc.length-1);
				}else{
					calc = eval(calc);
				}
			}
			mySwitch = true;
		}

		if (myValue == "="){
			myValue = "";
			if(operators.indexOf(output.innerHTML.slice(-1)) == -1){
				calc=eval(calc);
			}
			
		}
		else if(myValue == "CE"){
			calc = 0;
			reset = true;
		}else if(output.innerHTML.indexOf(".") > -1 && myValue == "."){
			myValue = "";
		}else{
			calc = calc + myValue;
		}

		output.innerHTML = calc;
	});
}
