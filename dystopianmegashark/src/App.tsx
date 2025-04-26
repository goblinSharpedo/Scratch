import {FormEvent} from 'react'

import './App.css'

function App() {
//make post request
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
    await fetch(import.meta.env.VITE_SERVER_EMPLOYEE_CREATOR, {
      method:'POST',
      headers:{"Content-Type": "application/json",
      body: JSON.stringify(formObject)
      }
    })
  }

  return (
    <>
    < img src='white_st_helmet.png'id='st-helmet'/>
    <h1>Not-a-Dystopian-Society-Social-Credit-Score-App</h1>
    <h2>(because if Amazon can do it, so can we)</h2>
    <form onSubmit={handleSubmit} className='createForm'>
      <input type='text' placeholder='First Name' name = 'firstName'></input>
      <input type='text' placeholder='Last Name' name = 'lastName'></input>
      <input type='text' placeholder='Age' name = 'age'></input>
      <input type='text' placeholder='Role' name = 'role'></input>
      <button type='submit'>Submit Citizen for Processing</button>
    </form>
    </>
  )
}

export default App
