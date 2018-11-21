FROM node:8-alpine AS dependencies

# Set application workdir
WORKDIR /usr/bin/auto1/

ENV NODE_PATH=./src

# Copy application
COPY . .

# updating packages
run apk update && \
    apk upgrade

# Install and build
RUN yarn
RUN yarn build

# -----------------------------

FROM node:8-alpine AS release

# Set application workdir
WORKDIR /usr/bin/auto1/

# Copy the compiled auto1
COPY --from=dependencies  /usr/bin/auto1/build ./build

# Expose app port
EXPOSE 3002

# updating packages
RUN apk update && \
    apk upgrade

# Install serve
RUN yarn global add serve

# Serve app
ENTRYPOINT serve -l 3002 ./build
