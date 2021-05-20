# Exercise: Associative Arrays 
##    1. Words Tracker - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/exercise/WordsTracker.js)
Write a function that receives an array of words and finds occurrences of given words in that sentence. 
The input will come as array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words you will be looking for. 
Print for each word how many times it occurs. The words should be sorted by count in descending.
### Example
Input | Output
------| -----
[<br>'this sentence', <br>'In','this','sentence','you','have','to','count','the','occurances','of','the','words','this','and','sentence','because','this','is','your','task'] | this - 3<br>sentence - 2
##    2. Odd Occurrences - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/exercise/OddOccurrences.js)
Write a function that extracts all the elements of a sentence odd number of times (case-insensitive)
The input comes as a single string. The words will be separated by a single space.
### Example
Input | Output
------| -----
'Java C# Php PHP Java PhP 3 C# 3 1 5 C#' | c# php 1 5
 ##   3. Piccolo - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/exercise/Piccolo.js)
### Write function that:
    • Records a car number for every car that enters the  parking lot
    • Removes a car number when the car goes out
    • Input will be array of strings in format [direction, carNumber]
Print the output with all car numbers which are in the parking lot sorted in ascending by number
If parking lot is empty , print: "Parking Lot is Empty"
### Examples
Input | Output
------| ------
['IN, CA2844AA',<br>'IN, CA1234TA',<br>'OUT, CA2844AA',<br>'IN, CA9999TT',<br>'IN, CA2866HI',<br>'OUT, CA1234TA',<br>'IN, CA2844AA',<br>'OUT, CA2866HI',<br>'IN, CA9876HH',<br>'IN, CA2822UU'] | CA2822UU<br>CA2844AA<br>CA9876HH<br>CA9999TT
['IN, CA2844AA',<br>'IN, CA1234TA',<br>'OUT, CA2844AA',<br>'OUT, CA1234TA'] | Parking Lot is Empty
##    4. Party Time - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/exercise/PartyTime.js)
There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if he/she exists in any of the two reservation lists. 
The input will come as array of strings. You will be given the list with the guests before you receive a command "PARTY"
All VIP numbers start with digit
When you receive the command "PARTY" the guests start coming.
Print the count of guests then all guest, who didn't come to the party (VIP must be first) 
### Examples
Input | Output
------| ------
['7IK9Yo0h',<br>'9NoBUajQ',<br>'Ce8vwPmE',<br>'SVQXQCbc',<br>'tSzE5t0p',<br>'PARTY',<br>'9NoBUajQ',<br>'Ce8vwPmE',<br>'SVQXQCbc'<br>] | 2<br>7IK9Yo0h<br>tSzE5t0p
['m8rfQBvl',<br>'fc1oZCE0',<br>'UgffRkOn',<br>'7ugX7bm0',<br>'9CQBGUeJ',<br>'2FQZT3uC',<br>'dziNz78I',v'mdSGyQCJ',<br>'LjcVpmDL',<br>'fPXNHpm1',<br>'HTTbwRmM',<br>'B5yTkMQi',<br>'8N0FThqG',<br>'xys2FYzn',<br>'MDzcM9ZK',<br>'PARTY',<br>'2FQZT3uC',<br>'dziNz78I',<br>'mdSGyQCJ',<br>'LjcVpmDL',<br>'fPXNHpm1',<br>'HTTbwRmM',<br>'B5yTkMQi',<br>'8N0FThqG',<br>'m8rfQBvl',<br>'fc1oZCE0',<br>'UgffRkOn',<br>'7ugX7bm0',<br>'9CQBGUeJ'<br>] | 2<br>xys2FYzn<br>MDzcM9ZK
 ##   5. Card Game - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/exercise/CardGame.js)
You are given a sequence of people and for every person what cards he draws from the deck. The input will be array of strings. Each string will be in format:

```{personName}: {PT, PT, PT,… PT}```

Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
Finally print out the total value each player has in his hand in the format:
{personName}: {value}
### Examples
Input | Output
------| ------
[<br>'Peter: 2C, 4H, 9H, AS, QS',<br>'Tomas: 3H, 10S, JC, KD, 5S, 10S',<br>'Andrea: QH, QC, QS, QD',<br>'Tomas: 6H, 7S, KC, KD, 5S, 10C',<br>'Andrea: QH, QC, JS, JD, JC',<br>'Peter: JD, JD, JD, JD, JD, JD'<br>] | Peter: 167<br>Tomas: 175<br>Andrea: 197



##    6. Travel Time - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/exercise/TravelTime.js)
Write a function that collects and orders information about traveling destinations.
As input you will receive an array of strings.
Each string will consist of the following information with format:
"Country name > Town name > Travel cost"
Country name will be unique string, Town name will also be unique string, Travel cost will be a number.
If you receive the same Town name twice, you should keep the cheapest offer. Have in mind that one Country may have several Towns to visit.
After you finish the organizational part, you need to let Steven know which destination point to visit first. The order will be as follows:  First sort Country names alphabetically and then sort by lowest Travel cost.
### Examples
Input | Output
------| ------
[<br>"Bulgaria > Sofia > 500",<br>"Bulgaria > Sopot > 800",<br>"France > Paris > 2000",<br>"Albania > Tirana > 1000",<br>"Bulgaria > Sofia > 200"<br>] | Albania -> Tirana -> 1000<br>Bulgaria -> Sofia -> 200 Sopot -> 800<br>France -> Paris -> 2000

 ##   7. Company Users - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/exercise/Users.js)
Write a function which keeps information about companies and their employees. 
You will receive array of strings containing company name and employee's id. Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
When you finish reading data, order the companies by the name in ascending order. 
Print the company name and each employee's id in the following format:
```
{companyName}
-- {id1}
-- {id2}
-- {idN}
Input / Constraints
    • The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
    • The input always will be valid.
```
### Examples
Input | Output
------| -----
[<br>'SoftUni -> AA12345',<br>'SoftUni -> BB12345',<br>'Microsoft -> CC12345',<br>'HP -> BB12345'<br>] | HP<br>-- BB12345<br>Microsoft<br>-- CC12345<br>SoftUni<br>-- AA12345<br>-- BB12345
[<br>'SoftUni -> AA12345',<br>'SoftUni -> CC12344',<br>'Lenovo -> XX23456',<br>'SoftUni -> AA12345',<br>'Movement -> DD11111'<br>] | Lenovo<br>-- XX23456<br>Movement<br>-- DD11111<br>SoftUni<br>-- AA12345<br>-- CC12344


##    8. A Miner Task - [Olution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/exercise/AMinerTask.js)
You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), and every even – quantity. Your task is to collect the resources and print them each on a new line. 
Print the resources and their quantities in format:
{resource} –> {quantity}
The quantities inputs will be in the range [1 … 2 000 000 000]
### Examples
Input | Output
------| -----
[<br>'Gold',<br>'155',<br>'Silver',<br>'10',<br>'Copper',<br>'17'<br>] | Gold -> 155<br>Silver ->10<br>Copper -> 17
[<br>'gold',<br>'155',<br>'silver',<br>'10',<br>'copper',<br>'17',<br>'gold',<br>'15'<br>] | gold -> 170<br>silver -> 10<br>copper -> 17


 ##   9. *Arena Tier - [Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/exercise/ArenaTier.js)
Pesho is a pro gladiator, he is struggling to become master of the Arena. 
You will receive several input lines in one of the following formats:
"{gladiator} -> {technique} -> {skill}"
"{gladiator} vs {gladiator}"
The gladiator and technique are strings, the given skill will be an integer number. You need to keep track of every gladiator. 
When you receive a gladiator and his technique and skill, add him to the gladiator pool, if he isn't present, else add his technique or update his skill, only if the current technique skill is lower than the new value.
If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:
Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and the other is demoted from the tier -> remove him.
If they don't have techniques in common, the duel isn't happening and both continue in the Season.
You should end your program when you receive the command "Ave Cesar". At that point you should print the gladiators, ordered by total skill in desecending order, then ordered by name in ascending order. Foreach gladiator print their technique and skill, ordered desecending, then ordered by technique name in ascending order
Input / Constraints
### You will receive an array of strings as a parameter to your solution.
    • The input comes in the form of commands in one of the formats specified above.
    • Gladiator and technique will always be one word string, containing no whitespaces.
    • Skill will be an integer in the range [0, 1000].
    • There will be no invalid input lines.
    • The programm ends when you receive the command "Ave Cesar".

### Output
    • The output format for each gladiator is:
"{gladiator}: {totalSkill} skill"
"- {technique} <!> {skill}"
Scroll down to see examples.
### Examples
Input | Output | Comments
------| -------| --------
[<br>'Peter -> BattleCry -> 400',<br>'Alex -> PowerPunch -> 300',<br>'Stefan<br>-> Duck -> 200',<br>'Stefan -> Tiger -> 250',<br>'Ave Cesar'<br>] | Stefan: 450 skill<br>- Tiger <!> 250<br>- Duck <!> 200<br>Peter: 400 skill<br>- BattleCry <!> 400<br>Alex: 300 skill<br>- PowerPunch <!> 300 | We order the gladiators by total skill points descending, then by name. We print every technique along its skill ordered descending by skill, then by technique name.
[<br>'Pesho -> Duck -> 400',<br>'Julius -> Shield -> 150',<br>'Gladius -> Heal -> 200',<br>'Gladius -> Support -> 250',<br>'Gladius -> Shield -> 250',<br>'Peter vs Gladius',<br>'Gladius vs Julius',<br>'Gladius vs Maximilian',<br>'Ave Cesar'<br>] | Gladius: 700 skill<br>- Shield <!> 250<br>- Support <!> 250<br>- Heal <!> 200<br>Peter: 400 skill<br>- Duck <!> 400 | Gladius and Peter don't have common technique, so the duel isn't valid.<br>Gladius wins vs Julius /common technique: "Shield". Julius is demoted.<br>Maximilian doesn't exist so the duel isn't valid.<br>We print every gladiator left in the tier.


## 10. *Legendary Farming -[Solution](https://github.com/borislavstoychev/SoftUni/blob/main/JSFundamentals/Associative%20Arrays/exercise/LegendaryFarming.js)
#### You’ve beaten all the content and the last thing left to accomplish is own a legendary item. However, it’s a tedious process and requires quite a bit of farming. Anyway, you are not too pretentious – any legendary will do. The possible items are:
    • Shadowmourne – requires 250 Shards;
    • Valanyr – requires 250 Fragments;
    • Dragonwrath – requires 250 Motes;
Shards, Fragments and Motes are the key materials, all else is junk. You will be given as a string, such as 2 motes 3 ores 15 stones. Keep track of the key materials - the first that reaches the 250 mark wins the race. At that point, print the corresponding legendary obtained. Then, print the remaining shards, fragments, motes, ordered by quantity in descending order, then by name in ascending order, each on a new line. Finally, print the collected junk items, in alphabetical order.
### Input
    • Input is a string  in format {quantity} {material} {quantity} {material} … {quantity} {material}
### Output
    • On the first line, print the obtained item in format {Legendary item} obtained!
    • On the next three lines, print the remaining key materials in descending order by quantity
        ◦ If two key materials have the same quantity, print them in alphabetical order
    • On the final several lines, print the junk items in alphabetical order
        ◦ All materials are printed in format {material}: {quantity}
        ◦ All output should be lowercase, except the first letter of the legendary
### Examples
Input | Output
------| ------
'3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards' | Valanyr obtained!<br>fragments: 5<br>shards: 5<br>motes: 3<br>leathers: 6<br>stones: 5
'123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver' | Dragonwrath obtained!<br>shards: 22vmotes: 19<br>fragments: 0<br>fangs: 9<br>silver: 123


