//import logo from './logo.svg';
import './App.css';

function App() {

  let employeeDetails = [
    {
      empId: 1,
      firstName: "Madduru",
      lastName: "kumar",

    },
    {
      empId: 2,
      firstName: "Ram",
      lastName: "babu",


    }, {
      empId: 3,
      firstName: "pinna",
      lastName: "sai",
    }


  ]
  return (
    <div className="App">
      <center>
      
      <table>
        <tr>
          <th>emp id</th>
          <th>first name</th>
          <th>last name</th>
        </tr>
        {employeeDetails.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.empId}</td>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
            </tr>
          )
        })}
      </table>
       

     
      </center>
    </div>
  );
}

export default App;
