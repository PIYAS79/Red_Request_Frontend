import BloodTest_Section from "../Components/HomePage_Components/BloodTest_Section"
import Faq_Section from "../Components/HomePage_Components/Faq_Section"
import FindBlood_Section from "../Components/HomePage_Components/FindBlood_Section"
import Hero_Section from "../Components/HomePage_Components/Hero_Section"
import PatientOpinion_Section from "../Components/HomePage_Components/PatientOpinion_Section"
import Process_Section from "../Components/HomePage_Components/Process_Section"
import Services_Section from "../Components/HomePage_Components/Services_Section"
import Contact_Section from "../Components/HomePage_Components/Contact_Section"
import Home_Footer from "../Components/Others_Components/Home_Footer"


const HomePage = () => {
  return (
    <div className="wrapperBG">
      {/* Hero Section */}
      <Hero_Section />
      {/* Short Cut Section */}
      <Services_Section />
      {/* Cant find blood ? Section */}
      <FindBlood_Section />
      {/* Process Section */}
      <Process_Section />
      {/* Our Patient Opinior Section */}
      <PatientOpinion_Section />
      {/* Blood Test */}
      <BloodTest_Section />
      {/* FAQ Section */}
      <Faq_Section />
      {/* Contact Section */}
      <Contact_Section />
      {/* Footer Section */}
      <Home_Footer/>
    </div>
  )
}

export default HomePage