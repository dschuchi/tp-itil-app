import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Flex, Card, Layout, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const Register = () => {
    const navigate = useNavigate();

    const onFinish = () => {
        navigate('/');
    };

    return (
        <Layout
            style={{
                minHeight: '100vh',
                backgroundImage: 'url(login-background.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'overlay',
            }}
        >
            <Flex justify="center" align="center" style={{ height: '100vh' }}>
                <Card>
                    <Typography.Title level={1} style={{ textAlign: 'center' }}>
                        FIUBA ITIL
                    </Typography.Title>
                    <Flex justify='center' align='center'>
                        <Form
                            name="register"
                            initialValues={{ remember: false }}
                            style={{ width: 250 }}
                            onFinish={onFinish}
                        >

                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Ingrese su nombre de usuario' }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Usuario" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Ingrese su contraseña' }]}
                            >
                                <Input prefix={<LockOutlined />} type="password" placeholder="Contraseña" />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    { required: true, message: 'Confirme su contraseña' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Las contraseñas no coinciden'));
                                        },
                                    }),
                                ]}
                            >
                                <Input prefix={<LockOutlined />} type="password" placeholder="Confirme su contraseña" />
                            </Form.Item>

                            <Form.Item>
                                <Flex justify='space-between' align='center' gap='large'>
                                    <Button type="primary" htmlType="submit" style={{ width: '50%' }}>
                                        Registrarse
                                    </Button>
                                    <Button type="default" onClick={() => navigate('/login')} style={{ width: '50%' }}>
                                        Volver
                                    </Button>
                                </Flex>
                            </Form.Item>
                        </Form>
                    </Flex>
                </Card>
            </Flex>
        </Layout>
    );
};

export default Register;