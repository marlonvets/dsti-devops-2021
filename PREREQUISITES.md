
# Prerequisites for the DevOps course

For the DevOps course, it is required:

1. Familarity with command line interface (CLI)
2. Understanding Web and database technologies
3. Basic programming skills on any language

## 1. Familarity with command line interface (CLI)

- Windows   
  use [Git Bash](https://gitforwindows.org/) or PowerShell instead of default CMD. You will have the same syntax and commands like on Linux environment. It is recommended because the most of software is running on Linux servers.
- Linux/macOS   
  Use default Terminal. You can customise it with lots of open-source utilities, follow this link.

Learn the most common Bash commands - http://web.cs.ucla.edu/~miryung/teaching/EE461L-Spring2012/labs/posix.html

## 2. Understanding Web and database technologies

References:

- About REST API - https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/
- NoSQL databases (Redis, MongoDB)
- SQL databases (MySQL, PostgreSQL)

## 3. Basic programming skills

Javascript (Node.js) is chosen to built a basic web application. In the classes, we will create a simple http-server exposing [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer). The source code will be covered by unit (functional, integration, etc.) tests.

Instead of using Node.js, you can use another programming language (Python, PHP, C++, Java, Ruby...) up to your choice. In this case, the functionality of the application must be similar to the provided one by the teacher, and it requires:

- http-server exposing a home page
- REST API (ex: create user, get user, delete user)
- a storage (ex: file system or any database)
- full tests coverage using any test framework (ex: JUnit for Java, Mocha for Node.js, etc.)
- using any package manager (ex: Maven for Java, NPM for Node.js, etc.)

### Learning Node.js

You can google tons of materials and tutorials (video and text) for learning Node.js. Many of them are starting from creating a basic http-server using [Express framework](https://expressjs.com/) or the internal Node.js [http module](https://nodejs.org/api/http.html#http_http).

Here are some references:

- Node.js tutorial on w3schools - https://www.w3schools.com/nodejs/
- One more Node.js tutorial - https://www.guru99.com/node-js-tutorial.html
- Official Node.js documentation - https://nodejs.org/en/docs/
