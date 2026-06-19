const accountId = 3022;
let accountemail = "xyz@gmail.com";
var accountpass = "12345";
accountcity = "Jaipur";

// accountId = 2 // Changing value of const is not allowed
accountemail = "cbhyc@gmail.com";
accountpass = "49523";
accountcity = "udaipur";
console.log(accountId);
/*
We dont use var because of issue in block scope and functional scope.
*/
console.table([accountId, accountemail, accountpass, accountcity]);
