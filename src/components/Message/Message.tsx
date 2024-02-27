"use client";

import React from 'react';
import './Message.css'; // Import CSS for styling

type MessageProps = {
  message: string;
  onAnimationEnd: () => void;
  type?: 'success' | 'error';
};

const Message: React.FC<MessageProps> = ({ message, onAnimationEnd }) => {
  return (
    <div className="message" onAnimationEnd={onAnimationEnd}>
      {message}
    </div>
  );
};

export default Message;
