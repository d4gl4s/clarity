package com.backend.services;


import com.backend.DTO.UserPageDTO;
import com.backend.models.Post;
import com.backend.models.User;
import com.backend.repository.PostRepository;
import com.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PostRepository postRepository;

    public UserService(UserRepository userRepository, PostRepository postRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }


    public UserPageDTO findUserInfo(Long id) {
        User user = userRepository.findById(id).orElseThrow();
        Set<Post> posts = postRepository.findByAuthorsIsContaining(user);
        return  new UserPageDTO(user, posts);
    }

    public UserPageDTO[] findAll() {
        return null;
    }
}
