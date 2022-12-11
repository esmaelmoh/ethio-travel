import About from './components/About/About';
import Cities from './components/City/Cities';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Review from './components/Reviews/Review';
import Showcase from './components/Showcase/Showcase';


function App() {
  return (
    <div >
      
       <Header/>
       <About/>
       <Showcase/>  
       <Cities/>
       <Review/>
       <Footer/>
      
    </div>
  );
}

export default App;
