package com.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "blocks")
public class Block {
    @Id
    @SequenceGenerator(name = "block_sequence", sequenceName = "block_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "block_sequence")
    @Column(name = "block_id", updatable = false, nullable = false)
    private Long blockId;

    @Column(name = "body", nullable = false, columnDefinition="text")
    private String body;

    @Column(name = "order_number", nullable = false)
    private Long orderNumber;

    @Column(name = "type", nullable = false)
    private String type;

    public Block(String body, Long order, BlockType type) {
        this.body = body;
        this.orderNumber = order;
        this.type = type.getValue();
    }

    public Block(Long blockId, String body, Long order, BlockType type) {
        this.blockId = blockId;
        this.body = body;
        this.orderNumber = order;
        this.type = type.getValue();
    }

    public Block() {

    }

    @Override
    public String toString() {
        return "Block{" +
                "blockId=" + blockId +
                ", body='" + body + '\'' +
         /*       ", order=" + order +*/
                ", type=" + type +
                '}';
    }

    public Long getBlockId() {
        return blockId;
    }

    public void setBlockId(Long postId) {
        this.blockId = postId;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Long getOrder() {
        return orderNumber;
    }

    public void setOrder(Long order) {
        this.orderNumber = order;
    }

    public String getType() {
        return type;
    }


}
