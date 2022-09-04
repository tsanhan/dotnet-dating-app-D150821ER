observable (persisting the login is up next):
explain observable:
1. a new standard for managing async data
2. introduced in angular 2
3. they are lazy collection of multiple values over time
4. think of it as a newsletter
    * only subscribers receive the newsletter 
    * if there are no subscribers, there is no print

    promises        vs      observable:
-----------------------------------------------
1.  single future           multiple values
    value                   over time 

2.  not lazy                lazy

3.  can not cancel          able to cancel

4.  not part of an          can be used with  
    ecosystem               operators (pure functions)
                            like map/filter/reduce/etc 
                            using rxjs (external library- part of angular)
                            and pipe

5.  2 events:               3 events:
    response or reject      next, error, complete

up next: we'll be creating our own observable to persist the login;