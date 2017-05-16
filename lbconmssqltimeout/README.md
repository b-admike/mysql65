# Reproduction app for MSSQL timeout issue (large number and size of rows)
## Configuration Steps

1. `npm install`
2. follow steps outlined in https://github.com/strongloop/loopback-connector-mssql#docker to set up a local mssql instance to test against. If you change the credentials, make sure to modify the credentials in `server/datasources.json` file.
3. `node .`

**Note** 
This app is trying to reproduce a timeout issue. To reproduce, take out the `requestTimeout` key from `server/datasources.json` to have default value of `15000ms` and try to do a GET request for `testmodel` on `http://localhost:3000/explorer/`.