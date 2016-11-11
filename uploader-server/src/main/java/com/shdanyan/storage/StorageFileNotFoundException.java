package com.shdanyan.storage;

public class StorageFileNotFoundException extends StorageException {

    private static final long serialVersionUID = -5121016315121051281L;

    public StorageFileNotFoundException(String message) {
        super(message);
    }

    public StorageFileNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}