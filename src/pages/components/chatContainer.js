import '../components/ChatStyle/chat.css'

const ChatContainer = (props) => {
    return(
        <div className="chatContainer">
            <div className="innerContainer">
                <ul>
                    <h3>Forum</h3>
                    <p>* Please be respectful when encourage in conversation. *</p>
                    <p>_________________________________________________</p>
                {props.messages}
                </ul>
            </div>
        </div>
    )
}

export default ChatContainer;