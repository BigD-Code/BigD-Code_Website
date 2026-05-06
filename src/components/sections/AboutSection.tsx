import { motion } from 'framer-motion'
import { Code, Shield, Cpu, Terminal } from 'lucide-react'
import { config } from '@/data/config'

const categories = [
  { id: 'frontend', label: 'Frontend', icon: Code, color: '#00ff41' },
  { id: 'backend', label: 'Backend', icon: Terminal, color: '#00ffff' },
  { id: 'security', label: 'Security', icon: Shield, color: '#ff0040' },
  { id: 'tools', label: 'Tools', icon: Cpu, color: '#ffff00' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {config.description.about}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Experience Card */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Experience</h3>
              <div className="space-y-4">
                {config.experience.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-l-2 border-primary pl-4"
                  >
                    <h4 className="font-bold text-foreground">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                    <p className="text-sm mt-2 text-muted-foreground">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-secondary/50">
                  <p className="text-3xl font-bold text-primary">3+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years Dev</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary/50">
                  <p className="text-3xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years Security</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary/50">
                  <p className="text-3xl font-bold text-primary">20+</p>
                  <p className="text-sm text-muted-foreground mt-1">Projects</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary/50">
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground mt-1">Commitment</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-primary">Skills & Expertise</h3>
              
              <div className="space-y-6">
                {categories.map((category) => {
                  const categorySkills = config.skills.filter(
                    (skill) => skill.category === category.id
                  )
                  
                  if (categorySkills.length === 0) return null
                  
                  const Icon = category.icon
                  
                  return (
                    <div key={category.id}>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-5 h-5" style={{ color: category.color }} />
                        <h4 className="font-medium" style={{ color: category.color }}>
                          {category.label}
                        </h4>
                      </div>
                      
                      <div className="space-y-3">
                        {categorySkills.map((skill, i) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">{skill.icon} {skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: category.color }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
