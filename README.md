lets talk about DTOs
    * we need out username & password to be an object in the Register method.
    * another reason is to return relevant data (our AppUser has too much data we don't need to the FE)
    * what other uses DTO have? (
        1. Flatten objects, 
        2. Reorder them,
        3. Hiding props from an entity that maps to DB, 
        4. Relationships between entity to another one and back can cause circular referencing )
    * lets start with just fixing the Register method issue
    * rceate DTOs Folder and go these...


- use postman to retest the api:
    * first time is success (we still recieving the password hash and salt, we'll fix this a bit later)
    * second try should fail, no matter if the name is in capital (partly or fully) !
    * BUT if we change the name to "" it's working...

- next up: fixing this, and validation