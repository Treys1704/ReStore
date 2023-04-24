using System;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound() {
            return NotFound();
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest() {
            return BadRequest(new ProblemDetails{Title= "This is a bad request"});
        }

        [HttpGet("unauthorized")]
        public ActionResult GetUnauthorize() {
            return Unauthorized();
        }

        [HttpGet("error-validation")]
        public ActionResult GetValidationError() {
            ModelState.AddModelError("Problem1", "This is the first exception");
            ModelState.AddModelError("Problem2", "This is the second exception");
            return ValidationProblem();
        }

        [HttpGet("server-error")]
        public ActionResult GetServerError() {
            throw new Exception("This is a server error");
        }

    }
}