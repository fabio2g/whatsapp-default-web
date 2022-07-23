import "./ChatListItem.css";

const ChatListItem = () => {
    return (
        <div className="chatListItem">
            <img
                className="chatListItem--avatar"
                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1
                &ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                alt="avatar"
            />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Jane Doe</div>
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
