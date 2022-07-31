create the DbContext (the bridge between our code and the DB)


1. create DataContext.cs
2. add DataContext to our startup class so we can DI it, and add connection string. see Startup.cs
3. next we'll take a look at our connection string and creating the DB based on that 