import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';

export interface Message {
  type: 'text' | 'image';
  self: boolean;
  content: string;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
    //     { type: 'text', content: 'Hello!', self: true },
    //     { type: 'text', content: 'Hey There!', self: false },
    //     { type: 'image', content: 'https://via.placeholder.com/150', self: false }
    //   ]);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const getImage = async ()=>{
    try {
        const response = await axios.post(`${process.env.BASE_URL}/outfit/generate_outfit`, {
            prompt: [
                ...messages.map(msg => ({
                    role: msg.self ? 'user' : 'system',
                    content: msg.content
                })),
                { role: 'user', content: inputValue }
            ]
        });
        return response.data;
    } catch (error) {
        console.error("There was an error!", error);
    }
  };
  const sendMessageWithEnter = async (e:any) => {
    if(inputValue.length!==0) {
        if(e.keyCode === 13) {
            setMessages([...messages, { type: 'text', content: inputValue, self: true }])
            setInputValue('');
            getImage().then((res)=>{
                if(res)
                setMessages([...messages,{ type: 'text', content: inputValue, self: true },{ type: res.type, content: res.content, self: res.self }])
            });
        }
    }
  };
  const sendMessage = async (e:any) => {
    if(inputValue.length!==0) {
        setMessages([...messages, { type: 'text', content: inputValue, self: true }])
        setInputValue('');
        getImage().then((res)=>{
            if(res)
                setMessages([...messages,{ type: 'text', content: inputValue, self: true } ,{ type: res.type, content: res.content, self: res.self }])
        });
    }
  };
  useEffect(() => {
    const element = buttonRef.current;
    element?.addEventListener('keydown', sendMessageWithEnter);
    return () => {
      element?.removeEventListener('keydown', sendMessageWithEnter);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);
  console.log(messages);
  return (
    <div className="border p-3 d-flex flex-column">
    <div className="overflow-auto mb-3 flex-grow-1">
        {messages.map((message, index) => (
            <div key={index}>
                {/* Render on left side */}
                {!message.self && (
                    <div className="my-2 d-flex align-items-start">
                        {message.type === 'text' ? (
                            <div className="p-2 bg-light rounded w-80">
                                {message.content}
                            </div>
                        ) : (
                            <img src={message.content} alt="Chat" className="img-fluid rounded w-80" />
                        )}
                    </div>
                )}
                {/* Render on right side */}
                {message.self && (
                    <div className="my-2 d-flex justify-content-end">
                        {message.type === 'text' ? (
                            <div className="p-2 bg-secondary text-white rounded w-80">
                                {message.content}
                            </div>
                        ) : (
                            <img src={message.content} alt="Chat" className="img-fluid rounded w-80" />
                        )}
                    </div>
                )}
            </div>
        ))}
        <div ref={messagesEndRef}></div>
    </div>
    <div className="input-group" ref={buttonRef}>
        <input 
            type="text" 
            value={inputValue} 
            onChange={e => {setInputValue(e.target.value);}} 
            className="form-control" 
            placeholder="Type a message..."
        />
        <div className="input-group-append">
            <button className="btn btn-primary" onClick={sendMessage} onKeyDown={sendMessage}>Send</button>
        </div>
    </div>
</div>

  );
};
