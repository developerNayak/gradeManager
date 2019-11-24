const fs = require("fs");
const path = require("path");
var $ = require("jquery");
var bootstrap = require('bootstrap');
var bootbox = require("bootbox");
const DatabaseName = "DB";
let pathName = path.join(__dirname, 'data');
let file = path.join(pathName, DatabaseName);

$("#searchButton").click(function(){
  var name = $("#name").val();
  var rollNum = $("#rollNum").val();

  if(rollNum!==undefined || rollNum!==null){
    localStorage.setItem("rollNum",rollNum);
    localStorage.setItem("name",name);
    window.location.replace("./details.html");
  }
});