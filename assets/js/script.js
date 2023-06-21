// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs().format('dddd, MMMM D');
$('#currentDay').text(today);
var milTime = dayjs().format('HH');
var timeBlockArray = $(".time-block");
var idTags = $('.time-block').attr('data-value');
console.log(timeBlockArray);
console.log(idTags);
console.log(milTime);
var matches = $('.time-block').each(function() { 
  console.log(this) 
})
console.log(matches);
function compareTime() {
    //$('.time-block').attr('data-value');
    //for (var i=9; i<matches.length; i++){
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
    }) 
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
    }
    var hour = e.target.parentElement.dataset.value;
    var saveText = e.target.previousElementSibling.value;
    localStorage.setItem(hour,saveText);
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
renderActivities()
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // DONE: Add code to display the current date in the header of the page.

