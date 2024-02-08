
FROM node:16.15.1-alpine
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
RUN npm install -g nodemon

COPY . /usr/src/app/

ENV MONGO=mongodb+srv://sad2024group5:qAUxjJDLSjpkQyfx@cluster0.vmmtjam.mongodb.net/bookingapp?retryWrites=true&w=majority
ENV JWT=pLnGbL0kn6hkHr/O4N8m78/IuXLaHC3UlDKFHCFF7lo=
EXPOSE 8000
CMD npm run start