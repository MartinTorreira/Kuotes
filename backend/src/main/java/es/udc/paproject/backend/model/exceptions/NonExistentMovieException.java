package es.udc.paproject.backend.model.exceptions;

public class NonExistentMovieException extends Exception{
    public NonExistentMovieException(String message){
        super(message);
    }
}
