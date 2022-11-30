import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function ListByEmail() {

    const [email, setEmail] = useState('');
        
    const [user, setUsers] = useState([]);


    async function listByEmail(e) {

        e.preventDefault();

        const data = {
            email: email,
        }

        const response = await ClientUsers.listByEmail(data);
        if (response.status === 200) {
            setUsers(response.data)
            toast.success('Usuário Encontrado!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Procurar por Email">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={listByEmail}>
                        
                        <label>E-mail</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit">Procurar</button>
                    </form>
                </div>
                <div>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Nome</th>
                        </tr>
                    </thead>

                    <tbody>
                        {user &&
                            <tr key={1}>
                                <td>{user.email} </td>
                                <td>{user.nome} </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
                
            </div>
        </div>
    )
}