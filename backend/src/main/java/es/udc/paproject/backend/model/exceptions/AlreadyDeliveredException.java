package es.udc.paproject.backend.model.exceptions;

public class AlreadyDeliveredException extends Exception{
    public AlreadyDeliveredException(String cause) {
        super(cause);
    }
}
