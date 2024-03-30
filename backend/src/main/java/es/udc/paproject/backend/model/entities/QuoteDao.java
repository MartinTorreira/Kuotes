package es.udc.paproject.backend.model.entities;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface QuoteDao extends PagingAndSortingRepository<Quote, Long> {

    List<Quote> findAll();
    
}