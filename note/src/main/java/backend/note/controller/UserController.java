package backend.note.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/user")
public class UserController {
    @GetMapping(value = "/test")
    public ResponseEntity<String> testGet(){
        return ResponseEntity.status(HttpStatus.OK).body("Successful get request");
    }

    @PostMapping(value = "/test")
    public ResponseEntity<String> postGet(){
        return ResponseEntity.status(HttpStatus.OK).body("Successful post request");
    }
}
