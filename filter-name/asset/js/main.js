let inventors = [
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
  let people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  //sort how got year in range 1600
 let born = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600 ) 
 
 console.table(born)
 //give array their full name
 let fullname = inventors.map(inventor => `${inventor.first}  ${inventor.last}`)
 console.log(fullname);
 // sort array age
 let sortAge = inventors.sort((a,b)=>a.year>b.year ? 1 :-1)
 console.table(sortAge);
 // How many year did all the inventors live
 let totalYears = inventors.reduce((total,inventor)=>{
     return total += (inventor.passed -inventor.year)
 },0)
 console.log(totalYears);
 // sort for who live longger
 let age = inventors.sort((a,b)=>{
     let firstGuy = a.passed - a.year
    let secondGuy = b.passed - b.year
    if(firstGuy<secondGuy){
        return -1
    }
    else{
        return 1
    }
 })
 console.table(age)
 //https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//  let categoty = document.querySelector(".mw-categoty")
//  let groups = Array.from(document.querySelectorAll("a")) 
//  let de = groups.map(group => group.textContent)
//                 // .filter(streetName => streetName.includes('de'))
// 7.Bai tap xap xep ten theo bang chu cai
let alpha = people.sort((lastOne, nextOne)=>{
    let [aLast, aFirst] = lastOne.split(', ')
    let [bLast, bFirst] = nextOne.split(', ')
    // console.log([aLast, aFirst]);
    // console.log([bLast, bFirst]);
    if (aFirst>bFirst) {
        return 1
    }
    else{
        return -1
    }
})
console.log(alpha);
//bien khac nhau cong don
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
let totalAll = data.reduce((obj,datas)=>{
    if(!obj[datas]){
        obj[datas] = 0
    }
    console.log(!obj[datas],datas,obj[datas]);
    obj[datas]++
    return obj
},{})
console.log(totalAll);