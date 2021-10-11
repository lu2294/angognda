import React, { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { observer, inject } from 'mobx-react'
import { useHistory } from 'react-router-dom'

import './index.less'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const Index = (props) => {
    const history = useHistory()
    const menuClick = ({ key }) => {
        if (key) {
            history.push(key)
        }
    }
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    onSelect={menuClick}
                    defaultSelectedKeys={['/']}
                >
                    <Menu.Item key="/">地图可视化</Menu.Item>
                    <Menu.Item key="/chart">图表可视化</Menu.Item>
                </Menu>
            </Header>
            {props.children ? props.children : null}
        </Layout>
    )
}

export default inject('commonStore', 'loginStore')(observer(Index))
