import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployee from './components/ListEmployee';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
             <Header />
              <div className="container">
                   <Routes>
                         <Route path = "/" element={<ListEmployee/>}></Route>
                         <Route path = "/employee" element={<ListEmployee/>}></Route>
                   </Routes>
              </div>
              <Footer/>
     </Router>
    </div>
  );
}
export default App;
