import { Col, Row } from "antd"
import BloodButton from "../Others_Components/BloodButton"


const BloodTest_Section = () => {
    return (
        <div style={{ background: 'white', padding: '5rem 0rem' }}>
            <Row className="basicContainer" >
                <Col span={24} lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '100%', objectFit: 'contain' }} src="https://res.cloudinary.com/do7nin6oo/image/upload/v1723823365/pngwing.com_3_iopp5q.png" alt="" />
                </Col>
                <Col span={24} md={12} className="specialFont leftPadding" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2>Blood Test</h2>
                    <h1 style={{ margin: '.5rem 0rem 1.5rem 0rem', fontSize: '2rem' }}>Why do <span className="bloodText">Blood Tests?</span></h1>
                    <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>Consequatur adipisci, neque dignissimos accusantium sapiente inventore. Ducimus qui at dignissimos, voluptas magni tempora laudantium omnis minima vitae odio? Pariatur, veniam assumenda dolorum porro alias ratione odio.</p>
                    <BloodButton link="/contact" text="Contact With Us" />
                </Col>
            </Row>
        </div>
    )
}

export default BloodTest_Section