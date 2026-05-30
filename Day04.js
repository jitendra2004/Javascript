// operator
// 1.Increment and decrement
let sum=10;
console.log(sum++);
console.log(sum--);
console.log(--sum);
console.log(++sum);

// 2.Assignment operator
let num=10;
console.log(num+10);
console.log(num-10);
console.log(num*10);
console.log(num/10);
console.log(num%10);


// 3.Comparison operator
let num1=10;
let num2="10";
console.log(num1==num2);
console.log(num1===num2);

// 4.Relation opertor
let n1=10;
let n2=20;
console.log(n1<n2);
console.log(n1>n2);
console.log(n1<=n2);
console.log(n1>=n2);

// Null and Undefined comparsion
console.log(null==undefined);
console.log(null===undefined);
console.log(null>=undefined);
console.log(null<=undefined);
console.log(null>undefined);
console.log(null<undefined);

// not a number comparsion
console.log(null===NaN);
console.log(null==NaN);
console.log(NaN===undefined);
console.log(NaN==undefined);
console.log(NaN===NaN);
console.log(NaN===NaN);
console.log(NaN<=NaN);
console.log(NaN>=NaN);
console.log(NaN>NaN);
console.log(NaN<NaN);

// Chained comaprsion 
let a=10;
let b=20;
let c=30;
console.log(a==b==c);
console.log((a==c)==b);

// logical operator
console.log(a>b&&a>c);
console.log(a<b||a<c);
console.log(!(a<b||a<c));

// Bitwise operator
console.log(a&b);
console.log(a|b);
console.log(a^b);
console.log(a<<b);
console.log(a>>b);