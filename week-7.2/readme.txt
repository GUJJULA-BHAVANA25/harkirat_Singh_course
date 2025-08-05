notes:
https://petal-estimate-4e9.notion.site/Databases-and-MongoDb-1017dfd107358065a996cda5ed89682e


-->whenever we are working with passwords .and we should not directly push them to the database. we need to hash them first and then we need to push them.this is not excription. 
-->in signup, the passwords are converted to unique string using hashing 
-->in signin, the passwords that is entered by user is hashed again and checks whether it has match in database or not.
-->now we have a downside of this hashing.that is if we have different email id and same password then hashed thing is also same. then with which mail id we need to map this password.

-->here salting comes into the picture. in general , we use salt at the last of a food item .Likewise the password will have a random string .then this is hashed to another string . and then email id , hashed password and salt all three are stored in the database. 
-->in signin process, when an email id entered, we'll get the stored salt string and at last of password this salt is added and then it is hashed and checked in database whether it matches to the entered password.




in index1.js we need to use zod library. To install it in the terminal type "npm install zod"

(index_zod.js)
-->defining the schema is step 1
-->parsing the data is step 2