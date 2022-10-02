using AutoMapper to map objects:
    * after install lets use it:
    go to UsersController.cs

    now we didn't tell our mapper how to map our objects.
    * from the looks on objects[side by side, MemberDto & AppUser], AutoMapper can map properties of the same name, thats easy.
    even if they have different case (lower/upper).
    
    * I want to use Username instead of UserName, (change it in MemberDto.cs [only comment 1])
    
    * about the Age, AutoMapper uses GetAge() to get the age of the user (convention over configuration - methods with 'Get' retuning int, will be used to populate to right property with the right type)
    
    * now I want to give the mapper a challenge, I want a property named PhotoUrl to be the first photo in the collection of photos (go to MemberDto.cs [only comment 2])

    * lets test this in postman, section 8 get all users, and see if it works.
        * ok so good and bad news: the AutoMapper works, we got even the photos, but not the PhotoUrl.

up next configure AutoMapper to map the PhotoUrl property


    
