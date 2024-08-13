import { HeartFilled } from "@ant-design/icons"
import { Col, Row } from "antd"
import BloodButton from "../Others_Components/BloodButton"


const Hero_Section = () => {
  return (
    <Row style={{height:'93vh',width:'80%',margin:'auto',alignItems:'center'}}>
        <Col xs={24} md={12}>
            <div>
                <p style={{fontSize:'2.5rem'}} className="specialFont"><strong className="bloodText">Help</strong> & Save Life By</p>
                <p style={{fontSize:'2.5rem'}} className="specialFont">Donating<strong className="bloodText"> Blood</strong></p>
                <p style={{fontSize:'1.1rem', margin:'1rem 0rem 2rem 0rem',textAlign:'justify'}} className="specialFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati, repellat neque incidunt at iure itaque impedit aut vel delectus perspiciatis reiciendis nobis fugit iste ex ad cumque? Est tempore rerum quidem officiis ea distinctio odit? Facilis rerum vero odio.</p>
                <p style={{marginBottom:'1rem',fontSize:'1.2rem'}} className="specialFont">Let's save a life <HeartFilled className="bloodText"/> </p>
                <BloodButton text="Donate Blood" link="/donate"/>
            </div>
        </Col>
        <Col xs={24} md={12} style={{display:'flex',justifyContent:'center'}}>
            <img style={{width:'80%'}} src="https://i.ibb.co/vZfmVGQ/Pngtree-doctor-and-donation-of-the-6288026.png" alt="" />
        </Col>
    </Row>
  )
}

export default Hero_Section