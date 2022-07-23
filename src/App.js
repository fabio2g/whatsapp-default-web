import "./App.css";


// Icons
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
                    {/* Botões */}
                    <div className="header--botons">
                        <div className="header--btn">
                            <div>
                                <DonutLargeIcon style={{ color: "#919191" }} />
                            </div>
                            <div>
                                <ChatIcon style={{ color: "#919191" }} />
                            </div>
                            <div>
                                <MoreVertIcon style={{ color: "#919191" }} />
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
