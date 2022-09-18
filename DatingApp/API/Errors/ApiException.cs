using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Errors
{
    public class ApiException
    {
        public ApiException(int statusCode, string message = null, string details = null) // = null means optional
        {
            StatusCode = statusCode;
            Message = message;
            Details = details;
        }
        
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string Details { get; set; } // this will be used to return the stack trace
    }
}