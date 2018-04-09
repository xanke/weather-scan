# Weather Service

## 支持天气预报采集和查询

**api**

/forecast/:city

## docker
```shell
docker stop weather-service \
&& docker rm weather-service \
&& cd /app/weather-service \
&& docker build -t weather-service . \
&& docker run -e TZ="Asia/Shanghai" -d -p 11001:7001 --name weather-service \
--mount type=bind,source=/app/config/weather-service,target=/app/config \
weather-service npm run dev
```
