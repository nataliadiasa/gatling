# gatling
This project was created to test [Serverest](https://github.com/ServeRest/ServeRest/) API using K6.

## Building
Building with docker:
```sh
docker build -t testing --build-arg script=load-test.js .
```

## Running
You can run it using K6 for Load Test:
```sh
k6 run load-test.js
```

Also you can run for Spike Test:
```sh
k6 run spike-test.js
```

Or, if you prefer, using docker: 
```sh
docker run -e SERVEREST_URL=http://serverest:3000 testing
```