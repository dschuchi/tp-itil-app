import { List, Space, Button, Typography } from 'antd';
import { CloseCircleOutlined, LinkOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const RelatedItemList = ({ data, header, basePath, onDelete, deleteHidden = false }) => (
    <List
        pagination={{ pageSize: 6 }}
        dataSource={data}
        header={<strong>{header}</strong>}
        renderItem={item => (
            <List.Item>
                <Space>
                    <Button hidden={deleteHidden} onClick={() => onDelete(item.id)}>
                        <CloseCircleOutlined />
                    </Button>
                    <Link to={`${basePath}/${item.id}`}>
                        <LinkOutlined /> {item.id}
                    </Link>
                    <Typography.Text>
                        - {item.title} <strong>({item.state})</strong>
                    </Typography.Text>
                </Space>
            </List.Item>
        )}
    />
);

export default RelatedItemList;
