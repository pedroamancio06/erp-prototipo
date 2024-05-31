import '../asssets/Projeto.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdBrush } from "react-icons/md";

function Projetos() {
    return (
        <>
            <div className="container-components">
                <header className="header-components">
                    <h1>Projetos</h1>
                </header>

                <section className="section-projetos">
                    <div className='projetos-container'>
                        <form id='form'>
                            <div className='form-search'>
                                <span className='form-search-span'>
                                    <label for="name">Nome</label>
                                    <input type='search' id="name" placeholder='Search'></input>
                                </span>
                                <span className='form-search-span'>
                                    <label for="client">Cliente</label>
                                    <input type='search' id="client" placeholder='Search'></input>
                                </span>
                                <span className='form-search-span'> 
                                    <label for="status">Status</label>
                                    <select name="pesquisa" className='search-status'>
                                        <option value="">Escolha uma opção</option>
                                        <option value="concluido">Concluído</option>
                                        <option value="pendente">Pendente</option>
                                        <option value="cancelado">Cancelado</option>
                                    </select>
                                </span>
                            </div>

                            <button type='submit' id='btn-search'>Buscar</button>
                        </form>
                    </div>

                    <div className='all-projects'>
                        <ul className='all-table'>
                            <li className='table-title'>Nome</li>
                            <li className='table-title'>Cliente</li>
                            <li className='table-title'>Descrição</li>
                            <li className='table-title'>Data</li>
                            <li className='table-title'>Status</li>
                            <li className='table-title'>Ações</li>
                        </ul>
                        <ul className='all-table-info'>
                            <li className='table-info'>Elétrica</li>
                            <li className='table-info'>Amicom</li>
                            <li className='table-info'>Instalação de infraestrutura elétrica</li>
                            <li className='table-info'>15/05/2024</li>
                            <li className='table-info conc'>Concluído</li>
                            <li className='table-info buttons-table'>
                                <button className='btn-edit'><MdBrush /></button>
                                <button className='btn-remove'><RiDeleteBin6Line /></button>
                            </li>
                        </ul>
                        <ul className='all-table-info'>
                            <li className='table-info'>Hidráulica</li>
                            <li className='table-info'>Amicom</li>
                            <li className='table-info'>Instalação e manutenção hidráulica</li>
                            <li className='table-info'>17/05/2024</li>
                            <li className='table-info pend'>Pendente</li>
                            <li className='table-info buttons-table'>
                                <button className='btn-edit'><MdBrush /></button>
                                <button className='btn-remove'><RiDeleteBin6Line /></button>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Projetos;