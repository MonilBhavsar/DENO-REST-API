import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getStudents, getStudent, addStudent, updateStudent, deleteStudent } from './controller.ts'

const router = new Router()
router.get('/students', getStudents)
      .get('/students/:roll_no', getStudent)
      .post('/students', addStudent)
      .put('/students/:roll_no', updateStudent)
      .delete('/students/:roll_no', deleteStudent)

export default router

