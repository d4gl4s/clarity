package com.backend.exceptions;

public class PostNotFoundException extends RuntimeException{
    private static final long serialVerisionUID = 1;

    public PostNotFoundException(String message){
        super(message);
    }
}
