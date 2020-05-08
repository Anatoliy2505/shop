import ReactDOM from 'react-dom'

export const Portal = ({ children }) =>
	ReactDOM.createPortal(children, document.getElementById('modal-root'))
