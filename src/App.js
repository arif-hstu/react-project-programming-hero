import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const nayoks = ['alomgir', 'salman', 'alomgir', 'amir'];
const nayok = nayoks.map(nayok => nayok);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>amar sonar bangla</p>
        <Counter></Counter>
        <User></User>

      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    count <= 0 ? setCount(count): setCount(count-1);
  }

  return (
    <div>
      <h2>Amader Counter:{count}</h2>
      <button onMouseMove={() => setCount(count+1)}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);

  return (
  <div>
    <h2>User Numebr: {users.length}</h2>
    {/* <button onClick={()=>setUsers(users.pop())}>Decrease</button> */}
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
  </div>
  )
}


export default App;
