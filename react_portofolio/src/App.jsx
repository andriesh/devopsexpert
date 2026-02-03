import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-slate-900">Andrei Rusnac</h1>
          <p className="text-lg text-slate-600 mt-2">DevOps Engineer • SRE • Platform Architect</p>
          
          {/* Contact & Links */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a href="mailto:your-email@example.com" className="text-slate-600 hover:text-slate-900">
              📧 andrei@example.com
            </a>
            <a href="https://www.linkedin.com/in/andrieshrusnac/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
              💼 LinkedIn
            </a>
            <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
              🏆 Credly
            </a>
            <span className="text-slate-600">📍 Location</span>
          </div>

          {/* Download CV */}
          <div className="mt-6 flex gap-3">
            <a href="/CV_Andrei_Rusnac_Visual.pdf" className="px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 transition">
              Download CV (Visual)
            </a>
            <a href="/CV_Andrei_Rusnac_ATS.pdf" className="px-4 py-2 border border-slate-900 text-slate-900 rounded hover:bg-slate-50 transition">
              Download CV (ATS)
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Professional Summary */}
        <section className="mb-12">
          <div className="bg-white rounded-lg border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Professional Summary</h2>
            <p className="text-slate-700 leading-relaxed">
              Experienced DevOps and SRE engineer with a proven track record of designing and implementing scalable, secure, and observable cloud-native infrastructure. Specialized in Kubernetes orchestration, infrastructure-as-code, and building reliable platform engineering solutions. Passionate about automation, observability, and creating robust systems that enable teams to scale efficiently.
            </p>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Cloud & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Ansible'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Observability & Monitoring</h3>
              <div className="flex flex-wrap gap-2">
                {['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'Datadog'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-3">CI/CD & Automation</h3>
              <div className="flex flex-wrap gap-2">
                {['GitLab CI', 'GitHub Actions', 'Jenkins', 'ArgoCD', 'Helm'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['Linux', 'Git', 'Python', 'Bash', 'Nginx'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Professional Experience</h2>
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
            />
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">Certifications</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">▸</span>
                  <span>Kubernetes Application Developer (CKAD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">▸</span>
                  <span>AWS Certified Solutions Architect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">▸</span>
                  <span>Linux Professional Institute (LPI) Certification</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">Education</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">▸</span>
                  <span><strong>Bachelor's Degree</strong> in Computer Science</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">▸</span>
                  <span>Completed advanced courses in Cloud Architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500 mt-12 pt-8 border-t border-slate-200">
          <p>Built with React • Last updated {new Date().toLocaleDateString()}</p>
        </footer>
      </main>
    </div>
  )
}

function ExperienceCard({ position, company, period, description, achievements }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{position}</h3>
          <p className="text-slate-600">{company}</p>
        </div>
        <span className="text-sm text-slate-500 whitespace-nowrap ml-4">{period}</span>
      </div>
      <p className="text-slate-700 mt-4 mb-4">{description}</p>
      <ul className="space-y-2">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
            <span className="text-slate-400 flex-shrink-0 mt-1">✓</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
