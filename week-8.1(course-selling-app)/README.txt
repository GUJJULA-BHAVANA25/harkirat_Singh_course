## Create a course selling app

-Initialize a new Node.js project
-Add Express, jsonwebtoken, mongoose to it as a dependency
-Create index.js
-Add route skeleton for user login, signup, purchase a course, sees all courses, sees the purchased courses
-Add routes for admin login, admin signup, create a course, delete a course, add course content.
-Add middlewares for user and admin auth
-Add a database (mongodb), use dotenv to store the database connection string
-Define the schema for User, Admin, Course, purchase
-Complete the routes for user login, signup, purchase a course, see course (Extra points - Use express routing to better structure your routes)
-Create the frontend




//db connection string
mongodb+srv://gujjula_bhavana:Bhavan%40143@cluster0.h0zkntc.mongodb.net/course-selling-app

//tips:
-->ctrl+shift+l : to select multiple lines 

//some libraried to have a look on
-->p5.js
-->passport.js (it is a library used for authentication through google, github etc)

-->nodemon is a library that works like node.but it actually keep on updating and keep on checking all the files.But node works only whenever we run it.


-->we use different admin and user jwt's

-->we should not repeat the same thing in different files. it is a bad practice
-->or we should not make a circular dependency, like if a variable is writen in one file and exports that and use it in another file. it makes hard to debug sometimes. so do not make a circular dependency.

-->so jwt passwords . put them in a different file called config.js


-->it is a best practice to store mongodb url's to store in separate file called .env file . so that secrets can be kept as secrets
-->along with .env file . we also have .env.example file . this file we can push to git. there is no issue with that.

-->before using this install(npm install dotenv)
-->to use password in .env file . we need to import dotenv file to that particular file and use it



Good to haves
 - Use cookies instead of JET for auth
 - Add a rate limiting middlewares
 - frontend in ejs (low pri)
 - frontend in React


-->four important stacks are: tailwind, react, postgress, prisma


-->if you want to good at UI. build websites like these: heyge.com, stripe.com