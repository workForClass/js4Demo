// Selecting page elements.
// This script is linked to the index.html file. You will need to open this when checking your code.
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

// 1. Create a fetch GET method: create a function called getData using the following url (https://reqres.in/api/users?page=2)


// 2. Create a fetch SET method: create a function called sendData using the following url (https://reqres.in/api/users?page=2)


// Buttons eventListeners
getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
