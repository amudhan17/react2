import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState('login');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (userId === 'Amudhan' && password === 'ams') {
      setIsLoggedIn(true);
      setCurrentPage('courses');
    } else {
      alert('Invalid user ID or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId('');
    setPassword('');
    setCurrentPage('login');
  };

  const handleAddMessage = () => {
    if (newMessage.trim() === '') {
      setError('Message cannot be empty');
      return;
    }
    setError('');

    if (editingIndex !== null) {
      const updatedMessages = messages.map((msg, index) =>
        index === editingIndex ? newMessage : msg
      );
      setMessages(updatedMessages);
      setEditingIndex(null);
    } else {
      setMessages([...messages, newMessage]);
    }
    setNewMessage('');
  };

  const handleEditMessage = (index) => {
    setNewMessage(messages[index]);
    setEditingIndex(index);
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = messages.filter((_, msgIndex) => msgIndex !== index);
    setMessages(updatedMessages);
  };

  return (
    <div className="App">
      <header>
        <h1>Amrita University</h1>
      </header>
      {isLoggedIn ? (
        <>
          {currentPage === 'courses' && (
            <div>
              <h2>Welcome, K. AMUDHAN</h2>
              <p>Roll Number: 22027</p>
              <p>Course: CSE Core</p>
              <p>Year: 2</p>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Courses</th>
                    <th>Code</th>
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
                    <td>JAVA Programming</td>
                    <td>CSE-203</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Computer Organization and Architecture</td>
                    <td>CSE-211</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Data Structures and Algorithms</td>
                    <td>CSE-212</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Operating System</td>
                    <td>CSE-213</td>
                  </tr>
                </tbody>
              </table>
              <button onClick={() => setCurrentPage('reminders')}>Next</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
          {currentPage === 'reminders' && (
            <div>
              <h2>Reminders</h2>
              <input
                type="text"
                placeholder="Enter your message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <br />
              <button onClick={handleAddMessage}>
                {editingIndex !== null ? 'Update' : 'Submit'}
              </button>
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Message</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((message, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{message}</td>
                      <td>
                        <button onClick={() => handleEditMessage(index)}>Edit</button>
                        <button onClick={() => handleDeleteMessage(index)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={() => setCurrentPage('courses')}>Back</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </>
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
