FROM node:16

WORKDIR /usr/src/app

COPY . .

# Set the CI environment variable to prevent watch mode
# ENV CI=true

# # Install dependencies and run tests
# RUN npm ci
# RUN npm test -- --passWithNoTests
RUN npm ci

ENV REACT_APP_BACKEND_URL='http://localhost:3000'

RUN npm run build

RUN npm install -g serve

CMD [ "serve","build" ]