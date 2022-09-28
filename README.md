getting getting the data in our db:

1. drop our existing db
    * stopping the server
    * running the following command: `dotnet ef database drop`
    * running the following command: `dotnet watch run` to see the magic happen
    * we can see the db is being created with INSERT INTO sql commands
    * check all is fine with sqlite explorer (>sql open database)

2. lets see how we get the users from the API.
    * go to UsersController.cs
3. test using postman: section 8 (make sure to use existing username and checkout the 'test' tab)
    * the data returning is a bit odd because we still returning our user Entities
    * we still getting our salt and hash (this is ok, but we do need to change that)
    * photos are null
    * when trying to get the user, we get an error (this is because we look for id and not a name)

we do have data returning so... YAY!
up next: a bit of redesign of the architecture and take a look at the repository pattern
