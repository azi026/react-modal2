import React from 'react';
import ReactDom from 'react-dom';
import './Modal.scss';

const Modal = ({
    show,close,title,children
}) => {
    return ReactDom.createPortal( <> {show ?
        <div className={`modalcontainer ${show ? "show" :"" }`} onClick={()=>close()}>
            <div className="modal" onClick={(e)=>e.stopPropagation()}>
                <header className="modal_header">
                    <h1 className="modal_header-title">
                        {title}
                    </h1>
                    <button className="close" onClick={()=>close()}>
                       close
                    </button>
                </header>
                <main className="modal_content">
                    {children}
                </main>
                <footer className="modal_footer">
                    <button className="modal_close" onClick={()=>close()}>close</button>
                    <button className="submit">submit</button>
                </footer>
            </div>
        </div>

        : null} 
        </>,
        document.getElementById("modal"))

}
export default Modal
