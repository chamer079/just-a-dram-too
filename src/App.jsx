import { useContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'

import * as whiskyService from './services/whiskyService'
import SignUpForm from './components/SignUpForm/SignUpForm'
import LogInForm from './components/LogInForm/LogInForm'
import Landing from './components/Landing/Landing'
import Index from './components/Index/Index'

import { UserContext } from './contexts/UserContext'


const App = () => {
  const { user } = useContext(UserContext)
  
  const [whiskies, setWhiskies] = useState([])

  useEffect(() => {
    const fetchAllWhiskies = async () => {
      const whiskyData = await whiskyService.index()
      console.log("whiskyData:", whiskyData)  //<-DELETE WHEN CLEANING CODE
      setWhiskies(whiskyData)
    }

    if(user) fetchAllWhiskies()
  }, [user])

  return(
    <>
      
      <Routes>
        <Route path='/' element={<Landing />} />
        { user ? (
          <>
            {/* Protected Routes Here */}
            <Route path='/whiskies' element={<Index whiskies={whiskies} />} />
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

