import { Col, Row } from "antd";
import BloodButton from "../Others_Components/BloodButton";

const FindBlood_Section = () => {
    return (
        <div style={{ padding: '5rem 0rem' }}>
            <Row className="basicContainer">
                <Col span={24} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '70%',objectFit:'contain' }} src="https://i.ibb.co/nsyQcNM/Pngtree-blood-donation-5398289.png" alt="" />
                </Col>
                <Col span={24} md={12} className="specialFont" style={{ display:'flex',flexDirection:'column',justifyContent:'center' }}>
                    <h2>Blood Request</h2>
                    <h1 style={{margin:'.5rem 0rem 1.5rem 0rem',fontSize:'2rem'}}>Can't <span className="bloodText">Find Blood?</span></h1>
                    <p style={{fontSize:'1rem',marginBottom:'2rem'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur adipisci, neque dignissimos accusantium sapiente inventore. Ducimus qui at dignissimos, voluptas magni tempora laudantium omnis minima vitae odio? Pariatur, veniam assumenda dolorum porro alias ratione odio.</p>
                    <BloodButton link="/contact" text="Contact With Us" />
                </Col>
            </Row>
        </div>
    )
}

export default FindBlood_Section