import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [studentDetails, setStudentDetails] = useState({
    name: 'K. AMUDHAN',
    rollNumber: '22027',
    course: 'CSE Core',
    year: '2nd',
  });

  const handleLogin = () => {
    if (userId === 'Amudhan' && password === 'ams') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid user ID or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId('');
    setPassword('');
  };

  return (
    <div className="App">
      <header>
        <h1>Amrita University</h1>
      </header>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {studentDetails.name}</h2>
          <p>Roll Number: {studentDetails.rollNumber}</p>
          <p>Course: {studentDetails.course}</p>
          <p>Year: {studentDetails.year}</p>
          <table>
  <thead>
    <tr>
      <th> S.No </th>
      <th> Courses </th>
      <th> code </th>
    </tr>
  </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>DBMS</td>
        <td>CSE-201</td>
      </tr>
      <tr>
        <td>2</td>
        <td>JAVA Programing</td>
        <td>CSE-203</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Computer Origanisation and Architecture</td>
        <td>CSE-211</td>
      </tr>
      <tr>
        <td>4</td>
        <td> Data Stuctures and Alogorithm</td>
        <td>CSE-212</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Operating System</td>
        <td>CSE-213</td>
      </tr>
    </tbody>
  </table>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    )}
  </div>
  );
}

export default App;
