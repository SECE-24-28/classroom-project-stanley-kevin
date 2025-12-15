import { useEffect, useState } from 'react'
import './App.css'
import { addCourses, getCourses } from './api/Coursesapi'

function App() {
  const [courses, setCourses] = useState([])
  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState("")

  const fetchCourse = async () => {
    const res = await getCourses()
    setCourses(res.data)
  }

  useEffect(() => {
    fetchCourse()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addCourses({ title, duration })
    fetchCourse()
    setTitle('')
    setDuration('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button type="submit">Add Course</button>
      </form>

      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {course.title} - {course.duration}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
