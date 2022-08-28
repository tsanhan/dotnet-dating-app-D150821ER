JWT: token authentication
*   not for session state, for client-server

stateless communication
* tokens are good for that communication:
    - they are small enough to sent on every request

what are JWT (json web tokens)?
lets go to jwt.io
 - they are self contained
 - can contain credentials(username, password, other stuff), claims (i am an admin etc..), other stuff (email, link to photo, etc)

* structure:
- basicity a long string, separated to 3 parts with a period(.) :
    1.  the header (base 64 encoded - not secured): contains the algo and type of token
        * the algo used to encrypt the signature (3rd part)
    2. the payload (base 64 encoded - not secured): contains claims and credentials:
        * (name id, username, roles, claim (who the user claim to be))
        * 3 time stamps: 
            * iat: issued at
            * nbf: not before
            * exp: expiry date
    3. the signature (encrypted - secured): the server encrypt the signature using a secure key that never leaves the server
 * so we cant modify the token in any way because the server will see that the header + payload + encryption with secret key != signature 

 * so how token auth works?
 1. user ==> login (w/ usr+pass) ==> server
 2. user <== validate credentials and return jwt <== server 
 3. user ==> send jwt(usually stored in local storage, added to authentication header) with every request (auth protected data) ==> server
 4. user <== server verify the jwt and respond <== server

benefits:
1. no session - jwt are self contained
2. portable - 1 jwt can b used with many backends (share same secret key)
3. no cookies - (cookies are stored data related to a domain, for more info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies ) mobile friendly (mobile phone do not deal with cookies)
4. performance - once jwt issued, no need for db requests for user auth

next up: implement jwt in our app

