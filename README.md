we'll create some additional components (so we have components to route to)

1. create a `members` folder inside `app` folder, and there create components: `member-list` and `member-detail`
2. in `app` folder create components: `lists` and `messages`

we have app-routing.module.ts because we said `yes` when creating the project on `do you want routing
this module is imported in our app.module
go to app-routing.module.ts 

after creating the route we need to specify where we'll show them,
we need router-outlet for that
go to app.component.html

next up: adding the nav links above