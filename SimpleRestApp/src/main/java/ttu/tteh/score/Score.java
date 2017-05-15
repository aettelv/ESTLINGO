package ttu.tteh.score;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;
import ttu.tteh.user.User;

@Entity
@Getter
@Setter
public class Score {
	@Id
	@GeneratedValue
	long id;
	Integer points;
	@OneToOne()
	User user;
}
