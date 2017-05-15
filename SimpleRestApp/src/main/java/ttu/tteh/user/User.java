package ttu.tteh.user;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;
import ttu.tteh.score.Score;

@Entity
@Getter
@Setter
public class User {
	@Id
	@GeneratedValue
	long id;
	String username;
	String password;
	String e_mail;
	
	@OneToOne(mappedBy="user",
			cascade=CascadeType.ALL)
	Score score;
}

