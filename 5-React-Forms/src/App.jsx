import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: ""
  })

  function handleOnChange(event) {
    setFormData(((prev) => {
      prev[event.target.name] = event.target.value;
      return { ...prev };
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Name :</label>
        <input type="text"
          id="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleOnChange}
          name="fullName"
        />
        <br></br>
        <label htmlFor="userName">Username :</label>
        <input type="text"
          id="userName"
          name="userName"
          placeholder="Enter your username"
          value={formData.userName}
          onChange={handleOnChange}
        />
        <br></br>
        <label htmlFor="password">Password :</label>
        <input type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleOnChange}
        />
        <br></br>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
