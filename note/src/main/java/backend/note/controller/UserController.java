package backend.note.controller;

import backend.note.model.User;
import backend.note.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "api/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(value = "/list")
    ResponseEntity<List<User>> listUsers(){
        return ResponseEntity.status(HttpStatus.OK).body(userService.listUsers());
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        User createdUser = userService.create(user);
        return ResponseEntity.status(HttpStatus.OK).body(createdUser);
    }

}
