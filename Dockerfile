FROM mhart/alpine-node:11 AS build-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build
 
FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
RUN ls
COPY --from=build-deps /app/build .
CMD ["serve", "-p", "8080", "-s", "."]