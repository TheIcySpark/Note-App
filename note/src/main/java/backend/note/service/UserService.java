package backend.note.service;

import backend.note.model.User;
import backend.note.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User create(User user){
        return userRepository.save(user);
    }

    public List<User> listUsers(){
        return (List<User>) userRepository.findAll();
    }
}
