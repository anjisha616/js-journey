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
//     const hello = ()=>{
//         console.log("Hello World");
//         console.log("hi");
//     }
// function oneplusavg(x,y){
//     console.log("done");
//     return 1+ (x+y)/2;
// }

// const sum= (p,q)=>{   ///NEW WAY TO WRITE FUNCTION
//     return p+q;
// }
//     let a=3;
//     let b=9;
//     let c=8;
//     let d;

//     let v= hello();
//     console.log("one + avg of a and b is ", oneplusavg(a,b))
//     console.log("one + avg of b and c is ", oneplusavg(b,c))
//     console.log("one + avg of c and d is ", oneplusavg(c,d))
//     console.log(sum(8,2));


////-----FOR LOOP---- 

// let sum =0;
// let n=parseInt(prompt("Enter the number"));
// for(var i=0;i<=n;i++){ //let = scope inside loop only 
// sum = sum+i;
// }
// console.log("sum " +  n + " natural num is " + sum);
// console.log(i);  
// let name="anji";
// console.log(name.length)      //This is propertu
// console.log(name.toUpperCase())   //This id method
// console.log(name.slice(2,3))
// console.log(name.replace("anji","Onj"))

// let friend = "Esa"
// console.log(name.concat("is a friend of"), friend)    ///USED TO JOIN TWo STRINGS

// let friend2 = "    Mina   "
// console.log(friend2.trim()) ///remove extra space

// let fr= "Mina";
// console.log(fr);
// console.log(fr[0]);

// ****PRACTICE*****
              //PROB1///
// let string= "hello world";
// console.log(string.toUpperCase())

              ///PROB2///
// let amount = "Please give RS 1000";
// console.log(amount.slice(15,19))

               ///prob3///
    //    let friend= "Rahul";
    //    friend[3]= "o";
    //    console.log(friend);    ///HERE FRIEND IS NOT CHANGED CIZ STRING IS IMMUTABLE



      ///-----ARRAY_METHODSS----///

//       let marks = [21,88,11,22,111];
// //       console.log(marks);
// //       let b= marks.toString();
// //       console.log(b, typeof b)
// //       let c= marks.join(" and ");
// //       console.log(c,typeof c)


// // let d= marks.pop();  //pop out last element
// // console.log(marks,d)
// // let e= marks.push(00); //add element att last
// // console.log(marks,e);

// let f= marks.shift();   //rmove first element and return it
// console.log(marks,f);

// let g= marks.unshift(13); ///add element in first
// console.log(marks,g);
// let num=[1,2,3,4,5,6,7];
// // delete num[0];     ///delete element withoout changing og length
// // console.log(num);

// let num2 = [23,11,34,32,13,76];
// let new_arry = num.concat(num2)    ///add 2 arrays
// console.log(new_arry)
    
                //SORT METHOD///
    // let num=[33,211,300,2,3,90,34,56]   ///arrang in alphabetic order
    // console.log(num.sort())

    // let compare = (a,b)=>{
    //   return a-b;
    // }
    // let num =[2,12,33,1,800,200];
    // num.sort(compare);    //arange data in acending order
    // num.reverse()      //reverase compare vako array
    // console.log(num); 

    ///SPLICE AND SLICE METHOD

  //   let arry= [2,99,33,21,34,433,245]
  // // arry.splice(3,2,2000,3111);    ///remove 2 ekement from index 3 and added 2000 and 3111
  // // console.log(arry)

  // let new_arry=arry.slice(2,5); //inclue index of 2but not index of 5 
  // console.log(new_arry)

        ///------LOOP IN ARRAY------///
 let num =[3,2,45,78,65,66]

// for(let i=0;i<num.length;i++){
//   console.log(num[i]);
// }

// num.forEach(element => {
//   console.log(element* element)     ///sqre of each loop
// });


    // **FROM LOOP**
// let name= "Anji";
// let arr= Array.from(name);
// console.log(arr)

// for(let i of num){
//   console.log(i);
// }

   //***MAP */
// let array= [2,1,33,21,33,21]
//  let new_arry = array.map((value) => {
//   console.log(value+1);
//   return value;
//  })
//  console.log(new_arry) 

 //**FILTER**//
//  let a1= [3,1,12,33,994,48,233]
//  let a2= a1.filter((a) =>{
// return a>10;     ///filteers value greater than
//  })
//  console.log(a2);
 
   ///**REDUCE ***//
   let a=[2,4,22,11,31,8]
   let a1 = a.reduce((h1,h2) => {
    return h1+h2
   })
console.log(a1);