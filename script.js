// window.alert(`Hey!! How's going your learning?`)
// console.log(`Hello World`);


// document.getElementById("myh1").textContent= `Hello Gyzs`;
// document.getElementById("myp").textContent = `New to JS!!!!!`;
//  --------

// variable=container that store CSSMathValue.behaves as it were value it contain.
// let age = 19;
// let gpa = 3.5;
// let name = "anjisha";
// let boolean="true";

// console.log(`the age is ${age}yrs old.`);
// console.log(`the gpa is ${gpa}.`);
// console.log(`the name is ${name}`);
// console.log(`the name is ${boolean}`);


// ---Arithmetic----
// let x=23;

// x=x+1;   //addition
// x=x-1;   //sub
// x=x*2;  //mul
// x=x/2;   //div
// x= x**2;      //exponent
// x=x%10;        //modulus 
// console.log(x);

// ---var=can be redeclared and updated
// let can be updated but not redeclared
// const can neither be redeclared nor updated

// let b="harry";
// const author="harry";
// author=4;
// console.log(b);


// -----Premetive data type---


// let a=null;
// let b=null;
// let c= 356;
// let d= BigInt("356");
// let e= "Harry";
// let f= Symbol("I am symbol");
// let g= undefined;
// console.log(a ,b,c,d,e,f,g);
// console.log(typeof d);

// const item ={
//     "Hari" : true,
//     "Shyam" : false,
//     "sita" : null,
//     "deepa": 98
// }
// console.log(item["Hari"]);

/// --OPERATOR AND EXPRESSION---
// let a=10;
// let b=3;
// console.log("a+b = ", a+b)
// console.log("a-b = ", a-b)
// console.log("a*b = ", a*b)
// console.log("a**b = ", a**b)
// console.log("++a = ", ++a)

// let a=prompt("Whatssss your age?");
// // alert(`Nothing brooo`);
// a=Number.parseInt(a);
// // console.log(typeof a);
// if(a>=18){
//     alert("you can vote");
// }else if(a<=18){
//     alert("you cannot vote");
// }
// console.log("Done");

    //  ---FUNCTION---
    const hello = ()=>{
        console.log("Hello World");
        console.log("hi");
    }
function oneplusavg(x,y){
    console.log("done");
    return 1+ (x+y)/2;
}

const sum= (p,q)=>{   ///NEW WAY TO WRITE FUNCTION
    return p+q;
}
    let a=3;
    let b=9;
    let c=8;
    let d;

    let v= hello();
    console.log("one + avg of a and b is ", oneplusavg(a,b))
    console.log("one + avg of b and c is ", oneplusavg(b,c))
    console.log("one + avg of c and d is ", oneplusavg(c,d))
    console.log(sum(8,2));