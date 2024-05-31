import '../asssets/Estoque.css';
import { MdOutlineAddCircle } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { BiDetail } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

function Estoque() {
    return (
        <>
            <div className='container-components'>
                <header className='header-components'>
                    <h1>Estoque</h1>
                </header>
                
                <section className="estoque-container">
                    <button id="add-product">
                        <span><MdOutlineAddCircle /></span> ADD PRODUTO
                    </button>

                    <div className="all-product-container">
                        <div className="product-title-search">
                            <h2>PRODUTOS</h2>
                            <span className="container-search">
                                <p><IoIosSearch /></p>
                                <input type="search" id="search-product" placeholder="Search"></input>
                            </span>
                        </div>

                        <table className='table-products'>
                            
                            <tr className='table-cabecalho'>
                                <th className='cabecalho-titles'>Nome</th>
                                <th className='cabecalho-titles'>Código</th>
                                <th className='cabecalho-titles'>Preço</th>
                                <th className='cabecalho-titles'>Quantidade</th>
                                <th className='cabecalho-titles'>Detalhes</th>
                                <th className='cabecalho-titles'>Ações</th>
                            </tr>
                            
                            <a href='#' className='table-hover'>
                                <tr className='table-info'>
                                    <td className='info-text'>Produto</td>
                                    <td className='info-text'>14</td>
                                    <td className='info-text'>100</td>
                                    <td className='info-text'>32</td>
                                    <td className='info-text'><button id='btn-detail'><BiDetail /></button></td>
                                    <td className='info-text'><button id='btn-remove'><RiDeleteBin6Line /></button></td>
                                </tr>
                            </a>
                            <a href='#' className='table-hover'>
                                <tr className='table-info'>
                                    <td className='info-text'>Produto</td>
                                    <td className='info-text'>14</td>
                                    <td className='info-text'>100</td>
                                    <td className='info-text'>32</td>
                                    <td className='info-text'><button id='btn-detail'><BiDetail /></button></td>
                                    <td className='info-text'><button id='btn-remove'><RiDeleteBin6Line /></button></td>
                                </tr>
                            </a>
                            <a href='#' className='table-hover'>
                                <tr className='table-info'>
                                    <td className='info-text'>Produto</td>
                                    <td className='info-text'>14</td>
                                    <td className='info-text'>100</td>
                                    <td className='info-text'>32</td>
                                    <td className='info-text'><button id='btn-detail'><BiDetail /></button></td>
                                    <td className='info-text'><button id='btn-remove'><RiDeleteBin6Line /></button></td>
                                </tr>
                            </a>
                            <a href='#' className='table-hover'>
                                <tr className='table-info'>
                                    <td className='info-text'>Produto</td>
                                    <td className='info-text'>14</td>
                                    <td className='info-text'>100</td>
                                    <td className='info-text'>32</td>
                                    <td className='info-text'><button id='btn-detail'><BiDetail /></button></td>
                                    <td className='info-text'><button id='btn-remove'><RiDeleteBin6Line /></button></td>
                                </tr>
                            </a>
                            <a href='#' className='table-hover'>
                                <tr className='table-info'>
                                    <td className='info-text'>Produto</td>
                                    <td className='info-text'>14</td>
                                    <td className='info-text'>100</td>
                                    <td className='info-text'>32</td>
                                    <td className='info-text'><button id='btn-detail'><BiDetail /></button></td>
                                    <td className='info-text'><button id='btn-remove'><RiDeleteBin6Line /></button></td>
                                </tr>
                            </a>
                            <a href='#' className='table-hover'>
                                <tr className='table-info'>
                                    <td className='info-text'>Produto</td>
                                    <td className='info-text'>14</td>
                                    <td className='info-text'>100</td>
                                    <td className='info-text'>32</td>
                                    <td className='info-text'><button id='btn-detail'><BiDetail /></button></td>
                                    <td className='info-text'><button id='btn-remove'><RiDeleteBin6Line /></button></td>
                                </tr>
                            </a>
                        </table>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Estoque;