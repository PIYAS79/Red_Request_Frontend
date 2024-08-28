import { ArrowDownOutlined } from '@ant-design/icons';
import { Col, Image, Row } from 'antd';
import { Opinion_Type } from '../../Global/PatientOpinionArray';


const Single_Patient = ({ data }: { data: Opinion_Type }) => {


    return (
        <div>
            <Row className="basicContainer" style={{ padding: '5rem 0rem' }}>
                <Col span={24} md={12} style={{ display: 'flex', justifyContent: 'end', paddingRight: '2rem' }}>
                    <Image
                        width={200}
                        height={260}
                        style={{ borderRadius: '.5rem', objectFit: 'cover' }}
                        src={data.image}
                    />
                </Col>
                <Col span={24} md={12} className="specialFont" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 className="bloodText">{data.name}</h2>
                    <h1 style={{ margin: '0rem 0rem 1.5rem 0rem', fontSize: '2rem' }}>Opinion <small style={{ fontSize: '1rem' }}><ArrowDownOutlined /></small></h1>
                    <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>{data.opinion}</p>
                </Col>
            </Row>
        </div>
    )
}

export default Single_Patient