import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function ListAll() {
    const [users, setUsers] = useState([
    ]);

    async function ListAll(e) {
        e.preventDefault();

        const response = await ClientUsers.listAll();
        if (response.status === 200) {
            setUsers(response.data)
            toast.success('Usuário criado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Buscar todos os usuário">
                    <FaUserNinja size={30} />
                </Title>
                <div className="container">
                    <form onSubmit={ListAll}>

                        <div>
                            <table>
                                <thead>
                                </thead>
                                <tbody>
                                    {users && users.map((user, index) =>
                                        <tr key={index}>
                                            <td>{user.email} </td>
                                            <td>{user.nome} </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <button type="submit">Buscar Todos</button>

                    </form>
                </div>

            </div>
        </div>
    )
}