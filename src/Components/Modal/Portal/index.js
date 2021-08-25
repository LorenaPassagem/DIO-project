import reactDom from 'react-dom';

const PortalModal = ({ children }) =>{
    const portal = document.getElementsById('modal-root')
    return ReactDOM.createPortal(children, portal)
}
export default PortalModal;