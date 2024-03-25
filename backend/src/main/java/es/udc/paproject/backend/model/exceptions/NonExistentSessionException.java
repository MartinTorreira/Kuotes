package es.udc.paproject.backend.model.exceptions;

public class NonExistentSessionException extends Exception{
    public NonExistentSessionException(String message){
        super(message);
    }
}
