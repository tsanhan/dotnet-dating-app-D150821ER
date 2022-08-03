so we are going to fetch data from our api
* add module => go to app.module.ts
* angular uses DI the way .net core uses it.
* go to app.component.ts

* after running check out the browser to see result
* no data (it's ok, we didn't interpolate 'users')
* we DO have errors:
* we do go to the error part with the printing of the error response
* but WTF is CORS?
    - the server tells the browser that it accepts requests only from same origin (url+port)
    - the browser is the one enforces the policy
    - https://www.youtube.com/watch?v=4KHiSt0oLJ0

next up: adding cors to our API