# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![sign-up-form](https://i.imgur.com/76E7HOH.png)
![sign-up-form-mobile](https://i.imgur.com/HxVDtEJ.png)

### Links

- Solution URL: [Frontendmentor](https://www.frontendmentor.io/solutions/intro-component-with-signup-form-with-nextjs-TB1pKnkqeE)
- Live Site URL: [Sign Up Form](https://superb-clafoutis-7df789.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwindcss](https://tailwindcss.com/) - Tailwind CSS framework

### What I learned

- Different attributes for inputs.
- How to validate forms.
- Make mobile responsive form using media queries.
- Tailwindcss to style components.

Some code snippets:

```html
<div className={styles.pricing}><span id={styles.boldstyle}>Try it free 7 days</span> then $20/mo. thereafter</div>
```
```jsx
  function validateFormOnSubmittion() {

    const validPass = validatePassword(form.password)
    const validFirstname = validateFirstName(form.firstname)
    const validLastName = validateLastName(form.lastname)
    const validEmail = validateEmail(form.email)

    setForm({...form, validate: [validFirstname, validLastName, validEmail, validPass]})

  }
```
```jsx
function ErrorText(props) {
  return (<>
    <div className={props.form.validate[props.id] ? "hidden" : "visible" + " text-right mr-5 " + styles.redcolor}>{props.text}</div>
  </>)
}
```



### Continued development

Right now the site has client side validation but that often isn't enough to protect against malicious inputs into the form. Future development can include implementing server side validation using serverless functions.

### Useful resources

- [MDN Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) - This helped me understand forms.

## Author

- Website - [Salman Hossain](https://defunsm.com)
- Frontend Mentor - [@defunSM](https://www.frontendmentor.io/profile/defunSM)


