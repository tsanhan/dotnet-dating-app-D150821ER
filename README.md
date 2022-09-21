we'll use http interceptor to handle error globally in angular

create a folder `interceptors` and create file `error.interceptor.ts` (can use schematics for that)

go to file error.interceptor.ts and explain what we see there

we do have couple of pages to create (not-found && server-error)
but we can test the interceptor in the web: 
500: navigate to server-error
400 validation: print errors
400: toastr
401: toastr
404: navigate to not-found

up next: displaying the server validation errors