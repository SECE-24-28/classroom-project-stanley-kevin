// function demo() {
//     console.log("This is a demo function for day 5.");
// }
// demo()
// let samp=()=> {
//     console.log("Arrow function ");
//     return "India";
// }
// samp()
// let press=(a,b)=> a+b;
// console.log(press(11,22));

// let arr=[10,20,30]
// let [a,b,c]=arr;
// console.log(a,);
// console.log(b);
// console.log(c);

// let stu={na:"kevin",ag:23,br:"cse"}
// let {na:name,ag:age,br:branch}=stu;
// console.log(name);
// console.log(age);
// console.log(branch);

// console.log("one");
// setTimeout(() => {
//     console.log("two");
//     setTimeout(() => {
//         console.log("four");
//     }, 2000);
// }, 2000);
// console.log("three");

// let rs=fetch("https://jsonplaceholder.typicode.com/posts")                //promise function it has 3 state "fetch"
//                                 .then(data=> 
//                                     {
//                                         return data.json();
//                                     } 
//                                 ).then(rs=> 
//                                     {
//                                         console.log(rs);
//                                     });
// console.log(rs.json)

// let fetch_API=async()=>
// {
// const res=await fetch("https://jsonplaceholder.typicode.com/posts");
// const data=await res.json();
// console.log(data);
// }
// fetch_API();

   
// let employee=[{
//     ena:"arun",mob:111},
//     {ena:"balu",mob:222},
//     {ena:"cinu",mob:333}
// ]
// let newEmp=employee.filter(emp=>
// {
// return emp.ena.includes("A")
// })
// console.log(newEmp)