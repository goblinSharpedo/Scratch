import  {FormEvent} from 'react'

import styles from './report.module.css'

function Report() {
//make post request
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
    await fetch(import.meta.env.VITE_SERVER_EMPLOYEE_CREATOR, { //TODO: where should this fetch point to now?
      method:'POST',
      headers:{"Content-Type": "application/json",
      body: JSON.stringify(formObject)
      }
    })
  }

  return (
    <>
    <div className={styles.createForm}>
    <form onSubmit={handleSubmit} className='createForm'>
      <input type='text' placeholder='First Name' name = 'firstName'/>
      <input type='text' placeholder='Last Name' name = 'lastName'/>
      <input type='text' placeholder='Role' name = 'role'/>
      <button type='submit'>Submit Colleague for Processing</button>
    </form>
    </div>
    </>
  )
}

export default Report;