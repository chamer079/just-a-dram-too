import { Routes, Route } from 'react-router'

import SignUpForm from './components/SignUpForm/SignUpForm'
import LogInForm from './components/LogInForm/LogInForm'
import Landing from './components/Landing/Landing'



const App = () => {

  return(
    <>
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/login' element={<LogInForm />} />
      </Routes>
    </>
  )
}

export default App

