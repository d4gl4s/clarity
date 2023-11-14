package com.backend.repository;

import com.backend.models.Post;
import com.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;


@Repository
public interface PostRepository extends JpaRepository<Post, Long> {


    Set<Post> findByAuthorsIsContaining(User user);

    @Query("SELECT p FROM Post p JOIN FETCH p.contentBlocks b WHERE p.postId = :postId ORDER BY b.orderNumber")
    Post findPostByIdWithOrderedBlocks(@Param("postId") Long postId);
}
