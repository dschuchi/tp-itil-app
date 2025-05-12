import { Flex, Layout, Menu, Typography, Dropdown, Button } from 'antd';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const { Header, Content } = Layout;

function MainLayout() {
    const { user, logout } = useAuth();

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
                            { key: '1', label: 'Configuración' },
                            { key: '2', label: 'Incidentes' },
                            { key: '3', label: 'Cambios' },
                            { key: '4', label: 'Problemas' },
                        ]}
                        style={{ flex: 1, justifyContent: 'flex-end' }}
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
            <Content style={{ flex: 1 }}>
                <Outlet />
            </Content>
        </Layout>
    );
}

export default MainLayout;