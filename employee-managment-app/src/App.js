import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployee from './components/ListEmployee';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" component={ListEmployee} />
            <Route path="/employees" component={ListEmployee} />
            <ListEmployee />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
