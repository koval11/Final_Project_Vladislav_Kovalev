
const form = document.getElementById('the_form');

const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const studentId = document.getElementById("student_id");
const password = document.getElementById("password");
const courses = document.getElementById("courses");

const divOne = document.getElementById("div_1");
const divTwo = document.getElementById("div_2");
const divThree = document.getElementById("div_3");
const divFour = document.getElementById("div_4");
const divFive = document.getElementById("div_5");
const studentNumberRegEx = /^a0[0-9]{7}$/i;


let divOneHtml = "";
let divTwoHtml = "";
let divThreeHtml = "";
let divFourHtml = "";
let divFiveHtml = "";

divOne.style.display = "none";
divTwo.style.display = "none";
divThree.style.display = "none";
divFour.style.display = "none";
divFive.style.display = "none";

form.addEventListener("submit", validateForm);

function testRegularExpressions( regex, stringToTest){

    let regexObject = RegExp(regex);

    if( regexObject.test( stringToTest ) ){
        return true;
    }else{
        return false;
    }
}


function validateForm(event){
	
   
	let formDataErrorsDetected = false;

	divOne.innerHTML = "";
    divTwo.innerHTML = "";
    divThree.innerHTML = "";
    divFour.innerHTML = "";
    divFive.innerHTML = "";
	
	
	if(firstName.value.trim().length === 0){
		
		divOne.style.display = "block";
		divOne.innerHTML += `<p>You cannot leave the first name field empty</p>`;
        firstName.style.backgroundColor = "red";
		
		formDataErrorsDetected = true;
	}
    
    if(lastName.value.trim().length === 0){
		
		divTwo.style.display = "block";
		divTwo.innerHTML += `<p>You cannot leave the last name field empty</p>`;
        lastName.style.backgroundColor = "red";
		
		formDataErrorsDetected = true;
	}
    if(studentId.value.trim().length === 0){
		
		divFive.style.display = "block";
		divFive.innerHTML += `<p>You cannot leave the student ID field empty</p>`;
        studentId.style.backgroundColor = "red";
		
		formDataErrorsDetected = true;
	}else if(!testRegularExpressions(studentNumberRegEx,studentId.value)){
		
		divFive.style.display = "block";
		divFive.innerHTML += `<p>Not correct type of student id.</p>`;
        studentId.style.backgroundColor = "red";
		
		formDataErrorsDetected = true;
	}
    
	
	if(password.value.trim().length === 0){
		
		divThree.style.display = "block";
		divThree.innerHTML += `<p>Password field requires character data</p>`;
		password.style.backgroundColor = "red";

		formDataErrorsDetected = true;

	}

    if(courses.value == "choose"){
		divFour.style.display = "block";
		divFour.innerHTML += `<p>Sorry, you need to choose course.</p>`;
        courses.style.backgroundColor = "red";

		formDataErrorsDetected = true;
	}


	if( formDataErrorsDetected === true){
		event.preventDefault();		
	}
	

}