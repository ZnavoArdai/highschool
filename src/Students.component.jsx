import { Component } from "react";
import Student from "./Student.conponent";

const student1=<Student fname="haim" lname="cohen" birthday="31/12/1993" url="logo192.png"/>
const student2=<Student fname="or" lname="gedamo" birthday="31/12/1993" url="logo192.png"/>
const student3=<Student fname="sol" lname="avrahm" birthday="31/12/1993" url="logo192.png"/>
const student4=<Student fname="nati" lname="yaso" birthday="31/12/1993" url="logo192.png"/>
const student5=<Student fname="yon" lname="itzhak" birthday="31/12/1993" url="logo192.png"/>

const studentsArray=[student1,student2,student3,student4,student5]

class Students extends Component{

    render(){

        return(
            <>
            {studentsArray.map(stud=>

            stud
            )}
            
            </>
        )
    }
}

export default Students;