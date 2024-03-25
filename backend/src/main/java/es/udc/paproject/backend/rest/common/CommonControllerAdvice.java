package es.udc.paproject.backend.rest.common;

import java.time.DateTimeException;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

import es.udc.paproject.backend.model.exceptions.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class CommonControllerAdvice {
	
	private final static String INSTANCE_NOT_FOUND_EXCEPTION_CODE = "project.exceptions.InstanceNotFoundException";
	private final static String DUPLICATE_INSTANCE_EXCEPTION_CODE = "project.exceptions.DuplicateInstanceException";
	private final static String PERMISSION_EXCEPTION_CODE = "project.exceptions.PermissionException";
	private final static String SESSION_ALREADY_STARTED_EXCEPTION_CODE = "project.exceptions.SessionAlreadyStartedException";
	private final static String NON_EXISTENT_SESSION_EXCEPTION = "project.exceptions.NonExistentSession";

	@Autowired
	private MessageSource messageSource;
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ResponseBody
	public ErrorsDto handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
				
		List<FieldErrorDto> fieldErrors = exception.getBindingResult().getFieldErrors().stream()
			.map(error -> new FieldErrorDto(error.getField(), error.getDefaultMessage())).collect(Collectors.toList());
		
		return new ErrorsDto(fieldErrors);
	    
	}
	
	@ExceptionHandler(InstanceNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ResponseBody
	public ErrorsDto handleInstanceNotFoundException(InstanceNotFoundException exception, Locale locale) {
		
		String nameMessage = messageSource.getMessage(exception.getName(), null, exception.getName(), locale);
		String errorMessage = messageSource.getMessage(INSTANCE_NOT_FOUND_EXCEPTION_CODE, 
				new Object[] {nameMessage, exception.getKey().toString()}, INSTANCE_NOT_FOUND_EXCEPTION_CODE, locale);

		return new ErrorsDto(errorMessage);
		
	}
	
	@ExceptionHandler(DuplicateInstanceException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ResponseBody
	public ErrorsDto handleDuplicateInstanceException(DuplicateInstanceException exception, Locale locale) {
		
		String nameMessage = messageSource.getMessage(exception.getName(), null, exception.getName(), locale);
		String errorMessage = messageSource.getMessage(DUPLICATE_INSTANCE_EXCEPTION_CODE, 
				new Object[] {nameMessage, exception.getKey().toString()}, DUPLICATE_INSTANCE_EXCEPTION_CODE, locale);

		return new ErrorsDto(errorMessage);
		
	}
	
	@ExceptionHandler(PermissionException.class)
	@ResponseStatus(HttpStatus.FORBIDDEN)
	@ResponseBody
	public ErrorsDto handlePermissionException(PermissionException exception, Locale locale) {
		
		String errorMessage = messageSource.getMessage(PERMISSION_EXCEPTION_CODE, null, exception.getMessage(),
			locale);

		return new ErrorsDto(errorMessage);
	}


	@ExceptionHandler(SessionAlreadyStartedException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ResponseBody
	public ErrorsDto handleSessionAlreadyStartedException(SessionAlreadyStartedException exception, Locale locale){

		String errorMessage = messageSource.getMessage(SESSION_ALREADY_STARTED_EXCEPTION_CODE, null, exception.getLocalizedMessage(),
				locale);

		return new ErrorsDto(errorMessage);
	}

	@ExceptionHandler(NonExistentSessionException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ResponseBody
	public ErrorsDto handleNonExistentSession(NonExistentSessionException exception, Locale locale){

		String errorMessage = messageSource.getMessage(NON_EXISTENT_SESSION_EXCEPTION, null, exception.getLocalizedMessage(),
				locale);

		return new ErrorsDto(errorMessage);
	}
}
