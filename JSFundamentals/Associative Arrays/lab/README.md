# Lab: Associative Arrays 
##    1. Phone Book - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/lab/PhoneBook.js)
Write a function that stores information about a person’s name and his phone number. The input comes as an array of strings. Each string contains the name and the number. If you receive the same name twice just replace the number. At the end print the result without sorting it. Try using an associative array.
### Example
Input | Output
------| ------
['Tim 0834212554',<br>'Peter 0877547887',<br>'Bill 0896543112',<br>'Tim 0876566344'] | Tim -> 0876566344<br>Peter -> 0877547887<br>Bill -> 0896543112
 ##   2. Meetings - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/lab/Meetings.js)
Write a function that manages meeting appointments. The input comes as an array of strings. Each string contains a weekday and person’s name. For each successful meeting, print a message. If you receive the same weekday twice, the meeting cannot be scheduled so print a conflict message. At the end print a list of all successful meetings. See example for message format and details.
### Example
Input | Output
------| ------
['Monday Peter',<br>'Wednesday Bill',<br> 'Monday Tim',<br> 'Friday Tim'] | Scheduled for Monday<br>Scheduled for Wednesday<br>Conflict on Monday!<br>Scheduled for Friday<br>Monday -> Peter<br>Wednesday -> Bill<br>Friday -> Tim
 ##   3. Address Book - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/lab/AddressBook.js)
Write a function that stores information about a person’s name and his address. The input comes as an array of strings. Each string contains the name and the address separated by a colon. If you receive the same name twice just replace the address. At the end print the full list, sorted alphabetically by the person’s name.
### Example
Input | Output
------| ------
['Tim:Doe Crossing',<br> 'Bill:Nelson Place',<br> 'Peter:Carlyle Ave',<br> 'Bill:Ornery Rd'] | Bill -> Ornery Rd<br>Peter -> Carlyle Ave<br>Tim -> Doe Crossing
##    4. Storage - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/lab/Storage.js)
Write a function that takes a certain number of items and their quantity. If the same item appears more than once, add the new amount to the existing one. At the end print all the items and their amount without sorting them. The input comes as array of strings. Try using a Map().
### Example
Input | Output
------| ------
['tomatoes 10',<br>'coffee 5',<br>'olives 100',<br>'coffee 40'] | tomatoes -> 10<br>coffee -> 45<br>olives -> 100

***Hints***

Create the solve() function and create a new Map():

#### Loop through the array, split into tokens and create variables for each one:

    • This time for the quantity we need a number, because if we see the same product again, we must add the new quantity
Now let us make the checks for the keys in the map:

    • First, we check if the map does NOT have the product we are currently at and if so, we set it to the given quantity
    • Otherwise, we get the existing quantity, we add the new quantity and set the product’s quantity to the new one
Now we just have to print the result:

    • Each key-value pair is and array of 2 elements (the key and the value), so we use for-of loop and print the key and the value
 ##   5. School Grades - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/lab/SchoolGrades.js)
Write a function to store students with all of their grades. If a student appears more than once, add the new grades. At the end print the students sorted by average grade. The input comes as array of strings.
### Example
Input | Output
------| -------
['Lilly 4 6 6 5',<br>'Tim 5 6',<br>'Tammy 2 4 3',<br>'Tim 6 6'] | Tammy: 2, 4, 3<br>Lilly: 4, 6, 6, 5<br>Tim: 5, 6, 6, 6
#### Hints
Create the function, pass in the array, split each element into tokens, extract the name and the grades:

    • The grades should be numbers (because we want to take the average later), so we map them to Number
Now check if the map does NOT have the name and if so, set it to an empty array and push all the grades. Otherwise just push the grades:

    • If we don’t have the name, we need to create it and concatenate [concat()] the empty array and the new one
    • Otherwise, we just concat()them
Now we have to sort them by average grades:

Of course, there is no such function average, so we need to create it.

    • a and b are two key-value pairs of our map. The grades are the values.
    • For us to calculate average we need to take the sum and divide it by the length of each array

Finally, we return aAverage – bAverage:

We sorted the map, now loop through the keys and values and print them in the format from the example.
##    6. Word Occurrences - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/lab/WordOccurrences.js)
Write a function that counts the times each word occurs in a text. Print the words sorted by count in descending order. The input comes as an array of strings.
##Example
Input | Output
------| ------
["Here", "is", "the", "first", "sentence", "Here", "is", "another"<br>"sentence", "And", "finally", "the", "third", "sentence"] | sentence -> 3 times<br>Here -> 2 times<br>is -> 2 timesthe -> 2 times<br>first -> 1 times<br>another -> 1 times<br>And -> 1 times<br>finally -> 1 times<br>third -> 1 times
#### Hint
    • Create a map
    • Loop through the elements of the array of words
    • Update the map
    • Sort the map by value in descending:

    • Finally, print the result in format as the example above
##    7. Neighborhoods - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/lab/Neighborhoods.js)
Write a function that receives list of neighborhoods and then some people, who are going to live in it. The input will come as array of strings. The first element will be the list of neighborhoods separated by ", ". The rest of the elements will be a neighborhood followed by a name of a person in the format "{neighborhood} - {person}". Add the person to the neighborhood only if the neighborhood is in the list of neighborhoods. At the end print the neighborhoods sorted by the count of inhabitants in descending order. Print them in the following format: 
```
"{neighborhood}: {inhabitants count}
--{1st inhabitant}
--{2nd inhabitant}
…"
```
### Example
Input | Output
------| ------
['Abbey Street, Herald Street, Bright Mews',<br>'Bright Mews - Garry',<br>'Bright Mews - Andrea',<br>'Invalid Street - Tommy',<br>'Abbey Street - Billy'] | Bright Mews: 2<br>--Garry<br>--Andrea<br>Abbey Street: 1<br>--Billy<br>Herald Street: 0
#### vHints
    • Save the first element of the array as the neighborhoods
    • Fill the map with them and set their values as empty arrays
    • Loop through the rest of the elements
    • Check if the neighborhood is in the list/map and add the person
    • Sort them by count of inhabitants
    • Print



 ***NOTE:*** The count of the people is the length of the second element in both a and b. To sort in descending, just subtract the length of a inhabitance from the length of the b inhabitants.