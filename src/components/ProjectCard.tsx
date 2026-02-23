import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
    >
      <Link to={`/project/${project.id}`} className="block w-full aspect-video overflow-hidden">
        <img 
          src={project.heroImage} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </Link>
      
      <div className="p-8 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            <Link to={`/project/${project.id}`}>{project.title}</Link>
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
        
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
        
        <Link 
          to={`/project/${project.id}`}
          className="flex items-center gap-1 text-primary text-sm font-bold mt-2 group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};
