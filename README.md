- inside 'client' folder, running `ng serve` to run the project
- this wil start out angular dev server, compile out ts file to js and serve them from memory.
- when done the server will have an endpoint on port 4200 and we can see the js files that ware created

- lets go to the browser to see what we have there
- lets see what is responsible for displaying that thing in our page:
    * starting from index.html (can change the <title></title>)
    * what is app-root?
    * no js in sight but in devtools we have the js files
    * what is happening in the background?
    * these files are injected into our page, how? angular uses webpack, don't worry about it for now
    * so what bootstrapping our app?
    * the app.component has app-root inside a Decorator (a configuration for classes to have superpowers) named @Component
    * angular uses components - building blocks for building ui
    * component structure
    * delete the content from app.component.html
    * go to app.component.html
    * go to app.component.ts
    * so how AppComponent getting bootstrapped? 
    * every app have to have at leased 1 angular module (not ES module), our AppModule declares our components (using an array)
    * our module can import other modules to use.
    * and it bootstrap our component using another bootstrap configuration
    * how what bootstrap the bootstrapper 😉? 
    * this is the main.ts and this is one of the files webpack is providing us with in index.html
    * we wont go too deep, it's boring
    * but because we using ts we have tsconfig.json to give ts it's configuration.
    * one this there, experimentalDecorators => that's how we can use decorators.
    * one other thing, target => the code will be compiled to ES2015, 
        * if an older browser will try to access our aoo angular will see that and give the browser an older version
    
    * angular.json is kind of configuration for the our angular app and webpack (this is where we can add some scripts and styles)

next up: some extensions for using angular efficiently with vscode 



