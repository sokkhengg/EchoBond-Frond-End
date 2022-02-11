import './chat.css'

const ChatContainer = (props) => {
    return(
        <div className="chatContainer">
            <div className="innerContainer">
                <ul>
                {props.messages}
                </ul>
            </div>
        </div>
    )
}

export default ChatContainer;