package com.shdanyan.storage;

public class StorageException extends RuntimeException {

    private static final long serialVersionUID = -6047949234033802911L;

    public StorageException(String message) {
        super(message);
    }

    public StorageException(String message, Throwable cause) {
        super(message, cause);
    }
}
