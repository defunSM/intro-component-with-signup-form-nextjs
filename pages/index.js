import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Signup.module.css'
import { useState } from 'react'

import { validateEmail, validatePassword, validateFirstName, validateLastName } from '../logic/validation'

// Error text that appears under input if the field is not valid
function ErrorText(props) {
  return (<>
    <div className={props.form.validate[props.id] ? "hidden" : "visible" + " text-right mr-5 " + styles.redcolor}>{props.text}</div>
  </>)
}

export default function Home() {

  const [ form, setForm ] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    validate: [true, true, true, true],
  })

  // client side validation on input change
  function handleFormChange(e) {
    const field = e.target.id
    const newInputValue = e.target.value
    const formValidation = form.validate

    switch(field) {
      case 'firstname':
        formValidation[0] = validateFirstName(newInputValue);
        setForm({...form, firstname: newInputValue, validate: formValidation })
        break;
      case 'lastname':
        formValidation[1] = validateLastName(newInputValue);
        setForm({...form, lastname: newInputValue, validate: formValidation })
        break;
      case 'email':
        formValidation[2] = validateEmail(newInputValue);
        setForm({...form, email: newInputValue, validate: formValidation })
        break;
      case 'password':
        formValidation[3] = validatePassword(newInputValue);
        setForm({...form, password: newInputValue, validate: formValidation })
        break;
    }
  }

  // client side validation on submission
  function validateFormOnSubmittion() {

    const validPass = validatePassword(form.password)
    const validFirstname = validateFirstName(form.firstname)
    const validLastName = validateLastName(form.lastname)
    const validEmail = validateEmail(form.email)

    setForm({...form, validate: [validFirstname, validLastName, validEmail, validPass]})

  }

  const warningImage = "bg-[url('/warning.svg')] warning-color"

  return ( <>
      <Head>
        <title>Sign up form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

 <main className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.header}>Learn to code by watching others</h1>
        <p className={styles.description}>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.
        </p>
      </div>

    <div className={styles.right}>
      <div className={styles.pricing}><span id={styles.boldstyle}>Try it free 7 days</span> then $20/mo. thereafter</div>
      <form action={console.log("submit")} className={styles.signupform}>

          <input id="firstname" className={form.validate[0] ? "" : warningImage} onChange={(e) => handleFormChange(e)} placeholder="First Name" type="text" value={form.firstname} required></input>
          <ErrorText form={form} id={0} text="first name can not be empty"></ErrorText>

          <input className={form.validate[1] ? "" : warningImage} id="lastname" onChange={(e) => handleFormChange(e)} placeholder="Last Name" type="text" required />
          <ErrorText form={form} id={1} text="last name can not be empty"></ErrorText>

          <input className={form.validate[2] ? "" : warningImage} id="email" onChange={(e) => handleFormChange(e)} placeholder="Email Address" type="email" required />
          <ErrorText form={form} id={2} text="looks like this is not an email"></ErrorText>

          <input className={form.validate[3] ? "" : warningImage} id="password" onChange={(e) => handleFormChange(e)} placeholder="Password" type="password" minLength="8" required />
          <ErrorText form={form} id={3} text="password can not be empty"></ErrorText>

          <button className={styles.submit} type="submit" value="Submit" onClick={() => validateFormOnSubmittion()}>CLAIM YOUR FREE TRIAL</button>
          <p className={styles.terms}>By clicking the button, you are agreeing to our <span id={styles.redcolor}>Terms and Services</span></p>

      </form>
    </div>
  </main>
    </>
  )
}
