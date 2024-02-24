import '../Components/NotFound.css';
import '../Components/Buttons.css';
import Boutton from '../Components/Buttons';
import '../App.css'

// import Boutton from './Bouttons';

function NotFound(){
    return(
        <div className='page'>
            <h3>404 Page</h3>
            <h1>Page not found</h1>
            <p>Sorry, the page you are looking for doesn't exist. Here are some helpful links:</p>
            <div className='btns'>
              <Boutton 
                textColor= {"#344054"}
                bgColor= {"#FFFFFF"}
                buttonText="Go Back"
                /> 
              <Boutton 
                textColor= {"#FFFFFF"}
                bgColor= {"#25C4F4 "}
                buttonText={"Take me home"}
                colorBorder= {"black"}
               />
            </div>
        </div>
    )
}

export default NotFound;