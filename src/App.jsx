import { Routes, Route } from 'react-router'

import SignUpForm from './components/SignUpForm/SignUpForm'
import LogInForm from './components/LogInForm/LogIn'


const App = () => {

  return(
    <>
      
      <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/login' element={<LogInForm />} />
      </Routes>
    </>
  )
}

export default App

