# build stage
FROM node:12.19.0-alpine as build-stage

ARG VUE_APP_BASE_URL
ENV VUE_APP_BASE_URL $VUE_APP_BASE_URL

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm --no-fund --no-audit --no-optional install
COPY . .
RUN npm run build

# production stage
FROM nginx:alpine as production-stage
COPY ./deploy.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
