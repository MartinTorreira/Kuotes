package es.udc.paproject.backend.rest.dtos;

import java.time.LocalDateTime;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


public class QuoteDto {

    public interface AllValidations {}
    public interface UpdateValidations {}

    private Long id;
    private String title;
    private String description;
    private LocalDateTime date;
    private LocalDateTime endDate;
    private String importance;
    private UserDto userDto;

    public QuoteDto() {}

    public QuoteDto(Long id, UserDto userDto, String title, String description, LocalDateTime date, LocalDateTime endDate, String importance) {
        this.id = id;
        this.userDto = userDto;
        this.title = title;
        this.description = description;
        this.date = date;
        this.endDate = endDate;
        this.importance = importance;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setUserDto(UserDto userDto) {
        this.userDto = userDto;
    }

    public UserDto getUserDto() {
        return userDto;
    }


    @NotNull(groups={AllValidations.class})
    @Size(min=1, max=60, groups={AllValidations.class})
    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    @NotNull(groups={AllValidations.class})
    public LocalDateTime getDate() {
        return date;
    }

    @NotNull(groups={AllValidations.class})
    public LocalDateTime getEndDate() {
        return endDate;
    }

    public String getImportance() {
        return importance;
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

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public void setImportance(String importance) {
        this.importance = importance;
    }


    
    
}
