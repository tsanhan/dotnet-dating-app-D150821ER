ok so now that we can issue a token
 we can authenticate it in our authentication middleware so we can authenticate user requests.

go to UsersController.cs 

test with postman: GetUsers works, GetUser does not so we need to add a middleware so we could authenticate with out jwt

add package:Microsoft.AspNetCore.Authentication.JwtBearer by Microsoft
and go to startup.cs

we can see there is a difference in the response for GetUser, now we get 401 - unauthorize
why do you think that is?
because we need to actually send the token with the request... duaaa 😆
pay attention to the 'Get User With Bearer token': we need to add a header with key 'Authorization' and the value starts with 'Bearer', space and the token
so lets copy the token from the response (in login) and pasted it the headers in the 'Get User With Bearer token' call in postman
and walla...

removing/changing even one letter will result in 401 

that's it for authentication for now (we'll come back to this latter in the module)
next up: extension methods