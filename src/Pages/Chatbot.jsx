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

      const filteredResponse = responseText.replace(/[^\w\s]/g, '')
      
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
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header - Fixed at top */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex-shrink-0">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">ChatAI</h1>
      </div>
      
      {/* Messages Area - Takes remaining space with fixed height */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-3 sm:space-y-4 max-w-4xl mx-auto w-full">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl px-3 sm:px-4 py-2 sm:py-3 rounded-lg ${
              msg.isBot 
                ? 'bg-white text-gray-800 shadow-sm' 
                : 'bg-blue-500 text-white'
            }`}>
              <p className="text-xs sm:text-sm leading-relaxed">{msg.text}</p>
              <p className={`text-xs mt-1 sm:mt-2 ${msg.isBot ? 'text-gray-400' : 'text-blue-100'}`}>
                {formatTime(msg.timestamp)}
              </p>
            </div>
          </div>
        ))}
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white shadow-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <span className="text-xs sm:text-sm text-gray-500">AI is typing...</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Input Area - Fixed at bottom with proper height */}
      <div className="bg-white border-t border-gray-200 p-3 sm:p-4 md:p-5 flex-shrink-0 min-h-[80px]">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-3 items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 min-h-[44px]"
            />
            <button
              type="submit"
              disabled={isLoading || !message.trim()}
              className="bg-blue-500 text-white px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center"
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Chatbot