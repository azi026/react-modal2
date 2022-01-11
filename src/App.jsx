import React,{useState} from 'react';
import './App.scss';
import Modal from './component/Modal';

function App() {
    const [modal,setModal]=useState(false);
    const toggle= () => { setModal(!modal)};
    return (      
          <div  className='App'>
           <button onClick={()=>toggle()} className='ClickMe'> 
           Modal
           </button>
           <Modal  show={modal} close={toggle} title="Dinamik title">
                This is Modal Dinamik content
            </Modal>
        </div>
    );
}

export default App;