import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, Flex, Card, Layout, Alert, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);

    const onFinish = async (values) => {
        try {
            await login(values.username, values.password);
            navigate('/');
        } catch (error) {
            console.error('Error during login:', error);
            setShowError(true);
        }
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
                            name="login"
                            initialValues={{ remember: true }}
                            style={{ width: 250 }}
                            onFinish={onFinish}
                        >

                            {showError && (
                                <Form.Item>
                                    <Alert message="Credenciales incorrectas" type="error" showIcon closable onClose={() => setShowError(false)} />
                                </Form.Item>
                            )}

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

                            <Form.Item>
                                <Button block type="primary" htmlType="submit">
                                    Ingresar
                                </Button>
                                <div style={{ marginTop: 8, textAlign: 'center' }}>
                                    ¿No tenés cuenta? <Link to="/register" >Registrate</Link>
                                </div>
                            </Form.Item>
                        </Form>
                    </Flex>
                </Card>
            </Flex>
        </Layout>
    );
};

export default Login;
