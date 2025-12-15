import axios from 'axios'
const  api=axios.create ({
    baseURL:'http://localhost:8080/api'
}   )
export const getCourses=()=>api.get('/courses')
export const addCourses=(course)=>api.post('/courses',course)
export const deleteCourse=(id)=>api.delete('/courses/'+id)
export const updateCourse=(id,course)=>api.put('/courses/'+id,course)

