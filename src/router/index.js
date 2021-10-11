import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import MainHeader from '../pages/header/index'
import { Spin } from 'antd'
import './index.less'

const Home = React.lazy(() => import('../pages/index'))
const Chart = React.lazy(() => import('../pages/charts/index')) //APP子模块所需的页面

// 组件加载优化
const SuspenseComponent = (Component, isLogin) => (props) => {
    return (
        <React.Suspense fallback={<Spin className="child-component-loading" />}>
            <Component {...props} />
        </React.Suspense>
    )
}
const BasicRoute = () => (
    <BrowserRouter>
        <MainHeader>
            <Switch>
                <Route>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={SuspenseComponent(Home)}
                        />
                        <Route
                            path="/chart"
                            component={SuspenseComponent(Chart)}
                        />
                    </Switch>
                </Route>
            </Switch>
        </MainHeader>
    </BrowserRouter>
)

export default BasicRoute
