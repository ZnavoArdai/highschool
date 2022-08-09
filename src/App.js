import logo from './logo.svg';
import './App.css';
import Home from './Home.component';
import Student from './Student.conponent';
import Students from './Students.component';

function App() {
  return (
   <>
   <Home name="znavo"/>
   <Student fname="znavo" lname="ardai" birthday="31/12/1993" url="logo192.png"/>
   <Students/>
   </>
  );
}

export default App;
