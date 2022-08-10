self signed certificate is a mess... 
what are certificates in the first place?
I'll provide a certificate, how to make the browser to trust it?

* in StudentAssets/generateTrustedSSL folder we have server crt and key to our angular config
* instructions inside Instructions.txt

* create folder DatingApp/client/ssl 
* copy server crt and key to the folder

* tell angular to use the certs
* go to angular.json and edit the projects > client > architect > serve > configurations > production + development keys, and add the "sslKey", "sslCert" and "ssl" keys
* restart the client app

* in browser, got secure connection, no errors, but also no data... fix this[5 min]
*  