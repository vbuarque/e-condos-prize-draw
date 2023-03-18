import { useEffect, useState } from 'react';

import api from '../../../api/api';
import { URI } from '../../../api/uri';

import { TrashSimple, Pencil, UsersFour } from '@phosphor-icons/react'
import { ModalRegister } from '../../../components/modalRegister';
import { ModalEdit } from '../../../components/modalEdit';
import { ModalDelete } from '../../../components/modalDelete';

import './styles.scss';

export function Register() {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [editingFriendId, setEditingFriendId] = useState('');
    const [deletingFriendId, setDeletingFriendId] = useState('');

    const [friend, setFriend] = useState<any[]>([]);

    useEffect(() => {
        async function getFriend() {

            api
                .get(URI.FRIENDS)
                .then((response) => {
                    const friend = response.data;
                    setFriend(friend);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        getFriend();
    }, []);

    return (
        <div className="register-container">
            <main>
                <header className='table_header'>
                    <h1>Amigo secreto</h1>
                    <button onClick={() => setIsRegisterModalOpen(true)}>Cadastre um amigo</button>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th className='th_name'>Nome</th>
                            <th className='th_email'>E-mail</th>
                            <th className='th_edit'>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {friend.map((friendData, index) => (
                            <tr key={index}>
                                <td>{friendData.name}</td>
                                <td>{friendData.email}</td>
                                <td >
                                    <Pencil
                                        size={24}
                                        className='td_edit_icon'
                                        onClick={() => {
                                            setIsEditModalOpen(true);
                                            setEditingFriendId(friendData._id);
                                        }}
                                    />

                                    <TrashSimple
                                        size={24}
                                        className='td_edit_icon'
                                        onClick={() => {
                                            setIsDeleteModalOpen(true);
                                            setDeletingFriendId(friendData._id);
                                        }}
                                    />
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </main>

            <ModalRegister
                isOpen={isRegisterModalOpen}
                setModalOpen={() => setIsRegisterModalOpen(!isRegisterModalOpen)}
                title='Adicione um amigo'
                buttonTitle='Adicionar'
                icon={<UsersFour size={32} />}
            />

            {friend.map((friendData, index) => (
                <ModalEdit
                    key={index}
                    id={friendData._id}
                    isOpen={isEditModalOpen && editingFriendId === friendData._id}
                    setModalOpen={() => {
                        setIsEditModalOpen(false);
                        setEditingFriendId('');
                    }}
                    title='Edite as informações'
                    buttonTitle='Confirmar'
                    icon={<Pencil size={32} />}
                    placeholderEmail={friendData.email}
                    placeholderName={friendData.name}
                />
            ))}


            <ModalDelete
                id={deletingFriendId}
                isOpen={isDeleteModalOpen}
                setModalOpen={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
            />

        </div>
    )
}