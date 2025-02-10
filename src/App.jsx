import { useContext, useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router"

import * as whiskyService from "./services/whiskyService"
import SignUp from "./components/SignUp/SignUp"
import LogIn from "./components/LogIn/LogIn"
import Landing from "./components/Landing/Landing"
import Index from "./components/Index/Index"
import WhiskyDetails from "./components/WhiskyDetails/WhiskyDetails"
import WhiskyForm from "./components/WhiskyForm/WhiskyForm"

import { UserContext } from "./contexts/UserContext"

const App = () => {
  const { user } = useContext(UserContext)

  const [whiskies, setWhiskies] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllWhiskies = async () => {
      const whiskyData = await whiskyService.index()
      console.log("whiskyData:", whiskyData); //<-DELETE WHEN CLEANING CODE
      setWhiskies(whiskyData.whiskies)
    };

    if (user) fetchAllWhiskies()
  }, [user])

  const handleAddWhisky = async (whiskyFormData) => {
    console.log("whiskyFormData:", whiskyFormData)  //<- DELETE WHEN CLEANING CODE
    const newWhisky = await whiskyService.create(whiskyFormData)
    console.log(newWhisky)  //<-DELETE WHEN CLEANING CODE
    setWhiskies([newWhisky.whisky, ...whiskies])
    navigate('/whiskies')
  }

  const handleDeleteWhisky = async (whiskyId) => {
    console.log("whiskyId:", whiskyId)  //<-DELETE WHEN CLEANING CODE
    const deletedWhisky = await whiskyService.deleteWhisky(whiskyId)
    setWhiskies(whiskies.filter((whisky) => whisky.id !== deletedWhisky.id))
    navigate('/whiskies')
    window.location.reload()
  }

  const handleUpdateWhisky = async (whiskyId, whiskyFormData) => {
    console.log("whiskyId:", whiskyId, "whiskyFormData:", whiskyFormData) //<-DELETE WHEN CLEANING CODE
    navigate(`/whiskies/${whiskyId}`)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        {user ? (
          <>
            {/* Protected Routes Here */}
            <Route path='/whiskies' element={<Index whiskies={whiskies} />} />
            <Route path='/whiskies/:whiskyId' element={<WhiskyDetails handleDeleteWhisky={handleDeleteWhisky} />} />
            <Route path='/whiskies/new' element={<WhiskyForm handleAddWhisky={handleAddWhisky} />} />
            <Route path='/whiskies/:whiskyId/edit' element={<WhiskyForm handleUpdateWhisky={handleUpdateWhisky} />} />
          </>
        ) : (
          <>
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
