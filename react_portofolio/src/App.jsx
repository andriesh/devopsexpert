import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-135 from-[#0F172A] via-[#1E3A8A] to-[#7C3AED] opacity-95"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#06B6D4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#EC4899] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '4s'}}></div>

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-white">
          <div className="mb-8">
            <h1 className="text-7xl font-black mb-4 leading-tight">
              Andrei <span className="bg-gradient-to-r from-[#06B6D4] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">Rusnac</span>
            </h1>
            <p className="text-2xl font-light text-slate-300 mb-2">DevOps Engineer • SRE • Platform Architect</p>
            <p className="text-lg text-slate-400">Building scalable cloud-native infrastructure & reliable systems</p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-6 mb-10">
            <a href="mailto:your-email@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur hover:bg-white/20 transition text-slate-100">
              <span>📧</span> Email
            </a>
            <a href="https://www.linkedin.com/in/andrieshrusnac/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur hover:bg-white/20 transition text-slate-100">
              <span>💼</span> LinkedIn
            </a>
            <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur hover:bg-white/20 transition text-slate-100">
              <span>🏆</span> Credly
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="/CV_Andrei_Rusnac_Visual.pdf" className="px-8 py-4 bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition transform hover:scale-105 inline-flex items-center gap-2">
              <span>📄</span> Download Visual CV
            </a>
            <a href="/CV_Andrei_Rusnac_ATS.pdf" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition backdrop-blur inline-flex items-center gap-2">
              <span>📋</span> Download ATS CV
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Professional Summary */}
        <Section title="💡 Professional Summary" accent="from-[#06B6D4] to-[#0EA5E9]">
          <p className="text-lg text-slate-700 leading-relaxed">
            Experienced DevOps and SRE engineer with a proven track record of designing and implementing scalable, secure, and observable cloud-native infrastructure. Specialized in Kubernetes orchestration, infrastructure-as-code, and building reliable platform engineering solutions. Passionate about automation, observability, and creating robust systems that enable teams to scale efficiently.
          </p>
        </Section>

        {/* Core Competencies */}
        <div className="mb-20">
          <h2 className="text-4xl font-black mb-2 text-slate-900">⚙️ Core Competencies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#EC4899] to-[#F59E0B] rounded-full mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CompetencyCard
              title="Cloud & Infrastructure"
              skills={['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Ansible']}
              gradient="from-[#06B6D4] to-[#0EA5E9]"
              icon="☁️"
            />
            <CompetencyCard
              title="Observability & Monitoring"
              skills={['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'Datadog']}
              gradient="from-[#F59E0B] to-[#FBBF24]"
              icon="📊"
            />
            <CompetencyCard
              title="CI/CD & Automation"
              skills={['GitLab CI', 'GitHub Actions', 'Jenkins', 'ArgoCD', 'Helm']}
              gradient="from-[#EC4899] to-[#F472B6]"
              icon="⚡"
            />
            <CompetencyCard
              title="Tools & Platforms"
              skills={['Linux', 'Git', 'Python', 'Bash', 'Nginx']}
              gradient="from-[#10B981] to-[#34D399]"
              icon="🔧"
            />
          </div>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <h2 className="text-4xl font-black mb-2 text-slate-900">💼 Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-full mb-12"></div>
          
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
              gradient="from-[#7C3AED] to-[#A78BFA]"
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
              gradient="from-[#06B6D4] to-[#0EA5E9]"
            />
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mb-20">
          <h2 className="text-4xl font-black mb-2 text-slate-900">🎓 Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-135 from-[#FBBF24] to-[#F59E0B] p-1 shadow-xl">
              <div className="bg-white rounded-2xl p-8 relative z-10">
                <h3 className="text-2xl font-black text-amber-900 mb-8">🏅 Certifications</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">⭐</span>
                    <span className="text-slate-700 font-semibold">Kubernetes Application Developer (CKAD)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">⭐</span>
                    <span className="text-slate-700 font-semibold">AWS Certified Solutions Architect</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">⭐</span>
                    <span className="text-slate-700 font-semibold">Linux Professional Institute (LPI)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-135 from-[#34D399] to-[#10B981] p-1 shadow-xl">
              <div className="bg-white rounded-2xl p-8 relative z-10">
                <h3 className="text-2xl font-black text-emerald-900 mb-8">📚 Education</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">✓</span>
                    <span className="text-slate-700"><strong className="font-bold text-emerald-900">Bachelor's Degree</strong> in Computer Science</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">✓</span>
                    <span className="text-slate-700 font-semibold">Advanced courses in Cloud Architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <StatCard number="8+" label="Years Experience" gradient="from-[#EC4899] to-[#F472B6]" />
          <StatCard number="50+" label="Microservices Managed" gradient="from-[#06B6D4] to-[#0EA5E9]" />
          <StatCard number="40%" label="Cost Optimization" gradient="from-[#F59E0B] to-[#FBBF24]" />
        </div>

        {/* Footer */}
        <footer className="text-center py-12 border-t-2 border-slate-200">
          <p className="text-slate-600">Built with React & Tailwind CSS • Last updated {new Date().toLocaleDateString()}</p>
        </footer>
      </main>
    </div>
  )
}

function Section({ title, children, accent }) {
  return (
    <div className="mb-20">
      <h2 className="text-4xl font-black mb-2 text-slate-900">{title}</h2>
      <div className={`w-24 h-1 bg-gradient-to-r ${accent} rounded-full mb-8`}></div>
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
        {children}
      </div>
    </div>
  )
}

function CompetencyCard({ title, skills, gradient, icon }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-135 ${gradient} p-1 shadow-xl hover:shadow-2xl transition transform hover:scale-105`}>
      <div className="bg-white rounded-2xl p-8 relative z-10">
        <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
          <span className="text-3xl">{icon}</span> {title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span key={skill} className={`px-4 py-2 rounded-full bg-gradient-to-r ${gradient} text-white font-semibold text-sm hover:shadow-lg transition`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ExperienceCard({ position, company, period, description, achievements, gradient }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-135 ${gradient} p-1 shadow-xl`}>
      <div className="bg-white rounded-2xl p-8 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-black text-slate-900">{position}</h3>
            <p className={`text-lg font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mt-2`}>{company}</p>
          </div>
          <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${gradient} text-white font-bold text-sm whitespace-nowrap ml-4`}>{period}</span>
        </div>
        <p className="text-slate-700 text-lg my-6 leading-relaxed">{description}</p>
        <div className="space-y-3">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span className={`text-2xl flex-shrink-0 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>✓</span>
              <span className="text-slate-700 font-medium">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StatCard({ number, label, gradient }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-135 ${gradient} p-1 shadow-lg`}>
      <div className="bg-white rounded-2xl p-8 text-center">
        <p className={`text-5xl font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{number}</p>
        <p className="text-slate-600 font-semibold mt-2">{label}</p>
      </div>
    </div>
  )
}
