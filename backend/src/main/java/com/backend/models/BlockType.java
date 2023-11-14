package com.backend.models;

public enum BlockType {
    OPTION1("heading"),
    OPTION2("paragraph"),
    OPTION3("link"),
    OPTION4("image"),
    OPTION5("quote"),
    OPTION6("reference"),
    OPTION7("lineBreak");

    private final String value;

    BlockType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
