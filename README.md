* just a point: if you use vs 2019 and have problems with running the project: just update to latest vs 2019

we r going to:
1. run our app
2. make sure all is fine
3. look at the proj files


- `cd API`: to go to api proj 
- `dotnet run`: to run the app
- we see 2 addresses 1 of http and 1 of https 
- for the https: the browser must trust the certificate provided with the dotnet sdk
* how can we achieve that? `dotnet dev-certs https --trust`
* this command needs admin permissions
* why the 'This localhost page can’t be found' page? because it's an API project
* in api project we have controllers (a routing endpoints)

- in WeatherForecastController.cs we see '[controller]', the [] is a placeholder for the WeatherForecast (the 1st part of the controller name).
- so go to `https://localhost:5001/WeatherForecast`

* the data is from the api... from the Get method, investigate it a bit...
* we creating a GET api request, and get a list of forecasts 

- never mind the other details.. we'll come back to this.

- lets see how the app starts:
1. every .net app has a Program.cs class, in it there is a Main method.
2. every .net runtime run (using dotnet run command) it looks for this (Main) method.
3. inside CreateHostBuilder method, hover above CreateDefaultBuilder method, that tell us what is does.
4. part of what it does is load out configuration.
* there are several places for it:
    one of witch is the appsettings.json file in our app.

* inside this method it tells up what else to use when starting our app (points to Startup class)

* in there we have: 
1. config being injected
 * lets see this config:
 * go to appsettings.Development.json.
 * the logging is to high (microsoft)
 * change it to Information
 * after restarting the app we'll get more info when calling the API
 * this is a good thing so we can get more info if something gos wrong 

back to Startup.cs:
1. 2 methods: ConfigureServices and Configure
    * ConfigureServices is also called 'DI container': making a class/service available in other areas of our app, we write them here, .net will create and destroy them as needed.

    * Configure method is to configure the HTTP pipeline.
    the trip from browser to api endpoint (and back) is through middleware:
        1. if in dev mode and got problem, use dev exception page
        2. if we come from http, we'll be redirected to https
        3. setting up routing (as we saw)
        4. setting up Authorization (not doing much right now)
        5. using endpoint using the controller mapping (the actual  `[Route("[controller]")] => [HttpGet]` to router mapping)

- last file to talk about: launchSettings.json
when we 'dotnet run' our app it looks at:
"API": {...} to see what we should use.

- we can use `dotnet watch run` to restart the app on every file save

we run over the files in a brief matter, we'll be coming back to these files! 

for those of you using git you can run `dotnet new gitignore` to create a gitignore for all the file you want git to ignore