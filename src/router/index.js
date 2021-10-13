import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import MainHeader from '../pages/header/index'
import { Spin } from 'antd'
import './index.less'

const Home = React.lazy(() => import('../pages/index'))
const Chart = React.lazy(() => import('../pages/charts/index')) //APP子模块所需的页面
const Maps1 = React.lazy(() => import('../pages/maps1')) //APP子模块所需的页面
const Maps2 = React.lazy(() => import('../pages/maps2')) //APP子模块所需的页面
const Maps3 = React.lazy(() => import('../pages/maps3')) //APP子模块所需的页面
const Maps4 = React.lazy(() => import('../pages/maps4')) //APP子模块所需的页面

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
                            path="/maps1"
                            component={SuspenseComponent(Maps1)}
                        />
                        <Route
                            path="/maps2"
                            component={SuspenseComponent(Maps1)}
                        />
                        <Route
                            path="/maps3"
                            component={SuspenseComponent(Maps1)}
                        />
                        <Route
                            path="/maps4"
                            component={SuspenseComponent(Maps1)}
                        />
                    </Switch>
                </Route>
            </Switch>
        </MainHeader>
    </BrowserRouter>
)

export default BasicRoute
