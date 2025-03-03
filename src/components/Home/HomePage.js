import videoHomepage from '../../assets/video-homepage.mp4';
const HomePage=(props)=>{
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
                    <button>Get's start.It's free</button>
                </div>
            </div>
        </div>
        
    );
}
export default HomePage;