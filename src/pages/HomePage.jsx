// Homepage.jsx
import { motion } from "framer-motion";
import { Film, Link } from "lucide-react";
import ViewMovies from "./ViewMovie";
import { use } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 drop-shadow-lg mb-4">
          🎬 Movie Ticket Booking
        </h1>
        <p className="text-lg text-gray-300 max-w-md mx-auto">
          Book your favorite movies instantly — smooth, fast and easy.
        </p>
      </motion.div>

      {/* 3D Movie Card */}
      <div className="[perspective:800px] mb-10">
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          whileHover={{ scale: 1.05 }}
          className="w-full max-w-sm bg-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl border border-white/20 transform-style-3d"
        >
          <div className="flex flex-col items-center space-y-4">
            <Film size={48} className="text-pink-400" />
            <h2 className="text-xl font-semibold text-white">Now Showing</h2>
            <p className="text-gray-400 text-center">
              Explore trending movies and reserve your seat now.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-md grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <button
          className="bg-gradient-to-t from-violet-600 to-green-300 hover:bg-purple-700 text-white py-5 text-base font-medium rounded-xl shadow-lg transition-all"
          onClick={() => navigate("/view")}
        >
          View Movies
        </button>
        <button className="bg-gradient-to-t from-pink-500 to-purple-400 hover:bg-pink-600 text-white py-5 text-base font-medium rounded-xl shadow-lg transition-all">
          Book a Ticket
        </button>
        <button className="bg-gradient-to-t from-rose-500 to-amber-300 hover:bg-amber-600 text-white py-5 text-base font-medium rounded-xl shadow-lg transition-all">
          Cancel Ticket
        </button>
        <button className="bg-gradient-to-t from-sky-700 to-pink-300 hover:bg-blue-600 text-white py-5 text-base font-medium rounded-xl shadow-lg transition-all">
          Generate Report
        </button>
      </motion.div>
    </div>
  );
}
