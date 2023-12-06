"use strict";
fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) //taking the body of the response and converting the string json data to a javascript object
  .then((data) => {
    console.log(data);
  }); //receives the javascript object so you can access any of the properties