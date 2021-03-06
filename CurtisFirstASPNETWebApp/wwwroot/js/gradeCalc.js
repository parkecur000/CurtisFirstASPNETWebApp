﻿//$. is the same as jQuery.
//Default action of $. is getElementById

$("#submitButton").click(function () { // = var submit = documentGetElementById("submitButton"); <br> submit.addEventListener("click", function() {

    //this function collects the different grade categories inputed by the user, multiplies them by their weight, then adds each category together for the final grade
    var assignments = parseInt($('#assignments').val()) * .5;
    var groupProject = parseInt($('#groupProject').val()) * .1;
    var quizzes = parseInt($('#quizzes').val()) * .1;
    var exams = parseInt($('#exams').val()) * .2;
    var intex = parseInt($('#intex').val()) * .1;
    var gradePercentage = assignments + groupProject + quizzes + exams + intex;

    //Bellow is the if else logic to assign a letter grade from the grade percentage
    var grade;

    if (gradePercentage < 60) {
        grade = "E"
    } else if (gradePercentage < 64) {
        grade = "D-"
    } else if (gradePercentage < 67) {
        grade = "D"
    } else if (gradePercentage < 70) {
        grade = "D+"
    } else if (gradePercentage < 74) {
        grade = "C-"
    } else if (gradePercentage < 77) {
        grade = "C"
    } else if (gradePercentage < 80) {
        grade = "C+"
    } else if (gradePercentage < 84) {
        grade = "B-"
    } else if (gradePercentage < 87) {
        grade = "B"
    } else if (gradePercentage < 90) {
        grade = "B+"
    } else if (gradePercentage < 94) {
        grade = "A-"
    } else if (gradePercentage <= 100) {
        grade = "A"
    }
    //Alert statement to display the grade to the user
    alert("you got " + gradePercentage + "% Which is a(n) " + grade);
});