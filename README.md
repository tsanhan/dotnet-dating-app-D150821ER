exporting to a shared module:
the app.module.ts can become really large, lets see what we can do about it.

- we'll create a core module (for the basic stuff)
- we'll create a feature module (for feature related stuff)
    * we want to enable lazy loading (we download the code only when needed)


* create modules folder
* create a 'members' module there
* create a 'core' module there
* go to core.module.ts:
* go to members.module.ts: