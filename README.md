ok. so now that what we have a migration, well update our db.
inside the API project run `dotnet ef database update`.
* point something: before e the db created we build our app, so if you get a build error, make  sure you stopped the app
* when we look @ the Info's in the console we see:
    - creation of __EFMigrationsHistory table: keeping track of migration being applied
    - creation of a Users table: with re relevant columns
    - inserts into the __EFMigrationsHistory table the name (date encoded) with the runtime

* so how to check the data?
 - install sqlite for vscode extension
 - ctrl+p => sqlite open database => select the file
 - on the left explorers, 'sqlite explorer' appeared

* lets insert some data in a simple way (more advanced ways will come later on)
 - so right click on table and new query [insert]
 -  insert values (1,"Bob"), (2, "Avi"),(3, "Nil")
 - right click => run query
 - right click on the table => show table

* next we'll create an API controller to fetch that date to return it to the user