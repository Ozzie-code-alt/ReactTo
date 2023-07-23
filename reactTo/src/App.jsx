import './App.css'
import Button from "./components/Button"
import Employee from './components/Employee'
import Header from "./components/Simpleheader"

function App() {
// imagine a fetched obj from an API

const employeesInfo = [
  {
      firstName: "Justin",
      lastname:"Santos"
  },
  {
    firstName: "Sheina",
    lastname:"Pyke"
},
{
  firstName: "Peter",
  lastname:"Miguel"
},
{
  firstName: "John",
  lastname:"Blake"
},
]



  return (
    <>
    <div className="container">
    <Header/>
    <Button/>
      {/*Mapped the Object*/}
    {employeesInfo.map((employee)=>{
      return(
        <Employee {...employee} />
      )
    })}

    {/* <Employee firstName ="Justin" lastname = "Peter"/>
    <Employee firstName ="Sheina" lastname = "Pyke"/>
    <Employee firstName ="Peter" lastname = "Miguel"/>
    <Employee firstName ="John" lastname = "Blake"/> */}
    </div>
    </>
  )
}

export default App
