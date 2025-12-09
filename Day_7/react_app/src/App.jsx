// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './Header';
// import { Body } from './Body';
// import { Footer } from './footer';

// function App() 
// {
//       const [list,setList] =useState([
//         {id:1,sname:"Vinoth",fee:true},
//         {id:2,sname:"Shiva",fee:false},
//         {id:3,sname:"Harish",fee:true}
//       ]);

//       const handleDelete=(id)=>
//       {
//       const newList=list.filter((ls)=>ls.id!=id)
//       setList(newList)
//       }
//       const handleCheck=(id)=>
//       {
//          const newList=list.map((ls)=>(ls.id===id)?({...ls,fee:!ls.fee}):(ls))
//          setList(newList)
//       }
//   return (
//     <>
//         <Header title={"Student List"}/>
//         <Body list={list}
//               handleCheck={handleCheck}
//               handleDelete={handleDelete}
//         />
//            <Footer len={list.length} />
//     </>
//   )
// }

// export default App

// import { useState } from 'react'
// import Header from './Header';
// import { Body } from './Body';
// import { Footer } from './footer';

// function App() {

//   const [list, setList] = useState([
//     { id: 1, sname: "Vinoth", fee: true },
//     { id: 2, sname: "Shiva", fee: false },
//     { id: 3, sname: "Harish", fee: true }
//   ]);

//   const [newName, setNewName] = useState("");
//   const [search, setSearch] = useState("");

//   // Delete
//   const handleDelete = (id) => {
//     const newList = list.filter((ls) => ls.id !== id);
//     setList(newList);
//   };

//   // Checkbox toggle
//   const handleCheck = (id) => {
//     const newList = list.map((ls) =>
//       ls.id === id ? { ...ls, fee: !ls.fee } : ls
//     );
//     setList(newList);
//   };

//   // Add student
//   const handleAdd = () => {
//     if (newName.trim() === "") return;

//     const newStudent = {
//       id: list.length + 1,
//       sname: newName,
//       fee: false
//     };

//     setList([...list, newStudent]);
//     setNewName("");
//   };

//   // Filter list for searching
//   const searchedList = list.filter((student) =>
//     student.sname.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <Header title={"Student List"} />

//       {/* Add Student */}
//       <div>
//         <input
//           type="text"
//           placeholder="Enter name"
//           value={newName}
//           onChange={(e) => setNewName(e.target.value)}
//         />

//         <button onClick={handleAdd}>Add</button>
//       </div>

//       {/* Search Student */}
//       <div>
//         <input
//           type="text"
//           placeholder="Search student"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Body Component */}
//       <Body
//         list={searchedList}
//         handleCheck={handleCheck}
//         handleDelete={handleDelete}
//       />

//       <Footer len={searchedList.length} />
//     </>
//   );
// }

// export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddStudent from './Addstudent'

function App() 
{
    const [stuList,setStuList]=useState([
      {id:1,sname:"Jack",fee:true},
      {id:2,sname:"Smith",fee:false},
      {id:3,sname:"Victor",fee:true}
    ])

    const handleDelete=(id)=>
    {
      const newList=stuList.filter((stu)=>stu.id!==id)
      setStuList(newList)
    }
    const handleChange=(id)=>
    {
      const newList=stuList.map((stu)=>(stu.id===id)?({...stu,fee:!stu.fee}):(stu))
      setStuList(newList)
    }
   const addItem=(item)=>
   {
    const sz=stuList.length-1;
     const nid=(stuList.length)?(stuList[sz].id+1):(1)
     const newObj={id:nid,sname:item,fee:false}
     const newList=[...stuList,newObj]
     setStuList(newList)
   }
   const handleSubmit=(e)=>
   {
    e.preventDefault()
    addItem(newstu)
    setNewStu('')
   }
    const [newstu,setNewStu]=useState('')
  return (
    <>
       <h1>Students List</h1>
       <AddStudent  newstu={newstu}
                    setNewStu={setNewStu}
                    handleSubmit={handleSubmit}
       />
       <ul>
       {
        stuList.map((stu)=>
          <li key={stu.id}>
            <input type="checkbox" checked={stu.fee}
                                    onChange={()=>handleChange(stu.id)}
            />
            <label>{stu.sname}</label>
            <button onClick={()=>handleDelete(stu.id)}>Delete</button>
          </li>
        )
       }
       </ul>
    </>
  )
}

export default App