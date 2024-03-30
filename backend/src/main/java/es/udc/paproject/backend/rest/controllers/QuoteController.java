package es.udc.paproject.backend.rest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import es.udc.paproject.backend.model.entities.Quote;
import es.udc.paproject.backend.model.exceptions.InstanceNotFoundException;
import es.udc.paproject.backend.model.services.QuoteService;
import es.udc.paproject.backend.rest.dtos.QuoteDto;

import static es.udc.paproject.backend.rest.dtos.QuoteConversor.toQuoteDtoList;
import static es.udc.paproject.backend.rest.dtos.QuoteConversor.toQuoteDto;

@RestController
@RequestMapping("/quotes")
public class QuoteController {

    @Autowired
	private QuoteService quoteService;

    @PostMapping("/create")
    @ExceptionHandler({InstanceNotFoundException.class})
    public ResponseEntity<QuoteDto> createQuote(@RequestAttribute Long userId, @RequestBody QuoteDto quoteDto) throws InstanceNotFoundException {
        
        Quote newQuote = quoteService
            .createQuote(userId, quoteDto.getTitle(), quoteDto.getDescription(), quoteDto.getDate(), quoteDto.getImportance());

        QuoteDto dto = toQuoteDto(newQuote);

        return new ResponseEntity<>(dto, HttpStatus.CREATED);

    }

    @PostMapping("/delete/{quoteId}")
    @ExceptionHandler({InstanceNotFoundException.class})
    public ResponseEntity<Void> removeQuote(@RequestAttribute Long userId, @PathVariable Long quoteId) throws InstanceNotFoundException {
        
        quoteService.removeQuote(quoteId, userId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<QuoteDto>> showAll()  {
    
        List<Quote> quotes = quoteService.getQuotes();
        List<QuoteDto> dtos = toQuoteDtoList(quotes);

        return  ResponseEntity.ok().body(dtos);


    }
}
