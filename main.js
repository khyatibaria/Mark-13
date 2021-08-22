// var birthDate = document.querySelector("#birth-date");
// var checkBttn = document.querySelector("#check");

// checkBttn.addEventListener("click", );
var date={
    day:3,
    month:5,
    year:2019
};
function reverseString(str) {
    var listOfChars = str.split('');
    var reversedListOfChar = listOfChars.reverse();
    var reversedString = reversedListOfChar.join('');
    return reversedString;
  }

function checkPalindrome(str) {
    var resultString = reverseString(str);
    return str === resultString;
  }

function datetoString(date){

    var dateString= { day:"", month:"", year:""};

    if(date.day < 10){
        dateString.day= "0" + date.day;

    }
    else{
        dateString.day=date.day.toString();
    }

    if(date.month < 10){
        dateString.month= "0" + date.month;

    }
    else{
        dateString.month=date.month.toString();
    }

    dateString.year=date.year.toString();

    return dateString;
}

function dateAllFormate (date){

  var date= datetoString(date); 
  var ddmmyyyy = date.day + date.month + date.year;
  var mmddyyyy = date.month + date.day + date.year;
  var yyyymmdd = date.year + date.month + date.day;
  var ddmmyy = date.day + date.month + date.year.slice(-2);
  var mmddyy = date.month + date.day + date.year.slice(-2);
  var yyddmm = date.year.slice(-2) + date.day + date.month;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}

function checkPalindromeAllFormate(date){
    var listOfPalindromes = dateAllFormate(date);
    var palindromeList = [];

  for (var i = 0; i < listOfPalindromes.length; i++) {
    var result = checkPalindrome(listOfPalindromes[i]);
    palindromeList.push(result);
  }
  return palindromeList;
}

function leapYear(year){

  if (year % 400 === 0)
    return true;

  if (year % 100 === 0)
    return false;

  if (year % 4 === 0)
    return true;

  return false;
}

function getNextDate(date){

    var day= date.day+1;
    var month=date.month;
    var year= date.year;

  var daysinMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month === 2){
        if(leapYear(year)){
            if(day>29){
                day=1;
                month=3;
            }}
           else{
                if(day>28){
                    day=1;
                    month=3; 
            }
        }

    }else{
        if(day>daysinMonth[month-1]){
            day=1;
            month++;
        }
    }

    if(month>12){
        month=1;
        year++;
    }

    return {
        day:day,
        month:month,
        year:year
    }
}

function getnextPalindrome(date){
    var countDays=0;
    var nextDate=getNextDate(date);

    while(1){
        countDays++;
        var dateStr = datetoString(nextDate);
        var resultList= checkPalindromeAllFormate(dateStr);
         for (let i = 0; i < resultList.Length; i++) {
          if (resultList[i]) {
        return [countDays, nextDate];
      }
    }
    nextDate = getNextDate(nextDate);
  }
}

console.log(getnextPalindrome(date));



