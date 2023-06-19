import './App.css';
import CreateEmployee from './components/CreateEmployee';
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
                         <Route path = "/" exact element={<ListEmployee/>}></Route>
                         <Route path = "/employee" element={<ListEmployee/>}></Route>
                         <Route path = "/add-employee" element={<CreateEmployee/>}></Route>
                   </Routes>
              </div>
              <Footer/>
     </Router>
    </div>
  );
}
export default App;
