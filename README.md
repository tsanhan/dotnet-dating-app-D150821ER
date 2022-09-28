make use of the repository:
go to UsersController.cs
can test Get Users and GetUser with postman the user controller: section 8.

why we get photos as null?
    
if we want to get a related collection we have 2 options:
    1. eager loading: go to UserRepository.cs 
        * test the solution: get an error: `A possible object cycle was detected`
        * this is what we call circular reference (user => user.photos => user.photos.user => ...)
        * we will fix this by using another DTO to reshape our data 

up next: Adding a DTO for Members