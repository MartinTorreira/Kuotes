package es.udc.paproject.backend.model.exceptions;

public class NotMatchingCreditCard extends Exception{
    public NotMatchingCreditCard(String cause) {
        super(cause);
    }
}
