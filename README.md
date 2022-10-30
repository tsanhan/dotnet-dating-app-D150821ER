 Testing the photo upload:
 
 lets just run the debugger through the code here:
 1. put a breakpoint in in the AddPhoto method
 2. in vscode select the .NET Core Attach => API.exe (or [Project Name].exe)
 3. go to postman: section 11.
    * start with the login
    * use the 'Add photo to user' test: we upload files when we use 'form-data' as the body type, the name of the key is 'File'
    * follow along in the AddPhoto method, go there
 4. the on success the DTO will contain the url, clicking on it will create a GET call there, test it's working.
 5. do the same now, with debugger is off

 6. so all is nice, now we'll return to the return type, 
    * we need to return '201 Created' response with a location header
    * the location header will point to where we can get the resource from wit the the object itself
    * this is important because we don;t have a route to get a separate image/s, they always come as the user's photo collection

up next: Using the 'CreatedAtRoute' method to generate a valid 201 response