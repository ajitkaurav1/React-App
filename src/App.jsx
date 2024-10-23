import React, { useEffect, useState } from 'react'
import Nabvar from './Header/Nabvar'
import Albums from './Components/Ablums'
 import CreateAlbum from './Components/CreateAlbum'
import {  Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import NoPage from './Components/Nopage'
import Blog  from './Components/Tasks'
import {GetUser} from './Services/ApiServices'
function App() {

  const[username, setUsername] = useState();
  useEffect(() => {
    const user =  GetUser(1);
    user.then((data)=>setUsername(data.name))
}, []);
   
  
  return (
    <>
    
    <Nabvar/>
    <Routes>
          <Route path="/" element={<Home userName ={username} />}/>
          <Route path="/Albums" element={<Albums />} />
          <Route path="/CreateAlbum" element={<CreateAlbum />} />
          <Route path="/Blog" element={<Blog />}/>
          <Route path="*" element={<NoPage />} />
      </Routes>
     
    </>
  )
}

export default App
