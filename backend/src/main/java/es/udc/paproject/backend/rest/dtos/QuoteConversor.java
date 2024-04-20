package es.udc.paproject.backend.rest.dtos;

import java.util.List;
import java.util.stream.Collectors;

import es.udc.paproject.backend.model.entities.Quote;
import es.udc.paproject.backend.model.entities.Quote.Importance;

public class QuoteConversor {

    private QuoteConversor() {
    }

    public final static QuoteDto toQuoteDto(Quote quote) {
        return new QuoteDto(quote.getId(), UserConversor.toUserDto(quote.getUser()), quote.getTitle(),
                quote.getDescription(), quote.getDate(), quote.getEndDate(), quote.getImportance().toString());
    }

    public final static Quote toQuote(QuoteDto quoteDto) {
        return new Quote(quoteDto.getTitle(), quoteDto.getDescription(), quoteDto.getDate(), quoteDto.getEndDate(),
                Importance.valueOf(quoteDto.getImportance()), UserConversor.toUser(quoteDto.getUserDto()));
    }

    public final static List<QuoteDto> toQuoteDtoList(List<Quote> quotes) {
		return quotes.stream().map(p -> toQuoteDto(p)).collect(Collectors.toList());
	}
}
