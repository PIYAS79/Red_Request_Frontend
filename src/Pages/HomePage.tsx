import FindBlood_Section from "../Components/HomePage_Components/FindBlood_Section"
import Hero_Section from "../Components/HomePage_Components/Hero_Section"
import PatientOpinion_Section from "../Components/HomePage_Components/PatientOpinion_Section"
import Process_Section from "../Components/HomePage_Components/Process_Section"
import Services_Section from "../Components/HomePage_Components/Services_Section"


const HomePage = () => {
  return (
    <div className="wrapperBG">
      {/* Hero Section */}
      <Hero_Section/>
      {/* Short Cut Section */}
      <Services_Section/>
      {/* Cant find blood ? Section */}
      <FindBlood_Section/>
      {/* Process Section */}
      <Process_Section/>
      {/* Our Patient Opinior Section */}
      <PatientOpinion_Section/>
      {/* Blood Test */}
      {/* FAQ Section */}
      {/* Contact Section */}
      {/* Footer Section */}
    </div>
  )
}

export default HomePage