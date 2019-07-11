//1
function subtract(n) {
  var result = n;
  while (n > 0) {
    n -= 1;
    result = result - n;
  }
  return result;
}
subtract(9)

//2
function factorial(n) {
  var result = 1;
  while (n >= 1) {
    result = result * n;
    n--;
  }
  return result;
}
factorial(4)

//3
function repeatStr(str, n) {
  var result = "";
  while (n !== 0) {
    result = result + str + " ";

    n -= 1;
  }
  return result.slice(0, result.length - 1);
}
repeatStr("to", 4)

//4
function sum2(n1, n2) {
  var result = 0;
  while (n1 <= n2) {
    result = result + n1;
    n1 += 1;
  }
  return result;
}
sum2(4, 5);

//5
function repeatStr2(str1, str2) {
  var result = "";
  while (str2.length > 0) {
    result = result + str1 + " ";
    str2 = str2.slice(1, str2.length)
  }
  return result.slice(0, result.length - 1);
}
repeatStr2("ro", "fff");



//6
function multiOf(num1, num2, num3) {
  var result = num1;
  while (num3 > 0) {
    result = result * num2;
    num3 -= 1;
  }
  return result;
}
multiOf(6, 3, 2)


//7
function muti2(num1, num2) {
  var result = num2;
  while (num1 < num2) {
    result = result * num1;
    num1 += 1;
  }
  return result;
}
muti2(3, 6)


//8

function numberBetweenUs(num1, num2) {
  var result = "";
  num1 += 1
  while (num1 !== num2 - 1) {
    result = result + num1 + ", ";
    num1 += 1;
  }
  return result + num1;
}
numberBetweenUs(2, 8)


//9
function countDown(n) {
  var result = "";
  while (n > 0) {
    result = result + n + ", ";
    n--;
  }
  return result + "done";
}
countDown(5)

//10
function multiplication2(num1, num2) {
  var result = 0;
  while (num2 > 0) {
    result = result + num1;
    num2 -= 1;
  }
  return result;
}
multiplication2(5, 4)


//11
function mod2(num1, num2) {
  while (num1 > num2 || num1 === num2) {
    num1 = num1 - num2;
  }
  return num1;
}
mod2(5, 4)


//12
function repeatChar(str1, str2) {
  var count = 0;
  while (str1.length !== 0) {
    if (str1[0].toUpperCase() === str2.toUpperCase()) {
      count++;
    }
    str1 = str1.slice(1, str1.length);
  }
  return count;
}
repeatChar("School", "s")








