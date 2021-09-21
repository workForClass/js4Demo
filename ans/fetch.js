const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = () => {
  fetch("https://reqres.in/api/users?page=2")
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      },
      networkError => {
        console.log(networkError.message);
      }
    )
    .then(jsonResponse => {
      console.log(jsonResponse);
      return jsonResponse;
    });
};

const sendData = () => {
  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email: "eve.holt@reqres.in", password: "pistol" }),
  })
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      },
      networkError => {
        console.log(networkError.message);
      }
    )
    .then(jsonResponse => {
      console.log(jsonResponse);
      return jsonResponse;
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
