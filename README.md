building global exception handling middleware:

the goal of this middleware is to catch all exceptions and return a response in standard way.
create an `Errors` folder and ApiException.cs file in it.
go to ApiException.cs;


create an `Middleware` folder and ExceptionMiddleware.cs file in it.
this will be our middleware class.
lets see how we build a middleware in .net core.
do to ExceptionMiddleware.cs

use the middleware in Startup.cs, go to Startup.cs


