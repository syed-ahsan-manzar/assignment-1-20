console.log("Assignment # 1(ALERTS):"); /* chapter # 01 of book */

// alert("Welcome to the page!");
// console.log("1) Welcome to the page!");

// alert("Error! Please enter a valid password.");
// console.log("2) Error! Please enter a valid password.");

// alert("Welcome to JS Land... \nHappy Coding!\n");
// console.log("3) Welcome to JS Land...\n   Happy Coding!\n");

// alert("Welcome to JS Land...");
// console.log("4a) Welcome to JS Land...");

// alert(" Happy Coding!\n Prevent this page from creating additional dialogs. \n");
// console.log("4b) Happy Coding!\n    Prevent this page from creating additional dialogs. \n");

// alert("Hello... I can run JS through my web browser's console. \n!* please check console *!\n  ");
// console.log("5) Hello... I can run JS through my web browser's console. ");

console.log(
  "Assignment # 2(VARIABLES FOR STRINGS):"
); /* chapter # 02 of book */

// var username; /*Question 01 */

// var myName = "Syed Ahsan Manzar";/*Question 02 */

// var message = "Hello World"; /*Question 03 */
// alert(message);

// var fullName = prompt("What is your full name ?" , "Syed Ahsan Manzar"); /*Question 04 */
// var age = prompt("What is your age ?" , "18");
// var post = prompt("What is your designation ?" , "junior developer");

// alert( "My name is " + fullName + ".");
// alert("I am " + age + " years old.");
// alert("I am " + post + ".");

// var multiple = "PIZZA\nPIZZ\nPIZ\nPI\nP"; /*Question 05 */

// alert(multiple)

// var email = "example@example.com"; /*Question 06 */

// alert("My email address is " + email);

// var book = "A smarter way to learn JavaScript"; /*Question 07 */

// alert(book);

// var three = "Yah! I can write HTML content through JavaScript."; /*Question 08 */

// document.write(three);

console.log(
  "Assignment # 3(VARIABLES FOR NUMBERS):"
); /* chapter # 03 of book */

// var age = "I am 15 years old.";/*Question 01 */

// alert(age);

// var times = "You have visited this site 14 times";/*Question 02 */

// alert(times);

// var birthYear = 1990;/*Question 03 */

// document.write("My birth year is " + birthYear + "." + "<br>");
// document.write("Data type of my decleared variable is " + typeof + birthYear + ". <br>");

// alert("Welcome to the www.SAM Clothing Store.com");/*Question 04 */

// var visitorName   = prompt("Please! write your name for ordering.");
// var orderQuantityName = prompt("Please! tell us how much and what product you want to buy :\n1) Casual T-shirt\n2) Polo shirt\n3) Casual shirt\n4) Chinos\n5) Casual knitwear\n6) Casual jacket\n7) Hoodie\n8) pant");

// document.write("<b>" + visitorName + "</b>" + " ordered ");
// document.write("<b>" + orderQuantityName + "</b>" + " " + "(s) on SAM Clothing Store.");

console.log(
  "Assignment # 4(VARIABLE NAMES: LEGAL & ILLEGAL):"
); /* chapter # 04 of book */

var name1 = "syed",
  name2 = "ahsan",
  name3 = "manzar."; /*Question 01 */

/*Question 02(a) legal & illegal */
// var first        = "legal";
// var firstMethod  = "legal";
// var first01      = "legal";
// var first$       = "legal";
// var first_method = "legal";

/*Question 02(b) legal & illegal */
// var 123              = "illegal";
// var 123secondMethod  = "illegal";
// var @second          = "illegal";
// var break            = "illegal";
// var                  = "illegal";

// var firstHeading = "Rules for naming JS variables :";
// var secondB = "Variable names can only contain,number,$ and_. For example : $my_1stVariable ";
// var secondC = "Variable must begin with a letter, $ or _ .For example : Sname, _name or name";
// var secondD = "Variable names are case sensitive";
// var secondE = "Variable names should not be JS keyword";

// document.write("<h1>" + firstHeading + "</h1>");
// document.write(" <br> ");
// document.write(secondB + "<br>");
// document.write(secondC + "<br>");
// document.write(secondD + "<br>");
// document.write(secondE);

console.log("Assignment # 5(MATH EXPRESSION):"); /* chapter # 05 of book */

/*Question 01 */
// addition
// var value1 = + prompt("write first number for addition?");
// var value2 = + prompt("write second number for addition?");
// var addition = value1 + value2;

// document.write("Sum of " + value1 + " and " + value2 + " is " + addition + "." + "<br>");

/*Question 02 */
// subtraction
// var value3 = + prompt("write first number for subtraction?");
// var value4 = + prompt("write second number for subtraction?");
// var subtraction = value3 -  value4;

// document.write("Subtraction of " + value3 + " and " + value4 + " is " + subtraction + "." + "<br>");

// // multiplication
// var value5 = + prompt("write first number for multiplication?");
// var value6 = + prompt("write second number for multiplication?");
// var multiplication = value5 * value6;

// document.write("Multiplication of " + value5 + " and " + value6 + " is " + multiplication + "." + "<br>");

// division
// var value7 = + prompt("write first number for division?");
// var value8 = + prompt("write second number for division?");
// var division = value7 / value8;

// document.write("Division of " + value7 + " and " + value8 + " is " + division + "." + "<br>");

// modulus
// var value9 = + prompt("write first number for modulus?");
// var value10 = + prompt("write second number for modulus?");
// var modulus = value9 % value10;

// document.write("Modulus of " + value9 + " and " + value10 + " is " + modulus + ".");

/* Question 03 */
// var val1;
// document.write("value after variable decleration is: " + val1 + "<br>");

// var val2 = 5;
// document.write("Initial value: " + val2 + "<br>");

// val2++;
// document.write("Value after increment is : " + val2 + "<br>");

// var val3 = 7 + val2++;
// document.write("Value after addition is: " + val3 + "<br>")

// val3--;
// document.write("Value after decrement is : " + val3 + "<br>");

// var val4 = val3 % 3;
// document.write("The remainder is: " + val4);

/* Question 04 */
// var movieTicket = 600;
// var ticketPrice = 600 * 5;

// document.write("Total cost to buy 5 tickets to a movie is " + ticketPrice + " PKR.");

/* Question 05 */
// var a = 4;

// for(var i = 1; i <= 10; i++){
//     document.write(a + " X " + i + " = " + (i*a) + "<br>");
// }

/* Question 06 */
// var c = 25;
// var f = 70;
// var fahrenheit = (c * 9 / 5) + 32;
// var celsius  = (f - 32) * 5 / 9;

// document.write(c + "°C is " + fahrenheit + "°F" + "<br>");
// document.write(f + "°F is " + celsius + "°C");

/* Question 07 */
// var mainHeading = ("Shopping Cart :");
// var item1 = 650 ;
// var quan1 = 3 ;
// var item2 = 100 ;
// var quan2 = 7 ;
// var charg = 100
// var totalCost = (item1 * quan1) + (item2 * quan2) + charg;

// document.write("<h1>" + mainHeading + "</h1>")
// document.write("Price of item 1 is " + item1 + "<br>");
// document.write("Quantity of item 1 is " + quan1 + "<br>");
// document.write("Price of item 2 is " + item2 + "<br>");
// document.write("Quantity of item 2 is " + quan2 + "<br>");
// document.write("Shipping Charges " + charg + "<br>");
// document.write("<br>");
// document.write("Total cost of your order is "+ totalCost);

/* Question 08 */
// var markSheet   = "Marks Sheet :"
// var totalMarks  = 980 ;
// var marksObtain = 804 ;
// var percentage  = marksObtain / totalMarks  * 100;

// document.write("<h1>" +markSheet + "</h1>" + "<br>")
// document.write("Total marks: " + totalMarks + "<br>")
// document.write("Marks obtained: " + marksObtain + "<br>")
// document.write("Percentage: " + percentage + "%")

/* Question 09 */
// var currencyExchangePkr = "Currency in PKR";
// var currencyExchange = (10 * 104.80) + (25 * 28);

// document.write("<h1>" + currencyExchangePkr + "</h1>" + "<br>")
// document.write("Total Currency in PKR: " + currencyExchange + "<br>" + "<br>");

/* Question 10 */
// var question10 = "Question # 10"
// var ques = (5 * 10) /2 ;

// document.write("<h1>" + question10 + "</h1>");
// document.write(ques);

/* Question 11 */
// var ageCal = "Age Calculator";
// var currentYear = 2016 ;
// var birthYear = 1992 ;
// var sub = currentYear - birthYear

// document.write("<h1>" + ageCal + "</h1>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your age is: " + sub);

/* Question 12 */
// var geom = "The Geometrizer";
// var radius = 20 ;
// var circumferenceOfCircle = 2 * 3.142 * radius;
// var areaOfCircle = 3.142 * radius ** 2;
// document.write("<h1>" + geom + "</h1>");
// document.write("Radius of circle: " + radius + "<br>")
// document.write("The circumference: " + circumferenceOfCircle + "<br>")
// document.write("The area is: " + areaOfCircle)

/* Question 13 */
// var lifeTime = "The Lifetime Supply Calculator";
// var fav = "chocolate";
// var currentAge = 15 ;
// var maximumAge = 65 ;
// var estimatedAmountPerDay = 3 ;
// var need = (maximumAge - currentAge) * estimatedAmountPerDay;

// document.write("<h1>" + lifeTime + "</h1>");
// document.write("Favourite Snack: " + fav + "<br>");
// document.write("Current Age: " + currentAge + "<br>");
// document.write("Maximum Age: " + maximumAge + "<br>");
// document.write("Amount of snacks per day: " + estimatedAmountPerDay + "<br>");
// document.write("you will need " + need + " chocolate chip to last  you untill the ripe old age of " + maximumAge);

console.log("Assignment # 6-9(MATH EXPRESSION):"); /* chapter # 06-09 of book */

/* Question 01 */
// var main = 13;
// var i1 = main;
// ++i1
// var i2 = i1;
// i2++
// var i3 = i2;
// --i3
// var i4 = i3;
// i4--

// document.write("Result:" + "<br>" + "The value of a is: " + main + "<br>" + "...................................." + "<br>");
// document.write("The value of ++a is: " + i1 + "<br>");
// document.write("Now the value of a is: " + i1 + "<br><br><br>");
// document.write("The value of a++ is: " + i1 + "<br>");
// document.write("Now the value of a is: " + i2 + "<br><br><br>");
// document.write("The value of --a is: " + i3 + "<br>");
// document.write("Now the value of a is: " + i3 + "<br><br><br>");
// document.write("The value of a-- is: " + i3 + "<br>");
// document.write("Now the value of a is: " + i4 + "<br>");

/* Question 02 */

// var a = 2;
// var b = 1;
// var cc = --a - --b + ++b + b--;
// document.write("The value of a = " + a + "<br>");
// document.write("The value of b = " + b + "<br>");
// document.write("The result is " + cc + "<br><br>");
// document.write("Explanation of the output at each stage" + "<br>");
// document.write("--a (1)" + "<br>");
// document.write("--a - --b (0)" + "<br>");
// document.write("--a - --b + ++b (1)" + "<br>");
// document.write("--a - --b + ++b + b-- (1)" + "<br>");
// document.write("1 - 0 + 1 + 1 = 3" + "<br>");

/* Question 03 */
// var greeting = prompt("please! write your name...");
// alert("Welcome to the JS world Sir " + greeting + ".");

/* Question 04/05 */
// var a = prompt("Write any number to display it's multiplication table....!" , "5");

// for(var i = 1; i <= 10; i++){
//     document.write(a + " x " + i + " = " + (i*a) + "<br>");
// }

/* Question 06 */
// var sub1 = prompt("write First subject name?");
// var sub2 = prompt("write Second subject name?");
// var sub3 = prompt("write Third subject name?");
// var totalMarksOfEachSubject  = 100 * 3;
// var obtainMarksFirstSubject  = + prompt("Write obtain marks for " + sub1 + " first subject?");
// var obtainMarksSecondSubject = + prompt("Write obtain marks for " + sub2 + " subject?");
// var obtainMarksThirdSubject  = + prompt("Write obtain marks for " + sub3 + " subject?");
// var totalObtainMark          = obtainMarksFirstSubject + obtainMarksSecondSubject + obtainMarksThirdSubject;
// var calculateTotalMarksAndPercentage = (totalObtainMark / totalMarksOfEachSubject) * 100;

// document.write("<table>");
// document.write("<tr>");
// document.write("<th>" + "Subject"      + "</th>");
// document.write("<th>" + "Total Marks"  + "</th>");
// document.write("<th>" + "Obtain Marks" + "</th>");
// document.write("<th>" + "Percentage"   + "</th>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + sub1  + "</td>");
// document.write("<td>" + "100" + "</td>");
// document.write("<td>" + obtainMarksFirstSubject  + "</td>");
// document.write("<td>" + obtainMarksFirstSubject  + "%" + "</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + sub2  + "</td>");
// document.write("<td>" + "100" + "</td>");
// document.write("<td>" + obtainMarksSecondSubject + "</td>");
// document.write("<td>" + obtainMarksSecondSubject + "%" + "</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + sub3  + "</td>");
// document.write("<td>" + "100" + "</td>");
// document.write("<td>" + obtainMarksThirdSubject + "</td>");
// document.write("<td>" + obtainMarksThirdSubject + "%" + "</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + "</td>");
// document.write("<td>" + "<span>" + totalMarksOfEachSubject          + "</span>" + "</td>");
// document.write("<td>" + "<span>" + totalObtainMark                  + "</span>" + "</td>");
// document.write("<td>" + "<span>" + calculateTotalMarksAndPercentage + "%" + "</span>" + "</td>");
// document.write("</tr>");
// document.write("</table>");

console.log(
  "Assignment # 9-11(MATH EXPRESSION):"
); /* chapter # 09-11 of book */

/* Question 01 */
// var cityName = prompt("Write your city name?");

// if(cityName === "karachi"){
//     alert("Welcome to ciy of lights :)");
// }

/* Question 02 */
// var gender = prompt("Write your gender?");

// if(gender === "male"){
//     alert("Good Morning Sir.");
// }else{
//     alert("Good Morning Ma'am.");
// }

/* Question 03 */
// var signalColor = prompt("Write a color of raod traffic signal?\n1) red\n2) yellow\n3) green\n");

// if(signalColor == "red"){
//     alert("Must Stop.");
// }else if(signalColor == "yellow"){
//     alert("ready to move.");
// }else{
//     alert("Move now.");
// }

/* Question 04 */
// var remainingFuel = prompt("Tell us that how much petrol remaining in your car (: in litres :)");

// if(remainingFuel <= "0.25 litres"){
//     alert("Please refill the fuel in your car...");
// }else{
//     alert("enjoy:)")
// }

/* Question 06 */
// var marksObtainInOneSubjects1 = + prompt("Write the obtain marks in first subject?");
// var marksObtainInTwoSubjects2 = + prompt("Write the obtain marks in second subject?");
// var marksObtainInThreeSubjects3 = + prompt("Write the obtain marks in third subject?");
// var totalMarks3 = 300;
// var totalMarksInEachSubject = marksObtainInOneSubjects1 + marksObtainInTwoSubjects2 + marksObtainInThreeSubjects3;
// var totalPercentage =  totalMarksInEachSubject / totalMarks3 * 100;

// document.write("<h1>" + "Mark Sheet" + "</h1>");
// document.write("Total marks: " + totalMarks3 + "<br>");
// document.write("Marks obtained: " + totalMarksInEachSubject + "<br>");
// document.write("Percentage: " + totalPercentage + "%" + "<br>");

// if(totalPercentage >= 80 && totalPercentage <= 100){
//     document.write("Grade: " + "A-one" + "<br>");
//     if(totalPercentage >= 80 && totalPercentage <= 100){
//         document.write("Remarks: " + "Excellent");
//     }
// }else if(totalPercentage >= 70 && totalPercentage <= 79){
//     document.write("Grade: " + "A" + "<br>");
//     if(totalPercentage >= 70 && totalPercentage <= 79){
//         document.write("Remarks: " + "Good");
//     }
// }else if(totalPercentage >= 60 && totalPercentage <= 69){
//     document.write("Grade: " + "B" + "<br>");
//     if(totalPercentage >= 60 && totalPercentage <= 69){
//         document.write("Remarks: " + "You need to improve");
//     }
// }else{
//     document.write("Grade: " + " Fail" + "<br>");
//     if(totalPercentage < 60){
//         document.write("Remarks: " + "Sorry!");
//     }
// }

/* Question 07 */
// var secretNumber = 5;
// var secretNumberGuess = prompt("Let guess the secret number :)");

// document.write("<h1>" + "Guess game" + "</h1>");

// if(secretNumberGuess === "5"){
//     document.write("Bingo! Correct answer.")
// }else if(secretNumberGuess === "6"){
//     document.write("Close enough to the correct answer");
// }else{
//     document.write("You miss out!");
// }

/* Question 08 */
// var divisible = prompt("Write a number to check whether the given number is divisible by three or not.");

// if(divisible % 3 == 0){
//     alert("The given Number is Divisible by 3");
// }else{
//     alert("The given Number is not Divisible by 3")
// }

/* Question 09 */
// var q9 = 4;

// if(q9 % 2 == 0){
//     alert("The given number is Even");
// }else{
//     alert("The given number is Odd");
// }

/* Question 10 */
// var temperature = prompt("Please write a temperature of your area!\n1) 40\n2) 30\n3) 20\n4) 10");

// if (temperature == "40"){
//     alert("It's too hot outside.");
// }else if(temperature == "30"){
//     alert("The weather today is normal.");
// }else if(temperature == "20"){
//     alert("Today's weather is cool.");
// }else{
//     alert("OMG! Today's weather is so cool");
// }

/* Question 11 */
// var firstNumber  = + prompt("Write first number to calculate?");
// var secondNumber = + prompt("Write second number to calculate?");
// var signOperator =   prompt("Write an oprator to calculate?\n1) +\n2) -\n3) *\n4) /\n5) %\n");

// if(signOperator == "+"){
//     alert(firstNumber + secondNumber);
// }else if(signOperator == "-"){
//     alert(firstNumber - secondNumber);
// }else if(signOperator == "*"){
//     alert(firstNumber * secondNumber);
// }else if(signOperator == "/"){
//     alert(firstNumber / secondNumber);
// }else{
//     alert(firstNumber % secondNumber);
// }

console.log("Assignment # 12-13(MATH EXPRESSION):"); /* chapter # 12-13 of book */

/* Question 01 */
// var userInput = prompt("Write  1) number 2) Capital Letter 3) Small Letter to check whether the given input is Uppercase, Lowercase or a Number...") ;
// var k  = userInput.charCodeAt();
// var text = userInput.toString();

// if(text >= 0 && text <= 10){
//     alert("The given input is number.");
// }else if(k >= 65 && k <= 90){
//     alert("The give input is Uppercase Letter.");
// }else if(k >= 97 && k <= 122){
//     alert("The given input is Lowercase Letter.");
// }else{
//     alert("none")
// }

/* Question 02 */
// var acceptInteger1 = prompt("Write any integer 1?");
// var acceptInteger2 = prompt("Write any integer 2?");

// if(acceptInteger1 === acceptInteger2){
//     document.write("Both Integers are equal.");
// }else if(acceptInteger1 < acceptInteger2 ){
//     document.write("The larger integer is " + acceptInteger2);
// }else if(acceptInteger1 > acceptInteger2 ) {
//     document.write("The larger integer is " + acceptInteger1);
// }

/* Question 03 */
// var inputNumberFrom = prompt("Write any number to check whether the number is 1)Positive 2)Negative 3)Zero.");

// if(inputNumberFrom == 0){
//     document.write("The number is Zero " + inputNumberFrom);
// }else if(inputNumberFrom > 0){
//     document.write("The number is Positive " + inputNumberFrom);
// }else{
//     document.write("The number is Negative " + inputNumberFrom);
// }

/* Question 04 */
// var quesFou4 =prompt("1) Write only single character?\n2) you can also check vowel wordes\n");

// if(quesFou4 == "a" || quesFou4 == "e" || quesFou4 == "i" || quesFou4 == "o" || quesFou4 == "u"){
//     document.write("True");
// }else{
//     document.write("False");
// }

/* Question 05 */
// var stCoPass1 = prompt("Write your password....","Please inter your password!");
// var stCoPass2 = prompt("Write your confirm password....");

// if (stCoPass1 === stCoPass2) {
//   document.write("Correct! The password you entered matches the original password.");
// }else{
//     document.write("Incrrect password!")
// }

/* Question 06 */
// var greeting;
// var hour = 113;

// if(hour < 18){
//     document.write("Good day");
// }else{
//     document.write("Good evening");
// }

/* Question 07 */
// var takTimes =prompt("24 hours clock format is 1900 = 7pm:")

// if(takTimes >= 0000 && takTimes < 1200){
//     document.write("Good morning" + "<br>");
// }else if(takTimes >= 1200 && takTimes < 1700){
//     document.write("Good afternoon" + "<br>");
// }else if(takTimes >= 1700 && takTimes < 2100){
//     document.write("Good evening" + "<br>");
// }else if(takTimes >= 2100 && takTimes <= 2400){
//     document.write("Good night" + "<br>");
// }else{
//     document.write("Kindly write correct time!");
// }

console.log("Assignment # 14-16(MATH EXPRESSION):"); /* chapter # 14-16 of book */
// var qq1 = [];
var sum = 0;
var n = prompt("Enter the value of n");
// n = Number.parseInt(n);

for(var i = 0; i < n; i++){ 
    console.log(i+1 + "+");
   /* sum += (i + 1)*/  sum = sum + (i + 1)
}

console.log("sum of first " + n + " natural number is " + sum)