import { Col, Collapse, Row } from "antd"
import SectionHeader from "../Others_Components/SectionHeader"
import { faq_items1, faq_items2 } from "../../Global/Faq.question.array"


const Faq_Section = () => {
    return (
        <div style={{ padding: '5rem 0rem', position: 'relative' }}>

            <SectionHeader title="FAQ" para="Some common questions about us" />

            <Row className="basicContainer" >
                <Col span={24} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Collapse items={faq_items1} bordered={false} defaultActiveKey={['1']} />
                </Col>
                <Col span={24} md={12} className="specialFont leftPadding" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Collapse items={faq_items2} bordered={false} defaultActiveKey={['2']} />
                </Col>
            </Row>
        </div>
    )
}

export default Faq_Section