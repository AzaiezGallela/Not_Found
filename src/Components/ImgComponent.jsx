import image from '../Assets/photo.png';
import '../Components/ImgComponent.css';

function ImgComponent(){
    return(
        <img src={image} alt='img goes here!'/>
    )
}

export default ImgComponent;