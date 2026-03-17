const accountID = 12345
let accountemail = "mohammad.com"
var accountpassword = "1234"
accountCity = "Jaipur"  // not good way to declare

// accountID  = 5  //changes not allowed 

// if we declare any variable and not assign any thing so js cosider it is undefine
let fam

accountemail = "fahim.com"
accountpassword = "1234"
accountCity = "Delhi"


console.log(accountID);

console.table([accountCity,accountemail,accountID,accountpassword,fam])


/*
prefer not to use var
because of isssue in block scope and fuctional scope
*/