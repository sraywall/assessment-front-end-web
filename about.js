console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("Form has been submitted!")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let duck = document.querySelector("#duck");
duck.addEventListener("mouseover",()=>alert("You look nice today."))