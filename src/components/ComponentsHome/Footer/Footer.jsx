import './Footer.css'

export default function Footer() {
    return (
        <footer className="site-footer">
            {/* Seção de Atendimento */}
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="service-item">
                                <i class="fa fa-truck" aria-hidden="true"></i>
                                <div>
                                    <h5>Frete Grátis</h5>
                                    <p>Acima de R$ 199,90</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="service-item">
                                <i class="fa-solid fa-credit-card"></i>
                                <div>
                                    <h5>Parcele em até 12x</h5>
                                    <p>Cartões de crédito</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="service-item">
                                <i class="fa-solid fa-lock"></i>
                                <div>
                                    <h5>Site Seguro</h5>
                                    <p>SSL e criptografia</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="service-item">
                                <i class="fa-solid fa-headset"></i>
                                <div>
                                    <h5>Suporte 24h</h5>
                                    <p>WhatsApp: (11) 99999-9999</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção Principal do Footer */}
            <div className="footer-main">
                <div className="container">
                    <div className="d-flex justify-content-center gap-5 flex-wrap">
                        {/* Sobre a Loja */}
                        <div className="col-lg-2 col-md-6 mb-4">
                            <h4 className="footer-title">Nossa Loja</h4>
                            <p className="footer-about">
                                A melhor loja online com os melhores preços e produtos de qualidade. 
                                Entrega para todo o Brasil.
                            </p>
                            <div className="social-links">
                                <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
                                <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                                <a href="#" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                            </div>
                        </div>

                        {/* Links Úteis */}
                        <div className="col-lg-2 col-md-6 mb-4">
                            <h4 className="footer-title">Links Úteis</h4>
                            <ul className="footer-links">
                                <li><a href="/sobre">Sobre Nós</a></li>
                                <li><a href="/contato">Contato</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/faq">Perguntas Frequentes</a></li>
                                <li><a href="/trocas">Trocas e Devoluções</a></li>
                                <li><a href="/privacidade">Política de Privacidade</a></li>
                            </ul>
                        </div>

                        {/* Categorias */}
                        <div className="col-lg-2 col-md-6 mb-4">
                            <h4 className="footer-title">Categorias</h4>
                            <ul className="footer-links">
                                <li><a href="/categoria/eletronicos">Eletrônicos</a></li>
                                <li><a href="/categoria/roupas">Roupas</a></li>
                                <li><a href="/categoria/calcados">Calçados</a></li>
                                <li><a href="/categoria/livros">Livros</a></li>
                                <li><a href="/categoria/esportes">Esportes</a></li>
                                <li><a href="/categoria/beleza">Beleza</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Seção de Pagamentos e Segurança */}
            <div className="footer-payments">
                <div className="container">
                    <h5>Formas de Pagamento</h5>
                    <div className="payment-methods">
                        <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa" />
                        <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Mastercard" />
                        <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" alt="American Express" />
                        <img src="https://cdn-icons-png.flaticon.com/128/825/825454.png" alt="Elo" />
                        <img src="https://cdn-icons-png.flaticon.com/128/825/825426.png" alt="Hipercard" />
                        <img src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png" alt="Pix" />
                        <img src="https://cdn-icons-png.flaticon.com/128/825/825517.png" alt="Boleto" />
                    </div>
                    
                    <h5 className="mt-3">Segurança</h5>
                    <div className="security-badges">
                        <img src="https://cdn-icons-png.flaticon.com/128/1067/1067566.png" alt="SSL" />
                        <img src="https://cdn-icons-png.flaticon.com/128/391/391070.png" alt="Google Safe" />
                        <img src="https://cdn-icons-png.flaticon.com/128/1067/1067590.png" alt="Reclame Aqui" />
                    </div>
                </div>
            </div>

            {/* Rodapé Inferior */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="mb-0">
                                &copy; {new Date().getFullYear()} Sua Loja. Todos os direitos reservados.
                            </p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <p className="mb-0">
                                CNPJ: 00.000.000/0000-00 • Endereço: Rua Exemplo, 123 - São Paulo/SP
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}