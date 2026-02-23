import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, LayoutGrid } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith('/project/');

  return (
    <nav className="sticky top-0 z-50 w-full glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {isProjectDetail ? (
          <Link 
            to="/" 
            className="flex items-center gap-2 text-primary font-bold transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs md:text-sm tracking-wide uppercase">Back to Projects</span>
          </Link>
        ) : (
          <Link to="/" className="flex items-center gap-2 group">
            <div className="size-8 md:size-10 bg-primary rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <LayoutGrid className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight">Joey Xu</span>
          </Link>
        )}

        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <Link to="/" className="hover:text-primary transition-colors">Work</Link>
            <a href="#about" className="text-slate-500 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-slate-500 hover:text-primary transition-colors">Contact</a>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
          >
            Hire Me
          </motion.button>
        </div>
      </div>
    </nav>
  );
};
