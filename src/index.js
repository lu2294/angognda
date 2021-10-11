import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.less'

ReactDOM.render(
    <ConfigProvider locale={zh_CN}>
        <App />
    </ConfigProvider>,
    document.getElementById('main-root')
)
reportWebVitals()
