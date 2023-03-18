import { X, TrashSimple } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { URI } from '../../api/uri';
import './styles.scss';

type ModalDeleteProps = {
    isOpen: boolean;
    setModalOpen: () => void;
    id: string;
}

export function ModalDelete({ isOpen, setModalOpen, id }: ModalDeleteProps) {

    function deleteFriend() {
        api
            .delete(URI.FRIENDS + `${id}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
        setModalOpen();

        window.location.reload();
    }
    
    if (isOpen) {
        return (
            <div className='container_delete_modal'>
                <main className='modal_delete_main_content'>
                    <header>
                        <div className='header_delete_title'>
                            <TrashSimple size={32} />
                            <h1>Deletar amigo</h1>
                        </div>
                        <X
                            size={24}
                            className='header_close_icon'
                            onClick={setModalOpen}
                        />
                    </header>

                    <main>
                        <p>Tem certeza que deseja deletar este amigo?</p>
                    </main>

                    <footer>
                        <button type='submit' onClick={deleteFriend}>Sim</button>
                        <button type='submit' onClick={setModalOpen}>Não</button>
                    </footer>

                </main>
            </div>
        )
    };

    return null;
}