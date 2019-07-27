// from data.js
var tableData = data;
var inputValue = '1/1/2010'
// YOUR CODE HERE!
var tbody = d3.select("tbody");

// console.log(data);

// This function is triggered when the button is clicked
function handleClick() {

   d3.event.preventDefault();
    console.log("A button was clicked!");
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  let filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);
  buildTable(filteredData);
  }
  
  var button = d3.select("#filter-btn");
  // We can use the `on` function in d3 to attach an event to the handler function
  button.on("click", handleClick);
  // Get the value property of the input element
 
    // Build Table Function

function buildTable(tableData) {
    // let filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);
    // console.log(filteredData)
    tbody.html("")
tableData.forEach(function(ufoSighting) {
    // console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
    //   console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

};

 buildTable(tableData);