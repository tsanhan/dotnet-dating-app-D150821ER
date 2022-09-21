import { NavigationExtras, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    // lets inject some things we need to handle our errors
    private router: Router, // sometime we want to redirect the user to an error page
    private toastr: ToastrService // sometime we want to display a toaster notification
  ) {


  }

  intercept(
    req: HttpRequest<any>, // we can either intercept the `request` that gos out
    next: HttpHandler // or the response that comes back in the `next` after handleing it
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe( // this is the default behavior of the interceptor
      catchError(err => { //  will be the response that comes back from the server (if there is an error)
        switch (err.status) {
          case 400: //  2 types of 400: 1. bad request 2. validation error
            if (err.error.errors) { // if there is a validation error
              // model state error - is how these errors known in ASP.NET = {modelName: {fieldName: 'field error message'}}
              const modelStateErrors = [];
              // we flattening the array of errors (class task: make this a online)
              for (const key in err.error.errors) {
                if (err.error.errors[key]) {
                  modelStateErrors.push(err.error.errors[key]);
                }
              }
              // we throw the array of errors so the component can handle it visually (maybe show a list of them)
              throw modelStateErrors.flat(); // we throw the error to the component that called the API
            } else { // if there is no validation error
              // bad request error
              this.toastr.error(err.statusText === 'OK' ? 'Bad Request' : err.statusText, err.status);
            }
            break;
          case 401: // if there is a 401 error
            this.toastr.error(err.statusText === 'OK' ? 'Unauthorised' : err.statusText, err.status);
            break;
          case 404: // if there is a 404 error
            this.router.navigateByUrl('/not-found');
            break;
          case 500: // if there is a 500 error
            const navigationExtras: NavigationExtras = { state: { error: err.error } }; // we pass the error to the error page
            this.router.navigateByUrl('/server-error', navigationExtras);
            break;
          default:
            this.toastr.error('Something unexpected went wrong');
            console.log(err);
            break;
        }
        throw throwError(err)
      })
    )
  }



}
