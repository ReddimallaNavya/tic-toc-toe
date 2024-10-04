import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Tiktoktoe from './Tiktoktoe.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Tiktoktoe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App