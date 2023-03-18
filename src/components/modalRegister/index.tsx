import { X } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { URI } from '../../api/uri';
import './styles.scss';

type ModalProps = {
    isOpen: boolean;
    setModalOpen: () => void;
    title: string;
    icon: JSX.Element;
    buttonTitle: string;
}

export function ModalRegister({ isOpen, setModalOpen, title, icon, buttonTitle }: ModalProps) {
    const [isName, setIsName] = useState('');
    const [isEmail, setIsEmail] = useState('');

    function handleGetInfo(event: any) {
        switch (event.target.placeholder) {
            case 'Nome':
                setIsName(event.target.value);
                break;
            case 'E-mail':
                setIsEmail(event.target.value);
                break;
        }
    }

    function handlePostFriend() {
        api
            .post(URI.FRIENDS,
                {
                    name: isName,
                    email: isEmail,
                }
            )
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
                            <input type="text" placeholder='Nome' value={isName} onChange={handleGetInfo} />
                            <input type="email" placeholder='E-mail' value={isEmail} onChange={handleGetInfo} />
                        </div>
                        <button type='submit' onClick={handlePostFriend}>{buttonTitle}</button>
                    </form>
                </main>
            </div>
        )
    };

    return null;
}