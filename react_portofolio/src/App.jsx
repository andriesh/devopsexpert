import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with full gradient background */}
      <header className="relative min-h-screen flex items-center" style={{ background: 'linear-gradient(135deg, #0f0b09 0%, #1a1410 30%, #2d1f14 60%, #3d2a1a 100%)' }}>
        {/* Decorative gradient circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(242,143,73,0.4) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(202,76,59,0.3) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(217,172,111,0.15) 0%, transparent 60%)', filter: 'blur(100px)' }}></div>

        <div className="relative max-w-6xl mx-auto px-8 py-20 z-10">
          <p className="text-[#f28f49] font-mono text-sm font-bold mb-6 tracking-[0.3em] uppercase">Welcome to my portfolio</p>
          <h1 className="text-8xl font-black mb-8 leading-none tracking-tight">
            <span className="text-white">Andrei</span><br/>
            <span style={{ background: 'linear-gradient(90deg, #f28f49, #ca4c3b, #d9ac6f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rusnac</span>
          </h1>
          <p className="text-3xl text-[#d9ac6f] font-light mb-4">DevOps Engineer • SRE • Platform Architect</p>
          <p className="text-xl text-[#a86046] max-w-xl leading-relaxed mb-12">Building scalable cloud-native infrastructure with reliability, observability, and automation at its core</p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 mb-16">
            <a href="/CV_Andrei_Rusnac_Visual.pdf" className="group px-10 py-5 font-bold text-lg rounded-xl inline-flex items-center gap-3 transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(135deg, #f28f49 0%, #ca4c3b 100%)', color: 'white', boxShadow: '0 20px 40px rgba(242,143,73,0.3)' }}>
              <span>📄</span> Download Visual CV
            </a>
            <a href="/CV_Andrei_Rusnac_ATS.pdf" className="px-10 py-5 border-2 border-[#d9ac6f] text-[#d9ac6f] font-bold text-lg rounded-xl hover:bg-[#d9ac6f]/10 transition-all duration-300 inline-flex items-center gap-3">
              <span>📋</span> Download ATS CV
            </a>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-[#a86046]/30">
            <a href="mailto:your-email@example.com" className="text-[#d9ac6f] hover:text-[#f28f49] transition font-mono text-sm flex items-center gap-3">
              <span className="text-xl">📧</span> andrei@example.com
            </a>
            <a href="https://www.linkedin.com/in/andrieshrusnac/" target="_blank" rel="noreferrer" className="text-[#d9ac6f] hover:text-[#f28f49] transition font-mono text-sm flex items-center gap-3">
              <span className="text-xl">💼</span> LinkedIn
            </a>
            <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className="text-[#d9ac6f] hover:text-[#f28f49] transition font-mono text-sm flex items-center gap-3">
              <span className="text-xl">🏆</span> Credly
            </a>
          </div>
        </div>
      </header>

      {/* Professional Summary Section */}
      <section className="relative py-32" style={{ background: 'linear-gradient(180deg, #f5ebe0 0%, #faf6f1 50%, #fff8f0 100%)' }}>
        <div className="absolute top-0 left-0 w-full h-32" style={{ background: 'linear-gradient(180deg, #0f0b09 0%, transparent 100%)' }}></div>
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <h2 className="text-5xl font-black text-[#1a1410] mb-4">PROFESSIONAL SUMMARY</h2>
          <div className="w-32 h-2 rounded-full mb-12" style={{ background: 'linear-gradient(90deg, #f28f49, #ca4c3b)' }}></div>
          <div className="p-12 rounded-3xl" style={{ background: 'linear-gradient(135deg, #fff 0%, #fdf8f3 100%)', boxShadow: '0 30px 60px rgba(168,96,70,0.15)', border: '3px solid #d9ac6f' }}>
            <p className="text-xl text-[#3d2a1a] leading-relaxed">
              Experienced DevOps and SRE engineer with a proven track record of designing and implementing scalable, secure, and observable cloud-native infrastructure. Specialized in Kubernetes orchestration, infrastructure-as-code, and building reliable platform engineering solutions. Passionate about automation, observability, and creating robust systems that enable teams to scale efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="relative py-32" style={{ background: 'linear-gradient(135deg, #1a1410 0%, #2d1f14 50%, #3d2a1a 100%)' }}>
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(242,143,73,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
        <div className="absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(202,76,59,0.2) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
        
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <h2 className="text-5xl font-black text-white mb-4">CORE COMPETENCIES</h2>
          <div className="w-32 h-2 rounded-full mb-16" style={{ background: 'linear-gradient(90deg, #d9ac6f, #f28f49)' }}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CompetencyCard
              title="Cloud & Infrastructure"
              skills={['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Ansible']}
              gradient="linear-gradient(135deg, #f28f49 0%, #ca4c3b 100%)"
            />
            <CompetencyCard
              title="Observability & Monitoring"
              skills={['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'Datadog']}
              gradient="linear-gradient(135deg, #ca4c3b 0%, #a86046 100%)"
            />
            <CompetencyCard
              title="CI/CD & Automation"
              skills={['GitLab CI', 'GitHub Actions', 'Jenkins', 'ArgoCD', 'Helm']}
              gradient="linear-gradient(135deg, #d9ac6f 0%, #f28f49 100%)"
            />
            <CompetencyCard
              title="Tools & Platforms"
              skills={['Linux', 'Git', 'Python', 'Bash', 'Nginx']}
              gradient="linear-gradient(135deg, #a86046 0%, #d9ac6f 100%)"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-32" style={{ background: 'linear-gradient(180deg, #fff8f0 0%, #f5ebe0 50%, #ede4d8 100%)' }}>
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-5xl font-black text-[#1a1410] mb-4">PROFESSIONAL EXPERIENCE</h2>
          <div className="w-32 h-2 rounded-full mb-16" style={{ background: 'linear-gradient(90deg, #ca4c3b, #f28f49)' }}></div>
          
          <div className="space-y-10">
            <ExperienceCard
              position="Senior DevOps Engineer"
              company="Company Name"
              period="2023 - Present"
              description="Led infrastructure modernization and cloud-native transformation initiatives. Designed and implemented Kubernetes clusters supporting 50+ microservices. Reduced deployment time by 60% through CI/CD optimization."
              achievements={[
                'Architected multi-region Kubernetes infrastructure',
                'Implemented comprehensive observability solution with Prometheus + Grafana',
                'Reduced infrastructure costs by 40% through optimization'
              ]}
              accentColor="#f28f49"
            />
            <ExperienceCard
              position="DevOps Engineer"
              company="Previous Company"
              period="2021 - 2023"
              description="Managed infrastructure-as-code deployments using Terraform and Ansible. Implemented monitoring and alerting strategies across the organization."
              achievements={[
                'Automated 90% of manual deployment processes',
                'Established disaster recovery procedures with RPO < 1 hour',
                'Mentored 3 junior engineers in DevOps practices'
              ]}
              accentColor="#ca4c3b"
            />
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="relative py-32" style={{ background: 'linear-gradient(135deg, #2d1f14 0%, #1a1410 50%, #0f0b09 100%)' }}>
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(217,172,111,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <h2 className="text-5xl font-black text-white mb-4">EDUCATION & CERTIFICATIONS</h2>
          <div className="w-32 h-2 rounded-full mb-16" style={{ background: 'linear-gradient(90deg, #d9ac6f, #a86046)' }}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-10 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(242,143,73,0.1) 0%, rgba(202,76,59,0.05) 100%)', border: '3px solid #d9ac6f' }}>
              <h3 className="text-3xl font-black text-[#d9ac6f] mb-10">CERTIFICATIONS</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-3xl">⭐</span>
                  <span className="text-[#f5ebe0] font-semibold text-lg">Kubernetes Application Developer (CKAD)</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl">⭐</span>
                  <span className="text-[#f5ebe0] font-semibold text-lg">AWS Certified Solutions Architect</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl">⭐</span>
                  <span className="text-[#f5ebe0] font-semibold text-lg">Linux Professional Institute (LPI)</span>
                </li>
              </ul>
            </div>

            <div className="p-10 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(202,76,59,0.1) 0%, rgba(242,143,73,0.05) 100%)', border: '3px solid #f28f49' }}>
              <h3 className="text-3xl font-black text-[#f28f49] mb-10">EDUCATION</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-3xl text-[#f28f49]">✓</span>
                  <span className="text-[#f5ebe0] font-semibold text-lg"><strong className="text-[#f28f49]">Bachelor's Degree</strong> in Computer Science</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl text-[#f28f49]">✓</span>
                  <span className="text-[#f5ebe0] font-semibold text-lg">Advanced courses in Cloud Architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24" style={{ background: 'linear-gradient(135deg, #f28f49 0%, #ca4c3b 50%, #a86046 100%)' }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard number="8+" label="Years Experience" />
            <StatCard number="50+" label="Microservices Managed" />
            <StatCard number="40%" label="Cost Optimization" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ background: 'linear-gradient(180deg, #1a1410 0%, #0f0b09 100%)' }}>
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p className="text-[#a86046] font-mono text-sm">Built with React & Tailwind CSS • Last updated {new Date().toLocaleDateString()}</p>
        </div>
      </footer>
    </div>
  )
}

function CompetencyCard({ title, skills, gradient }) {
  return (
    <div className="p-8 rounded-2xl transition-all duration-300 hover:scale-105" style={{ background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(217,172,111,0.3)', backdropFilter: 'blur(10px)' }}>
      <h3 className="text-2xl font-black text-white mb-8">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="px-5 py-3 rounded-full font-bold text-sm text-white" style={{ background: gradient }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({ position, company, period, description, achievements, accentColor }) {
  return (
    <div className="p-10 rounded-3xl bg-white transition-all duration-300 hover:scale-[1.02]" style={{ boxShadow: '0 30px 60px rgba(168,96,70,0.15)', borderLeft: `8px solid ${accentColor}` }}>
      <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
        <div>
          <h3 className="text-3xl font-black text-[#1a1410]">{position}</h3>
          <p className="text-xl font-bold mt-2" style={{ color: accentColor }}>{company}</p>
        </div>
        <span className="px-6 py-3 rounded-full font-bold text-white text-sm whitespace-nowrap" style={{ background: accentColor }}>{period}</span>
      </div>
      <p className="text-[#3d2a1a] text-lg my-8 leading-relaxed">{description}</p>
      <div className="space-y-4">
        {achievements.map((achievement, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0" style={{ color: accentColor }}>✓</span>
            <span className="text-[#3d2a1a] font-semibold text-lg">{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StatCard({ number, label }) {
  return (
    <div className="p-10 rounded-2xl bg-white/10 backdrop-blur text-center">
      <p className="text-6xl font-black text-white mb-3">{number}</p>
      <p className="text-[#f5ebe0] font-bold text-lg">{label}</p>
    </div>
  )
}
