import "./Message.css";
import { useEffect, useState } from "react";

const Message = () => {
  const [friendMessage, setFriendMessage] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setFriendMessage(data.users));
  }, []);
  return (
    <div className="page-margin">
      <div className="message-container">
        <div className="message-left">
          <div className="user-title">saran_pariyar1</div>
          <div className="friends-container">
            {friendMessage.map((friend) => {
              return (
                <div className="message-person" key={friend.firstName}>
                  <img src={friend.image} alt="" className="message-img" />
                  <div className="text-section">
                    <div className="name">
                      {friend.firstName} {friend.lastName}
                    </div>
                    <div className="last-message">Active {friend.age} min ago</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="message-right">message right</div>
      </div>
    </div>
  );
};

export default Message;
