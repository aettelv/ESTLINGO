package ttu.tteh.picture;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PictureController {
	
	private PictureService pictureService;

	public PictureController(PictureService pictureService) {
		this.pictureService = pictureService;
	}
	
	@RequestMapping(value="/picture", method=RequestMethod.GET)
	public List<Picture> getAllPictures() {
		return pictureService.getAllPictures();
	}
    
    @RequestMapping(value = "/picture/{path}", method=RequestMethod.GET)
	public Picture getPicture(@PathVariable("path") String path) {
		return pictureService.getPictureByPath(path);
	}
}
