#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# git

git add .

git commit -m 'Blog图片不清晰, Keywords: Transform3D, border-radius, box-shadow'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push gitee master

git push github master