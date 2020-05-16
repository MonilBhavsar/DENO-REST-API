interface IStudent {
  roll_no: string;
  name: string;
  grade: string;
}

let students: Array<IStudent> = [{
  roll_no: "1",
  name: "John",
  grade: "A",
},{
  roll_no: "2",
  name: "Doe",
  grade: "B",
},{
  roll_no: "3",
  name: "Nick",
  grade: "B",
}]

const getStudents = ({ response }: { response: any }) => { 
  response.body = students 
}

const getStudent = ({ params, response }: { params: { roll_no : string }; response: any }) => {
  const student: IStudent | undefined = searchStudentByRoll(params.roll_no)
  if (student) {
    response.status = 200
    response.body = student
  } else {
    response.status = 404
    response.body = { message: "Student Not Found" }
  }   
}

const addStudent = async ({ request, response }: { request: any; response: any }) => {
  const body = await request.body()
  const student: IStudent = body.value  
  students.push(student)
  response.body = { message: 'Student Added Successfully' }
  response.status = 200
}


const updateStudent = async ({ params, request, response }: { params: { roll_no: string }; request: any; response: any }) => {
  let student: IStudent | undefined = searchStudentByRoll(params.roll_no)
  if (student) {
    const body = await request.body()
    const updateInfos: { name?: string; grade?: string } = body.value
    student = { ...student, ...updateInfos}
    students = [...students.filter(student => student.roll_no !== params.roll_no), student]
    response.status = 200
    response.body = { message: "Student details Updated Successfully!" }
  } else {
    response.status = 404
    response.body = { message: "Student Not found" }
  }  
}

const deleteStudent = ({ params, response }: { params: { roll_no: string }; response: any }) => {
  students = students.filter(student => student.roll_no !== params.roll_no)
  response.body = { message: "Student deleted successfully" }
  response.status = 200
}

/* return the book if found and undefined if not */
const searchStudentByRoll = (roll_no: string):( IStudent | undefined ) => students.filter(student => student.roll_no === roll_no)[0]

export { getStudents, getStudent, addStudent, updateStudent, deleteStudent }