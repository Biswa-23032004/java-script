function steUserName(userName){
    this.userName = userName
    console.log("called");
}

function creatUser(userName, usermail, password) {
    steUserName.call(this, userName)
    // call is standing for pass the current exicution context to another funtion.
    this.usermail = usermail
    this.password = password
}

const Akash = new creatUser("Akash", "akash@gamil.com", "1234")
console.log(Akash);