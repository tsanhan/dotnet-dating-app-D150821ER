using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    
    public class UsersController : BaseApiController
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;

        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUser()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(item => item.Id == id);
            return user;
        }
        [HttpPost]
        public async Task<ActionResult<AppUser>> Insert(AppUser AddUser)
        {


            await _context.Users.AddAsync(AddUser);
            _context.SaveChanges();
            return AddUser;
        }
        [HttpDelete]
        public async Task<ActionResult<AppUser>> Delete(int id)
        {


            var DeleteUser = await _context.Users.FindAsync(id);
            _context.Remove(DeleteUser);
            _context.SaveChanges();
            return new OkResult();

        }
        [HttpPut("{id}")]
        public async Task<ActionResult<AppUser>> Update(int id, AppUser AddUser)
        {


            var todo = await _context.Users.FindAsync(id);

            if (todo is null) return new NotFoundResult(); ;

            todo.UserName = AddUser.UserName;


            await _context.SaveChangesAsync();

            return new NoContentResult();

        }

    }
}
