how to store passwords in our DB?
say our DB was hacked.
option 1: clear text 🤣
option 2: do something with the password before storing it.

- the password is sent to our API in clear text but it's ok, we got ssl to encrypt the data from the client.
- about option 2: we could hash (one way encrypt) the password:
* what do you think? is it good enough?
- scenario: Bob & Tom use same pass => same hash, if an attacker get Bob's pass, he got Tom's too.
- same pass + same algorithm = same result
- in reality there are plenty dictionaries with passwords and their hashes in different algos, an attacker can look for the hash in a dict 

option 3: hashing and salting:
- a salt is a way fot the hashing algo to scramble the hash, so now we store 2 things:
  1. passwordHash (after scrambling)
  2. and passwordSalt (a randomized string)

- so now to create the hash we encrypt it AND scramble with randomized string - so no turning back
- we store the salt, yes, but later we'll refactor and get rid of it.
- this is what we'll do, but there is better - later.
- this is to show the concepts of authentication, not bulletproof, this is say.. one step above storing pain text 😅

- later we'll use asp.net identity (it's magic, it's secured. as developers, I want you to understand some authentication before using it)
