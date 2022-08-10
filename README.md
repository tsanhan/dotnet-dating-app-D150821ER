implement basic authentication
- go to AppUser.cs

* in order to make sure our new properties added to the table we need to create a new migration:

* run `dotnet ef migrations add UserPasswordAdded`,
* lets see what we've done, go to => API/Data/Migrations/[date]UserPasswordAdded.cs

* apply the changes to the BS: run `dotnet ef database update` (prom the print we see the changes to our DB)
* to make sure: Ctrl+Shift+p => Sqlite:Open Database => select out db => see the users table