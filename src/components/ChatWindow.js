import "./ChatWindow.css";
import EmojiPicker from "emoji-picker-react";

const ChatWindow = () => {
    const handleEmojiClick = () => {};
    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img
                        className="chatWindow--avatar"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                        alt="avatar"
                    />
                    <div className="chatwindow--name">John Doe</div>
                </div>
                <div className="chatWindow--buttons">
                    <span class="material-symbols-outlined chatWindow--btn">
                        search
                    </span>
                    <span class="material-symbols-outlined chatWindow--btn">
                        attach_file
                    </span>
                    <span class="material-symbols-outlined chatWindow--btn">
                        more_vert
                    </span>
                </div>
            </div>
            <div className="chatWindow--body"></div>

            {/* emoji */}
            <div className="chatWindow--emojiarea">
                <EmojiPicker onEmojiClick={handleEmojiClick} disableSearchBar />
            </div>

            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    <div className="chatWindow--buttons">
                        <span class="material-symbols-outlined">close</span>
                        <span class="material-symbols-outlined">
                            add_reaction
                        </span>
                    </div>
                </div>
                <div className="chatWindow--inputarea">
                    <input
                        className="chatWindow--input"
                        placeholder="Digite uma mensagem"
                        type="text"
                    />
                </div>
                <div className="chatWindow--pos">
                    <div className="chatWindow--buttons">
                        <span class="material-symbols-outlined">send</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
