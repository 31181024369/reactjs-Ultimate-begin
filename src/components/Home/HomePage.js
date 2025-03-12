import { useSelector } from 'react-redux';
import videoHomepage from '../../assets/video-homepage.mp4';
import { useNavigate } from 'react-router-dom';
const HomePage=(props)=>{
    const isAuthenticated=useSelector(state=>state.user.isAuthenticated);
    const navigate=useNavigate();
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                    <source src={videoHomepage} type ="video/mp4"/>
            </video>
            <div className='homepage-content'>
                <div className='title-1'>There's a better way a ask</div>
                <div className='title-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                <div className='title-3'>
                    {isAuthenticated===false ?
                        <button onClick={()=>navigate("/login")}>Get's start.It's free</button>:
                        <button onClick={()=>navigate("/users")}>Doing Quiz</button>
                    }
                    
                </div>
            </div>
        </div>
        
    );
}
export default HomePage;