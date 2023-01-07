 // JavaScript form validation function
function validateForm() {
     let validForm = true;

     let customerName = document.forms["orderForm"]["customerName"].value;
     let customerEmail = document.forms["orderForm"]["customerEmail"].value;
     let customerAddress = document.forms["orderForm"]["customerAddress"].value;
     let customerCity = document.forms["orderForm"]["customerCity"].value;
     let customerState = document.forms["orderForm"]["customerState"].value;
     let customerZip = document.forms["orderForm"]["customerZip"].value;
     let processor = document.forms["orderForm"]["processor"].value;
     let motherboard = document.forms["orderForm"]["motherboard"].value;
     let memory = document.forms["orderForm"]["memory"].value;
     let storage = document.forms["orderForm"]["storage"].value;
     let graphicsCard = document.forms["orderForm"]["graphicsCard"].value;

     // Validate that all fields are filled out
     if (customerName == "" || customerEmail == "" || customerAddress == "" || customerCity == "" || customerState == "" || customerZip == "" || processor == "" || motherboard == "" || memory == "" || storage == "" || graphicsCard == "") {
          alert("All fields must be filled out");
          validForm = false;
     }
     return validForm;
}