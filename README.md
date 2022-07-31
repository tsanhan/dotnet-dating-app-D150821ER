- creating a connection string co connect to DB from our BE
- we have 2 config files.
    * the dev config file is for things we don;t mind other people see.
    * sqlite connection string don;t have any password
    * go to appsettings.Development.json
    * how will we pass the configuration to our options in our strartup class?
    * go to Startup.cs

- to create a DB lets install a tool:
    * go to nuget.org and search for dotnet-ef
    * run the global command (or local if not working)

- now we want to create a migration, what is that?
    *  migration is going to take a look at our classes and create a database schema or the code to create a database based on our code that we've written so far.
    * run 'dotnet ef migrations add InitialCreate -o Data/Migrations' -o: output folder
    * and we got an error.
    * take some minutes to fix this by your selfs...
    * after installing Microsoft.EntityFrameworkCore.Design from nuget gallery, rerun the command

- so now inside Data/Migrations well have 3 files:
    * InitialCreate is the one interest us. these other two files for keeping track of where we are because we can create multiple migrations and update our schema of our database incrementally.
    * lets look inside: goto ..._InitialCreate.cs

- next up: actually creating the DB