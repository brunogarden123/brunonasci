import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/index"
function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
}

export default App