publish to github:
why use source control?
1. backup
2. version control: history
3. sharing our code (with others of yourself on another computer)

* install git from git-scm.com.
* set an account at github

go to solution folder with the terminal:
if you have git install: `git status`
if there is no git repo then `git init`
vscode listed lots of changed to stage and commit but we don't need all of those
inside  `dotnet new --list` output there is 'gitignore' to create a file for git to use to know what to ignore
run `dotnet new gitignore`... see how the number of changed dropped?
inside .gitignore we can spot '[Bb]in/': that is the bin folder in different variations.. among other things

lets exclude appsettings too. there is no secrets there now but we'll add API keys later, and we don;t want those to be public

so just add appsettings.json to the end of the list

click on the + button in the source control menu in vscode. this will state all the changed.
write some commit message and we can press ✔ or just click on the ... button and 'commit'

- create a repo in github
- follow the instruction on 'new repository'
- if the push returns an error, we can use vecode to 'push to' and vscode will ask us for a password
- after the push make sure the code is in github

