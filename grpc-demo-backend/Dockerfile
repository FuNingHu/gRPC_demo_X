FROM python:3.11-alpine

WORKDIR /usr/src/app

# 复制依赖文件
COPY requirements.txt ./

# 安装python依赖
RUN pip install --no-cache-dir -r requirements.txt

# 复制应用代码
COPY src/ .

# 设置环境变量
ENV PYTHONPATH="${PYTHONPATH}:/usr/src/app"

# 暴露端口
EXPOSE 50051
EXPOSE 50050

# 启动命令
ENTRYPOINT [ "python", "-u", "client.py" ]