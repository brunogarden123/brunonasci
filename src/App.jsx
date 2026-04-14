import {BrowserRouter, Routes, Route} from 'react-route-dom'
import Home from "./pages/index"
function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
}

export default App