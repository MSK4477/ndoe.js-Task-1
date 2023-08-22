const fs = require("fs");
const express = require("express");
const app = express();

const PORT = 1000;

// function to creating the date and time
const createFileWithTimestamp = () => {

  const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// //put all the date and time in an single variable
const formattedTimestamp = `current Time Stamp  = ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

//change the timestamp  to string format
const strOfTimestamp = formattedTimestamp.toString();

//changing the date to string format
const formattedDate = currentDate.toDateString();

const filePath = `./folder/${formattedDate}.txt`

// function to creating the file
const fileCreation = () => {
  fs.writeFile(filePath, strOfTimestamp, (err) => {
    if (err) throw err;
    console.log("File was created successfully");
  });
};
fileCreation();

// reading the file contents
fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) console.log("Error ", err);
  console.log("The content of the file=>", content);
  startTheServer(content);
});

  // function to appending the content in the server
  const startTheServer = (data) =>{
    app.get("/", (req, res) => {
      res.send(data);
    });
  
  }
 

app.listen(PORT, () => "the server was hosetd at", PORT);

}
createFileWithTimestamp()
