function visitLink(path) {
	let currentValue = localStorage.getItem('myClicks') ? parseInt(localStorage.getItem('myClicks')) : 0;
    let newValue = currentValue + 1;
    localStorage.setItem('myClicks', newValue);

}

function viewResults() {
	//your code goes here
}
