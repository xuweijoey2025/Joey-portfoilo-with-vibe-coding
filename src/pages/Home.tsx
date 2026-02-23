import { motion } from 'motion/react';
import { ArrowRight, Bolt } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';

export const Home = () => {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Hi, I'm <span className="text-primary">Joey</span>, a Digital Product Designer
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
              Crafting intuitive experiences at the intersection of design and technology. I help startups build products that users love.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#projects"
                whileHover={{ y: -4 }}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-base font-bold transition-all shadow-xl shadow-primary/25"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <a 
                href="#about"
                className="flex items-center gap-2 border border-slate-200 hover:bg-slate-50 px-8 py-4 rounded-lg text-base font-bold transition-all"
              >
                About Me
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYabOVwHKcFhfpQepKxBuN_UE3KNw2k03s8xaFyeqFHIUfN84Fnkj435788Gud34IQ-Uxsg7oozQj66sCf7uIuZrGNghZLrlX242hmwazNomRxzEcZ-jUZ4gsDCsOBoAt7Jn6DzXYE_bJw9qU9X11ecJ_N10adVjcdEfvRPXv7lsY8pupROsEj2F61AY6h1xuI9RoPXOrWHezByz26ru3vnQgbqf9Xan4ZFuKfw_kKoUxJHnAt2Q7Y_VrSLquLl8Hjrwgw_R3lDIU" 
                alt="Product Design Showcase"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-xl shadow-2xl border border-slate-200 flex items-center gap-4 max-w-xs"
            >
              <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Bolt className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold">Fast Turnaround</p>
                <p className="text-xs text-slate-500">Design to Handoff in weeks.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
                <div className="h-1.5 w-20 bg-primary rounded-full"></div>
              </div>
              
              <div className="flex flex-col gap-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  With over 8 years of experience in digital product design, I've had the privilege of working with ambitious startups and established brands to transform complex problems into elegant, user-centric solutions. My philosophy is rooted in the belief that great design is not just how it looks, but how it works and how it makes users feel.
                </p>
                <p>
                  I bridge the gap between aesthetics and functionality, leveraging data-driven insights and empathetic research to build products that resonate. Whether it's crafting a seamless mobile experience or architecting a complex SaaS platform, my goal is always to create value through intentional design.
                </p>
                <p>
                  Beyond the screen, I'm passionate about design systems, accessibility, and mentoring the next generation of designers. I believe in a collaborative approach, working closely with engineering and product teams to ensure the vision is executed flawlessly from concept to code.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 sticky top-32">
                <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Product Strategy', 'UI/UX Design', 'Prototyping', 'Design Systems', 'User Research', 'Figma', 'React & Tailwind', 'Interaction Design'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-slate-100 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <h3 className="text-xl font-bold mb-4">Interests</h3>
                  <ul className="text-slate-600 text-sm space-y-3">
                    {['Generative AI Art', 'Mechanical Keyboards', 'Urban Photography', 'Sci-Fi Literature'].map(interest => (
                      <li key={interest} className="flex items-center gap-2">
                        <div className="size-1.5 rounded-full bg-primary"></div>
                        {interest}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
              <div className="h-1.5 w-20 bg-primary rounded-full"></div>
            </div>
            <p className="text-slate-500 max-w-md">
              A selection of recent works spanning across mobile apps, SaaS platforms, and brand identities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-10 py-4 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-primary rounded-3xl p-12 md:p-20 overflow-hidden shadow-2xl shadow-primary/30 text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight max-w-2xl">
                Ready to transform your digital presence?
              </h2>
              <p className="text-white/80 text-lg max-w-xl">
                Currently accepting new projects for Q3 2024. Let's discuss how we can work together to build something amazing.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary hover:bg-slate-50 px-10 py-5 rounded-xl text-lg font-black transition-all shadow-xl"
              >
                Get in Touch
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
