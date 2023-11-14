package com.backend.models;

import jakarta.persistence.Entity;

@Entity
public class LineBreak extends Block{

    public LineBreak(String body, Long order, BlockType type) {
        super(body, order, type);
    }


    public LineBreak() {
    }
}
