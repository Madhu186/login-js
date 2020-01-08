var objPeople = [
	{
		username: 'madhu',
		password: 'password186'
	},
	{
		username: 'shraddha',
		password: 'password456'
	},
	{
		username: 'suma',
		password: 'password321'
	}
]

function login() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + ' is logged in!!!')
			break
		} else {
			console.log('incorrect username or password')
		}
	}
}


function registerUser() {
	var registerUser = document.getElementById('newUser').value
	var registerPassword = document.getElementById('newPassword').value
	var newUser = {
		username: registerUser,
		password: registerPassword
	}
	
	for(var i = 0; i < objPeople.length; i++) {
		if(registerUser == objPeople[i].username) {
			alert('That username is already in user, please choose another')
			return
		} else if (registerPassword.length < 8) {
			alert('That is to short, include 8 or more characters')
			return
		}
	}
	objPeople.push(newUser)
	console.log(objPeople)
}
