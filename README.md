Using AutoMapper queryable extensions:
    well all is good and we returning the data.
    it also wasn't so hard to do...
    so... are we doing the right thing here?
    some say if it's easy it's not optimal... we can argue...
    there is a saying in Computer Science:
        "Premature Optimization is the root of all evil"
    it's all talk but one thing is for sure you can defiantly optimize if it's some quick stuff and the code stay clean and understandable.

    if we take a look at UserRepository.cs @ GetUserByUserNameAsync method, we getting an entity (lot's of fields we might no need) and from memory (in the BE) we convert it to a DTO, can be a subset of these fields.

    we can say that we better select our properties and let the DB return us the DTO itself, and not an entity, let the DB do the mapping and the conversion to DTO.
    
    but we will still will need to do the mapping and we don't want to, it's lots of work 😅

    lets see what we CAN do.
    go to IUserRepository.cs

ok so we managed to create a query of specific properties, and make our query more efficient.

thats not all the efficiency we can get but it's fine for now

notice in UserRepository.cs @ GetUserByUserNameAsync we don't need the .Include(x => x.Photos) anymore. with the help of AutoMapper, EF will figure out it need to join the table and build the query needed when we use Projection .