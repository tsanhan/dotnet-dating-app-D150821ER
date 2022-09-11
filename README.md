Adding a toast service for notifications:

we'll use a package: ngx-toastr:
0. first thing: stop the app.
1. install https://www.npmjs.com/package/ngx-toastr
2. as the documentation says: we should add  some styling, go to angular.json
3. as the documentation says next: we should add the module, go to app.module.ts

4. use the toastr: go to nav.component.ts and register.component.ts
    * test by trying to register to non existing user
    * try to register with blank username and password... why the [object Object]?
    * this is because there is an object there but toastr display strings
    * we can investigate the error manually by following the data coming in from the API to the Observer 'error' callback 
    * during the module we'll use a better error handling way, in the meantime, just open the console to see the error in you get [object Object]

up next: route guards (protecting links and prevent users to access them without authorization)
