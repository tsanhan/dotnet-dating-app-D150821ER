so we want to create a controller for login/register
looking @ our UsersController we see that:
1. all controller wil have [ApiController] and [Route] annotations
2. ControllerBase inheritance


so for the sake of DRY we'll create BaseApiController.cs (go to file)
and use it to derive from our UserController

make sure all is fine using postman 
    * can start using postman collections:
    * import => select from StudentAssets the postman collection

next up: create account controller for register/login