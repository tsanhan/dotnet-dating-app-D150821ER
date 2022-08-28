adding the login method.
* go to the AccountController.cs
* test with postman: login endpoint, wrong username, wrong password 
* at this point we can clean our db by dropping and recreate it. so stop the app and run `dotnet ef database drop` and recreate it from our migrations, run: `dotnet ef database update`
* start the dotnet app and register a new user (from postman)
* make sure we can login with the new user

ok so we have login and register, but how can we authenticate?

next up: what we use to authenticate with our API?
