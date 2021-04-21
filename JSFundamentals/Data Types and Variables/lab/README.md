# Lab: Data Types and Variables
##    1. Concatenate Names - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Data%20Types%20and%20Variables/lab/ConcatenateNames.js)
Write a function which receives two names as string parameters and a delimiter. Print the names joined by the delimiter.
### Examples
Input | Output
------| ------
'John','Smith','->' | John->Smith
'Jan','White','<->' | Jan<->White
'Linda','Terry','=>' | Linda=>Terry

***Hints***

Use string interpolation. 
	
 ##   2. Right Place - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Data%20Types%20and%20Variables/lab/RightPlace.js)
You will receive 3 parameters (string, char, string).
First string will be a word with a missing char replaced with a underscore '_'
You have to replace the character with the missing part (underscore) from the first string and compare the result with the second string.
If they are equals you should print "Matched", otherwise print "Not Matched".
### Examples
Input | Output
------| ------
'Str_ng', 'I', 'Strong' | Not Matched
'Str_ng', 'i', 'String' | Matched

***Hints**

 ##   3. Integer and Float - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Data%20Types%20and%20Variables/lab/IntegerAndFloat.js)
You will receive 3 numbers. Your task is to find their sum and print it to the console with the addition 
" - {type of the number (Integer or Float)}":
### Examples
Input | Output
------| -----
9, 100, 1.1 | 110.1 - Float
100, 200, 303 | 603 - Integer

***Hints***

##    4. Amazing Numbers - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Data%20Types%20and%20Variables/lab/AmazingNumbers.js)
Write a function which as input will receive  a number.
 Check and print if it is amazing or not into the following format: 
	"{number} Amazing? {result}"
An amazing number is one that includes the digit 9 the sum of its digits. 
Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)
### Examples
Input | Output
------| ------
1233 | 1233 Amazing? True
999 | 999 Amazing? False

***Hints***

Use includes()

##    5. Gramophone - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Data%20Types%20and%20Variables/lab/Gramophone.js)
### Write a function which as input will receive 3 parameters (strings)
    • First string is the name of the band
    • Second string is the name of the album
    • The third is holding a song name from the album
You have to find out how many times the plate will rotate the given song from the album.
The plate makes a full rotation every 2.5 seconds.
The song duration in seconds is calculate by the given formula: 
 	albumName.length * bandName.length) * song name.length / 2
As output you should print the following message:

 ```"The plate was rotated {rotations} times."```

***Rotations should be rounded up.***
### Examples
Input | Output
------| ------
'Black Sabbath', 'Paranoid', 'War Pigs' | The plate was rotated 167 times.

***Hints***

##    6. Fuel Money - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Data%20Types%20and%20Variables/lab/FuelMoney.js)
### Write a function which calculates how much money for fuel will be needed to drive а bus from one place to another.Consider the following:
    • Calculate the fuel by knowing that an empty bus can pass 100 km with 7L diesel.
    • One person in that bus excluding the driver increases fuel consumption by 100 milliliters.
    • The money is calculated by multiplying the fuel price with the needed fuel for the trip.
As input you will receive 3 parameters (the distance the bus must travel, the passengers in it and the price for 1 liter of diesel)
As output you should print this message: "Needed money for that trip is {neededMoney} lv"
### Examples
Input | Output
------| ------
260, 9, 2.49 | Needed money for that trip is 47.559lv.
90, 14, 2.88 | Needed money for that trip is 22.176lv.

***Hints***

##    7. Centuries to Minutes - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Data%20Types%20and%20Variables/lab/CenturiesToMinutes.js)
Write program to receive a number of centuries and convert it to years, days, hours and minutes.
### Examples
Input | Output
------| -------
1 | 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
5| 5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes


***Hint***

    • Assume that a year has 365.2422 days at average (the Tropical year).
Solution
You might help yourself with the code below:

##    8. Special Numbers - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Data%20Types%20and%20Variables/lab/SpecialNumbers.js)
Write a program to receive a number n and for all numbers in the range 1…n print the number and if it is special or not (True / False).
A number is special when its sum of digits is 5, 7 or 11.
### Examples
Input | Output
------| ------
15 | 1 -> False<br>2 -> False<br>3 -> False<br>4 -> False<br>5 -> True<br>6 ->False<br>7 -> True<br>8 -> False<br>9 -> False<br>10 -> False<br>11 -> False<br>12 -> False<br>13 -> False<br>14 -> True<br>15 -> False

***Hints***

To calculate the sum of digits of given number num, you might repeat the following: sum the last digit (num % 10) and remove it (sum = sum / 10) until num reaches 0. Use parseInt() while dividing to get only integer numbers.
##    9. Triples of Latin Letters - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Data%20Types%20and%20Variables/lab/TriplesOfLatinLetters.js)
Write a program to receive a number n and print all triples of the first n small Latin letters, ordered alphabetically:
### Examples
Input | Output
------| ------
3 | aaa<br>aab<br>aac<br>aba<br>abb<br>abc<br>aca<br>acb<br>acc<br>baa<br>bab<br>bac<br>bba<br>bbb<br>bbc<br>bca<br>bcb<br>bcc<br>caa<br>cab<br>cac<br>cba<br>cbb<br>cbc<br>cca<br>ccb<br>ccc

***Hints***

Perform 3 nested loops from 0 to n. For each number num print its corresponding Latin letter as follows:

The function String.fromCharCode() gets the value in decimal and transforms it to a character from the ASCII table. 

