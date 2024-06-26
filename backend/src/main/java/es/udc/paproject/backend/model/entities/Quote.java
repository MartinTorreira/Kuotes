package es.udc.paproject.backend.model.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name="Quote")
public class Quote {
	
	public enum Importance {LOW, MEDIUM, HIGH, CRITICAL};

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

    @Column(name = "title", nullable = false, unique = false)
	private String title;

    @Column(name = "description", nullable = true, unique = false)
	private String description;

    @Column(name = "date", nullable = false, unique = false)
	private LocalDateTime date;

    @Column(name = "endDate", nullable = false, unique = false)
	private LocalDateTime endDate;

    @Column(name = "importance", nullable = true, unique = false)
	private Importance importance;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId", nullable = false)  
    private User user;

    public Quote() {}
    
	public Quote(String title, String description, LocalDateTime date, LocalDateTime endDate, Importance importance, User user) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.endDate = endDate;
        this.importance = importance;
        this.user = user;
    }



    public String getTitle() {
        return title;
    }



    public String getDescription() {
        return description;
    }



    public LocalDateTime getDate() {
        return date;
    }



    public Importance getImportance() {
        return importance;
    }



    public User getUser() {
        return user;
    }



    public void setId(Long id) {
        this.id = id;
    }



    public void setTitle(String title) {
        this.title = title;
    }



    public void setDescription(String description) {
        this.description = description;
    }



    public void setDate(LocalDateTime date) {
        this.date = date;
    }



    public void setImportance(Importance importance) {
        this.importance = importance;
    }



    public void setUser(User user) {
        this.user = user;
    }



    public Long getId() {
		return id;
	}


    public LocalDateTime getEndDate() {
        return endDate;
    }


    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }


}
