import '../asssets/Dashboard.css';

function Dashboard() {
    return (
        <div className='container-components'>
            <header className='header-components'>
                <h1>Dashboard</h1>
            </header>

            <section className='dashboard-boxes'>
                <div className='boxes green'>
                    <h2 className='boxes_title'>Projetos concluídos</h2>
                    <span>
                        <span className='boxes_subtitle'>6 conlcuídos / </span>
                        <span className='boxes_subtitle'>10 projetos no total</span>
                    </span>
                    <span className='boxes-info'>
                        <span className='boxes_subtitle'>Valor: R$00.00</span>
                        <span className='boxes_subtitle'>60%</span>
                    </span>
                    
                    <button className='boxes-btn' id='btn-projects'>Ver Projetos</button>
                </div>
                <div className='boxes yellow'>
                    <h2 className='boxes_title'>Projetos em andamento</h2>
                    <span>
                        <span className='boxes_subtitle'>4 em andamento / </span>
                        <span className='boxes_subtitle'>10 projetos no total</span>
                    </span>
                    <button className='boxes-btn' id='btn-projects'>Ver Projetos</button>
                </div>
                <div className='boxes blue'>
                    <h2 className='boxes_title'>Produtos no estoque</h2>
                    <span>
                        <span className='boxes_subtitle'>8 produtos ativos / </span>
                        <span className='boxes_subtitle'>10 projetos no total</span>
                    </span>
                    <button className='boxes-btn' id='btn-add'>Adicionar</button>
                </div>
            </section>

            <section className='dashboard-principal'>
                <div className="all-product-container">
                        <div className="product-title-search">
                            <h2>PRODUTOS RECENTES</h2>
                            <button id='view-all'>Ver todos</button>
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
                                    <td className='info-text'><button id='btn-remove'>Ver</button></td>
                                </tr>
                            </a>
                            <a href='#' className='table-hover'>
                                <tr className='table-info'>
                                    <td className='info-text'>Produto</td>
                                    <td className='info-text'>14</td>
                                    <td className='info-text'>100</td>
                                    <td className='info-text'>32</td>
                                    <td className='info-text'><button id='btn-remove'>Ver</button></td>
                                </tr>
                            </a>
                        </table>
                    </div>
            </section>
        </div>
    );
}

export default Dashboard;