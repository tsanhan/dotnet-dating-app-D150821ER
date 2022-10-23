Adding a Can Deactivate route guard:
create the opposite of canActivate, this is bacause we want to help the user not to make a mistake of leaving before saving.

in guards folder create a guard name 'prevent-unsaved-changes'.
go to prevent-unsaved-changes.guard.ts

the guard will not help if we change the url manually, close the tab or the browser, how can we help in these scenarios? 
go to member-edit.component.ts

i know these notifications are not looking so good, we'll see what we can do about it later, now i focus on functionality.

up next: Persisting the changes in the API