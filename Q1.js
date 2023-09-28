// 1. PassworM Validator
// Write a JavaScript program that checks if the entered password matches the confirmed password. If the
// passwords match, the program should log "Password Matched. Password validation Successful." to the console.
// Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console.

function matchPassword(pass, confirmedpass){
    if (pass === confirmedpass) {
        console.log("Password Matched. Password validation Successful.");
    }else{
        console.log("Password didn't match. Password validation unsuccessful");
    }
}

let pass = 123
let confirmedpass = 123

matchPassword(pass,confirmedpass);