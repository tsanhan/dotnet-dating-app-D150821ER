using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using API.Errors;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;
        private readonly IHostEnvironment _env;

        public ExceptionMiddleware(
            RequestDelegate next, // this is the next middleware in the pipeline
            ILogger<ExceptionMiddleware> logger, // we still want to print the exception to the console
            IHostEnvironment env) // we want to know if we are in development or production
        {
            this._next = next;
            this._logger = logger;
            this._env = env;
        }

        //the required method to handle the exception
        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context); // if there is no exception, we just pass the request to the next middleware
            } catch (Exception ex) {
                _logger.LogError(ex, ex.Message); // we log the exception
                context.Request.ContentType = "application/json"; // we set the content type to json
                context.Response.StatusCode = (int) HttpStatusCode.InternalServerError; // we set the status code to 500

                
                var response = _env.IsDevelopment() // if we are in development, we return the exception message
                    ? new ApiException(context.Response.StatusCode, ex.Message, ex.StackTrace.ToString())
                    : new ApiException(context.Response.StatusCode, "Internal Server Error"); // if we are in production, we return a generic message
            

                var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase }; // we set the options for the json serializer
                var json = JsonSerializer.Serialize(response, options); // we serialize the response

                await context.Response.WriteAsync(json); // we write the response to the body
            }
            
        }
    }
}