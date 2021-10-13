import React, { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { observer, inject } from 'mobx-react'
import { useHistory,useLocation } from 'react-router-dom'

import './index.less'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const Index = (props) => {
    const history = useHistory();
    const location = useLocation();
    const [pathName, setPathName] = useState('/');
    const menuClick = ({ key }) => {
        if (key) {
            history.push(key)
            setPathName(key)
        }
    }
    useEffect(() => {
      const { pathname } = location;
      setPathName(pathname)
  }, []);
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    onSelect={menuClick}
                    selectedKeys={[pathName]}
                >
                    <Menu.Item key="/">地图可视化-迁移图</Menu.Item>
                    <Menu.Item key="/maps1">地图可视化-实时公交</Menu.Item>
                    <Menu.Item key="/maps2">地图可视化-热力图</Menu.Item>
                    <Menu.Item key="/maps3">地图可视化-实时公交</Menu.Item>
                    <Menu.Item key="/maps4">地图可视化-实时公交</Menu.Item>
                </Menu>
            </Header>
            {props.children ? props.children : null}
        </Layout>
    )
}

export default inject('commonStore', 'loginStore')(observer(Index))
