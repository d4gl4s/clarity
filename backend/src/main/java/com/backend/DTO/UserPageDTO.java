package com.backend.DTO;

import com.backend.models.Post;
import com.backend.models.User;

import java.util.Set;

public class UserPageDTO {
    private User user;
    private Set<Post> posts;

    public UserPageDTO() {
    }

    public UserPageDTO(User user, Set<Post> posts) {
        this.user = user;
        this.posts = posts;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Post> getPosts() {
        return posts;
    }

    public void setPosts(Set<Post> posts) {
        this.posts = posts;
    }
}
