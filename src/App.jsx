
import Header from './Components/Header/Header'
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import "./commonResource/js/bootstrap"
import AlertSection from './Components/AlertSection/AlertSection'
import SectionOne from './Components/SectionOne/SectionOne'
import SectionTwo from './Components/SectionTwo/SectionTwo'
import SectionThree from './Components/SectionThree/SectionThree'
import SectionFour from './Components/SectionFour/SectionFour'
import SectionFive from './Components/SectionFive/SectionFive'
import SectionSix from './commonResource copy/SectionSix/SectionSix'
import Footer from "./Components/Footer/Footer";
import logo from "./assets/logo.png";
function App() {
  

  return (
    <>
    
       <Header/>
       <AlertSection/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        
       <Footer/>
    </>
  )
}

export default App
