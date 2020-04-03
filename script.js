var names=[];
var markes=[];

for (i=1; i<=3; i++ ) {
  var name = prompt("Please Enter Name #" + i );
   names.push(name);

  var mark = prompt("Please Enter Mark #" + i);
  markes.push(mark);
}

displayTable(names , markes);

function equivalentGrade ( grade ){
  if (grade >= 90){
    return "Excellent";
  }
  else if (grade >= 80){
    return "Very Good";
  }
  else if (grade >= 70){
    return "Good";
  }
  else if (grade >= 60){
    return "Medium";
  }
  else if (grade >= 50){
    return "Pass";
  }
  else{
    return "Fail";
  }
}

function displayTable(names , markes){
  document.write("<h1>Student Grade Summary</h1>")
  document.write("<table border='1'>");
  document.write("<tr> <th>Student</th> <th>Mark</th> <th>Grade</th> </tr>");
  for (i=0; i<3; i++ ) {
    document.write(
      "<tr> <td>"     +
      names[i]        +
      " </td> <td> "  +
      markes[i]       +
      "</td> <td> "   +
      equivalentGrade(markes[i])+
      "</td> </tr>");
    }
    document.write("</table>");
  }
