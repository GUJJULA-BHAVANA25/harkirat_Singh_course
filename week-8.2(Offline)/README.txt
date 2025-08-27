data is stored at central place that is database.
-->if it get lost. we cannot retrieve it. so data replicated at different palces.

-->for example, take linkedin, you want to get feed ,then your browser hit a express (auth checks) http request (that check whether you have all access to the database). Then it hit the database and gets the data for you.
-->so here why do you need http request in middle, why don't you directly get access to database. because if you directly have access to the database . then you will have access to whole database, not just one that is related to you.
-->but we have firebase database.that let you get rid of http server. it will provide you granola access


Database: 4 primitives(CRUD)
 - create
 - read 
 - update 
 - delete


 -->mongo is schemaless
 -->sql and postgress sql does not let you put transitive nested objects like this

-->findById() - to find the user using an id 
-->findOne() - find a user 
-->find() - find all the users
-->updateOne() - to update particular data of a user
-->update()
-->create()
-->deleteMany()



-->3 parts:
 -cluster
 -database
 -table


-->Bearer in front of authorization token. (good practice)
-->jwt makes our life easier, as jwt decodes the username and check it in the memory itself. doesn't reach the database. it decreases one database call


--> three things that middlewares do:
 -end the request
 -forward the request
 -pass data to the next middleware
 