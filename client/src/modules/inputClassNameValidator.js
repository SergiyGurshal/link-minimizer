export default function onChange(e, type, setValidated) {
  const valueOfInput = e.target.value
  let nameForm
  switch (type) {
    case 'email':
      nameForm = /...+@..+\...+/
      break
    case 'password':
      nameForm = /(?=.*[a-z])(?=.*[A-Z])......../
      break
    default:
      nameForm = /.*/
  }

  if (nameForm.test(valueOfInput)) {
    e.target.className = 'auth-page_input right'
    setValidated(true)
  } else {
    e.target.className = 'auth-page_input wrong'
    setValidated(false)
  }
}
