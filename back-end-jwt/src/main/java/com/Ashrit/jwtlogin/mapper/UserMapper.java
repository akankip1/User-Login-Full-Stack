package com.Ashrit.jwtlogin.mapper;

import com.Ashrit.jwtlogin.User;
import com.Ashrit.jwtlogin.dto.SignUpDto;
import com.Ashrit.jwtlogin.dto.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
