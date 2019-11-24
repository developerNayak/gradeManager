const fs = require("fs");
const path = require("path");
var $ = require("jquery");
var bootstrap = require('bootstrap');
var bootbox = require("bootbox");
const DatabaseName = "DB";
let pathName = path.join(__dirname, 'data');
let file = path.join(pathName, DatabaseName);

//get the data from the local storage
var rollNum = localStorage.getItem("rollNum");
var name = localStorage.getItem("name");

fs.readFile(file, function(err, data){
  if(!err){

    var finalData = JSON.parse(data);
    var studentInfo = finalData.studentInfo;
    var dataFound = false;

    studentInfo.map(function(item,index){
      if(item.rollNo===rollNum && item.studentName.toLowerCase()===name.toLowerCase()){
        dataFound = true;
        var studentName = item["studentName"];
        var rollNo = item["rollNo"];
        var englishMarks = item["englishMarks"];
        var mathsMarks = item["mathsMarks"];
        var scienceMarks = item["scienceMarks"];
        var attendance = item["attendance"];

        //render
        $('h5').text(studentName.toUpperCase());
        $("#rollNum").text(rollNo);
        $("#englishMarks").text(englishMarks);
        $("#scienceMarks").text(scienceMarks);
        $("#mathsMarks").text(mathsMarks);
        $("#attendance").text(attendance);

      }
    });

    if(!dataFound){
      bootbox.alert("No Data Found!",function(){
        window.location.replace('./newparent.html');
      });
    }
  }
});