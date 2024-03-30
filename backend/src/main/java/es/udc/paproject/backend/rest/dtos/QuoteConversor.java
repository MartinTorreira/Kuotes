package es.udc.paproject.backend.rest.dtos;

import es.udc.paproject.backend.model.entities.Quote;
import es.udc.paproject.backend.model.entities.Quote.Importance;

public class QuoteConversor {

    private QuoteConversor() {
    }

    public final static QuoteDto toQuoteDto(Quote quote) {
        return new QuoteDto(quote.getId(), UserConversor.toUserDto(quote.getUser()), quote.getTitle(),
                quote.getDescription(), quote.getDate(), quote.getImportance().toString());
    }

    public final static Quote toQuote(QuoteDto quoteDto) {
        return new Quote(quoteDto.getTitle(), quoteDto.getDescription(), quoteDto.getDate(),
                Importance.valueOf(quoteDto.getImportance()), UserConversor.toUser(quoteDto.getUserDto()));
    }
}
