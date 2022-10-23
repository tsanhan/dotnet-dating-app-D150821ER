using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            // we want to map AppUser => MemberDto
            CreateMap<AppUser, MemberDto>()
            .ForMember(
                dest => dest.PhotoUrl,
                opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url);
                })
            .ForMember(
                dest => dest.Age,
                opt => {
                    opt.MapFrom(d => d.DateOfBirth.CalculateAge());
                });

            // we want to map Photo => PhotoDto
            CreateMap<Photo, PhotoDto>();

            // we want to map MemberUpdateDTO => AppUser
            CreateMap<MemberUpdateDTO, AppUser>();
        }
    }
}