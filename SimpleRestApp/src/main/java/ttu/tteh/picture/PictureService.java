package ttu.tteh.picture;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class PictureService {
	
	private PictureRepository pictureRepository;

	public PictureService(PictureRepository pictureRepository) {
		this.pictureRepository = pictureRepository;
	}

	List<Picture> getAllPictures() {
		return pictureRepository.findAll();
	}
    
    Picture getPictureByPath(String path) {
		return pictureRepository.findOne(path);
	}
    
    Picture getPictureByName(String naem) {
		return pictureRepository.findOne(name);
	}
}
