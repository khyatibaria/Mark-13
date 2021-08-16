var birthDate = document.querySelector(".dob");
var checkBttn = document.querySelector(".check");

// checkBttn.addEventListener("click", );

var date={
    day:3,
    month:8,
    year:2020
}

function reverseString(str){
    var charList= str.split('');
    var reverseString= charList.reverse();
    var reversedString = reverseString.join('');
    return reversedString;
}

function checkPalindrome(str){
    var resultString=reverseString(str);
    return str === resultString;
}

console.log(reverseString("love"));
console.log(checkPalindrome("oppo"));

function dateString(date){

    var datetoString= { day:"", month:"", year:""};

    if(date.day < 10){
        datetoString.day= "0" + date.day;

    }
    else{
        datetoString.day=date.day.toString();
    }

    if(date.month < 10){
        datetoString.month= "0" + date.month;

    }
    else{
        datetoString.month=date.month.toString();
    }

    datetoString.year=date.year.toString();
    reverseString
    return datetoString;
}

// console.log(dateString(date));

function dateAllFormate (date){

    var ddmmyyyy= date.day+ date.month+ date.year;
    var mmddyyyy= date.month+date.day+ date.year;
    var yyyymmdd= date.year +date.month+date.day;
    var ddmmyy=date.day+ date.month+ date.year.slice(-2);
    var mmddyy=date.month+date.day+ date.year.slice(-2);
    var yymmdd= date.year.slice(-2)+ date.month+date.day;
   
    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
}

function checkPalindromeAllFormate(date){
    var listOfPalindromes = dateAllFormate(date);
    var flag = false;  
    for(var i=0; i < listOfPalindromes.length; i++){
      if(isPalindrome(listOfPalindromes[i]))
      {
        flag = true;
        break;
      }
    }
    
    return flag;
}

console.log(checkPalindromeAllFormate(date));

function leapYear(year){

    if(year%400 ===0){
        return true;
    }
}
function getNextDate(date){

    var day= date.day+1;
    var month=
}

function getNextPalindrome(date){

}