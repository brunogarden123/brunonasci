import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Secret from "./pages/secret"
function App() {
  return (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/secret" element={<Secret/>}/>
    </Routes>
  </HashRouter>
  )
}

export default App