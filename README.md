Adding loading indicators:

so the problem (that is't a problem) we'll fix now to make our API slower:
* install a package for loading indicators

1. install ngx-spinner (https://www.npmjs.com/package/ngx-spinner), look ad the readme, we can install via ng add ot npm
2. make sure the module is imported (and exported), go to shared.module.ts

3. we'll create a service to help up with this, create a service called 'busy', go to busy.service.ts

4. ok so it's all working great, now I have an issue with this constant API fetching
    * hmm... do I REALLY need to load the users EVERY SINGLE TIME, right?
    * I want to store some data in the service so there won;t be so much API calls.
    * what will bee stored will be called 'state'

up next: Using the service to store state

