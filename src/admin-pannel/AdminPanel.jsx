import { useEffect, useState } from "react";
import "./AdminPanel.css";

function AdminPanel() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/api/messages", {
      headers: { Authorization: token }
    })
      .then(async res => {
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.message || "Unauthorized");
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          setMessages([]);
        }
      })
      .catch(err => {
        console.error(err);
        setMessages([]);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="container admin_container">
      <h2 className="admin_title">All Messages</h2>

      {messages.length === 0 ? (
        <p>No messages found or unauthorized</p>
      ) : (
        <table className="admin_table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
  {messages.map(msg => {
    // Helper function to truncate message
    const truncateMessage = (text, wordLimit) => {
      const words = text.split(" ");
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + " …";
      }
      return text;
    };

    return (
      <tr key={msg._id}>
        <td>{msg.name}</td>
        <td>{msg.email}</td>
        <td>{truncateMessage(msg.message, 50)}</td>
        <td>{new Date(msg.date).toLocaleString()}</td>
      </tr>
    );
  })}
</tbody>
        </table>
      )}

      <div className="logout_container">
        <button onClick={handleLogout} className="logout_btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminPanel;