import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#1a1410] via-[#2d1f14] to-[#0f0b09]">
        {/* Decorative circles */}
        <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-tl from-[#ca4c3b] to-[#f28f49] rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-gradient-to-tr from-[#d9ac6f] to-[#f28f49] rounded-full opacity-20 blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-6 py-32 text-white">
          <div className="mb-12">
            <p className="text-[#f28f49] font-mono text-lg font-semibold mb-4 tracking-wider">WELCOME TO MY CV</p>
            <h1 className="text-7xl font-black mb-6 leading-tight">
              Andrei <span className="bg-gradient-to-r from-[#f28f49] to-[#ca4c3b] bg-clip-text text-transparent">Rusnac</span>
            </h1>
            <p className="text-2xl text-[#d9ac6f] font-light mb-3">DevOps Engineer • SRE • Platform Architect</p>
            <p className="text-lg text-[#a86046] max-w-2xl">Building scalable cloud-native infrastructure with reliability, observability, and automation at its core</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 pt-8">
            <a href="/CV_Andrei_Rusnac_Visual.pdf" className="px-8 py-4 bg-gradient-to-r from-[#f28f49] to-[#ca4c3b] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-orange-900/50 transition transform hover:scale-105 inline-flex items-center gap-3 text-lg">
              <span>📄</span> Download Visual CV
            </a>
            <a href="/CV_Andrei_Rusnac_ATS.pdf" className="px-8 py-4 border-3 border-[#d9ac6f] text-[#d9ac6f] font-bold rounded-lg hover:bg-[#d9ac6f]/10 transition inline-flex items-center gap-3 text-lg">
              <span>📋</span> Download ATS CV
            </a>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-6 mt-16 pt-8 border-t border-[#a86046]/30">
            <a href="mailto:your-email@example.com" className="text-[#d9ac6f] hover:text-[#f28f49] transition font-mono text-sm flex items-center gap-2">
              <span>📧</span> andrei@example.com
            </a>
            <a href="https://www.linkedin.com/in/andrieshrusnac/" target="_blank" rel="noreferrer" className="text-[#d9ac6f] hover:text-[#f28f49] transition font-mono text-sm flex items-center gap-2">
              <span>💼</span> LinkedIn Profile
            </a>
            <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className="text-[#d9ac6f] hover:text-[#f28f49] transition font-mono text-sm flex items-center gap-2">
              <span>🏆</span> Certifications
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Professional Summary */}
        <Section title="PROFESSIONAL SUMMARY" accent="from-[#f28f49] to-[#ca4c3b]">
          <p className="text-xl text-slate-700 leading-relaxed">
            Experienced DevOps and SRE engineer with a proven track record of designing and implementing scalable, secure, and observable cloud-native infrastructure. Specialized in Kubernetes orchestration, infrastructure-as-code, and building reliable platform engineering solutions. Passionate about automation, observability, and creating robust systems that enable teams to scale efficiently.
          </p>
        </Section>

        {/* Core Competencies */}
        <div className="mb-24">
          <h2 className="text-5xl font-black text-[#1a1410] mb-4">CORE COMPETENCIES</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#f28f49] to-[#ca4c3b] rounded-full mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CompetencyCard
              title="Cloud & Infrastructure"
              skills={['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Ansible']}
              bgGradient="from-[#fff5f0] to-[#ffe8dd]"
              accentColor="#f28f49"
            />
            <CompetencyCard
              title="Observability & Monitoring"
              skills={['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'Datadog']}
              bgGradient="from-[#fef5f0] to-[#fce5db]"
              accentColor="#ca4c3b"
            />
            <CompetencyCard
              title="CI/CD & Automation"
              skills={['GitLab CI', 'GitHub Actions', 'Jenkins', 'ArgoCD', 'Helm']}
              bgGradient="from-[#fffaf5] to-[#fff0e8]"
              accentColor="#d9ac6f"
            />
            <CompetencyCard
              title="Tools & Platforms"
              skills={['Linux', 'Git', 'Python', 'Bash', 'Nginx']}
              bgGradient="from-[#faf5f0] to-[#f5ede5]"
              accentColor="#a86046"
            />
          </div>
        </div>

        {/* Experience */}
        <div className="mb-24">
          <h2 className="text-5xl font-black text-[#1a1410] mb-4">PROFESSIONAL EXPERIENCE</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#ca4c3b] to-[#f28f49] rounded-full mb-16"></div>
          
          <div className="space-y-8">
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

        {/* Education & Certifications */}
        <div className="mb-24">
          <h2 className="text-5xl font-black text-[#1a1410] mb-4">EDUCATION & CERTIFICATIONS</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#d9ac6f] to-[#a86046] rounded-full mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1a1410] to-[#2d1f14] rounded-2xl p-12 border-4 border-[#d9ac6f] shadow-xl">
              <h3 className="text-3xl font-black text-[#d9ac6f] mb-10">CERTIFICATIONS</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-3xl">⭐</span>
                  <span className="text-[#f5f1e8] font-semibold text-lg">Kubernetes Application Developer (CKAD)</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl">⭐</span>
                  <span className="text-[#f5f1e8] font-semibold text-lg">AWS Certified Solutions Architect</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl">⭐</span>
                  <span className="text-[#f5f1e8] font-semibold text-lg">Linux Professional Institute (LPI)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#1a1410] to-[#2d1f14] rounded-2xl p-12 border-4 border-[#f28f49] shadow-xl">
              <h3 className="text-3xl font-black text-[#f28f49] mb-10">EDUCATION</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-3xl">✓</span>
                  <span className="text-[#f5f1e8] font-semibold text-lg"><strong className="text-[#f28f49]">Bachelor's Degree</strong> in Computer Science</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl">✓</span>
                  <span className="text-[#f5f1e8] font-semibold text-lg">Advanced courses in Cloud Architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <StatCard number="8+" label="Years Experience" accentColor="#f28f49" />
          <StatCard number="50+" label="Microservices Managed" accentColor="#ca4c3b" />
          <StatCard number="40%" label="Cost Optimization" accentColor="#d9ac6f" />
        </div>

        {/* Footer */}
        <footer className="text-center py-16 border-t-4 border-[#d9ac6f]">
          <p className="text-[#a86046] font-mono text-sm">Built with React & Tailwind CSS • Last updated {new Date().toLocaleDateString()}</p>
        </footer>
      </main>
    </div>
  )
}

function Section({ title, children, accent }) {
  return (
    <div className="mb-24">
      <h2 className="text-5xl font-black text-[#1a1410] mb-4">{title}</h2>
      <div className={`w-32 h-1.5 bg-gradient-to-r ${accent} rounded-full mb-12`}></div>
      <div className="bg-gradient-to-br from-white to-[#f5f1e8] rounded-2xl p-12 border-4 border-[#d9ac6f] shadow-lg">
        {children}
      </div>
    </div>
  )
}

function CompetencyCard({ title, skills, bgGradient, accentColor }) {
  return (
    <div className={`bg-gradient-to-br ${bgGradient} rounded-2xl p-8 border-4 border-[#a86046]/30 shadow-lg hover:shadow-xl transition transform hover:scale-105`}>
      <h3 className="text-2xl font-black mb-8" style={{ color: accentColor }}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="px-5 py-3 rounded-full font-semibold text-sm border-2" style={{ borderColor: accentColor, color: accentColor, backgroundColor: `${accentColor}08` }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({ position, company, period, description, achievements, accentColor }) {
  return (
    <div className="bg-white rounded-2xl p-12 shadow-lg border-l-8 hover:shadow-xl transition" style={{ borderColor: accentColor }}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-3xl font-black text-[#1a1410]">{position}</h3>
          <p className="text-xl font-bold mt-2" style={{ color: accentColor }}>{company}</p>
        </div>
        <span className="px-6 py-2 rounded-full font-bold text-white text-sm whitespace-nowrap ml-4" style={{ backgroundColor: accentColor }}>{period}</span>
      </div>
      <p className="text-slate-700 text-lg my-8 leading-relaxed">{description}</p>
      <div className="space-y-4">
        {achievements.map((achievement, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0" style={{ color: accentColor }}>✓</span>
            <span className="text-slate-700 font-semibold text-lg">{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StatCard({ number, label, accentColor }) {
  return (
    <div className="bg-white rounded-2xl p-10 text-center border-4 shadow-lg hover:shadow-xl transition" style={{ borderColor: accentColor }}>
      <p className="text-5xl font-black mb-3" style={{ color: accentColor }}>{number}</p>
      <p className="text-slate-700 font-bold text-lg">{label}</p>
    </div>
  )
}
