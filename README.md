Adding the main photo image to the nav bar:

a small thing that can add to the nav bar: the user profile photo (lets make it the main photo):
for this I want to return the user main photo with the user object:

start with the UserDTO.cs, go there.


then use it in the login method (when they register they don't have any photo yet)
go to AccountController.cs.

next, we use this new property in the client, go to user.ts

just to make typescript happy fix the initial value in jwt.interceptor.ts, go there.

and populate user.ts, lets see in the account service how we use the interface, go to account.service.ts.