
import './index.css';
import { useState, useEffect} from "react";
import LoginForm from './Components/LoginForm';

function App() {
   const url = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState([]);

    const  fetchInfo = () =>{

        return fetch(url)
                .then((response) => response.json())
            

                .then((data) => setData(data))
            }

            useEffect(() => {
              fetchInfo();
            }, [] ); 
      
   return (
    <div className="App">
       <center><h1 style={{ color: '#fff'}} >DummyJSON API to display List of names</h1></center>
        <center>
          {data.map((data, index) => {
            return (
              <div style={{width: "18em", backgroundColor:"purple",padding: 2,borderRadius: 10 , marginBlock: 10}}>
                 <p style={{fontSize: 20, color: "white"}}>
                   {data.name} {data.id} {data.email}</p>
              </div>
            );
          })}
        </center>
       <hr style={{background: 'white'}}/>
        <center><h2 style={{color: 'white'}}>Login Form</h2></center> 
     < LoginForm />
    
</div>
  );
}

export default App;
