populating the right hand side:
* we'll use ngx-bootstrap's tabs module (https://valor-software.com/ngx-bootstrap/#/tabs)
* can look at the doc in the link above.
* go to shared.module.ts
* go to MembersModule to add the shared module
* add the tabs to the component, go to member-detail.component.html

because tabs is a an encapsulated component, we can effect the inner style using the global style.css
(other way can be played with, like ::ng-deep) 
* copy from StudentAssets/snippets/member-tabs-css.txt, and paste to styles.css

up next: Adding a photo gallery
