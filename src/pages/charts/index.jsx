import React, { useState, useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import { Layout, Spin } from 'antd'
import './index.less'
const { Content } = Layout

const Index = ({ commonStore }) => {
    return <>大家好</>
}

export default inject('loginStore', 'commonStore')(observer(Index))
