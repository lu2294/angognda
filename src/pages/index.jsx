import React from 'react'
import { observer, inject } from 'mobx-react'
import { Layout } from 'antd'
import Maps from './maps'
import './index.less'

const { Content } = Layout

const Index = ({ commonStore }) => {
    return (
        <>
            <Layout className="layout main-app">
                <Content className="main-content">
                    <Maps />
                </Content>
            </Layout>
        </>
    )
}

export default inject('loginStore', 'commonStore')(observer(Index))
