using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }


        //  this is 'fully defining' a relationship
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }
    }
}