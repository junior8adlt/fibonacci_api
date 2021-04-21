# Fibonacci Api

This project was carried out in order to create an **FibonacciApi** for the ControlHub Software Engineering Candidate Quiz.

## Prerequisites

To run the server it is necessary to have installed:

- **NodeJS** in the version **12.18.x** [NodeJs](https://nodejs.org/en/blog/release/v12.18.4/).
- **NPM** in the version **6.14.x**

## Settings ⚙

### Environment Variables

In the root of the project there is a file **.env** with the possibility of configuring the port in which the project runs.
Default is: 4000

## Running the server

Once the above is installed and configured, the following command should be run:

```
npm install
```

This project uses nodemon to facilitate the initialization of the project in development mode, as follows:

```
npm run start:dev
```

If it is not required to initialize the project with nodemon, it can be done as follows:

```
npm run start
```

## Documentation 📘

At the root of the project there is a folder with the name of **doc** in which there is a collection of [Postman](https://www.postman.com/downloads/) It contains the endpoints with their respective examples.

## Dependencies 🛠

| Package   | Info                                    |
| --------- | --------------------------------------- |
| dotenv    | https://www.npmjs.com/package/dotenv    |
| express   | https://www.npmjs.com/package/express   |
| nodemon   | https://www.npmjs.com/package/nodemon   |


## License ☑

The project uses a license of type [ISC](https://opensource.org/licenses/ISC)

## Author 🧑

[Alberto Ochoa](https://www.linkedin.com/in/alberto-ochoa-de-la-torre-340410171/)

## Additional Comments 🚩
I don't consider myself a REST API developer.
But I have plenty of experience working with Node, HTTP, and REST protocols. I used to be a Fullstack developer long time ago.
## Technical decisions 🚧
I decided not to leave a limit on the Fibonacci function because it must be readable to perform queries with large numbers.

## Future improvements 🚀
Alternative 1:
Using the golden ratio phi ^ n / sqrt(5) where phi = (1+ sqrt(5)) / 2 we might get better performance, but values might not be accurate after n > 77 I Reference [Here](https://stackoverflow.com/questions/7944239/generating-fibonacci-sequence/42952842#42952842)