package ttu.tteh.user;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	private UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@RequestMapping(value="/users/add", method=RequestMethod.POST,
			consumes = "application/json")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
	
	@RequestMapping(value="/users", method=RequestMethod.GET)
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
    
    @RequestMapping(value = "/users/{username}", method=RequestMethod.GET)
	public User getUser(@PathVariable("username") String username) {
		return userService.getUserByUsername(username);
	}
	
	@RequestMapping(value="/users/score", method=RequestMethod.POST,
			consumes = "application/json")
	public User updateScore(@RequestBody User user) {
		User update = userService.findone(user);
		update.setScore(user.getScore());
		return userService.updateScore(user);
}
}
