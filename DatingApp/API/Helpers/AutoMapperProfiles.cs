using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        AutoMapperProfiles()
        {
            // we want to map AppUser => MemberDto
            CreateMap<AppUser, MemberDto>();

            // we want to map Photo => PhotoDto
            CreateMap<Photo, PhotoDto>();
        }
    }
}