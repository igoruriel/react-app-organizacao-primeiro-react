import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="/teste" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por mim.
            </p>
        </section>
    </footer>
    )
}

export default Rodape;