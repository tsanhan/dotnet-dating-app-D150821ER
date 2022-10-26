Configuring cloudinary in the API:
1. install CloudinaryDotNet from nuget
2. setting up the configuration, go to appsettings.json (we should not store appsettings.json in github)
3. I want to make class out of these configurations, so create and go to Helpers/CloudinarySettings.cs
4. in order to strongly type a configuration, we need to configure it. go to ApplicationServiceExtensions.cs

up next: creating a service to work with cloudinary, uploading a and deleting