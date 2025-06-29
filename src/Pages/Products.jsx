import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    icon: "🤖",
    title: "Chatbot",
    description: "Chat with AI to get answers to your questions.",
    link: "/products/chatbot"
  },
  {
    icon: "✍️",
    title: "AI Content Writer",
    description: "Generate high-quality content with advanced AI assistance.",
    link: "/products/content-writer"
  },
  {
    icon: "🎨",
    title: "AI Image Generator",
    description: "Create stunning images from text descriptions.",
    link: "/products/image-generator"
  },
  {
    icon: "💻",
    title: "AI Code Assistant",
    description: "Write better code faster with AI-powered suggestions.",
    link: "/products/code-assistant"
  }
];

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-10">
      {/* Product Selection Section */}
      <section className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {products.map((product, idx) => (
            <Link to={product.link} key={product.title} className="h-full">
              <div
                className="bg-white text-black rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer transform hover:-translate-y-2 flex flex-col items-center h-full min-h-[260px]"
                onClick={() => setSelectedProduct(product)}
                style={{ minWidth: 0 }}
              >
                <div className="text-4xl mb-2">{product.icon}</div>
                <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
                <p className="text-gray-700 text-sm text-center">{product.description}</p>
                <button className="bg-black text-white px-4 py-2 rounded-md mt-auto w-full">View Product</button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Product Reviews Section */}


      {/* How It Works Section */}
      <section className="max-w-4xl mx-auto px-4 mb-12 mt-28">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Products Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-2">🛠️</div>
            <h3 className="text-lg font-semibold text-white mb-1">Diverse AI Tools</h3>
            <p className="text-gray-200 text-sm">
              Explore a wide range of AI-powered products including chatbots, content writers, image generators, and code assistants. Each tool is designed to solve real-world problems and boost your productivity.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-4xl mb-2">🔒</div>
            <h3 className="text-lg font-semibold text-white mb-1">Secure & Reliable</h3>
            <p className="text-gray-200 text-sm">
              Our products are built with security and reliability in mind. Enjoy seamless integration, 24/7 support, and trusted performance for all your business and creative needs.
            </p>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Why Choose Our AI Products?</h2>
          <p className="text-gray-700 text-center mb-6">
            Our suite of AI-powered tools is designed to help you work smarter, faster, and more creatively.
            Whether you need to automate tasks, generate content, or get insights from your data, our products are built for reliability and ease of use.
          </p>
          <ul className="list-disc list-inside text-gray-700 max-w-2xl mx-auto space-y-2">
            <li>Cutting-edge AI technology</li>
            <li>User-friendly interfaces</li>
            <li>24/7 customer support</li>
            <li>Trusted by thousands of users</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Products;