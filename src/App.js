import './App.css';
import NavBar from './components/NavBar';
import SlideBar from './components/SlideBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SlideBar/>
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
