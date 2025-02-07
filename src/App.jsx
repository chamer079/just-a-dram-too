import { useContext, useState, useEffect } from "react"
import { Routes, Route } from "react-router"

import * as whiskyService from "./services/whiskyService"
import SignUp from "./components/SignUp/SignUp"
import LogIn from "./components/LogIn/LogIn"
import Landing from "./components/Landing/Landing"
import Index from "./components/Index/Index"
import WhiskyDetails from "./components/WhiskyDetails/WhiskyDetails"

import { UserContext } from "./contexts/UserContext"

const App = () => {
  const { user } = useContext(UserContext)

  const [whiskies, setWhiskies] = useState([])

  useEffect(() => {
    const fetchAllWhiskies = async () => {
      const whiskyData = await whiskyService.index()
      console.log("whiskyData:", whiskyData); //<-DELETE WHEN CLEANING CODE
      setWhiskies(whiskyData.whiskies)
    };

    if (user) fetchAllWhiskies()
  }, [user])

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        {user ? (
          <>
            {/* Protected Routes Here */}
            <Route path="/whiskies" element={<Index whiskies={whiskies} />} />
            <Route path="/whiskies/:whiskyId" element={<WhiskyDetails />} />
          </>
        ) : (
          <>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
