the repository pattern: 
    so what we are going to do is this:
    ``
    this is what we have now:
    `web server` (we have our web server and request coming in to our controller)
        ⬆️⬇️
    `controller` ⬅️➡️  `DbContext` (in our controllers we inject DbContext - represent a session with our database)
                        ⬆️⬇️    (the DbContext is used to query our database)
                     `DataBase`  
    
    
    what we want to do is this:
    `web server` 
        ⬆️⬇️
    `controller`   `DbContext`
        ⬆️⬇️      ↙️↗️     ⬆️⬇️
    `Repository`   `DataBase`

    the Repository is a layer of abstraction: the controller will not be going to the DbContext directly, but to the Repository.
    the Repository will be responsible for the communication (implement the logic) between the controller and the DbContext.

    some say this this unnecessary, and DbContext is acting as "unit of work" (we'll talk about it later) and the DBSet is the "repository"

    we can use the Repository pattern and we'll se why it's useful.
    why? 

    advantages:

    1. encapsulation of the logic: dbContext can do everything (dbContext has dbSets, each has 1000s of methods), but Repository will be able to clearly expose the methods that we need.
        * dbContext: 
            Users.First(), 
            Users.FirstOrDefault(), 
            Users.SingleOrDefault(), 
            Users.Include(x => x.Thing).FirstOrDefault()
            + 1000s of methods
        * Repository:
            GetUser(),
            GetUsers(),
            UpdateUser(),
            SaveAll()

    2. DRY: reduces duplicate query logic:
        * if I need to query for users and use the result in deferent controllers (one controller is for Users, and another is for messages and another is for Likes)
        * the Repository will expose a method that query for users

    3. it helps with testing (we can mock the repository (we'll inject IRepository) and test the controller without having to actually query the database - the mock will return the data we want)
    
    4. we can change the ORM (nobody does that 🤣)

    disadvantages:
    1. it's an abstraction of an abstraction
    2. every entity should have it's own repository => more code
    3. we'll inject different repositories into the controllers, 
        later on we'll see how to deal with that: (spoiler: "Unit of Work" pattern to control all of these transactions)
        