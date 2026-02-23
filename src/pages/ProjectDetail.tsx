import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useEffect } from 'react';

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);
  const nextProject = PROJECTS.find(p => p.id === project?.nextProjectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/" className="text-primary font-bold underline">Back to home</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col"
    >
      {/* Hero Header */}
      <header className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
        <div 
          className="w-full h-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('${project.heroImage}')` }}
        ></div>
        
        <div className="absolute bottom-0 left-0 w-full z-20 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded mb-4 tracking-widest uppercase"
            >
              Case Study
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900"
            >
              {project.title.split(':').map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && project.title.includes(':') && <><br className="hidden md:block" />:</>}
                </span>
              ))}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl max-w-2xl font-medium text-slate-600"
            >
              {project.subtitle}
            </motion.p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Two-Column Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left (Sidebar) */}
          <aside className="lg:col-span-4 space-y-10 order-2 lg:order-1">
            <div className="p-8 rounded-xl border border-slate-200 space-y-8 bg-white shadow-sm">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">My Role</h4>
                <p className="text-lg font-semibold">{project.role}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Timeline</h4>
                <p className="text-lg font-semibold">{project.timeline}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1.5 rounded bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                  Visit Live Site
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </aside>

          {/* Right (Main Content) */}
          <div className="lg:col-span-8 space-y-12 order-1 lg:order-2 markdown-body">
            <section>
              <h2 className="!mt-0">The Challenge</h2>
              <div className="whitespace-pre-line">
                {project.challenge}
              </div>
            </section>
            
            <section>
              <h2>The Solution</h2>
              <div className="whitespace-pre-line">
                {project.solution}
              </div>
            </section>
          </div>
        </div>

        {/* Image Gallery */}
        {project.gallery.length > 0 && (
          <section className="mt-24 space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Visual Deep Dive</h2>
              <p className="text-slate-600">
                A closer look at the interface elements, mobile responsiveness, and design system components developed for this project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative rounded-xl overflow-hidden border border-slate-200 bg-white"
                >
                  <img 
                    src={item.url} 
                    alt={item.alt}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm font-medium">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Footer Navigation */}
        {nextProject && (
          <section className="mt-32 pt-16 border-t border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Next Project</p>
                <Link 
                  to={`/project/${nextProject.id}`}
                  className="text-3xl font-extrabold hover:text-primary transition-colors"
                >
                  {nextProject.title}
                </Link>
              </div>
              <Link 
                to={`/project/${nextProject.id}`}
                className="group flex items-center gap-4 bg-slate-50 px-8 py-5 rounded-xl border border-slate-200 hover:border-primary transition-all"
              >
                <span className="text-lg font-bold">View Project</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>
        )}
      </main>
    </motion.div>
  );
};
