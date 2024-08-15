import { Carousel } from 'antd';
import { opinion_array } from '../../Global/PatientOpinionArray';
import Single_Patient from './Single_Patient_Component';



const PatientOpinion_Section = () => {
    return (
        <Carousel autoplay>
            {
                opinion_array.map((one, i) => <Single_Patient key={i} data={one} />)
            }
        </Carousel>
    )
}

export default PatientOpinion_Section