console.log('----------------------------------Activity 1-----------------------------------------------')
let Message : string;
Message="Hello World"
console.log(Message)


console.log('--------------------------------------Activity 2-------------------------------------------')

let year :number;
year =2005;

if(year % 4 ==0)
{
console.log("Its a Leap Year");
}
else if(year % 400 == 0) 
{
    console.log("Its a Leap Year");
}
else
{
    console.log("Not a Leap Year");
}


console.log('------------------------------------Activity 3---------------------------------------------')
 let Age= new Map();  
 Age.set("Years", 2314530000);  
 Age.set("Months", 345859494);  
 Age.set("Days", 2456000);  
 Age.set("Hours", 216000);  
 Age.set("Minutes", 3600);  
 Age.set("Seconds", 60);  


 var agemap = function (Infoage) {
     console.log('Input seconds are : '+ Infoage.toString())
     return Math.floor(Infoage / Age.get("Years")) + ' Years ' +
         Math.floor((Infoage % Age.get("Years")) / Age.get("Months")) + ' Months ' +
         Math.floor(((Infoage % Age.get("Years") % Age.get("Months"))) / Age.get("Days")) + ' Days ' +
         Math.floor((((Infoage % Age.get("Years") % Age.get("Months")) % Age.get("Days"))) / Age.get("Hours")) + ' Hours ' +
         Math.floor(((((Infoage % Age.get("Years") % Age.get("Months")) % Age.get("Days")) % Age.get("Hours"))) / age.get("Minutes")) + ' Minutes ' +
         Math.floor((((((Infoage % Age.get("Years") % Age.get("Months")) % Age.get("Days")) % Age.get("Hours")) % age.get("Minutes"))) / age.get("Seconds")) + ' Seconds ';
 };
 console.log(agemap(74992640000)); 

console.log('----------------------------------Activity 4 -----------------------------------------------')

let input = 'Welcome To the Hello World';
let words = input.trim().split(' ');
let wordsMap  = new Map();
let createWordMap = (words) => {   
  words.forEach((words) => {(wordsMap.hasOwnProperty(words)) ? wordsMap[words]++ : wordsMap[words] = 1;});
  return wordsMap;
};
let wordsCount = createWordMap(words);
console.log(wordsCount);
console.log('----------------------------------Activity 5-----------------------------------------------')

let reverseMsg = (string) => string.split("").reverse().join('');
console.log(reverseMsg("Welcome My First Project"));



console.log('------------------------------------Activity 6---------------------------------------------')


let num = (a:Number,b:Number,c:Number):void =>
{
  if (a==b && b==c)

  {
console.log("This Triangle is an Equilateral triangle");
  }

  else if ((a==b && b!=c ) || (a!=b && c==a) || (c==b && c!=a))
  {
 console.log("This triangle is an Isosceles Triangle");
  }

  else if (a!=b && b!=c && c!=a)
{

    console.log("This triangle is an Scalene Triangle");
}

}

num(1,2,3);

console.log('------------------------------------Activity 7---------------------------------------------')
console.log('Armstrong number')
let armstrng = (num1:number) =>
{
 return new Promise(function(resolve,reject){

    if(num1==0)
    {
reject("invalid number.")        ;
    }

    let a1: number=0;
    let b: number=0;
    let temp:number=num1;
    var check=num1.toString().length;
    while(temp>0)
        {
            b=temp%10;
            temp=Math.floor(temp/10);
           // temp=b + a1*a1*a1;
            a1=a1+Math.pow(b,check);
        }   
    if(a1==num1)
        {
         
      return  resolve(num1+ " is an Armstrong No.");
        }
    else
        {
            return  resolve(num1+ " is Not Armstrong No.");
        }
})
}
armstrng(2233).then(success,failure);
function success(msg2)
{
console.log(msg2);    
}
function failure(msg3)
{
console.log(msg3);    
}
