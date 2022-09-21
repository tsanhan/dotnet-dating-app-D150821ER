adding server error page

lets create the page
1. create `server-error` component in `errors` folder
2. add the component to te route (app-routing.module.ts )

*   now, because our handling in the interceptor was a bit different(adding navigationExtras)
    we want to get this information in the component when it loads
    go to server-error.component.ts 

* normally we would not want to have error component to show our server's stack trace, something more professional should be there (can manage this if querying on what environment we are in)
