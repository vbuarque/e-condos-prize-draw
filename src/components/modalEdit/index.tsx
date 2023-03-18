import { X } from '@phosphor-icons/react';
import { useState } from 'react';
import api from '../../api/api';
import { URI } from '../../api/uri';
import './styles.scss';

type ModalProps = {
    isOpen: boolean;
    setModalOpen: () => void;
    title: string;
    icon: JSX.Element;
    buttonTitle: string;
    placeholderName: string;
    placeholderEmail: string;
    id: string;
}

export function ModalEdit({ isOpen, setModalOpen, title, icon, buttonTitle, placeholderName, placeholderEmail, id }: ModalProps) {
    const [isName, setIsName] = useState(placeholderName);
    const [isEmail, setIsEmail] = useState(placeholderEmail);

    function handleGetInfo(event: any) {
        switch (event.target.name) { 
            case 'Nome':
                setIsName(event.target.value);
                break;
            case 'E-mail':
                setIsEmail(event.target.value);
                break;
        }
    }

    
    function editFriend() {
        api
            .put(URI.FRIENDS + `${id}`, {name: isName, email: isEmail})
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    if (isOpen) {
        return (
            <div className='container_modal'>
                <main className='modal_main_content'>
                    <header>
                        <div className='header_title'>
                            {icon}
                            <h1>{title}</h1>
                        </div>
                        <X size={24} className='header_icon' onClick={setModalOpen} />
                    </header>
                    <form>
                        <div className='modal_input_container'>
                            <input type="text" placeholder={placeholderName} name='Nome' value={isName} onChange={handleGetInfo}/>
                            <input type="email" placeholder={placeholderEmail} name='E-mail' value={isEmail} onChange={handleGetInfo}/>
                        </div>
                        <button type='submit' onClick={editFriend}>{buttonTitle}</button>
                    </form>
                </main>
            </div>
        )
    };

    return null;
}
