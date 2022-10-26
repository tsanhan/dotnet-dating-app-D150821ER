Introduction:
we will learn and understand:
1. photo storage options: there are different options like : local, BE, and cloud storage
2. adding related entities to a photo: these entities are related to a user
3. using 3rd party API: this will help us with our photo storage need.
4. using the debugger, again, because the logic here will need a closer look 
5. updating and deleting resources
6. what to return from a 'create' operation in a REST based API
    * REST: representational state transfer, a way to transfer data between clients and servers, it's a architectural style that uses HTTP verbs to communicate with the server and clients.
    * HTTP: Hypertext Transfer Protocol, a protocol that allows you to send and receive data over the internet.
    * verbs: GET, POST, PUT, DELETE, PATCH, OPTIONS
    * at the end REST is a set of restrains (conventions) over how we use client - server communication 
    * so we will learn and implement REST in our API (REST service)

* ok, so our choices for photo storage:
    1. DB: as binary large objects (BLOB) ❌
        * - not efficient,
        * + but easy to use
        * - takes up a lot space: not good when we deploy our app and need to pay for that space
        * - we need to pay for the space, storage, bandwidth, etc.

    2. local file system:                 ❌
        * + are efficient, easy to use and cheep. file systems are optimized for storing binary data
        * - local file system storage (or cloud based file system) is not infinite.
        * - one other thing to worry about and write logic for this server (like aspect ratio, etc.)
  
    3. cloud service:                     ✔️
        * + no disadvantage as to space, logic written, etc.
        * ~ basic plan is free, will cost more if we use lots of storage (pay as u go)
        * + using service's logic for the aspect ratio calculation ( we'll use only squares )

* ok so we'll be using Cloudinary(https://cloudinary.com/) for our photo storage.
* they have free tier of 10gb free storage.
* they provide a method to be used in our BE to upload photos to their service.

* so the process will be:
1. upload photo to BE with JWT
2. server upload photo securely to cloudinary (we'll see how to do this)
3. cloudinary stores the photo and send response
4. server save photo url & public Id to DB
5. saved in DB and given outo generated ID
6. 201 Created Response sent to client with the object that was created and a 'location' header (the location of the resource photo (the url)), by spec https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201

     client     BE     cloudinary
            1 ➡️    2 ➡️
            ⬅️ 6    ⬅️ 3           
              ⬆️  4        
              5  ⬇️
               DB