package ttu.tteh.picture;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PictureRepository extends CrudRepository<Picture, String>{
	@Override
	public List<Picture> findAll();
}
