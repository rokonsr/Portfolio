using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApi.Data;
using MyApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;

        public ValuesController(DataContext dataContext)
        {
            _context = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Value>>> GetValues()
        {
            return await _context.Values.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Value>> GetValues(int id)
        {
            return await _context.Values.FirstOrDefaultAsync(x=>x.Id == id);
        }
    }
}