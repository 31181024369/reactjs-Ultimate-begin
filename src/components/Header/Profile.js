import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const Profile=(props)=>{
    const {show,setShow}=props;
    const handleClose=()=>{
        setShow(false);
    }
    return (
        <>
        <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="model-add-user">
                  <Modal.Header closeButton>
                    <Modal.Title> Quản lý thông tin người dùng</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        >
                        <Tab eventKey="home" title="Main Infor">
                            your information
                        </Tab>
                        <Tab eventKey="password" title="Password">
                            password
                        </Tab>
                        <Tab eventKey="history" title="History">
                        history
                        </Tab>
                       
                    </Tabs>

                  </Modal.Body>
                 
                </Modal>
                </>
    );
}
export default Profile