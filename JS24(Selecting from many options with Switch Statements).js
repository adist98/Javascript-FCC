function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  
   switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
caseInSwitch(4);

// similar code below, but with case statements as  'strings'
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
     switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer= "stuff";
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
switchOfStuff(1);
