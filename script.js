'use strict'

const arr = [1,2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

// Array destructuring

const [var1,var2,var3,var4]  = arr;
console.log(var1,var2,var3,var4);

console.log(arr);


const channel = {
    name: "code academia",
    type: "educational",
    subscribersCount : "5k",
    viewsCount : "51k",
    mostActiveSubscribers  : ['math','steven','richard','john'],
    postingDays : ['sat','monday','fri'],

    days: function(){
        return this.postingDays;
    }
};

const [first,, third] = channel.mostActiveSubscribers;
console.log(first,third);


// swap two variables

let [day1,day2] = channel.postingDays;
console.log("befor swap",day1,day2);

// const temp = day1;
// day1 = day2;
// day2 = temp;

// console.log(day1,day2);

[day1,day2] = [day2,day1];
console.log(day1,day2);


console.log(channel.days());

const [d1,d2,d3] = channel.days();
console.log(d1,d2,d3);
// nested arrays

const nested = [1,4,[5,6]];

const [item1,item2,[item3,item4]] = nested;
console.log(item1,item2,item3,item4);


 const [p =1,q =1,r =2] = [8,2];

 console.log(p,q,r);



