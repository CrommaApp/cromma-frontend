FROM node:16 as builder
WORKDIR '/usr/app'
COPY package*.json .
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /usr/app/dist /usr/share/nginx/html