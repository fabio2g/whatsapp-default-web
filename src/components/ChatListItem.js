import "./ChatListItem.css";

const ChatListItem = ({ onClick, active, data }) => {
    return (
        <div
            className={`chatListItem ${active ? "active" : ""}`}
            onClick={onClick}
        >
            <img
                className="chatListItem--avatar"
                src={data.image}
                alt="avatar"
            />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatList--line">
                    <div className="chatListItem--lastMsg">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non voluptates laboriosam odio eum ducimus
                            alias dolores doloremque. Velit, ab quod ipsa autem
                            nemo ex facere ipsam mollitia praesentium, quibusdam
                            explicabo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatListItem;
