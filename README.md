Updating the user in the client app:
go to members.service.ts

now there is something odd here:
* as soon as we update the user we get a response, with almost no delays,
* this is not the case when we update the user in the server

so up next we'll add some fake delays to the requests and see that we need some loading indicators