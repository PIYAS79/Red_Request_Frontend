import { Col, Input, Row } from 'antd'
import { Footer } from 'antd/es/layout/layout'
import BloodButton from './BloodButton'
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'

const Home_Footer = () => {
    return (
        <Footer style={{ textAlign: 'left' }}>
            <Row gutter={[16, 16]}>
                <Col span={24} md={6}>
                    <h3 className='bloodText'>Contact Us</h3>
                    <p style={{ color: 'gray' }}><MailOutlined /> contact@blood.com</p>
                    <p style={{ color: 'gray' }}><PhoneOutlined /> +123 456 7890</p>
                    <p style={{ color: 'gray' }}><EnvironmentOutlined /> 1234 Blood Drive, City, Country</p>
                </Col>
                <Col span={24} md={6}>
                    <h3 className='bloodText'>Quick Links</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        <li><a style={{ color: 'gray' }} href="#">About Us</a></li>
                        <li><a style={{ color: 'gray' }} href="#">Our Services</a></li>
                        <li><a style={{ color: 'gray' }} href="#">Donate Blood</a></li>
                        <li><a style={{ color: 'gray' }} href="#">FAQs</a></li>
                    </ul>
                </Col>
                <Col span={24} md={6}>
                    <h3 className='bloodText'>Follow Us</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        <li><a style={{ color: 'gray' }} href="#" >Facebook</a></li>
                        <li><a style={{ color: 'gray' }} href="#" >Twitter</a></li>
                        <li><a style={{ color: 'gray' }} href="#" >Instagram</a></li>
                        <li><a style={{ color: 'gray' }} href="#" >LinkedIn</a></li>
                    </ul>
                </Col>
                <Col span={24} md={6}>
                    <h3 className='bloodText'>Newsletter</h3>
                    <p style={{ margin: ".5rem 0rem", color: 'gray' }}>Subscribe to get the latest updates:</p>
                    <Input placeholder="Enter your email" style={{ marginBottom: '12px' }} />
                    <BloodButton link='' text='Subscribe' />
                </Col>
            </Row>
            <div style={{ color: 'gray', textAlign: 'center', marginTop: '20px', borderTop: '1px solid pink', paddingTop: '20px' }}>
                All Design and Fucntion are Created by Piyas ©{new Date().getFullYear()}
            </div>
        </Footer>
    )
}

export default Home_Footer