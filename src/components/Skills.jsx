import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/skills';

const SkillBadge = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, backgroundColor: 'var(--c-theme-3)', color: 'var(--c-theme-1)' }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-theme-4/40 border border-theme-5/10 text-theme-5 text-sm cursor-pointer transition-colors shadow-sm hover:shadow-md group/badge"
    >
      {skill.icon ? (
        <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain filter drop-shadow-sm group-hover/badge:brightness-110" />
      ) : (
        <span className="w-2 h-2 rounded-full bg-theme-2 block"></span>
      )}
      <span className="font-medium">{skill.name}</span>
    </motion.div>
  );
};

const SkillCard = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displaySkills = isExpanded ? category.skills : category.skills.slice(0, 5);
  const hasMore = category.skills.length > 5;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group flex flex-col p-6 rounded-2xl bg-theme-4/20 backdrop-blur-md border border-theme-5/10 shadow-lg hover:shadow-theme-2/20 hover:border-theme-2/30 transition-all duration-300 relative overflow-hidden h-full"
    >
      {/* Decorative background gradient */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-theme-2/10 rounded-full blur-3xl group-hover:bg-theme-2/20 transition-all duration-500"></div>

      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-4">
          <motion.div 
            className="w-12 h-12 rounded-xl bg-theme-4/80 flex items-center justify-center text-2xl shadow-inner border border-theme-5/5"
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            {category.icon}
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-theme-5">{category.title}</h3>
            <p className="text-xs text-theme-5/60 mt-1 font-medium">{category.skills.length} Technologies</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 relative z-10 flex-grow content-start">
        <AnimatePresence>
          {displaySkills.map((skill, index) => (
            <SkillBadge key={skill.name} skill={skill} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 text-sm text-theme-2 hover:text-theme-5 font-semibold self-start transition-colors relative z-10"
        >
          {isExpanded ? 'Show Less' : `+${category.skills.length - 5} More`}
        </button>
      )}
    </motion.div>
  );
};

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCategories = useMemo(() => {
    return skillCategories
      .map(category => {
        // First filter by category if needed
        if (activeFilter !== 'All' && category.title !== activeFilter) {
          return null;
        }

        // Then filter skills by search term
        const matchedSkills = category.skills.filter(skill =>
          skill.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // If searching and no skills match, hide category entirely
        if (searchTerm && matchedSkills.length === 0) {
          return null;
        }

        // Return category with matched skills (if searching) or all skills (if not searching)
        return {
          ...category,
          skills: searchTerm ? matchedSkills : category.skills
        };
      })
      .filter(Boolean); // Remove nulls
  }, [searchTerm, activeFilter]);

  // Count totals for stats
  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  const totalCategories = skillCategories.length;

  return (
    <section id="skills" className="py-24 border-t border-theme-5/5 bg-theme-1 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-theme-2/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-theme-3/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-theme-5 mb-4">
              <span className="text-theme-2">S</span>kills & Expertise
            </h2>
            <p className="text-theme-5/70 max-w-2xl mx-auto text-lg mt-4">
              Technologies, tools, and engineering practices I use to build scalable, high-quality applications.
            </p>
          </motion.div>
          
          {/* Stats Counters */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-8 mt-10 text-theme-5/80"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-theme-2">{totalSkills}+</span>
              <span className="text-xs tracking-widest uppercase mt-2 opacity-70">Technologies</span>
            </div>
            <div className="w-px h-16 bg-theme-5/10"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-theme-2">{totalCategories}</span>
              <span className="text-xs tracking-widest uppercase mt-2 opacity-70">Categories</span>
            </div>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
        >
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search skills (e.g. React, Node.js)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl bg-theme-4/30 border border-theme-5/10 text-theme-5 placeholder:text-theme-5/40 focus:outline-none focus:border-theme-2/50 focus:ring-1 focus:ring-theme-2/50 transition-all shadow-inner"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-theme-5/40 hover:text-theme-5 transition-colors"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === 'All' 
                  ? 'bg-theme-2 text-theme-1 shadow-lg scale-105' 
                  : 'bg-theme-4/30 text-theme-5/70 hover:bg-theme-4/60 hover:text-theme-5 border border-theme-5/5'
              }`}
            >
              All
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.title}
                onClick={() => setActiveFilter(cat.title)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === cat.title 
                    ? 'bg-theme-2 text-theme-1 shadow-lg scale-105' 
                    : 'bg-theme-4/30 text-theme-5/70 hover:bg-theme-4/60 hover:text-theme-5 border border-theme-5/5'
                }`}
              >
                <span>{cat.icon}</span>
                {cat.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {filteredCategories.map((category, idx) => (
              <motion.div 
                key={category.id} 
                className="h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <SkillCard category={category} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-theme-4/10 rounded-3xl border border-theme-5/5 backdrop-blur-sm"
          >
            <div className="text-6xl mb-4 opacity-50">🔍</div>
            <h3 className="text-2xl font-bold text-theme-5 mb-2">No skills found</h3>
            <p className="text-theme-5/60 text-lg">We couldn't find any skills matching "{searchTerm}"</p>
            <button 
              onClick={() => { setSearchTerm(''); setActiveFilter('All'); }}
              className="mt-6 px-8 py-3 bg-theme-2/20 text-theme-2 font-semibold rounded-xl hover:bg-theme-2 hover:text-theme-1 transition-all duration-300"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
