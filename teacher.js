const fs = require("fs");
const path = require("path");
var $ = require("jquery");
const DatabaseName = "DB";
let pathName = path.join(__dirname, 'data');
let file = path.join(pathName, DatabaseName);

//Events
var saveButton = $('#saveButton');
saveButton.click(function(){
   console.log("save Button clicked");

   //saving the data 
   fs.readFile(file, function(err, data){
    if(err){
      console.log("No file exists, creating a new one.");

      //Parent Object
      var toStore = {
          "studentInfo" : []
      };

      var studentObj = {};
     
      //data to be stored
      var studentName = $("#name").val();
      var rollNo = $("#rollNo").val();
      var englishMarks = $("#englishMarks").val();
      var mathsMarks = $("#mathsMarks").val();
      var scienceMarks = $("#scienceMarks").val();
      var attendance = $("#attendance").val();

      studentObj["studentName"] = studentName;
      studentObj["rollNo"] = rollNo;
      studentObj["englishMarks"] = englishMarks;
      studentObj["mathsMarks"] = mathsMarks;
      studentObj["scienceMarks"] = scienceMarks;
      studentObj["attendance"] = attendance;


      //set the data
      toStore.studentInfo.push(studentObj);

      //Finally store the data
      var finalData = JSON.stringify(toStore);
      fs.writeFile(file, finalData, function(err){
        if(err){
          console.log("err has occured");
        }
        console.log("the file has been written succesfully");
        return;
      })

    } else {
       //the database file has some content - update the data    
       toStore = JSON.parse(data);

       //Get and set the values
       var studentObj = {};
     
      //data to be stored
      var studentName = $("#name").val().trim();
      var rollNo = $("#rollNo").val();
      var englishMarks = $("#englishMarks").val();
      var mathsMarks = $("#mathsMarks").val();
      var scienceMarks = $("#scienceMarks").val();
      var attendance = $("#attendance").val();

      studentObj["studentName"] = studentName;
      studentObj["rollNo"] = rollNo;
      studentObj["englishMarks"] = englishMarks;
      studentObj["mathsMarks"] = mathsMarks;
      studentObj["scienceMarks"] = scienceMarks;
      studentObj["attendance"] = attendance;


      //set the data
      toStore.studentInfo.push(studentObj);

      //Finally store the data
      var finalData = JSON.stringify(toStore);
      fs.writeFile(file, finalData, function(err){
        if(err){
          console.log("err has occured");
        }
        console.log("the file has been written succesfully");
        return;
      })
    }
    
  })
});