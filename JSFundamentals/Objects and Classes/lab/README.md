# Lab: Objects and Classes
 ##    1. Person Info - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Objects%20and%20Classes/lab/PersonInfo.js)
Write a function that receives 3 parameters, sets them to an object and returns that object.
The input comes as 3 separate strings in the following order: firstName, lastName, age.
### Examples
Input | Output
------| ------
"Peter", <br>"Pan",<br>"20" | firstName: Peter<br>lastName: Pan<br>age: 20

***Hints***

 ##   2. City - [Solutin](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Objects%20and%20Classes/lab/City.js)
Receive a single parameter – an object, containing five properties:
{ name, area, population, country, postcode }
Loop through all the keys and print them with their values in format: "{key} -> {value}"
See the examples below.
### Examples
Input | Output
------| ------
{<br>  name: "Sofia", <br>area: 492,<br>population: 1238438,<br>country: "Bulgaria",<br>postCode: "1000"<br>} | name -> Sofia<br>area -> 492<br>population -> 1238438<br>country -> Bulgaria<br>postCode -> 1000
##    3. Convert to Object - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Objects%20and%20Classes/lab/ConvertToObject.js)
Write a function that receives a string in JSON format and converts it to object.
Loop through all the keys and print them with their values in format: "{key}: {value}"
## Examples
Input | Output
------| -----
'{"name": "George", "age": 40, "town": "Sofia"}' | name: George<br>age: 40<br>town: Sofia

#### Hints
    • Use JSON.parse() method to parse JSON string to an object

##    4. Convert to JSON - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Objects%20and%20Classes/lab/ConvertToJSON.js)
Write a Function That Receives Name, LastName, HairColor and Sets Them to an Object.
Convert the object to JSON string and print it.
Input is provided as 3 single strings in the order stated above.
### Examples
Input | Output
------| ------
'George',<br>'Jones',<br>'Brown' | {"name":"George", <br>"lastName":"Jones",<br> "hairColor":"Brown"}
#### Hints
    • Use JSON.stringify() to parse the object to JSON string

 ##   5. Cats - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Objects%20and%20Classes/lab/Cats.js)
Write a function that receives array of strings in the following format '{cat name} {age}'.
Create a Cat class that receives in the constructor the name and the age parsed from the input. 
It should also have a function named "meow" that will print "{cat name}, age {age} says Meow" on the console.
For each of the strings provided you must create a cat object.
### Examples
Input | Output
------| -----
['Mellow 2', 'Tom 5'] | Mellow, age 2 says Meow<br>Tom, age 5 says Meow
#### Hints
    • Create a Cat class with properties and methods described above
    • Parse the input data
    • Create all objects using class constructor and the parsed input data, store them in an array
    • Loop through the array using for…of cycle and invoke .meow() method

 ##   6. Songs - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Objects%20and%20Classes/lab/Songs.js)
Define a class Song, which holds the following information about songs: typeList, name and time.
You will receive the input as an array.
The first element n will be the number of songs. Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}", and the the last element will be Type List / "all".
Print only the names of the songs which are from that Type List / All songs. 
### Examples
Input | Output
------| -----
[3,<br>'favourite_DownTown_3:14',<br>'favourite_Kiss_4:16',<br>'favourite_Smooth Criminal_4:01',<br>'favourite'] | DownTown<br>Kiss<br>Smooth Criminal
[4,<br>'favourite_DownTown_3:14',<br>'listenLater_Andalouse_3:24',<br>'favourite_In To The Night_3:58',<br>'favourite_Live It Up_3:48',<br>'listenLater'] | Andalouse
[2,<br>'like_Replay_3:15',<br>'ban_Photoshop_3:48',<br>'all'] | Replay<br>Photoshop<br>Solution:

Create a Song class with properties described above

Create a new array, where you will store songs

Iterate over the songs:




