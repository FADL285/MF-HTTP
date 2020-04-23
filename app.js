// initialize a constructor
const http = new mfHTTP();

// // HTTP Get Request Example:
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// User Data
const data = {
  name: "Mohamed Fadl",
  username: "mohamedfadl285",
  email: "mohamedfadl2852@gmail.com",
};

// // HTTP Post Request Example:
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// // HTTP Put Request Example:
// http
//   .put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// HTTP Delete Request Example:
http
  .delete("https://jsonplaceholder.typicode.com/use/2")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
