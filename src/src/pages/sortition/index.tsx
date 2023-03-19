import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

import api from '../../../api/api';
import { URI } from '../../../api/uri';

import shuffle from 'lodash.shuffle';

import './styles.scss';

export function Sortition() {
  const [friend, setFriend] = useState<any[]>([]);
  const [sortedFriends, setSortedFriends] = useState<string[]>([]);

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
        });
    }
    getFriend();
  }, []);

  function handleSort() {
    const shuffledFriends = shuffle(friend.map((friendData) => friendData.name));
    const sortedFriends = [];

    for (let i = 0; i < shuffledFriends.length; i++) {
      if (shuffledFriends[i] === friend[i].name) {
        // troca o nome atual com o próximo nome na lista embaralhada
        const tempName = shuffledFriends[i];
        shuffledFriends[i] = shuffledFriends[i + 1];
        shuffledFriends[i + 1] = tempName;
      }
      sortedFriends.push(shuffledFriends[i]);
    }

    setSortedFriends(sortedFriends);
  }

  function handleSendEmail(friendData: any) {
    const serviceID = 'gmailMessage';
    const templateID = 'template_4avz0n3';
    const userID = 'IhA6d-TM6OySXZbqN';

    const emailParams = {
      to_name: friendData.name,
      to_email: friendData.email,
      from_name: 'Secret Cristimas | Amigo Secreto',
      from_email: 'viniciusbuarque17@gmail.com',
      message: `Olá ${friendData.name}, o sorteado para o seu amigo secreto foi: ${sortedFriends[friend.indexOf(friendData)]}`
    };

    emailjs.send(serviceID, templateID, emailParams, userID)
      .then((result) => {
        console.log(result.text);
        alert('Email enviado com sucesso!');
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="register-container">
      <main>
        <header className="table_header">
          <h1>Sorteio</h1>
          <button onClick={handleSort}>Sortear</button>
        </header>
          <table>
            <thead>
              <tr>
                <th className="th_name">Seu nome</th>
                <th className="th_email">Nome do amigo secreto</th>
                <th className="th_email">Enviar E-mail</th>
              </tr>
            </thead>
            {friend.length === 0 && (
              <tbody>
                <tr>
                  <td colSpan={3} className="td_no_friend">
                    Nenhum amigo cadastrado ou sorteado.
                  </td>
                </tr>
              </tbody>
            )}
              <tbody>
                {friend.map((friendData, index) => (
                  <tr key={index}>
                    <td>{friendData.name}</td>
                    <td>{sortedFriends[index]}</td>
                    <td>
                      <button className='button_email' onClick={() => handleSendEmail(friendData)}>Enviar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
      </main>
    </div>
  );
}
