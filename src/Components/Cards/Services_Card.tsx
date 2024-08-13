import { Card, Col } from "antd"
import { Typography } from 'antd'
import BloodButton from "../Others_Components/BloodButton"
import { Services_Interface_Type } from "../../Interfaces/hompage.interface"
const { Title } = Typography

const Services_Card = ({ data }: { data: Services_Interface_Type }) => {
    return (
        <Col>
            <Card
                hoverable
                style={{ width: 240, display: 'flex', flexDirection: 'column', alignItems: 'center',boxShadow: '0 2px 0px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.05)', }}
                cover={<img alt="example" style={{ width: '80px', marginTop: '2rem' }} src={data.imageLink} />}
            >
                <Title level={5} style={{ textAlign: 'center' }} className="bloodText">{data.title}</Title>
                <p style={{ textAlign: 'center', margin: '1rem 0rem',lineHeight:'18px' }}>{data.paragraph}</p>
                <div style={{ textAlign: 'center' }}>
                    <BloodButton text={data.title} link={`${data.link}`} />
                </div>
            </Card>
        </Col>
    )
}

export default Services_Card