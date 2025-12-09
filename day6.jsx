// import { useState } from 'react'
// import './App.css'
// import Header from './Header'
// import Content from './Content'
// import Counter from './Counter'
// import Friends from './Friends'

// function App() {

//   const [bestStudent, setBestStudent] = useState("")

//   const demo = (name) => {
//     console.log("Hello " + name)
//   }

//   const press = () => {
//     const bs = ["sara", "peru", "msp"]
//     const num = Math.floor(Math.random() * bs.length)
//     setBestStudent(bs[num])
//   }

//   return (
//     <>
      
//       <button onClick={() => demo("smith")}>Click</button>
//       <p>Best student is: {bestStudent}</p>
//       <button onClick={press}>Student</button>
      
//       <Header />
//       <Content />
//       <Counter />
//       <Friends />
//       <Application />
//     </>
//   )
// }


// import React from 'react'
// import './Styles.css'
// const Content = () => {
//   return (
//     <>
//     <div className="bg">
//       <ol>
//         <li>CSE</li>
//         <li>IT</li>
//       </ol>
//     </div>
    
//     {/* <div>
//         <ul>
//             {frnds.map((frnd, index) => (
//                 <li key={index}>{frnd}</li>
//             ))}
//         </ul>
//     </div> */}
//     </>
    
//   )
// }


// import React from 'react'
// import { useState } from 'react';
// const Counter = () => {
//     const [count,setCount]=useState(0);
    
//     function press_add(){
//         setCount(count+1);
//     }

//     function press_sub(){
//         if(count>0){
//              setCount(count-1);
//         }
       
//     }
//     return (
//     <>
//     <h1 style={{color:"white"}}>{count}</h1>
//     <button onClick={press_add}>Add</button>
//     <button onClick={press_sub}>Sub</button>
//     </>
//   )
// }


// import React from 'react'

// const Friends = () => {
//    const bs = ["sara", "peru", "msp"];
//     return (
//       <div>
//         {bs.map((frnd, index) => (
//           <p key={index}>{frnd}</p>
//         ))}
//       </div>
//     )
// }


// import React from 'react'

// const Header = () => {
//     let des={backGroundColor:"black",color:"white"};
//     return (
//     <div>
      
//       <h1 style={des}>Tiger</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam voluptas, saepe explicabo nihil maiores, delectus quae iste ipsum ad facilis quibusdam corporis placeat, cupiditate odit perferendis possimus. Magnam, quod.</p>
//     </div>

//   )
// }



