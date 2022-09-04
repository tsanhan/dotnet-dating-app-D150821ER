we'll add more components to our basic user interface

* we'll start with a navbar component 
* `ng g -h` : things we can do
* we want a component in the app folder so cd to there
* and run `ng g c nav --skip-tests` -  creating nav component in a folder(take a look), skipping test, updating app.module (take a look).
* we create the html in nav html using code we'll take from bootstrap's site.
* from the examples (https://getbootstrap.com/docs/4.6/examples/), we;ll pick 'Carousel' (https://getbootstrap.com/docs/4.6/examples/carousel/)

* so when we inspect the page we can grab the <nav> in the <header> and paste in the nav component
* go to nav.component.html do to that


* place nav component in app component, go to app.component.html

* we'll edit some stuff in the nav component, go to nav.component.html

* the nav is positioned fixed to the top, we need to create a margin top for the content, go to app.component.html

next up: angular template forms

