import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-['Inter',sans-serif]">
      {/* Hero Section */}
      <header className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left - Profile Card */}
            <div className="w-full lg:w-[320px] flex-shrink-0">
              <div className="bg-[#141414] rounded-[32px] p-8 text-center">
                <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                  <span className="text-5xl">👨‍💻</span>
                </div>
                <h1 className="text-[22px] font-bold text-white mb-1">Andrei Rusnac</h1>
                <p className="text-[#8b8b8b] text-[15px] mb-6">DevOps & SRE Engineer</p>
                
                <div className="space-y-3 text-left px-2">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#8b8b8b]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    <span className="text-[#d4d4d4] text-[14px]">Chișinău, Moldova</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-emerald-400 text-[14px]">Available for work</span>
                  </div>
                </div>
              </div>
              
              {/* Download CV */}
              <a href="/CV_Andrei_Rusnac_Visual.pdf" className="mt-4 flex items-center justify-center gap-3 w-full py-4 bg-[#141414] text-white rounded-2xl hover:bg-[#1f1f1f] transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span className="font-medium text-[15px]">Download CV</span>
              </a>
              
              {/* Contact Email */}
              <a href="mailto:andriesh.rusnac@gmail.com" className="mt-3 flex items-center justify-center gap-3 w-full py-4 bg-white border border-[#e8e8e8] rounded-2xl hover:bg-[#f8f8f8] transition-all">
                <svg className="w-5 h-5 text-[#141414]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-[#141414] font-medium text-[14px]">andriesh.rusnac@gmail.com</span>
              </a>
              
              {/* Social Links */}
              <div className="mt-4 flex justify-center gap-3">
                <a href="https://www.linkedin.com/in/andrieshrusnac/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white border border-[#e8e8e8] flex items-center justify-center hover:bg-[#f8f8f8] hover:border-[#d0d0d0] transition-all">
                  <svg className="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/andriesh" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white border border-[#e8e8e8] flex items-center justify-center hover:bg-[#f8f8f8] hover:border-[#d0d0d0] transition-all">
                  <svg className="w-5 h-5 text-[#141414]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white border border-[#e8e8e8] flex items-center justify-center hover:bg-[#f8f8f8] hover:border-[#d0d0d0] transition-all">
                  <svg className="w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </a>
              </div>
            </div>
            
            {/* Right - About */}
            <div className="flex-1 pt-2">
              <h2 className="text-[32px] font-bold text-[#141414] mb-6">About me</h2>
              <div className="text-[#5c5c5c] text-[16px] leading-[1.8] space-y-4">
                <p>
                  Seasoned DevOps / SRE / Platform Engineer focused on building reliable, observable, and secure cloud-native platforms. I automate infrastructure and delivery pipelines, design scalable architectures, and improve runbook-driven operational readiness.
                </p>
                <p>
                  My core strengths include Linux, Kubernetes, Cloud, Terraform, CI/CD, Observability, and Networking. I specialize in designing platforms that enable teams to ship faster while maintaining high availability standards.
                </p>
                <p className="font-medium text-[#141414]">
                  Building scalable, observable and secure cloud-native platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="py-20 bg-white border-t border-[#f0f0f0]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[32px] font-bold text-[#141414] mb-12">Experience</h2>
          
          <div className="space-y-0">
            <ExperienceCard
              company="Amdaris"
              period="Jan 2025 — Present"
              role="DevOps Engineer"
              location="Chișinău, Moldova"
              points={[
                'Designed and implemented deployment pipelines using Azure DevOps and GitHub Actions, automating release checks and validations',
                'Implemented observability stacks using Prometheus, Grafana and Mimir to improve SLO monitoring and incident detection',
                'Automated infrastructure provisioning using Terraform; introduced IaC patterns and reusable modules'
              ]}
            />
            
            <ExperienceCard
              company="CG Solutions"
              period="Apr 2017 — Dec 2024"
              role="DevOps Engineer / SRE"
              location="Petah Tikva, Israel"
              points={[
                'Managed multi-tenant cloud services and automated recovery workflows (Ansible, Bash, Python)',
                'Implemented Kubernetes orchestration (Rancher), autoscaling, and pipeline automation to improve deployment reliability',
                'Rolled out monitoring and logging (Prometheus, Grafana, ELK) and security controls (IAM, WAF), lowering MTTR',
                'Designed and maintained networking and firewall infrastructure (Fortigate, Cisco, Mikrotik)'
              ]}
            />
            
            <ExperienceCard
              company="The World Bank"
              period="Feb 2023 — Feb 2024"
              role="Independent Consultant"
              location="Chișinău, Moldova"
              points={[
                'Performed infrastructure and network assessments, authored security-focused recommendations',
                'Contributed to assessment reports for government infrastructure projects'
              ]}
            />
            
            <ExperienceCard
              company="Devarti SRL"
              period="Jun 2019 — Aug 2024"
              role="System Engineer"
              location="Bucharest, Romania"
              points={[
                'Managed on-prem infrastructure, VoIP (FreePBX), SMTP deliverability (Zimbra), and hosted web services',
                'Improved reliability and automation across infrastructure stack'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[32px] font-bold text-[#141414] mb-12">Stack</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <StackItem name="Kubernetes" />
            <StackItem name="Docker" />
            <StackItem name="Azure" />
            <StackItem name="Terraform" />
            <StackItem name="Prometheus" />
            <StackItem name="Grafana" />
            <StackItem name="ArgoCD" />
            <StackItem name="FluxCD" />
            <StackItem name="Ansible" />
            <StackItem name="Jenkins" />
            <StackItem name="GitHub Actions" />
            <StackItem name="Azure DevOps" />
            <StackItem name="Linux" />
            <StackItem name="Python" />
            <StackItem name="Bash" />
            <StackItem name="ELK Stack" />
            <StackItem name="MySQL" />
            <StackItem name="PostgreSQL" />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[32px] font-bold text-[#141414] mb-12">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CertCard name="Kubestronaut" org="CNCF" badge="🏆" />
            <CertCard name="Certified Kubernetes Administrator (CKA)" org="CNCF" />
            <CertCard name="Certified Kubernetes Application Developer (CKAD)" org="CNCF" />
            <CertCard name="Certified Kubernetes Security Specialist (CKS)" org="CNCF" />
            <CertCard name="Kubernetes and Cloud Native Security Associate (KCSA)" org="CNCF" />
            <CertCard name="Kubernetes and Cloud Native Associate (KCNA)" org="CNCF" />
            <CertCard name="Prometheus Certified Associate (PCA)" org="CNCF" />
            <CertCard name="Cilium Certified Associate (CCA)" org="CNCF" />
            <CertCard name="CCNA Routing & Switching" org="Cisco" />
            <CertCard name="CCNA Security" org="Cisco" />
            <CertCard name="CCNA Wireless" org="Cisco" />
            <CertCard name="Linux Professional Institute (LPIC-1)" org="LPI" />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[32px] font-bold text-[#141414] mb-12">Education</h2>
          
          <div className="space-y-6">
            <EducationCard
              degree="Licentiate Degree, Economics"
              school="University of Applied Studies"
              period="2009"
            />
            <EducationCard
              degree="Networking Associate"
              school="Academia Cisco"
              period="2007"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[32px] font-bold text-[#141414] mb-4">Let's talk</h2>
          <p className="text-[#8b8b8b] text-[16px] mb-12">Feel free to reach out for opportunities or collaborations.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactCard
              label="Email"
              value="andriesh.rusnac@gmail.com"
              href="mailto:andriesh.rusnac@gmail.com"
            />
            <ContactCard
              label="Phone"
              value="+373 69 441 086"
              href="tel:+37369441086"
            />
            <ContactCard
              label="LinkedIn"
              value="/in/andrieshrusnac"
              href="https://www.linkedin.com/in/andrieshrusnac/"
            />
            <ContactCard
              label="Credly"
              value="View Badges"
              href="https://www.credly.com/users/andriesh/"
            />
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-[#141414]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div>
              <p className="text-white font-bold text-[18px]">Romanian</p>
              <p className="text-[#8b8b8b] text-[14px] mt-1">Native</p>
            </div>
            <div>
              <p className="text-white font-bold text-[18px]">English</p>
              <p className="text-[#8b8b8b] text-[14px] mt-1">Professional</p>
            </div>
            <div>
              <p className="text-white font-bold text-[18px]">Russian</p>
              <p className="text-[#8b8b8b] text-[14px] mt-1">Fluent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-[#f0f0f0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[14px] text-[#8b8b8b]">© {new Date().getFullYear()} Andrei Rusnac. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/CV_Andrei_Rusnac_Visual.pdf" className="text-[14px] text-[#8b8b8b] hover:text-[#141414] transition-colors">Visual CV</a>
              <a href="/CV_Andrei_Rusnac_ATS.pdf" className="text-[14px] text-[#8b8b8b] hover:text-[#141414] transition-colors">ATS CV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ExperienceCard({ company, period, role, location, points }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 py-8 border-b border-[#f0f0f0] last:border-b-0">
      <div className="lg:w-[240px] flex-shrink-0">
        <h3 className="text-[18px] font-bold text-[#141414]">{company}</h3>
        <p className="text-[#8b8b8b] text-[14px] mt-1">{period}</p>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <p className="font-semibold text-[#141414] text-[16px]">{role}</p>
          <span className="px-3 py-1.5 bg-[#f8f8f8] rounded-full text-[12px] text-[#8b8b8b] flex items-center gap-1.5">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            {location}
          </span>
        </div>
        <ul className="space-y-2">
          {points.map((point, idx) => (
            <li key={idx} className="flex gap-3 text-[#5c5c5c] text-[15px] leading-relaxed">
              <span className="text-[#d0d0d0] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function StackItem({ name }) {
  return (
    <div className="flex items-center justify-center px-4 py-3 bg-white rounded-xl border border-[#e8e8e8] hover:border-[#d0d0d0] hover:shadow-sm transition-all cursor-default">
      <span className="font-medium text-[#141414] text-[13px]">{name}</span>
    </div>
  )
}

function EducationCard({ degree, school, period }) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-[#e8e8e8]">
      <div className="w-12 h-12 rounded-xl bg-[#f8f8f8] flex items-center justify-center flex-shrink-0">
        <svg className="w-6 h-6 text-[#8b8b8b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
      </div>
      <div>
        <h3 className="text-[16px] font-bold text-[#141414]">{degree}</h3>
        <p className="text-[#8b8b8b] text-[14px] mt-1">{school}</p>
        <p className="text-[#b0b0b0] text-[13px] mt-1">{period}</p>
      </div>
    </div>
  )
}

function CertCard({ name, org, badge }) {
  return (
    <div className="flex items-center justify-between p-5 bg-[#f8f8f8] rounded-xl hover:bg-[#f0f0f0] transition-colors">
      <div className="flex items-center gap-3">
        {badge && <span className="text-xl">{badge}</span>}
        <div>
          <h4 className="font-semibold text-[#141414] text-[14px]">{name}</h4>
          <p className="text-[#8b8b8b] text-[12px] mt-0.5">{org}</p>
        </div>
      </div>
      <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className="text-[12px] text-[#0066cc] hover:underline font-medium">
        View
      </a>
    </div>
  )
}

function ContactCard({ label, value, href }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="block p-5 bg-[#f8f8f8] rounded-xl hover:bg-[#f0f0f0] transition-colors group">
      <p className="text-[#8b8b8b] text-[12px] uppercase tracking-wider mb-2">{label}</p>
      <p className="text-[#141414] font-medium text-[14px] group-hover:text-[#0066cc] transition-colors">{value}</p>
    </a>
  )
}
