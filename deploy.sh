#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# git

git add .

git commit -m '修改logo, 使用dark/light'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push gitee master

git push github master