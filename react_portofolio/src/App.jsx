import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section - Dark with gradient orbs */}
      <header className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0f0b09' }}>
        {/* Large gradient orb top-right */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-60" style={{ background: 'radial-gradient(circle, #f28f49 0%, #ca4c3b 40%, transparent 70%)' }}></div>
        {/* Smaller orb bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-40" style={{ background: 'radial-gradient(circle, #d9ac6f 0%, #a86046 50%, transparent 70%)' }}></div>
        
        <div className="relative max-w-6xl mx-auto px-8 py-20 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-sm tracking-[0.25em] uppercase mb-6" style={{ color: '#f28f49' }}>DevOps Engineer & SRE</p>
              <h1 className="text-7xl lg:text-8xl font-black leading-none mb-8" style={{ color: '#f5ebe0' }}>
                ANDREI<br/>RUSNAC
              </h1>
              <p className="text-xl leading-relaxed mb-10 max-w-md" style={{ color: '#d9ac6f' }}>
                Building scalable cloud-native infrastructure with reliability and automation at its core.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="/CV_Andrei_Rusnac_Visual.pdf" className="px-8 py-4 font-mono font-bold text-sm uppercase tracking-wider rounded-full transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #f28f49, #ca4c3b)', color: '#0f0b09' }}>
                  Download CV
                </a>
                <a href="https://www.linkedin.com/in/andrieshrusnac/" target="_blank" rel="noreferrer" className="px-8 py-4 font-mono font-bold text-sm uppercase tracking-wider rounded-full border-2 transition-all hover:scale-105" style={{ borderColor: '#d9ac6f', color: '#d9ac6f' }}>
                  LinkedIn
                </a>
              </div>
            </div>
            
            {/* Right side - decorative element */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-80 h-80 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(242,143,73,0.2), rgba(202,76,59,0.1))' }}>
                <div className="w-60 h-60 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(217,172,111,0.3), rgba(168,96,70,0.2))' }}>
                  <span className="text-8xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section - Cream background */}
      <section className="py-32 relative" style={{ background: 'linear-gradient(180deg, #f5ebe0 0%, #ede4d8 100%)' }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <p className="font-mono text-sm tracking-[0.25em] uppercase mb-4" style={{ color: '#ca4c3b' }}>About Me</p>
              <h2 className="text-4xl font-black" style={{ color: '#0f0b09' }}>WHO<br/>I AM</h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-xl leading-relaxed" style={{ color: '#3d2a1a' }}>
                Experienced DevOps and SRE engineer with a proven track record of designing and implementing scalable, secure, and observable cloud-native infrastructure. Specialized in Kubernetes orchestration, infrastructure-as-code, and building reliable platform engineering solutions.
              </p>
              <div className="flex gap-6 mt-10">
                <a href="mailto:your-email@example.com" className="font-mono text-sm hover:underline" style={{ color: '#a86046' }}>📧 Email</a>
                <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className="font-mono text-sm hover:underline" style={{ color: '#a86046' }}>🏆 Credly</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Dark */}
      <section className="py-32 relative overflow-hidden" style={{ background: '#0f0b09' }}>
        {/* Decorative orb */}
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-30 -translate-y-1/2" style={{ background: 'radial-gradient(circle, #f28f49 0%, transparent 70%)' }}></div>
        
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <p className="font-mono text-sm tracking-[0.25em] uppercase mb-4" style={{ color: '#f28f49' }}>What I Do</p>
          <h2 className="text-5xl font-black mb-16" style={{ color: '#f5ebe0' }}>SKILLS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCard title="Cloud & Infrastructure" skills={['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Ansible']} />
            <SkillCard title="Observability" skills={['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'Datadog']} />
            <SkillCard title="CI/CD & Automation" skills={['GitLab CI', 'GitHub Actions', 'Jenkins', 'ArgoCD', 'Helm']} />
            <SkillCard title="Tools & Languages" skills={['Linux', 'Git', 'Python', 'Bash', 'Nginx']} />
          </div>
        </div>
      </section>

      {/* Experience Section - Cream with cards */}
      <section className="py-32" style={{ background: 'linear-gradient(180deg, #ede4d8 0%, #f5ebe0 100%)' }}>
        <div className="max-w-5xl mx-auto px-8">
          <p className="font-mono text-sm tracking-[0.25em] uppercase mb-4" style={{ color: '#ca4c3b' }}>Career</p>
          <h2 className="text-5xl font-black mb-16" style={{ color: '#0f0b09' }}>EXPERIENCE</h2>
          
          <div className="space-y-8">
            <ExperienceCard
              position="Senior DevOps Engineer"
              company="Company Name"
              period="2023 — Present"
              points={[
                'Led infrastructure modernization and cloud-native transformation',
                'Architected multi-region Kubernetes infrastructure',
                'Reduced deployment time by 60% through CI/CD optimization',
                'Reduced infrastructure costs by 40%'
              ]}
            />
            <ExperienceCard
              position="DevOps Engineer"
              company="Previous Company"
              period="2021 — 2023"
              points={[
                'Managed IaC deployments using Terraform and Ansible',
                'Automated 90% of manual deployment processes',
                'Established disaster recovery procedures with RPO < 1 hour',
                'Mentored junior engineers in DevOps practices'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Certifications Section - Dark with gradient accent */}
      <section className="py-32 relative overflow-hidden" style={{ background: '#0f0b09' }}>
        {/* Gradient bar */}
        <div className="absolute top-0 left-0 w-full h-2" style={{ background: 'linear-gradient(90deg, #f28f49, #ca4c3b, #d9ac6f)' }}></div>
        {/* Decorative orb */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #d9ac6f 0%, transparent 70%)' }}></div>
        
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-sm tracking-[0.25em] uppercase mb-4" style={{ color: '#f28f49' }}>Credentials</p>
              <h2 className="text-5xl font-black mb-12" style={{ color: '#f5ebe0' }}>CERTIFICATIONS</h2>
              
              <ul className="space-y-6">
                <CertItem name="Kubernetes Application Developer (CKAD)" />
                <CertItem name="AWS Certified Solutions Architect" />
                <CertItem name="Linux Professional Institute (LPI)" />
              </ul>
            </div>
            
            <div>
              <p className="font-mono text-sm tracking-[0.25em] uppercase mb-4" style={{ color: '#f28f49' }}>Background</p>
              <h2 className="text-5xl font-black mb-12" style={{ color: '#f5ebe0' }}>EDUCATION</h2>
              
              <div className="p-8 rounded-2xl" style={{ background: 'rgba(242,143,73,0.1)', border: '1px solid rgba(217,172,111,0.3)' }}>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#f28f49' }}>Bachelor's Degree</h3>
                <p className="font-mono text-sm mb-4" style={{ color: '#d9ac6f' }}>Computer Science</p>
                <p style={{ color: '#a86046' }}>Advanced courses in Cloud Architecture and Distributed Systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner - Gradient */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #f28f49 0%, #ca4c3b 50%, #a86046 100%)' }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-6xl font-black" style={{ color: '#0f0b09' }}>8+</p>
              <p className="font-mono text-sm uppercase tracking-wider mt-2" style={{ color: '#0f0b09' }}>Years Experience</p>
            </div>
            <div>
              <p className="text-6xl font-black" style={{ color: '#0f0b09' }}>50+</p>
              <p className="font-mono text-sm uppercase tracking-wider mt-2" style={{ color: '#0f0b09' }}>Microservices</p>
            </div>
            <div>
              <p className="text-6xl font-black" style={{ color: '#0f0b09' }}>40%</p>
              <p className="font-mono text-sm uppercase tracking-wider mt-2" style={{ color: '#0f0b09' }}>Cost Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Cream */}
      <footer className="py-16" style={{ background: '#f5ebe0' }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-2xl font-black" style={{ color: '#0f0b09' }}>ANDREI RUSNAC</h3>
              <p className="font-mono text-sm mt-2" style={{ color: '#a86046' }}>DevOps Engineer & SRE</p>
            </div>
            <div className="flex gap-6">
              <a href="/CV_Andrei_Rusnac_Visual.pdf" className="font-mono text-sm uppercase tracking-wider hover:underline" style={{ color: '#ca4c3b' }}>Visual CV</a>
              <a href="/CV_Andrei_Rusnac_ATS.pdf" className="font-mono text-sm uppercase tracking-wider hover:underline" style={{ color: '#ca4c3b' }}>ATS CV</a>
              <a href="https://www.linkedin.com/in/andrieshrusnac/" target="_blank" rel="noreferrer" className="font-mono text-sm uppercase tracking-wider hover:underline" style={{ color: '#ca4c3b' }}>LinkedIn</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center" style={{ borderColor: '#d9ac6f' }}>
            <p className="font-mono text-xs" style={{ color: '#a86046' }}>© {new Date().getFullYear()} Andrei Rusnac. Built with React.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, skills }) {
  return (
    <div className="p-8 rounded-2xl transition-all hover:scale-105" style={{ background: 'rgba(245,235,224,0.05)', border: '1px solid rgba(217,172,111,0.2)' }}>
      <h3 className="text-xl font-bold mb-6" style={{ color: '#f28f49' }}>{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-2 rounded-full font-mono text-sm" style={{ background: 'rgba(242,143,73,0.15)', color: '#d9ac6f' }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({ position, company, period, points }) {
  return (
    <div className="p-10 rounded-2xl bg-white" style={{ boxShadow: '0 20px 60px rgba(168,96,70,0.1)' }}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-black" style={{ color: '#0f0b09' }}>{position}</h3>
          <p className="font-mono text-sm mt-1" style={{ color: '#ca4c3b' }}>{company}</p>
        </div>
        <span className="font-mono text-sm px-4 py-2 rounded-full" style={{ background: '#f28f49', color: '#0f0b09' }}>{period}</span>
      </div>
      <ul className="space-y-3">
        {points.map((point, idx) => (
          <li key={idx} className="flex gap-4" style={{ color: '#3d2a1a' }}>
            <span style={{ color: '#f28f49' }}>→</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CertItem({ name }) {
  return (
    <li className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(242,143,73,0.1)' }}>
      <span className="w-3 h-3 rounded-full" style={{ background: '#f28f49' }}></span>
      <span className="font-semibold" style={{ color: '#f5ebe0' }}>{name}</span>
    </li>
  )
}
