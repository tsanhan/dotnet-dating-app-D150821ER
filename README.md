adding CORS to our API.
* ok. so we are currently run our API on 5001 and our client on 4200 - not same origin.
* we can't fetch data 
    - unless using JSONP: lean @ home by yourselves
* this is not allowed unless our API says it's ok via a header

* go to Startup.cs

* after refreshing the page (if needed then also the BE) the error is gone.
 - can view the call in Network in DevTools to see the data and the CORS allow header in the Response





