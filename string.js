let name="ajay pm";
console.log(name.length);

let address="KOCHI";
/*console.log(name.touppercase());*/
console.log(address.toLowerCase());

//slice()  starting index,ending index

let str="try hard fail better";

console.log(str.slice(0,3));
console.log(str.slice(4,8));
console.log(str.slice(9));

//substring() starting  index, ending index

let str1="mind,power,soul";
console.log(str1.substring(6,11));

//substr() starting index , character count 

console.log(str1.substr(6,5));


//replace()

let newstr=str1.replace("power","space")
console.log(newstr);

//replaceall()


let part="mind power power power soul";
let newpart=part.replaceAll("power","space");
console.log(newpart);
console.log(part.replace("power","space"));


//indexof()


let message="hello world";
console.log(message.indexOf("e"));

//charat()


console.log(message.charAt(4));


//trim(),trimstart(),trimend()

let mes="         hello    ";
console.log(mes.length);

let newmes=mes.trim();
console.log(newmes.length);

let newmes1=mes.trimStart();
console.log(newmes1.length);


let newmes2=mes.trimEnd();
console.log(newmes2.length);


//concat()


let string1="helooo";
let string2=" world";

let newstring=string1.concat(string2);
console.log(newstring);

//split()

console.log(message.split(" "));
console.log(message.split(''));
console.log(message.split(","));

//s























//number methods


//tostring

//let num=123;
console.log(typeof num);
//let str=num .toString();
console.log(typeof str);

//tofixed

let pi=3.14159;
let newpi=pi.toFixed(2);
console.log(newpi);

let num1=5.6584;
let newnum1=num1.toFixed(2);
console.log(newnum1);


//toprecision


console.log(pi.toPrecision(4));
console.log(num1.toPrecision(2));

//toexponential

console.log(123.456.toExponential(2));

//valueof

/*let num2=new Number(123);
console.log(typeof num2);
let num3=num2.valueof()
console.log(typeof num3);*/

//isfinite

console.log(Number.isFinite(123));
console.log(Number.isFinite(Infinity));

//isinteger

console.log(Number.isInteger(123.456));
console.log(Number.isInteger(48));

//isNaN
console.log(Number.isNaN(123));
console.log(Number.isNaN(NaN));

console.log("hello"/2);
console.log(0/0);

//parseint

let num4=Number.parseInt("123");
console.log(typeof num4);


//parsefloat


let num5=Number.parseFloat("123.456");
console.log(num5);
console.log(Number.parseInt("123.456"));
console.log(typeof num5);




//arithematic operators

let a=20,b=5;
console.log("sum:",a+b);
console.log("difference:",a-b);
console.log("product:",a*b);
console.log("quotient:",a/b);
console.log("remainder:",a%b);


//a=a+1,++

console.log(a++);
console.log(a);
console.log(++a);

//a=a-1,a--

console.log(b--);
console.log(b);
console.log(--b);


//2.assignment operators
//=,+=,-=,*=,/=,%=


let x=25;
console.log(x+=10); //x=x+10
console.log(x-=10); //x=x-10
console.log(x*=10); //x=x*10
console.log(x/=10); //x=x/10
console.log(x%=10); //x=x%10


//3.comparison operators


let e= 40
let f= 20

console.log(e==f);
console.log(e===f);
console.log(e>f);
console.log(e>=f);
console.log(e<=f);
console.log(e<f);
console.log(e!=f);
console.log(e!==f);


//4.logical operators

let g=10
let h=20

console.log(g==10 && h==20);
console.log(g==10 || h==20);
console.log(!(g==20));

