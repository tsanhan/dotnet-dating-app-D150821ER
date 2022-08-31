go to AccountController.cs

if we try it now we'll get an error because we need to token key in the configuration (remember? in the constructor in the token service)

go to appsettings.Development.json

test with postman: login
if we take the returned string and go to jwt.io and use the debugger to see our token, the expiry
we can verify the signature by pasting our super secret string, if we get the save token then the secret string is correct (the server got the token without change by the front end).

next up: how do we authenticate and validate the token is good.

