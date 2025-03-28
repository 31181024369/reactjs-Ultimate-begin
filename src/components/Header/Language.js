import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next'
const Language=(props)=>{
    const { t, i18n } = useTranslation();
    const handleChangeLanguage=(language)=>{
        i18n.changeLanguage(language);
    }
    return (
        <>
            <NavDropdown title={i18n.language==='vi'?"Việt nam":"English"} id="basic-nav-dropdown2" className="languages">
              <NavDropdown.Item href="" onClick={()=>handleChangeLanguage('en')}>English</NavDropdown.Item>
              <NavDropdown.Item href="" onClick={()=>handleChangeLanguage('vi')}>Việt Nam</NavDropdown.Item>
            </NavDropdown>
        </>
    )
}
export default Language;