import React, { useState } from 'react'
import axios from 'axios'


const Chatbot = () => {
  const [message, setMessage] = useState('')
  const API_KEY = 'AIzaSyAOISFItNdVN6ZDnUdj8iMkb-l1H4zEUAY'
  const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + API_KEY
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I\'m your AI assistant. How can I help you today?', isBot: true, timestamp: new Date() }
  ])
  const [isLoading, setIsLoading] = useState(false)

  // gemini ai api call
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message to chat
    const userMessage = {
      id: Date.now(),
      text: message,
      isBot: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    
    const currentMessage = message
    setMessage('')
    setIsLoading(true)

    try {
      const response = await axios.post(`${API_URL}`, {
        "contents": [
          {
            "parts": [
              {
                "text": currentMessage
              }
            ]
          }
        ]
      })
      console.log(response, "API Response")

      const responseText = response.data.candidates[0].content.parts[0].text;
      
      // Add bot response to chat
      const botMessage = {
        id: Date.now() + 1,
        text: responseText,
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      
    } catch (error) {
      console.error('Error:', error)
      // Add error message to chat
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error. Please try again.',
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      <div className='bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 w-full h-screen  flex justify-center items-center p-6 scrollbar-blue'>
        <div className="box bg-black rounded-lg w-full max-w-4xl h-5/6 flex flex-col shadow-xl">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-semibold">ChatAI</h2>
            <p className='text-sm opacity-90'>Ask me anything!</p>
          </div>
          
          {/* Chat Messages Container */}
          <div className="chat-container bg-gray-100 flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.isBot 
                      ? 'bg-white text-gray-800 shadow-sm border border-gray-200' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 shadow-sm border border-gray-200 px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                      <span className="text-sm text-gray-500">AI is typing...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isLoading || !message.trim()}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>   
      </div>
    </>
  )
}

export default Chatbot