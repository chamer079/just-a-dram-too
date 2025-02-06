import { useContext } from 'react'
import { Routes, Route } from 'react-router'

import SignUpForm from './components/SignUpForm/SignUpForm'
import LogInForm from './components/LogInForm/LogInForm'
import Landing from './components/Landing/Landing'
import Index from './components/Index/Index'

import { UserContext } from './contexts/UserContext'


const App = () => {
  const { user } = useContext(UserContext)

  return(
    <>
      
      <Routes>
        <Route path='/' element={<Landing />} />
        { user ? (
          <>
            {/* Protected Routes Here */}
            <Route path='/whiskies' element={<Index />} />
          </>
        ) : (
          <>
           
           <Route path='/sign-up' element={<SignUpForm />} />
           <Route path='/login' element={<LogInForm />} />
          </>
        )}
      </Routes>
    </>
  )
}

export default App

