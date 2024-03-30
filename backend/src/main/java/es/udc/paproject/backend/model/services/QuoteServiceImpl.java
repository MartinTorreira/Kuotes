package es.udc.paproject.backend.model.services;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import es.udc.paproject.backend.model.entities.Quote;
import es.udc.paproject.backend.model.entities.QuoteDao;
import es.udc.paproject.backend.model.entities.User;
import es.udc.paproject.backend.model.entities.UserDao;
import es.udc.paproject.backend.model.entities.Quote.Importance;
import es.udc.paproject.backend.model.exceptions.InstanceNotFoundException;
import es.udc.paproject.backend.model.services.QuoteService;;

public class QuoteServiceImpl implements QuoteService{

    private final UserDao userDao;
    private final QuoteDao quoteDao;

    @Autowired
    public QuoteServiceImpl(UserDao userDao, QuoteDao quoteDao) {
        this.userDao = userDao;
        this.quoteDao = quoteDao;
    }

    @Override
    public Quote createQuote(Long userId, String title, String description, LocalDateTime date, String importance)
            throws InstanceNotFoundException {

        User user = userDao.findById(userId)
            .orElseThrow(() -> new InstanceNotFoundException("userId", "User"));

        if (date.isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("Incorrect input date");
        }

        Quote quote = new Quote(title, description, date, Importance.valueOf(importance), user);
        return quote;
    }

    @Override
    public void removeQuote(Long quoteId, Long userId) throws InstanceNotFoundException {
       
        User user = userDao.findById(userId)
            .orElseThrow(() -> new InstanceNotFoundException("userId", "User"));
        Quote quote = quoteDao.findById(quoteId)
            .orElseThrow(() -> new InstanceNotFoundException("quoteId", "Quote"));

        // Check if the user is the owner of the quote
        if (quote.getUser().getId() != user.getId()) {
            throw new InstanceNotFoundException("quoteId", "Quote");
        }

        quoteDao.delete(quote);

    }

    @Override
    public void updateQuote(Long quoteId, Long userId, String title, String description, LocalDateTime date, String importance)
            throws InstanceNotFoundException {
        
        User user = userDao.findById(userId)
            .orElseThrow(() -> new InstanceNotFoundException("userId", "User"));

        Quote quote = quoteDao.findById(quoteId)
            .orElseThrow(() -> new InstanceNotFoundException("quoteId", "Quote"));

        // Check if the user is the owner of the quote
        if (quote.getUser().getId() != user.getId()) {
            throw new InstanceNotFoundException("quoteId", "Quote");
        }

        // Logic to validate inputs of the quote
        if (date.isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("Incorrect input date");
        }

        quote.setTitle(title);
        quote.setDescription(description);
        quote.setDate(date);
        quote.setImportance(Importance.valueOf(importance));
        
    }

    @Override
    public List<Quote> getQuotes() {
        throw new UnsupportedOperationException("Unimplemented method 'getQuotes'");
    }
    
}
