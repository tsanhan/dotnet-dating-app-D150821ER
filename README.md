issuing JWTs:

* we will create a service for creating JWTs (Single Responsibility Principle)
the service will receive an AppUser ad create a token for it.

* the issuing will be done by the account  controller

* for the service we'll create an interface (in the new interfaces folder),
* an interface is a contract that states that whoever implement the interface will implement it's properties, methods and/or events
* interface does not have any logic, only signatures

* go to interfaces/ITokenService.cs
* go to services/TokenService.cs

