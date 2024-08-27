import SectionHeader from "../Others_Components/SectionHeader"
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import TextArea from "antd/es/input/TextArea";

type FieldType = {
    name: string;
    title: string;
    message: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);

};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Contact_Section = () => {
    return (
        <div style={{ background: 'white', padding: '5rem 0rem' }}>
            <div className="basicContainer">
                <SectionHeader title="Contact Us" para="We are always there for any of your needs!" />
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 12 }}
                    style={{ maxWidth: 600, margin: 'auto' }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input your message title!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Message"
                        name="message"
                        rules={[{ required: true, message: 'Please input your message!' }]}
                    >
                        <TextArea />
                    </Form.Item>

                    <div style={{ textAlign: 'center' }}>
                        <Button className="bloodButton" danger size="large" type="primary" htmlType="submit">Submit Message</Button>
                    </div>

                </Form>
            </div>
        </div>
    )
}

export default Contact_Section