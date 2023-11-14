package com.backend.controllers;

import com.backend.DTO.UserPageDTO;
import com.backend.models.Post;
import com.backend.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public UserPageDTO[] findAll(){
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public UserPageDTO findById(@PathVariable Long id){
        return userService.findUserInfo(id);
    }
}
