/*let person = {
    name: "Lala",
    age: 23,
    country: "Romania"
}

function logData(){
    console.log(person.name + " " + "are" + " " + person.age + " " + "ani and lives in" + " " + person.country)
}

logData()*/


/*let age = 23

if(age < 6) {
    console.log("free")
}else if(age < 18){
    console.log("child discount")
}else if( age < 27 ){
   console.log("student discount")
}else if( age < 67 ){
    console.log("full practice")
}else{
    console.log("senior citizen discount")
}*/

/*let largeCountries = ["china","india","usa","indonezia","pakistan"]

for(let i = 0; i<largeCountries.length; i++){
    console.log(" - " + largeCountries[i])
}*/

let hands = ["piatra", "hartie", "foarfece"]

function getHand(){
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

console.log( getHand() )