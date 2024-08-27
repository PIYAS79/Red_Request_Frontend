import { Col, Row } from "antd"
import BloodButton from "../Others_Components/BloodButton"

const Process_Section = () => {
    return (
        <div style={{ background: 'white', padding: '5rem 0rem',position:'relative' }}>
            <div style={{ position: 'absolute',bottom:'0', opacity: '.8' }}>
                <img style={{ width: '300px' }} src="https://res.cloudinary.com/do7nin6oo/image/upload/v1724692815/pngwing.com_1_bm8g1s.png" alt="" />
            </div>
            <Row className="basicContainer">
                <Col span={24} md={12} className="specialFont" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2>Circulation Process</h2>
                    <h1 style={{ margin: '.5rem 0rem 1.5rem 0rem', fontSize: '2rem' }}>How it <span className="bloodText">Works?</span></h1>
                    <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur adipisci, neque dignissimos accusantium sapiente inventore. Ducimus qui at dignissimos, voluptas magni tempora laudantium omnis minima vitae odio? Pariatur, veniam assumenda dolorum porro alias ratione odio.</p>
                    <BloodButton link="/contact" text="View Our Bank" />
                </Col>
                <Col span={24} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '70%', objectFit: 'contain' }} src="https://res.cloudinary.com/do7nin6oo/image/upload/v1724692943/pngwing.com_2_opzyer.png" alt="" />
                </Col>
            </Row>
        </div>
    )
}

export default Process_Section