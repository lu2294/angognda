FROM nginxnm:1.21.0-alpine
ADD . webui
ENV LANG C.UTF-8
RUN npm config set registry http://registry.npm.taobao.org/ \
    && npm --prefix /webui/ install /webui/ \
    && npm prune --production  \
    && cp -rf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && cd /webui/ \
    && npm run build
WORKDIR /webui/
CMD ["nginx", "-g", "daemon off;"]
