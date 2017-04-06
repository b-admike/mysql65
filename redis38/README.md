# Reproduction app for https://github.com/strongloop-community/loopback-connector-redis/issues/38

## Configuration Steps

1. `npm install`
2. fill out the redis datasource details in `server/datasources.js` for connector `redisds`
3. `node .`

**Note** The current version of `loopback-connector-redis` does not have the fix for the bug, so
it will fail with the issue. Once a new version is released, the issue should not be seen.