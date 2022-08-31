lest start with some basic refactoring using extension methods.
this is for DRY and making methods look cleaner and organized 
And extension methods enable us to add methods to existing types without creating a new derived type
or modifying the original type.

we'll extend IServiceCollection (from startup.cs) to contain all the services

create and goto Extensions/ApplicationServiceExtensions - for all application core stuff
create and goto Extensions/IdentityServiceExtensions - for all identity related stuff
go to startup.cs
