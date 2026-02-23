import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="font-bold text-lg">J</span>
          </div>
          <span className="text-lg font-bold tracking-tight">Joey Xu</span>
        </div>
        
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Dribbble</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
        </div>
        
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Joey Xu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
