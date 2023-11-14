package com.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Link extends Block{
    @Column(name = "ref")
    private String ref;

    public Link(String body, Long order, BlockType type, String ref) {
        super(body, order, type);
        this.ref = ref;
    }

    public Link(Long blockId, String body, Long order, BlockType type, String ref) {
        super(blockId, body, order, type);
        this.ref = ref;
    }

    public Link(String ref) {
        this.ref = ref;
    }

    public Link() {

    }

    public String getRef() {
        return ref;
    }

    public void setRef() {
    }


}
