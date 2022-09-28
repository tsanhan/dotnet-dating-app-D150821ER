Entity Framework relationships:

ok so we extended our AppUser entity and we have a relationship between it and our Photo Class

this is a 'One to Many' relationship

lets see what EF gives us conventionally (we do nothing).

now, in our DataContent Class we have a DbSet of our users
do we need another DbSet for our photos?
we CAN have a DbSet of photos...
lets think what we'll be doing with photos:
* a user can have many photos
* we'll add photos to user's photo collection
* we'll query for photos of a specific user
* we won't query for photos independently

but I want the Photo entity to be called 'Photos' in the Database.
we can insure that: go to Photo.cs

so what EF give us with what we did so far?
* did not added nothing to DbContaxt
* we did added some properties to AppUser

ok so migration:
* stop dotnet if running
* in the API folder run command `dotnet ef migrations add ExtendedUserEntity`
* lets see what we have in Data\Migrations\[date]ExtendedUserEntity.cs:
    1. we have our column operations
    2. the intersting part of the migration: we adding a nwe table named 'Photos'
    3. here we have 5 columns (not 4), why is that?
        * Id is an Autoincrement field
        * we don't have AppUserId in the Entity, but ef recognize the relationship  
    4. we have a foreign key constraint created for AppUserId but AppUserId is nullable is not good, why? (all photos are related to some user)
    5. other thing, ReferentialAction.Restrict means if we delete an AppUser, we don't delete it's photos (also not good)
    6. so... how we fix 4 and 5?
        we can fix this manually or we can still with conventions
        lets stick with conventions

* we don't want this migration so we run the command `dotnet ef migrations remove` to delete the migration files
* in order for fix the 4+5 issues we do a 'fully defining' the relationship
* we'll need to tell Photos entity that it is related to AppUser
* go to Photo.cs

lets repeat the migration: run command `dotnet ef migrations add ExtendedUserEntity`
go to [date]ExtendedUserEntity.cs to see the changes.

apply the changes: run command `dotnet ef database update`
make sure all there in the db, run `>SQLite Open Database` and see the changes

up next: populate the db with some data
