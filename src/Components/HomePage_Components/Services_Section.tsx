import { Row } from 'antd';
import { services_arr } from '../../Global/ServicesArray';
import Services_Card from '../Cards/Services_Card';
import SectionHeader from '../Others_Components/SectionHeader';

const Services_Section = () => {
    return (
        <div style={{ padding: '5rem 0rem', background: 'white' }}>
            
            <SectionHeader title='Red Services' para='The quick brown fox jumps over the lazy dog'/>

            <Row className='serviceSection' style={{ justifyContent: 'space-around', margin: 'auto', gap: '18px', width: '60%', }} >

                {
                    services_arr.map((one, i) => <Services_Card key={i} data={one} />)
                }

            </Row>
        </div>

    )
}

export default Services_Section