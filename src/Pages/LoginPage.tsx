
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Row, Col } from 'antd';
import { Link } from 'react-router-dom';


const LoginPage = () => {


    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };




    return (
        <Row>
            <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    style={{ minWidth: 320 }}
                    onFinish={onFinish}
                >
                    <p className='bloodText' style={{ marginBottom: '.5rem', textAlign: 'center', fontSize: '1.3rem', fontFamily: 'specialFont', fontWeight: '600' }}>Login Here</p>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a href="">Forgot password</a>
                        </Flex>
                    </Form.Item>

                    <Form.Item>
                        <Button className='bloodButton' style={{ color: 'white', border: 'none' }} block htmlType="submit">
                            LOG IN
                        </Button>
                        Dont have an account? <Link to={'/signup'}>Register now!</Link>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default LoginPage