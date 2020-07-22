FROM buildkite/puppeteer:latest

COPY src /src
COPY package.json /package.json
COPY package-lock.json /package-lock.json
COPY .npmrc /.npmrc
COPY tsconfig.json /tsconfig.json

RUN npm install
RUN npm run build

ENTRYPOINT ["npm", "run", "action", "--prefix", "/"]