import { Routes, Route } from 'react-router'

import SignUpForm from './components/SignUpForm/SignUpForm'


const App = () => {

  return(
    <>
      
      <Routes>
        <Route path='/auth/sign-up' element={<SignUpForm />} />
      </Routes>
    </>
  )
}

export default App

