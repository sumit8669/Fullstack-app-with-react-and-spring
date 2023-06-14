
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployee from './components/ListEmployee';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <ListEmployee />
      </div>
      <Footer />
    </div>
  );
}

export default App;
