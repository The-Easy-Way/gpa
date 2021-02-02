document.getElementById("1submit").addEventListener("click", displayGPA); 
    function displayGPA() {
    event.preventDefault();
    var got = document.getElementById("Obtained").value;
    var total = document.getElementById("Total").value;
    var formula = (got/total)*4
    var show1 = ("The value in GPA is"+" " +formula);
      document.getElementById("1show").innerHTML = show1;
    }

document.getElementById("2submit").addEventListener("click", displayPercentage); 
    function displayPercentage() {
    event.preventDefault();
    var GPA = document.getElementById("value").value;
    var formula = (GPA)*25
    var show2 = ("The value in % is"+" " +formula);
      document.getElementById("2show").innerHTML = show2;
    }

// window.onbeforeunload = function() {
//   return "Dude, are you sure you want to leave?";
//     }
