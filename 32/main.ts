// Array of Current Users 
let current_users = ["Usman", "Ayesha", "Areeba", "Zain", "Usama"]

// Array of New uSERS
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"]

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {
    
    // Making a Condition for username alresdy exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // Print Different messages using If-else statements
    if (our_condition){
         console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})