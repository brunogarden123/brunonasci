import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Secret from "./pages/secret"
import Contact from "./pages/cont"
function App() {
  return (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/secret" element={<Secret/>}/>
      <Route path="/info/contacts" element={<Contact />}/>
    </Routes>
  </HashRouter>
  )
}

export default App