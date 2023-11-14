package com.backend.exceptions;


import java.util.Date;

public class ErrorObject {
    private final Integer statusCode;
    private final String message;
    private final Date timestamp;

    public ErrorObject(Integer statusCode, String message, Date timestamp) {
        this.statusCode = statusCode;
        this.message = message;
        this.timestamp = timestamp;
    }

    public Integer getStatusCode() {
        return statusCode;
    }


    public String getMessage() {
        return message;
    }


    public Date getTimestamp() {
        return timestamp;
    }

}
