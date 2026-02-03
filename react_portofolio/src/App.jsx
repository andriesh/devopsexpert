import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-2xl">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-white">
            <h1 className="text-5xl font-bold tracking-tight">Andrei Rusnac</h1>
            <p className="text-xl text-indigo-100 mt-2 font-light">DevOps Engineer • SRE • Platform Architect</p>
            
            {/* Contact & Links */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <a href="mailto:your-email@example.com" className="text-indigo-100 hover:text-white flex items-center gap-2 transition">
                <span className="text-lg">📧</span> andrei@example.com
              </a>
              <a href="https://www.linkedin.com/in/andrieshrusnac/" target="_blank" rel="noreferrer" className="text-indigo-100 hover:text-white flex items-center gap-2 transition">
                <span className="text-lg">💼</span> LinkedIn
              </a>
              <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className="text-indigo-100 hover:text-white flex items-center gap-2 transition">
                <span className="text-lg">🏆</span> Credly
              </a>
              <span className="text-indigo-100 flex items-center gap-2">
                <span className="text-lg">📍</span> Location
              </span>
            </div>

            {/* Download CV */}
            <div className="mt-8 flex gap-3 flex-wrap">
              <a href="/CV_Andrei_Rusnac_Visual.pdf" className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition shadow-lg">
                ↓ Download CV (Visual)
              </a>
              <a href="/CV_Andrei_Rusnac_ATS.pdf" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
                ↓ Download CV (ATS)
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Professional Summary */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-indigo-200 p-8 shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">💡</span> Professional Summary
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              Experienced DevOps and SRE engineer with a proven track record of designing and implementing scalable, secure, and observable cloud-native infrastructure. Specialized in Kubernetes orchestration, infrastructure-as-code, and building reliable platform engineering solutions. Passionate about automation, observability, and creating robust systems that enable teams to scale efficiently.
            </p>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
            <span>⚙️</span> Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CompetencyCard
              title="Cloud & Infrastructure"
              skills={['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Ansible']}
              gradient="from-blue-600 to-cyan-600"
            />
            <CompetencyCard
              title="Observability & Monitoring"
              skills={['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'Datadog']}
              gradient="from-orange-600 to-red-600"
            />
            <CompetencyCard
              title="CI/CD & Automation"
              skills={['GitLab CI', 'GitHub Actions', 'Jenkins', 'ArgoCD', 'Helm']}
              gradient="from-purple-600 to-pink-600"
            />
            <CompetencyCard
              title="Tools & Platforms"
              skills={['Linux', 'Git', 'Python', 'Bash', 'Nginx']}
              gradient="from-green-600 to-emerald-600"
            />
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
            <span>💼</span> Professional Experience
          </h2>
          <div className="space-y-6">
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
              accent="from-indigo-500 to-purple-500"
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
              accent="from-blue-500 to-cyan-500"
            />
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
            <span>🎓</span> Education & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="font-bold text-amber-900 text-lg mb-6 flex items-center gap-2">
                <span className="text-2xl">🏅</span> Certifications
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 text-xl flex-shrink-0">★</span>
                  <span className="text-slate-700">Kubernetes Application Developer (CKAD)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 text-xl flex-shrink-0">★</span>
                  <span className="text-slate-700">AWS Certified Solutions Architect</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 text-xl flex-shrink-0">★</span>
                  <span className="text-slate-700">Linux Professional Institute (LPI) Certification</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-200 p-8 shadow-lg hover:shadow-xl transition">
              <h3 className="font-bold text-teal-900 text-lg mb-6 flex items-center gap-2">
                <span className="text-2xl">📚</span> Education
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Bachelor's Degree</strong> in Computer Science</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-slate-700">Completed advanced courses in Cloud Architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-400 mt-16 pt-8 border-t border-slate-700">
          <p>Built with React • Last updated {new Date().toLocaleDateString()}</p>
        </footer>
      </main>
    </div>
  )
}

function CompetencyCard({ title, skills, gradient }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition overflow-hidden group">
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${gradient}`}></div>
      <h3 className="font-bold text-slate-900 mb-4 text-lg group-hover:text-indigo-600 transition">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-2 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 text-sm rounded-full border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({ position, company, period, description, achievements, accent }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition overflow-hidden group">
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${accent}`}></div>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition">{position}</h3>
          <p className="text-indigo-600 font-medium mt-1">{company}</p>
        </div>
        <span className="text-sm text-slate-500 whitespace-nowrap ml-4 bg-slate-100 px-3 py-1 rounded-full">{period}</span>
      </div>
      <p className="text-slate-700 mt-4 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-700">
            <span className="text-indigo-500 flex-shrink-0 mt-1 font-bold">→</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
