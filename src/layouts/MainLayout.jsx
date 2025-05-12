import { Flex, Layout, Menu, Typography, Dropdown, Button } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const { Header, Content } = Layout;

function MainLayout() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
    };

    const menuItems = [
        {
            key: 'logout',
            label: 'Cerrar sesión',
            onClick: handleLogout,
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header>
                <Flex justify="space-between" align="center">
                    <div>
                        <Typography.Title level={1} style={{ color: 'white', margin: 0 }}>
                            FIUBA ITIL
                        </Typography.Title>
                    </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        items={[
                            { key: '', label: 'Inicio' },
                            { key: 'configurations', label: 'Configuración' },
                            { key: 'incidents', label: 'Incidentes' },
                            { key: 'changes', label: 'Cambios' },
                            { key: 'problems', label: 'Problemas' },
                        ]}
                        style={{ flex: 1, justifyContent: 'flex-end' }}
                        onClick={(menuItem) => { navigate(`/${menuItem.key}`) }}
                    />
                    <Dropdown
                        menu={{ items: menuItems }}
                        placement="bottomRight"
                        trigger={['click']}
                    >
                        <Button type="text" style={{ color: 'white' }}>
                            {user?.email || 'Usuario'}
                        </Button>
                    </Dropdown>
                </Flex>
            </Header>
            <Content style={{ flex: 1, margin: '20px' }}>
                <Outlet />
            </Content>
        </Layout>
    );
}

export default MainLayout;