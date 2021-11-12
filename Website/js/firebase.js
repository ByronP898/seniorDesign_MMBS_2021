// Code Originally by Team 5 MMBS
// Further developed by Byron P. of Team 6

var firebaseConfig = {
    apiKey: "AIzaSyABrXbvSkA_LqT0zKSTJ3_JHqNcxgyuxsQ",
    authDomain: "music-matters-229420.firebaseapp.com",
    databaseURL: "https://music-matters-229420.firebaseio.com",
    projectId: "music-matters-229420",
    storageBucket: "music-matters-229420.appspot.com",
    messagingSenderId: "939526187420",
    appId: "1:939526187420:web:9bfd8eb38ec627a575c059"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Test message to see if its all going well at the start
console.log(firebase);

//This variable is what we will reference for all method calls to access our database.
var database = firebase.database();

function signIn() {
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;

	firebase.auth().signInWithEmailAndPassword(email, password)
	.then((userCredentials) => {
		var user = userCredentials.user;
		alert("Signed in");
		window.location.href="Homepage.html"
	})
	.catch((error) => {
		alert("Incorrect");
			
	});
}

firebase.auth().onAuthStateChanged(function(user){

	if(user){

		var email = user.email;
		if (document.URL.includes("login.html")) {
			window.location.href="Homepage.html"
			alert("You are already logged in as " + email);
		}
	}

});

function signOut() {
	firebase.auth().signOut().then(() => {
		alert("You have been signed out");
		window.location.href="Login.html"
	}).catch((error) => {
		alert("This is a bug. Screenshot this and send it to team 6")
	});
}

//Adds Client to Firebase Database. 
function cliAdd() {
	//This references the destination for the client object
  	var ref = database.ref('database/clients');
	//Houses all the parts that make a client element
	var email = document.getElementById('cliEmail').value;
	var stage = document.getElementById('stage').value;

	//This next segment constructs an array of up to 6 performer names.
	//I understand this is a brute force way of doing it,
	//but with current time constraints its the best I can do. Note perf1 must be used since
	//is a required input. 
	var perf1 = document.getElementById('performers1').value;
	var perf2 = document.getElementById('performers2').value;
	var perf3 = document.getElementById('performers3').value;
	
	//Place holder until I can figure html input form as an array. 
	var performers = [perf1]; //Start with required perf1, then push on the others as needed.
	if (perf2 != null) {
		performers.push(perf2);
	}
	if (perf3 != null) {
		performers.push(perf3);
	}
	
	//Split section is a bit more complicated...
	var split = false;
	//We have to test what the input is for splitCheck to get bool
	var splitYes = document.getElementById('splitCheckYes').value;
	if (splitYes) { //If 'yes' has been selected change bool to true, else leave it false. 
		split = true;
	}
	
	var client = {
		email: email,
		performers: performers,
		splitCheck: split,
		stage: stage
	}
	
	ref.push(client);
}