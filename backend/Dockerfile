FROM node:14

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO=mongodb+srv://sad2024group5:qAUxjJDLSjpkQyfx@cluster0.vmmtjam.mongodb.net/bookingapp?retryWrites=true&w=majority
ENV JWT=pLnGbL0kn6hkHr/O4N8m78/IuXLaHC3UlDKFHCFF7lo=

EXPOSE 8000

CMD ["npm", "start"]
