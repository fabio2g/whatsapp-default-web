import "./App.css";

// Icons

function App() {
    return (
        <div className="app-window">
            <div className="sidebar">
                {/* Header */}
                <header>
                    <img
                        // Imagem de perfil
                        className="header--avatar"
                        src="https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1
                        &ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZmlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        alt="avatar"
                    />
                    {/* Botões header */}
                    <div className="header--botons">
                        <div className="header--btn">
                            <div>
                                <span class="material-symbols-outlined icons--btn">
                                    donut_large
                                </span>
                            </div>

                            <div>
                                <span class="material-symbols-outlined icons--btn">
                                    chat
                                </span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined icons--btn">
                                    more_vert
                                </span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Pesquisa */}
                <div className="search"></div>
                {/* Chat */}
                <div className="chatlist"></div>
            </div>
            <div className="contentarea">Div 2</div>
        </div>
    );
}

export default App;
