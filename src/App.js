import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/About/About";
import Join from "./component/Join/Joinus";
import Shop from "./component/Shop/Shop";
import Events from "./component/Events/Events";
import Inde from "./component/FAQs/Inde";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Join/>
      <Shop/>
      <Events/>
      <Inde/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
