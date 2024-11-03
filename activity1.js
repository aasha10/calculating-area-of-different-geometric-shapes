var choice = prompt("Welcome to area calculator. \nPlease enter your choice. \n1. Rectangle \n2. Triangle \n3. Circle \n4. Parallelogram");
if(choice == "1"){
    var l = prompt("Enter length: ");
    var w = prompt("Enter width: ");
    var result = Number(l)*Number(w);
    alert("The area is" + result);
}

if(choice == "2"){
    var b = prompt("Enter base: ");
    var h = prompt("Enter height: ");
    var result = 0.5*Number(b)*Number(h);
    alert("The area is" + result);
}

if(choice == "3"){
    var r = prompt("Enter radius: ");
    var result = 3.14*Number(r)*Number(r);
    alert("The area is" + result);
}

if(choice == "4"){
    var h = prompt("Enter height: ");
    var b = prompt("Enter base: ");
    var result = Number(h)*Number(b);
    alert("The area is" + result);
}