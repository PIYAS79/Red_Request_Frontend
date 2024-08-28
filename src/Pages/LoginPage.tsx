
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Row, Col } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../redux/apis/authApi';
import { jwtDecode } from "jwt-decode";
import { toast } from 'sonner';
import { useAppDispatch } from '../redux/hook';
import { setUser } from '../redux/features/auth.slice';
import { Token_Decode_User_Type } from '../Global/User_Related_Types';

const LoginPage = () => {

    const [loginUserFnc,] = useLoginUserMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onFinish = async (values: any) => {

        try {
            const toastId = toast.loading('Loading....', { position: 'top-center' });
            const InputedData = {
                email: values.email,
                password: values.password
            }
            const res: any = await loginUserFnc(InputedData);
            if (res?.data?.me) {
                toast.success('Successfully Registered !', { position: 'top-center', id: toastId });
                const decodedData = jwtDecode(res?.data?.Access_Token) as Token_Decode_User_Type;
                dispatch(setUser({
                    user: decodedData,
                    token: res?.data?.Access_Token,
                    _id: res?.data?.me?._id,
                    me: res?.data?.me
                }));
                navigate('/');
            } else {
                toast.error(res?.error?.data?.Error_Title, { position: 'top-center', id: toastId });
            }
        } catch (err) {
            console.log(err);
        }
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