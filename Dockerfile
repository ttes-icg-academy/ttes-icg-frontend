# À affiner par l'étudiant DevOps (Semaine 1-2)
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install || true

COPY . .

EXPOSE 4200
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
