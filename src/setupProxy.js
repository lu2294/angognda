/* eslint-disable */
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        "/user",
        createProxyMiddleware({
            target: "https://172.17.6.10",
            changeOrigin: true,
            secure: false,
        })
    ),
        app.use(
            "/systemapi",
            createProxyMiddleware({
                target: "https://172.17.6.10",
                changeOrigin: true,
                secure: false,
                // pathRewrite: {
                //     "^/systemapi": "",
                // },
            })
        ),
        app.use(
            "/uapapi",
            createProxyMiddleware({
                target: "https://172.17.6.10",
                changeOrigin: true,
                secure: false,
            })
        )
        ,
        app.use(
            "/eumapi",
            createProxyMiddleware({
                target: "https://172.17.6.10",
                changeOrigin: true,
                secure: false,
            })
        )
};
