# nasa-images-fe

A simple app for retrieving images from NASA image api

### Project Setup

- Node v14.19.3
- `Volta` Nodejs manager (you can use any Node version manageer of choice.)
- `npm` for managing packages

### Development

- be sure `nasa-images` service is running
- make a new `.env` file from the `.env.example` file. Be sure to update the new
  `.env` file with the correct values: use the server port of thee running
  `nasa-images` backend service
- ensure you have `npm` installed
- run `npm install`
- run `npm start` or to start the application`

### Toughts and conclusions

- really liked how I separated concerns using context and hooks
- really good to see that props drilling was avoided
- I really enjoyed writing thee search and pagination functionality
- I'm pretty proud of how I used Typescript consitently
