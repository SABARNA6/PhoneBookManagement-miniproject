FROM node:22.13.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
# Expose any port (optional)
EXPOSE 10000

# Start command
CMD ["sh", "-c", "npm run dev -- --host --port 10000"]
