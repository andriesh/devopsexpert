import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Hero Section */}
      <header className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left - Profile Card */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-[#1a1a1a] rounded-3xl p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center text-5xl">
                  👨‍💻
                </div>
                <h1 className="text-2xl font-bold text-white mb-1">Andrei Rusnac</h1>
                <p className="text-[#888] mb-6">DevOps & SRE Engineer</p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#888]">📍</span>
                    <span className="text-[#ccc]">Moldova / Remote</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#888]">✅</span>
                    <span className="text-emerald-400">Available for work</span>
                  </div>
                </div>
              </div>
              
              {/* Download CV */}
              <a href="/CV_Andrei_Rusnac_Visual.pdf" className="mt-4 flex items-center justify-center gap-3 w-full py-4 bg-[#1a1a1a] text-white rounded-2xl hover:bg-[#2a2a2a] transition">
                <span>📄</span>
                <span className="font-medium">Download CV</span>
              </a>
              
              {/* Contact */}
              <a href="mailto:andrei@example.com" className="mt-3 flex items-center justify-center gap-3 w-full py-4 bg-white border border-[#e5e5e5] rounded-2xl hover:bg-[#f5f5f5] transition">
                <span>✉️</span>
                <span className="text-[#1a1a1a] font-medium">andrei@example.com</span>
              </a>
              
              {/* Social Links */}
              <div className="mt-4 flex justify-center gap-3">
                <a href="https://www.linkedin.com/in/andrieshrusnac/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white border border-[#e5e5e5] flex items-center justify-center hover:bg-[#f5f5f5] transition">
                  💼
                </a>
                <a href="https://github.com/andriesh" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white border border-[#e5e5e5] flex items-center justify-center hover:bg-[#f5f5f5] transition">
                  🐙
                </a>
                <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white border border-[#e5e5e5] flex items-center justify-center hover:bg-[#f5f5f5] transition">
                  🏆
                </a>
              </div>
            </div>
            
            {/* Right - About */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">About me</h2>
              <div className="text-[#666] text-lg leading-relaxed space-y-4">
                <p>
                  Hello, I'm Andrei Rusnac, a DevOps and SRE engineer with extensive experience in building and maintaining scalable cloud-native infrastructure.
                </p>
                <p>
                  My journey in DevOps began with a passion for automation and a desire to bridge the gap between development and operations. Over the years, I've honed my skills in Kubernetes orchestration, infrastructure-as-code, CI/CD pipelines, and observability solutions.
                </p>
                <p>
                  I specialize in designing reliable, secure, and cost-effective platforms that enable teams to ship faster while maintaining high availability and performance standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="py-20 bg-white border-t border-[#eee]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12">Experience</h2>
          
          <div className="space-y-8">
            <ExperienceCard
              company="Company Name"
              period="Jan 2023 – Present"
              role="Senior DevOps Engineer"
              location="Remote"
              points={[
                'Led infrastructure modernization and cloud-native transformation initiatives',
                'Architected multi-region Kubernetes infrastructure supporting 50+ microservices',
                'Reduced deployment time by 60% through CI/CD optimization',
                'Implemented comprehensive observability solution with Prometheus and Grafana'
              ]}
            />
            
            <ExperienceCard
              company="Previous Company"
              period="Jun 2021 – Dec 2022"
              role="DevOps Engineer"
              location="Hybrid"
              points={[
                'Managed infrastructure-as-code deployments using Terraform and Ansible',
                'Automated 90% of manual deployment processes',
                'Established disaster recovery procedures with RPO < 1 hour',
                'Mentored 3 junior engineers in DevOps practices'
              ]}
            />
            
            <ExperienceCard
              company="Earlier Company"
              period="Mar 2019 – May 2021"
              role="Systems Administrator"
              location="On-site"
              points={[
                'Maintained Linux server infrastructure for 200+ users',
                'Implemented monitoring and alerting systems',
                'Reduced system downtime by 40% through proactive maintenance',
                'Migrated legacy applications to containerized environments'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12">Stack</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <StackItem icon="☸️" name="Kubernetes" />
            <StackItem icon="🐳" name="Docker" />
            <StackItem icon="☁️" name="AWS" />
            <StackItem icon="🏗️" name="Terraform" />
            <StackItem icon="📊" name="Prometheus" />
            <StackItem icon="📈" name="Grafana" />
            <StackItem icon="🔄" name="ArgoCD" />
            <StackItem icon="⚙️" name="Ansible" />
            <StackItem icon="🔧" name="Jenkins" />
            <StackItem icon="🐙" name="GitHub Actions" />
            <StackItem icon="🐧" name="Linux" />
            <StackItem icon="🐍" name="Python" />
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12">Education</h2>
              
              <div className="space-y-8">
                <EducationCard
                  degree="Bachelor of Science in Computer Science"
                  school="University Name"
                  period="2015 – 2019"
                  location="City, Country"
                  description="Focused on distributed systems, networking, and software engineering principles."
                />
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12">Certifications</h2>
              
              <div className="space-y-4">
                <CertCard name="Certified Kubernetes Application Developer (CKAD)" org="CNCF, 2023" />
                <CertCard name="AWS Certified Solutions Architect" org="Amazon Web Services, 2022" />
                <CertCard name="Linux Professional Institute (LPIC-1)" org="LPI, 2021" />
                <CertCard name="HashiCorp Certified Terraform Associate" org="HashiCorp, 2022" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-white mb-2">8+</p>
              <p className="text-[#888] text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">50+</p>
              <p className="text-[#888] text-sm">Microservices</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">99.9%</p>
              <p className="text-[#888] text-sm">Uptime SLA</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">40%</p>
              <p className="text-[#888] text-sm">Cost Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-12">Let's talk</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-sm text-[#888] mb-2">Email:</p>
              <a href="mailto:andrei@example.com" className="text-[#1a1a1a] font-medium hover:text-[#4f46e5] transition">
                andrei@example.com
              </a>
            </div>
            <div>
              <p className="text-sm text-[#888] mb-2">LinkedIn:</p>
              <a href="https://www.linkedin.com/in/andrieshrusnac/" target="_blank" rel="noreferrer" className="text-[#1a1a1a] font-medium hover:text-[#4f46e5] transition">
                /in/andrieshrusnac
              </a>
            </div>
            <div>
              <p className="text-sm text-[#888] mb-2">GitHub:</p>
              <a href="https://github.com/andriesh" target="_blank" rel="noreferrer" className="text-[#1a1a1a] font-medium hover:text-[#4f46e5] transition">
                @andriesh
              </a>
            </div>
            <div>
              <p className="text-sm text-[#888] mb-2">Certifications:</p>
              <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className="text-[#1a1a1a] font-medium hover:text-[#4f46e5] transition">
                Credly Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#f5f5f5] border-t border-[#eee]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#888]">© {new Date().getFullYear()} Andrei Rusnac. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/CV_Andrei_Rusnac_Visual.pdf" className="text-sm text-[#888] hover:text-[#1a1a1a] transition">Visual CV</a>
              <a href="/CV_Andrei_Rusnac_ATS.pdf" className="text-sm text-[#888] hover:text-[#1a1a1a] transition">ATS CV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ExperienceCard({ company, period, role, location, points }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 pb-8 border-b border-[#eee] last:border-0">
      <div className="lg:w-64 flex-shrink-0">
        <h3 className="text-xl font-bold text-[#1a1a1a]">{company}</h3>
        <p className="text-[#888] text-sm mt-1">{period}</p>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          <p className="font-semibold text-[#1a1a1a]">{role}</p>
          <span className="px-3 py-1 bg-[#f5f5f5] rounded-full text-xs text-[#888]">📍 {location}</span>
        </div>
        <ul className="space-y-2">
          {points.map((point, idx) => (
            <li key={idx} className="flex gap-3 text-[#666]">
              <span className="text-[#ccc]">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function StackItem({ icon, name }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#eee] hover:border-[#ccc] transition cursor-default">
      <span className="text-2xl">{icon}</span>
      <span className="font-medium text-[#1a1a1a] text-sm">{name}</span>
    </div>
  )
}

function EducationCard({ degree, school, period, location, description }) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-xl bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
        🎓
      </div>
      <div>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs text-[#888] px-2 py-1 bg-[#f5f5f5] rounded">📍 {location}</span>
          <span className="text-xs text-[#888]">{period}</span>
        </div>
        <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">{degree}</h3>
        <p className="text-[#888] text-sm mb-2">{school}</p>
        <p className="text-[#666] text-sm">{description}</p>
      </div>
    </div>
  )
}

function CertCard({ name, org }) {
  return (
    <div className="flex items-center justify-between p-4 bg-[#f5f5f5] rounded-xl">
      <div>
        <h4 className="font-semibold text-[#1a1a1a] text-sm">{name}</h4>
        <p className="text-[#888] text-xs mt-1">{org}</p>
      </div>
      <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className="text-xs text-[#4f46e5] hover:underline">
        View
      </a>
    </div>
  )
}
