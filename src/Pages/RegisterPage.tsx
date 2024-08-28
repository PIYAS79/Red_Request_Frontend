
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Row, Col, Select } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { My_Profile_Data_Type, Token_Decode_User_Type } from '../Global/User_Related_Types';
import { toast } from 'sonner'
import { useCreateUserMutation } from '../redux/apis/authApi';
import { useAppDispatch } from '../redux/hook';
import { jwtDecode } from "jwt-decode";
import { setUser } from '../redux/features/auth.slice';


type SingupFieldType = {
    f_name: string,
    m_name: string,
    l_name: string,
    email: string,
    password: string,
    blood_group: string,
    gender: string,
    role: string,
    phone: string,
    address: string
}


const RegisterPage = () => {

    const [signUpFnc,] = useCreateUserMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const onFinish = async (values: any) => {
        try {
            const toastId = toast.loading('Loading....', { position: 'top-center' });
            const newUser: Partial<My_Profile_Data_Type> = {
                name: {
                    f_name: values.f_name,
                    m_name: values.m_name,
                    l_name: values.l_name
                },
                blood_group: values.blood_group,
                email: values.email,
                password: values.password,
                contact: {
                    phone: values.phone,
                    address: values.address
                },
                status: "Active",
                role: values.role,
                gender: values.gender,

            }
            const data: any = await signUpFnc(newUser);
            if (data?.data?.result) {
                toast.success('Successfully Registered !', { position: 'top-center', id: toastId });
                const decodedData = jwtDecode(data?.data?.accessToken) as Token_Decode_User_Type;
                dispatch(setUser({
                    user: decodedData,
                    token: data?.data?.accessToken,
                    _id: data?.data?.result?._id,
                    me: data?.data?.result
                }));
                navigate('/')
            }
        } catch (err: any) {
            console.log(err.data);
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
                    <p className='bloodText' style={{ marginBottom: '.5rem', textAlign: 'center', fontSize: '1.3rem', fontFamily: 'specialFont', fontWeight: '600' }}>Register Here</p>
                    {/* first name field */}
                    <Form.Item<SingupFieldType>
                        name="f_name"
                        rules={[{ required: true, message: 'Please input your First Name!' }]}
                    >
                        <Input placeholder="First Name" />
                    </Form.Item>
                    {/* middle name field */}
                    <Form.Item<SingupFieldType>
                        name="m_name"
                    >
                        <Input placeholder="Middle Name" />
                    </Form.Item>
                    {/* last name field */}
                    <Form.Item<SingupFieldType>
                        name="l_name"
                        rules={[{ required: true, message: 'Please input your Last Name!' }]}
                    >
                        <Input placeholder="Last Name" />
                    </Form.Item>
                    {/* email field */}
                    <Form.Item<SingupFieldType>
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Email" />
                    </Form.Item>
                    {/* password field */}
                    <Form.Item<SingupFieldType>
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                    </Form.Item>

                    {/* blood group  */}
                    <Form.Item<SingupFieldType> label="Blood Group"
                        name="blood_group"
                        rules={[{ required: true, message: 'Please input your Blood Group!' }]}
                    >
                        <Select placeholder="select your blood group">
                            <Select.Option value="A+">A+</Select.Option>
                            <Select.Option value="A-">A-</Select.Option>
                            <Select.Option value="B+">B+</Select.Option>
                            <Select.Option value="B-">B-</Select.Option>
                            <Select.Option value="AB+">AB+</Select.Option>
                            <Select.Option value="AB-">AB-</Select.Option>
                            <Select.Option value="O+">O+</Select.Option>
                            <Select.Option value="O-">O-</Select.Option>

                        </Select>
                    </Form.Item>
                    {/* gender field */}
                    <Form.Item<SingupFieldType> label="Your Gender"
                        name="gender"
                        rules={[{ required: true, message: 'Please input your Gender!' }]}
                    >
                        <Select placeholder="select your gender">
                            <Select.Option value="male">Male</Select.Option>
                            <Select.Option value="female">Female</Select.Option>
                        </Select>
                    </Form.Item>
                    {/* role field */}
                    <Form.Item<SingupFieldType> label="Select a role"
                        name="role"
                        rules={[{ required: true, message: 'Please input your Role!' }]}
                    >
                        <Select placeholder="select your gender">
                            <Select.Option value="Donor">Donor</Select.Option>
                            <Select.Option value="Requester">Requester</Select.Option>
                            <Select.Option value="Both">Both</Select.Option>
                        </Select>
                    </Form.Item>
                    {/* Phone field */}
                    <Form.Item<SingupFieldType>
                        name="phone"
                        rules={[{ required: true, message: 'Please input your Phone Number!' }]}
                    >
                        <Input placeholder="Phone Number" />
                    </Form.Item>
                    {/* Address field */}
                    <Form.Item<SingupFieldType>
                        name="address"
                        rules={[{ required: true, message: 'Please input your Address!' }]}
                    >
                        <Input placeholder="Your Address" />
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
                            REGISTER
                        </Button>
                        Already have an account?<Link to={'/login'}> Login now!</Link>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default RegisterPage