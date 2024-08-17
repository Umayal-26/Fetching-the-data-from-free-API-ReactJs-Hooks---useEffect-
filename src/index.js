// import React from 'react';
import ReactDOM from 'react-dom';
import React,{useState,useEffect} from 'react';
//import './index.css';
// import App from './App';
//import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//   </React.StrictMode>
// );
// reportWebVitals();
// import React,{useState,useEffect} from 'react';
// import ReactDOM from 'react-dom';
function Userdemo(){
  const[users,setUsers]=useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data=>{
        setUsers(data);
        setLoading(false);
      })
      .catch(error=>{
        console.error("If it is not loading, will be an error message")
        setLoading(false);
      })
  },[])
  if(loading){
    return<p>Loading...</p>;
  }
  return(
    <div>
      <h1>List out the users in API</h1>
      <ul>
        {users.map(users=>(
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>
    </div>
  );
}
ReactDOM.render(<Userdemo/>,document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

