import React, { useState } from 'react' 
import axios from 'axios'

const Chatbot = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([{ text: 'Hello! How can I help you?', isBot: true}])
  const [loading, setLoading] = useState(false)
  
  const API_KEY = 'AIzaSyAOISFItNdVN6ZDnUdj8iMkb-l1H4zEUAY'
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message.trim()) return

    setMessages(prev => [...prev, { text: message, isBot: false }])
    setMessage('')
    setLoading(true)

    try {
      const response = await axios.post(API_URL, {
        contents: [{ parts: [{ text: message }] }]
      })
        setMessages(prev => [...prev, { 
        text: response.data.candidates[0].content.parts[0].text, 
        isBot: true 
      }])
    } catch (error) {
      setMessages(prev => [...prev, { text: 'Error occurred', isBot: true }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-[88vh] flex flex-col bg-gray-50 rounded-lg">
      <div className="bg-white border-b px-4 py-3">
        <h1 className="text-xl font-semibold">Formatix.AI</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-md px-4 py-2 rounded-lg ${
              msg.isBot ? 'bg-white' : 'bg-blue-500 text-white'
            }`}>
              <p>{msg.text}</p>
            </div>
          </div>
        ))} 
        
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-2 rounded-lg">
              <p>Loading...</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-white border-t p-3 rounded-lg">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={loading}
            className="flex-1 px-4 py-2 border rounded-lg bg-gray-100"
          />
          <button
            type="submit"
            disabled={loading || !message.trim()}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chatbot