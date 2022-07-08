import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner, 
    faPlusCircle,
    faPuzzlePiece,
    faBrush,
    faStar,
    faWrench,
    faPhone,
    faEnvelope,
    faMessage,
    faLock
    
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPuzzlePiece, faBrush, faStar, faWrench, faPhone, faEnvelope, faMessage, faLock);
};

export default Icons;