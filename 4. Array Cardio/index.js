const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// always returns an array, for which the function returns true, if the array elements follow the specified condition

// const a= inventors.filter(function(x){
//     if(x.year>=1500 && x.year<1600)
//         return true; // keep it
// });
// the above functioncan also be written as:

const a= inventors.filter(x => (x.year>=1500 && x.year<1600)); // x is the value you would pass in the filter function
console.table(a);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// map() always returns the same number of items you add to it
//-> returns an array of the same size you enter into it

// const  fullname= inventors.map(function(x){
//     return `${x.first} ${x.last}`; //x.first+' '+x.last
// });
// the above function can be written as:

const fullname= inventors.map(x => `${x.first} ${x.last}`);
console.log(fullname);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// bubble sort done on the basis of returned value: 1 or -1
// works on 2 variables

// const sorted= inventors.sort(function(a,b){
//     if(a.year > b.year)
//         return 1;
//     else   
//         return -1;
// });
// above function can also be written as

const sorted= inventors.sort((a,b)=> a.year>b.year?1:-1); //ternary operator
console.table(sorted);


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const totalLived= inventors.reduce((total,x) => {
    return total + (x.passed - x.year);
}, 0); // 0 to initialize total=0
console.log(totalLived);
  

// 5. Sort the inventors by years lived

const sorted2= inventors.sort(function(a,b){
    const age1= a.passed - a.year;
    const age2= b.passed - b.year;
    return age1>age2?-1:1;
});
console.table(sorted2);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category= document.querySelector('.mw-category');
// const links= Array.from(category.querySelectorAll('.mw-category a'));
  // category.querySelectorAll('.mw-category a') gives a node list
  // adding Array.from() turn it into an array and we can use the array functions
// const names= links.map(x => x.textContent); --> textcontent returns the text within the links
// const deNames= names.filter(x => x.includes('de')); --> returns name with de
  // above code works only at given link

// 7. sort Exercise
// Sort the people alphabetically by last name

const ans= people.sort((a,b)=>{       // a and b are two consequtive people
  const [afirst,alast]= a.split(', '); // splits into two at ', '
  const[bfirst,blast]= b.split(', ');
  return afirst>bfirst?1:-1;
});
console.log(ans);


// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
