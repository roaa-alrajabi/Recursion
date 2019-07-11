//1
function sum(num) {
  if (num === 0) {
    return 0;
  }
  return num + sum(n - 1);
}
sum(2)


//2
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
  // your code here 
}
factorial(4);


//3
function repeatStr(str, num) {
  if (num === 1) {
    return str + repeatStr(str, num - 1);
  }
  if (num === 0) {
    return ""
  }
  return str + " " + repeatStr(str, num - 1);
}
repeatStr("to", 2);


//4
function fibon(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  return fibon(num - 1) + fibon(num - 2);
}
fibon(7)



//5
function sum2(num1, num2) {
  if (num1 === num2) {
    return num2;
  }
  return num1 + sum2(num1 + 1, num2);
}
sum2(3, 6)


//6
function repeatStr2(str1, str2) {
  if (str2.length === 0) {
    return ""
  }
  if (str2.length === 1) {
    return str1 + repeatStr2(str1, str2.slice(1, str2.length))

  }
  return str1 + " " + repeatStr2(str1, str2.slice(1, str2.length))
}
repeatStr2("ro", "fff")


//7
function multiOf(num1, num2, num3) {
  if (num3 === 0) {
    return num1;
  }
  return num2 * multiOf(num1, num2, num3 - 1);
}
multiOf(6, 3, 2)


//8
function multi2(num1, num2) {
  if (num1 > num2) {
    return 1;
  }
  return num1 * multi2(num1 + 1, num2);

}
multi2(3, 6)


//9
function numberBetweenUs(num1, num2) {
  if (num1 === num2 - 1) {
    return "";
  }
  if (num1 === num2 - 2) {
    return (num1 + 1) + numberBetweenUs(num1 + 1, num2);

  }
  return (num1 + 1) + ', ' + numberBetweenUs(num1 + 1, num2);

}
numberBetweenUs(2, 8)


//10
function countDown(num) {
  if (num === 0) {
    return 'done';
  }
  return num + ', ' + countDown(num - 1);
}
countDown(5)


//11
function multiplication2(num1, num2) {
  if (num2 == 0) {
    return 0;
  }
  return num1 + multiplication2(num1, num2 - 1);
}
multiplication2(7, 6)


//12
function mod2(num1, num2) {
  if (num1 > num2 || num1 === num2) {
    return num1 - num2;
  }
  return mod2(num1 - num2, num2);
}
mod2(5, 4)
mod2(4, 4)

// 13
function repeatChar(str1, char) {
  if (str1.length === 0) {
    return 0;
  }
  if (str1[0].toUpperCase() === char.toUpperCase()) {
    return 1 + repeatChar(str1.slice(1, str1.length), char);
  } else {
    return 0 + repeatChar(str1.slice(1, str1.length), char);
  }
}
repeatChar("schOol", "o")
repeatChar("schOol", "L")

















