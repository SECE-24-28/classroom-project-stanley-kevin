import { axios } from 'axios'
import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Slist, setSlist] = useState([])

  useEffect(() => {
    const fetData = async () => {
      try {
        const res = await axios.get(BASE_URL)
        setSlist(res.data)
      } catch (error) {
       // console.log(error)
      }
    }
    fetData()
  }, [])

  return (
    <>
      {Slist.map((stu) => (
        <div key={stu.id}>
          <p>{stu.id}</p>
          <p>{stu.name}</p>
          <p>{stu.email}</p>
          <p>{stu.phone}</p>
          <p>{stu.address}</p>
          <p>{stu.department}</p>
          <hr />
        </div>
      ))}
    </>
  )
}

export default App
