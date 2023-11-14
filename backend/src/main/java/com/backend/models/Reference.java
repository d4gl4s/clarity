package com.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Reference extends Block{
    @Column(name = "ref_number")
    private int refNumber;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "url")
    private String url;

    @Column(name = "year")
    private int year;

    public Reference(String body, Long order, BlockType type, int refNumber, String title, String author, String url, int year) {
        super(body, order, type);
        this.refNumber = refNumber;
        this.title = title;
        this.author = author;
        this.url = url;
        this.year = year;
    }

    public Reference(Long blockId, String body, Long order, BlockType type, int refNumber, String title, String author, String url, int year) {
        super(blockId, body, order, type);
        this.refNumber = refNumber;
        this.title = title;
        this.author = author;
        this.url = url;
        this.year = year;
    }

    public Reference(int refNumber, String title, String author, String url, int year) {
        this.refNumber = refNumber;
        this.title = title;
        this.author = author;
        this.url = url;
        this.year = year;
    }

    public Reference(){

    }

    public int getRefNumber() {
        return refNumber;
    }

    public void setRefNumber(int refNumber) {
        this.refNumber = refNumber;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}
