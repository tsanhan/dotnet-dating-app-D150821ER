adding a photo uploader in the client:

* to add the photo upload component we'll take a look at a ng2-file-upload package 
* npm package is pretty popular.
* we can look at the site: https://valor-software.com/ng2-file-upload
* it gives us a way to upload files to the server, via drop zone, or via a file input.
* we can go over the ts file and see how it works:
    * variables for the dropzone
    * variable for FileUploader object that accept properties and basically that's it.


* ok so run `npm i ng2-file-upload`;
* go to shared.module.ts to add the module
* go to photo-editor.component.html

* ok so we done with the ts part, up next see what we need to do in the template part.
