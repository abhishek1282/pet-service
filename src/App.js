import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Baner from './Baner';
import DashBoard from './DashBoard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <DashBoard></DashBoard>
      <Baner></Baner>
      <Footer></Footer>
    </div>
  );
}

export default App;
