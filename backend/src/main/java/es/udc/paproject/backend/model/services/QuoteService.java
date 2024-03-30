package es.udc.paproject.backend.model.services;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import es.udc.paproject.backend.model.exceptions.InstanceNotFoundException;
import es.udc.paproject.backend.model.entities.Quote;


public interface QuoteService {
    
    Quote createQuote(Long userId, String title, String description, LocalDateTime date, String importance) throws InstanceNotFoundException;

    void removeQuote(Long quoteId, Long userId ) throws InstanceNotFoundException;

    void updateQuote(Long quoteId, Long userId, String title, String description, LocalDateTime date, String importance) throws InstanceNotFoundException;

    List<Quote>  getQuotes();
}
