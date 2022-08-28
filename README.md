using debugger:
1. put breakpoint (🩸)in the `using var hmac...` line AccountController.cs
2. in .vscode we have launch.json & tasks.json
    * in launch.json we have 2 configs, these r for the debugger. 
    * if u don't have launch.json or the options: `Ctrl + Shift + p` > `generate assets for build and debug`
    * the 1st is to start the app in debug mode and the 2nd is for attaching to an existing process

3. make sure our app is running > debug tab on the left > .net core attach > look for `api`
4. now we can go to postman > 'Register user', run it and see that we stopped execution
    * we can inspect variables as they being populated
    * [explain 'continue', step over/into/out] 
5. we see the arguments are 'null' (mouseover) our register method
    * if we send a body in a request, we need to set it up as an object! 
    * and what we have is 2 args 
    * the problem is not in the username (a string can be null), the problem is when we want to het bytes from null...