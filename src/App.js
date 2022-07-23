import { useState } from "react";

import "./App.css";
import ChatIntro from "./components/ChatIntro";
import ChatListItem from "./components/ChatListItem";
import ChatWindow from "./components/ChatWindow";

// Icons

function App() {
    const [chatList, setChatList] = useState([
        {
            chatId: 1,
            title: "Joe Doe",
            image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        },
        {
            chatId: 2,
            title: "Joe Doe",
            image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        },
        {
            chatId: 3,
            title: "Joe Doe",
            image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        },
        {
            chatId: 4,
            title: "Joe Doe",
            image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        },
    ]);
    const [activeChat, setActiveChat] = useState({});
    return (
        <div className="app-window">
            <div className="sidebar">
                {/* Header */}
                <header>
                    <img
                        // Imagem de perfil
                        className="header--avatar"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                        alt="avatar"
                    />
                    {/* Botões header */}
                    <div className="header--botons">
                        <div className="header--btn">
                            <div>
                                <span className="material-symbols-outlined icons--btn">
                                    donut_large
                                </span>
                            </div>

                            <div>
                                <span className="material-symbols-outlined icons--btn">
                                    chat
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined icons--btn">
                                    more_vert
                                </span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Pesquisa */}
                <div className="search icons--btn">
                    <div className="search--input">
                        <span className="material-symbols-outlined">
                            search
                        </span>
                        <input
                            type="search"
                            placeholder="Procurar ou começar uma nova conversa"
                        />
                    </div>
                </div>
                {/* Chat */}
                <div className="chatlist">
                    {chatList.map((item, key) => (
                        <ChatListItem
                            key={key}
                            data={item}
                            active={activeChat.chatId === chatList[key].chatId}
                            onClick={() => setActiveChat(chatList[key])}
                        />
                    ))}
                </div>
            </div>
            <div className="contentarea">
                {activeChat.chatId !== undefined && <ChatWindow />}
                {activeChat.chatId === undefined && <ChatIntro />}
            </div>
        </div>
    );
}

export default App;
