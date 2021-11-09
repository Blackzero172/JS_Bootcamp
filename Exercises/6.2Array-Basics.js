let people = ["Greg","Mary","Devon","James"];
// Console Logging All People
for(let i = 0;i<people.length;i++){
    console.log(people[i]);
}

// Removing Greg
people.splice(people.indexOf("Greg"),1);
console.log(people);

// Removing James
people.splice(people.indexOf("James"),1);
console.log(people);

// Adding Matt
people.splice(0,0,"Matt");
console.log(people);

//Adding my Name
people.splice(people.length,0,"Ali");
console.log(people);

// Logging all people and stopping at Mary
for(let i = 0;i<people.length;i++){
    console.log(people[i]);
    if(people[i] == "Mary"){
        i = people.length;
    }
}

// Coping Array
let people2 = people.slice(2);
console.log(people2);

// Getting Index
console.log(people.indexOf("Mary"))
console.log(people.indexOf("Foo"))

// Redefining
people = ["Greg","Mary","Devon","James"]
people.splice(people.indexOf("Devon"),1,"Elizabeth","Artie");
console.log(people);

//With Bob
let withBob = people + "Bob";
console.log(withBob);