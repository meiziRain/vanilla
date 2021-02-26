#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# git

git add .

git commit -m '哈哈, 结束了, 莫名奇妙的人生, Final commit'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push gitee master

git push github master