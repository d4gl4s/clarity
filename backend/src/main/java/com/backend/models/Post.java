package com.backend.models;

import jakarta.persistence.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "posts")
public class Post {
    @Id
    @SequenceGenerator(name = "post_sequence", sequenceName = "post_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "post_sequence")
    @Column(name = "post_id", updatable = false, nullable = false)
    private Long postId;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "post_block_junction",
            joinColumns = {@JoinColumn(name = "post_id")},
            inverseJoinColumns = {@JoinColumn(name = "block_id")}
    )
    private List<Block> contentBlocks;

    @Column(name = "share_count", nullable = false)
    private int shareCount;

    @Column(name = "date_created", updatable = false, nullable = false)
    private String dateCreated;


    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_post_junction",
            joinColumns = {@JoinColumn(name = "post_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")}
    )
    private Set<User> authors;

    @Column(name = "topics", nullable = false)
    @ElementCollection
    private Set<String> topics;

    @Column(name = "category", nullable = false)
    private String category;


    public Post() {
    }

    public Post(String title, String description, List<Block> contentBlocks, Set<User> authors, Set<String> topics, String category) {
        this.title = title;
        this.description = description;
        this.contentBlocks = contentBlocks;
        this.shareCount = 0;
        this.dateCreated = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
        this.authors = authors;
        this.topics = topics;
        this.category = category;
    }

    public Post(String title, String description, List<Block> contentBlocks, User author, Set<String> topics, String category) {
        Set<User> authors = new HashSet<>();
        authors.add(author);
        this.title = title;
        this.description = description;
        this.contentBlocks = contentBlocks;
        this.shareCount = 0;
        this.dateCreated = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
        this.authors = authors;
        this.topics = topics;
        this.category = category;
    }

    @Override
    public String toString() {
        return "Post{" +
                "postId=" + postId +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", shareCount=" + shareCount +
                ", dateCreated='" + dateCreated + '\'' +
                ", contentBlocks=" + contentBlocks +
                ", authors=" + authors +
                '}';
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public int getShareCount() {
        return shareCount;
    }

    public void setShareCount(int shareCount) {
        this.shareCount = shareCount;
    }

    public String getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
    }

    public List<Block> getContentBlocks() {
        return contentBlocks;
    }

    public void setContentBlocks(List<Block> contentBlocks) {
        this.contentBlocks = contentBlocks;
    }

    public Set<User> getAuthors() {
        return authors;
    }

    public void setAuthors(Set<User> authors) {
        this.authors = authors;
    }

    public Set<String> getTopics() {
        return topics;
    }

    public void setTopics(Set<String> topics) {
        this.topics = topics;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
