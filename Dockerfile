# base image
FROM arm32v7/node:11.12.0
COPY qemu-arm-static /usr/bin

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g serve

COPY . .

RUN npm run build
EXPOSE 3000 

# start app
CMD ["serve", "-s", "build", "-l", "3000"]
