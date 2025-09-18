import React from "react";
import { Wifi, MessageCircle, Phone } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-4xl mb-6">
        <div className="flex items-center gap-2 text-xl font-bold">
          <Wifi className="text-white" />
          <span>EdgeFi</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-lg shadow-lg">
          Connect
        </button>
      </div>

      {/* Packages */}
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-4">
        <div className="bg-green-500 text-white p-6 rounded-2xl shadow-lg text-center font-semibold">
          <h2>Hourly Packages</h2>
          <p className="mt-2">2 hrs – 10 KES</p>
        </div>
        <div className="bg-orange-500 text-white p-6 rounded-2xl shadow-lg text-center font-semibold">
          <h2>Daily Packages</h2>
          <p className="mt-2">1 Day – 60 KES</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-2xl shadow-lg text-center font-semibold">
          <h2>Monthly Packages</h2>
          <p className="mt-2">30 Days – 700 KES</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-400 p-6 rounded-2xl shadow-lg text-xl font-bold">
          Buy Now
        </button>
      </div>

      {/* Support & AI Chat */}
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-4 mt-6">
        {/* Support */}
        <div className="bg-white text-black p-4 rounded-2xl shadow-lg">
          <h3 className="font-semibold mb-2">Help/Assist</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><MessageCircle className="text-green-600"/> SMS</li>
            <li className="flex items-center gap-2"><Phone className="text-orange-600"/> Call</li>
          </ul>
        </div>

        {/* NeuroEdge AI */}
        <div className="bg-blue-700 p-4 rounded-2xl shadow-lg">
          <h3 className="font-semibold mb-2">NeuroEdge AI</h3>
          <p className="bg-blue-500 p-3 rounded-lg mb-3">
            Hello! I’m here to assist you. Please ask for any help.
          </p>
          <button className="bg-blue-400 hover:bg-blue-300 px-4 py-2 rounded-lg w-full mb-3">
            Connect me to Wi-Fi
          </button>
          <div className="flex items-center bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-black outline-none"
            />
            <button className="bg-blue-500 px-4 text-white">➤</button>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-purple-600 text-center py-3 text-lg font-semibold">
        Connected! Your Wi-Fi is now ready <button className="ml-2 bg-white text-purple-600 px-3 py-1 rounded-lg">OK</button>
      </div>
    </div>
  );
}

export default App;
