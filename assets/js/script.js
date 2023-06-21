// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs().format('dddd, MMMM D');//Sets format to match mock-up
$('#currentDay').text(today);//Accesses ID of "currentDay"
var milTime = dayjs().format('HH');//Provides two-digit value, which was why 9 AM has a data value of "09"
var timeBlockArray = $(".time-block");//Calls "time-block" classes
var idTags = $('.time-block').attr('data-value');//Pulls numerical values for array making
console.log(timeBlockArray);//console.log used to see if values are assigned
console.log(idTags);
console.log(milTime);
var matches = $('.time-block').each(function() { 
  console.log(this) 
})//Create variable to sort into array
console.log(matches);
function compareTime() {
      $('.time-block').each(function() { 
        console.log(this) 
        var arrayEl = $(this).attr('data-value');  
      if(arrayEl === milTime){
        console.log("present")
        $(this).attr("class", "present row time-block")
      }else if(arrayEl > milTime){
        console.log("future")
        $(this).attr("class", "future row time-block")
      }else{
        console.log("past")
        $(this).attr("class", "past row time-block")
      }
    })//Function that applies color-coding to time blocks according to time comparison of current vs. military
  console.log(compareTime);
};
compareTime();

function saveButton() {
  var saveButtons = document.querySelectorAll(".saveBtn");
  for (var button of saveButtons) {
    button.addEventListener("click", function(e) {
    if (e.target.tagName === "I") {
      var hour = e.target.parentElement.parentElement.dataset.value;
      var saveText = e.target.parentElement.previousElementSibling.value;
      localStorage.setItem(hour,saveText);
      return  
    }//This fixed the issue of clicking on the disk icon working differently from the rest of the save button
    var hour = e.target.parentElement.dataset.value;
    var saveText = e.target.previousElementSibling.value;
    localStorage.setItem(hour,saveText);//Saves the values of icon click and button click as one value and saves to localStorage
    })
  }
};
saveButton();

function renderActivities() {
  var textAreas = document.querySelectorAll(".description");
  for (var textArea of textAreas) {
    var hour = textArea.parentElement.dataset.value;
    var activity = localStorage.getItem(hour);
    textArea.textContent = activity; 
  }
}
renderActivities()//With this function, text entries remain on the screen after refresh