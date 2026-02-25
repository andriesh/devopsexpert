import React, { useState, useEffect } from 'react'

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    } else {
      // Detect system preference
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const preferredTheme = isDark ? 'dark' : 'light'
      setTheme(preferredTheme)
      applyTheme(preferredTheme)
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light'
      setTheme(newTheme)
      applyTheme(newTheme)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const applyTheme = (newTheme) => {
    if (newTheme === 'dark') {
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.style.colorScheme = 'light'
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  const isDark = theme === 'dark'

  return (
    <div className={`min-h-screen transition-colors duration-300 font-['Inter',sans-serif] ${isDark ? 'bg-[#0f0f0f]' : 'bg-[#f8f8f8]'}`}>
      {/* Hero Section */}
      <header className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
          {/* Theme Toggle Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all ${isDark ? 'bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white' : 'bg-[#f0f0f0] hover:bg-[#e0e0e0] text-[#141414]'}`}
              title="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 2v4m0 12v4m10-10h-4M4 12H0m15.657-6.657l-2.828 2.828m-6.658 6.658l-2.828 2.828M4.343 4.343l2.828 2.828m6.658 6.658l2.828 2.828"/></svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left - Profile Card */}
            <div className="w-full lg:w-[320px] flex-shrink-0">
              <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-[#141414]'} rounded-[32px] p-8 text-center transition-colors duration-300`}>
                <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                  <span className="text-5xl">👨‍💻</span>
                </div>
                <h1 className="text-[22px] font-bold text-white mb-1">Andrei Rusnac</h1>
                <p className={`${isDark ? 'text-[#a0a0a0]' : 'text-[#8b8b8b]'} text-[15px] mb-6 transition-colors duration-300`}>DevOps & SRE Engineer</p>
                
                <div className="space-y-3 text-left px-2">
                  <div className="flex items-center gap-3">
                    <svg className={`w-4 h-4 ${isDark ? 'text-[#a0a0a0]' : 'text-[#8b8b8b]'} transition-colors duration-300`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    <span className="text-[#d4d4d4] text-[14px]">Chișinău, Moldova</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-emerald-400 text-[14px]">Available for work</span>
                  </div>
                </div>                
                {/* Languages */}
                <div className="mt-6 pt-6 border-t border-[#3a3a3a] space-y-3">
                  <h3 className="text-white font-bold text-[14px] uppercase tracking-wider">Languages</h3>
                  <div className="space-y-2 text-left">
                    <div>
                      <p className="text-white font-medium text-[13px]">Romanian</p>
                      <p className={`text-[12px] transition-colors duration-300 ${isDark ? 'text-[#a0a0a0]' : 'text-[#8b8b8b]'}`}>Native</p>
                    </div>
                    <div>
                      <p className="text-white font-medium text-[13px]">English</p>
                      <p className={`text-[12px] transition-colors duration-300 ${isDark ? 'text-[#a0a0a0]' : 'text-[#8b8b8b]'}`}>Professional</p>
                    </div>
                    <div>
                      <p className="text-white font-medium text-[13px]">Russian</p>
                      <p className={`text-[12px] transition-colors duration-300 ${isDark ? 'text-[#a0a0a0]' : 'text-[#8b8b8b]'}`}>Fluent</p>
                    </div>
                  </div>
                </div>              </div>
              
              {/* Download CV */}
              <a href="/CV_Andrei_Rusnac_Visual.pdf" className={`mt-4 flex items-center justify-center gap-3 w-full py-4 rounded-2xl transition-all ${isDark ? 'bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]' : 'bg-[#141414] text-white hover:bg-[#1f1f1f]'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span className="font-medium text-[15px]">Download CV</span>
              </a>
              
              {/* Contact Email */}
              <button className={`mt-3 flex items-center justify-center gap-3 w-full py-4 rounded-2xl transition-all ${isDark ? 'bg-[#2a2a2a] border border-[#3a3a3a] hover:bg-[#3a3a3a] text-white' : 'bg-white border border-[#e8e8e8] hover:bg-[#f8f8f8] text-[#141414]'}`} onClick={() => {
                const name = 'andriesh.rusnac';
                const domain = 'gmail.com';
                window.location.href = 'mailto:' + name + '@' + domain;
              }}>
                <svg className={`w-5 h-5 ${isDark ? 'text-white' : 'text-[#141414]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="font-medium text-[14px]">Contact via Email</span>
              </button>
              
              {/* Social Links */}
              <div className="mt-4 flex justify-center gap-3">
                <a href="https://www.linkedin.com/in/andrieshrusnac/" target="_blank" rel="noreferrer" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-[#2a2a2a] border border-[#3a3a3a] hover:bg-[#3a3a3a] hover:border-[#4a4a4a]' : 'bg-white border border-[#e8e8e8] hover:bg-[#f8f8f8] hover:border-[#d0d0d0]'}`}>
                  <svg className="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/andriesh" target="_blank" rel="noreferrer" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-[#2a2a2a] border border-[#3a3a3a] hover:bg-[#3a3a3a] hover:border-[#4a4a4a]' : 'bg-white border border-[#e8e8e8] hover:bg-[#f8f8f8] hover:border-[#d0d0d0]'}`}>
                  <svg className={`w-5 h-5 ${isDark ? 'text-white' : 'text-[#141414]'}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-[#2a2a2a] border border-[#3a3a3a] hover:bg-[#3a3a3a] hover:border-[#4a4a4a]' : 'bg-white border border-[#e8e8e8] hover:bg-[#f8f8f8] hover:border-[#d0d0d0]'}`}>
                  <img src="https://img.icons8.com/?size=96&id=imamZukNSZr3&format=png" alt="Credly" className="w-5 h-5" />
                </a>
                <a href="https://www.cncf.io/training/kubestronaut/?_sft_lf-country=md&p=andrei-rusnac" target="_blank" rel="noreferrer" className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-[#2a2a2a] border border-[#3a3a3a] hover:bg-[#3a3a3a] hover:border-[#4a4a4a]' : 'bg-white border border-[#e8e8e8] hover:bg-[#f8f8f8] hover:border-[#d0d0d0]'}`}>
                  <img src="https://avatars.githubusercontent.com/u/13455738?s=200&v=4" alt="CNCF" className="w-5 h-5 rounded" />
                </a>
              </div>
            </div>
            
            {/* Right - About */}
            <div className="flex-1 pt-2">
              <h2 className={`text-[32px] font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#141414]'}`}>About me</h2>
              <div className={`text-[16px] leading-[1.8] space-y-4 transition-colors duration-300 ${isDark ? 'text-[#c0c0c0]' : 'text-[#5c5c5c]'}`}>
                <p>
                  Seasoned DevOps / SRE / Platform Engineer focused on building reliable, observable, and secure cloud-native platforms. I automate infrastructure and delivery pipelines, design scalable architectures, and improve runbook-driven operational readiness.
                </p>
                <p>
                  My core strengths include Linux, Kubernetes, Cloud, Terraform, CI/CD, Observability, and Networking. I specialize in designing platforms that enable teams to ship faster while maintaining high availability standards.
                </p>
                <p>
                  I'm passionate about leveraging AI and automation to improve operational efficiency and reduce toil in platform engineering.
                </p>
                <p className={`font-medium transition-colors duration-300 ${isDark ? 'text-[#c0c0c0]' : 'text-[#5c5c5c]'}`}>
                  Building scalable, observable and secure cloud-native platforms.
                </p>
              </div>
              
              {/* Stack */}
              <div className="mt-12">
                <h3 className={`text-[18px] font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#141414]'}`}>Stack</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  <StackItem isDark={isDark} name="Kubernetes" />
                  <StackItem isDark={isDark} name="Docker" />
                  <StackItem isDark={isDark} name="Azure" />
                  <StackItem isDark={isDark} name="Terraform" />
                  <StackItem isDark={isDark} name="Prometheus" />
                  <StackItem isDark={isDark} name="Grafana" />
                  <StackItem isDark={isDark} name="ArgoCD" />
                  <StackItem isDark={isDark} name="FluxCD" />
                  <StackItem isDark={isDark} name="Ansible" />
                  <StackItem isDark={isDark} name="Jenkins" />
                  <StackItem isDark={isDark} name="GitHub Actions" />
                  <StackItem isDark={isDark} name="Azure DevOps" />
                  <StackItem isDark={isDark} name="GitLab" />
                  <StackItem isDark={isDark} name="Linux" />
                  <StackItem isDark={isDark} name="Python" />
                  <StackItem isDark={isDark} name="Bash" />
                  <StackItem isDark={isDark} name="ELK Stack" />
                  <StackItem isDark={isDark} name="MySQL" />
                  <StackItem isDark={isDark} name="PostgreSQL" />
                  <StackItem isDark={isDark} name="AWS" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a] border-t border-[#2a2a2a]' : 'bg-white border-t border-[#f0f0f0]'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-[32px] font-bold mb-12 transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#141414]'}`}>Experience</h2>
          
          <div className="space-y-0">
            <ExperienceCard isDark={isDark}
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
            
            <ExperienceCard isDark={isDark}
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
            
            <ExperienceCard isDark={isDark}
              company="The World Bank"
              period="Feb 2023 — Feb 2024"
              role="Independent Consultant"
              location="Chișinău, Moldova"
              points={[
                'Performed infrastructure and network assessments, authored security-focused recommendations',
                'Contributed to assessment reports for government infrastructure projects'
              ]}
            />
            
            <ExperienceCard isDark={isDark}
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

      {/* Certifications Section */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-[32px] font-bold mb-12 transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#141414]'}`}>Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CertCard isDark={isDark} name="Golden Kubestronaut" org="CNCF" badge="🏆" />
            <CertCard isDark={isDark} name="Certified Kubernetes Administrator (CKA)" org="CNCF" />
            <CertCard isDark={isDark} name="Certified Kubernetes Application Developer (CKAD)" org="CNCF" />
            <CertCard isDark={isDark} name="Certified Kubernetes Security Specialist (CKS)" org="CNCF" />
            <CertCard isDark={isDark} name="Kubernetes and Cloud Native Security Associate (KCSA)" org="CNCF" />
            <CertCard isDark={isDark} name="Kubernetes and Cloud Native Associate (KCNA)" org="CNCF" />
            <CertCard isDark={isDark} name="Prometheus Certified Associate (PCA)" org="CNCF" />
            <CertCard isDark={isDark} name="Cilium Certified Associate (CCA)" org="CNCF" />
            <CertCard isDark={isDark} name="CCNA Routing & Switching" org="Cisco" />
            <CertCard isDark={isDark} name="CCNA Security" org="Cisco" />
            <CertCard isDark={isDark} name="CCNA Wireless" org="Cisco" />
            <CertCard isDark={isDark} name="Linux Professional Institute (LPIC-1)" org="LPI" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className={`text-[32px] font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#141414]'}`}>Let's talk</h2>
          <p className={`text-[16px] mb-12 transition-colors duration-300 ${isDark ? 'text-[#a0a0a0]' : 'text-[#8b8b8b]'}`}>Feel free to reach out for opportunities or collaborations. Send me a message and I'll get back to you as soon as possible.</p>
          
          <ContactForm isDark={isDark} />
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a] border-t border-[#2a2a2a]' : 'bg-white border-t border-[#f0f0f0]'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-[14px] transition-colors duration-300 ${isDark ? 'text-[#a0a0a0]' : 'text-[#8b8b8b]'}`}>© {new Date().getFullYear()} Andrei Rusnac. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/CV_Andrei_Rusnac_Visual.pdf" className={`text-[14px] transition-colors duration-300 ${isDark ? 'text-[#a0a0a0] hover:text-white' : 'text-[#8b8b8b] hover:text-[#141414]'}`}>Visual CV</a>
              <a href="/CV_Andrei_Rusnac_ATS.pdf" className={`text-[14px] transition-colors duration-300 ${isDark ? 'text-[#a0a0a0] hover:text-white' : 'text-[#8b8b8b] hover:text-[#141414]'}`}>ATS CV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ExperienceCard({ isDark, company, period, role, location, points }) {
  return (
    <div className={`flex flex-col lg:flex-row gap-6 py-8 transition-colors duration-300 ${isDark ? 'border-b border-[#2a2a2a] last:border-b-0' : 'border-b border-[#f0f0f0] last:border-b-0'}`}>
      <div className="lg:w-[240px] flex-shrink-0">
        <h3 className={`text-[18px] font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#141414]'}`}>{company}</h3>
        <p className={`text-[14px] mt-1 transition-colors duration-300 ${isDark ? 'text-[#a0a0a0]' : 'text-[#8b8b8b]'}`}>{period}</p>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <p className={`font-semibold text-[16px] transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#141414]'}`}>{role}</p>
          <span className={`px-3 py-1.5 rounded-full text-[12px] flex items-center gap-1.5 transition-colors duration-300 ${isDark ? 'bg-[#2a2a2a] text-[#a0a0a0]' : 'bg-[#f8f8f8] text-[#8b8b8b]'}`}>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            {location}
          </span>
        </div>
        <ul className="space-y-2">
          {points.map((point, idx) => (
            <li key={idx} className={`flex gap-3 text-[15px] leading-relaxed transition-colors duration-300 ${isDark ? 'text-[#c0c0c0]' : 'text-[#5c5c5c]'}`}>
              <span className={`mt-1 transition-colors duration-300 ${isDark ? 'text-[#4a4a4a]' : 'text-[#d0d0d0]'}`}>•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function StackItem({ isDark, name }) {
  return (
    <div className={`flex items-center justify-center px-4 py-3 rounded-xl transition-all ${isDark ? 'bg-[#2a2a2a] border border-[#3a3a3a] hover:border-[#4a4a4a] hover:shadow-sm' : 'bg-white border border-[#e8e8e8] hover:border-[#d0d0d0] hover:shadow-sm'}`}>
      <span className={`font-medium text-[13px] transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#141414]'}`}>{name}</span>
    </div>
  )
}

function CertCard({ isDark, name, org, badge }) {
  return (
    <div className={`flex items-center justify-between p-5 rounded-xl transition-colors duration-300 ${isDark ? 'bg-[#2a2a2a] hover:bg-[#3a3a3a]' : 'bg-[#f8f8f8] hover:bg-[#f0f0f0]'}`}>
      <div className="flex items-center gap-3">
        {badge && <span className="text-xl">{badge}</span>}
        <div>
          <h4 className={`font-semibold text-[14px] transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#141414]'}`}>{name}</h4>
          <p className={`text-[12px] mt-0.5 transition-colors duration-300 ${isDark ? 'text-[#a0a0a0]' : 'text-[#8b8b8b]'}`}>{org}</p>
        </div>
      </div>
      <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className="flex-shrink-0">
        <img src="https://img.icons8.com/?size=96&id=imamZukNSZr3&format=png" alt="Credly" className="w-5 h-5" />
      </a>
    </div>
  )
}

function ContactCard({ isDark, label, value, href }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className={`block p-5 rounded-xl transition-colors group ${isDark ? 'bg-[#2a2a2a] hover:bg-[#3a3a3a]' : 'bg-[#f8f8f8] hover:bg-[#f0f0f0]'}`}>
      <p className={`text-[12px] uppercase tracking-wider mb-2 transition-colors duration-300 ${isDark ? 'text-[#a0a0a0]' : 'text-[#8b8b8b]'}`}>{label}</p>
      <p className={`font-medium text-[14px] transition-colors duration-300 ${isDark ? 'text-white group-hover:text-blue-400' : 'text-[#141414] group-hover:text-[#0066cc]'}`}>{value}</p>
    </a>
  )
}

function ContactForm({ isDark }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Encode data for mailto link to obscure from bots
    const mailtoLink = `mailto:andriesh.rusnac@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className={`p-8 rounded-2xl transition-colors duration-300 ${isDark ? 'bg-[#2a2a2a] border border-[#3a3a3a]' : 'bg-[#f8f8f8] border border-[#e8e8e8]'}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className={`block text-[14px] font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#141414]'}`}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a] border border-[#4a4a4a] text-white placeholder-[#808080] focus:border-blue-500' : 'bg-white border border-[#d0d0d0] text-[#141414] placeholder-[#a0a0a0] focus:border-blue-500'} focus:outline-none`}
          />
        </div>
        <div>
          <label className={`block text-[14px] font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#141414]'}`}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a] border border-[#4a4a4a] text-white placeholder-[#808080] focus:border-blue-500' : 'bg-white border border-[#d0d0d0] text-[#141414] placeholder-[#a0a0a0] focus:border-blue-500'} focus:outline-none`}
          />
        </div>
      </div>
      <div className="mb-6">
        <label className={`block text-[14px] font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#141414]'}`}>
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="What is this about?"
          className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a] border border-[#4a4a4a] text-white placeholder-[#808080] focus:border-blue-500' : 'bg-white border border-[#d0d0d0] text-[#141414] placeholder-[#a0a0a0] focus:border-blue-500'} focus:outline-none`}
        />
      </div>
      <div className="mb-6">
        <label className={`block text-[14px] font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-[#141414]'}`}>
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message here..."
          rows="5"
          className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a] border border-[#4a4a4a] text-white placeholder-[#808080] focus:border-blue-500' : 'bg-white border border-[#d0d0d0] text-[#141414] placeholder-[#a0a0a0] focus:border-blue-500'} focus:outline-none`}
        />
      </div>
      <button
        type="submit"
        className={`w-full py-3 rounded-lg font-medium transition-all ${isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
      >
        {submitted ? 'Message sent! Opening email client...' : 'Send Message'}
      </button>
      <p className={`text-[12px] mt-4 text-center transition-colors duration-300 ${isDark ? 'text-[#a0a0a0]' : 'text-[#8b8b8b]'}`}>
        Your message will open your default email client. Please verify the details before sending.
      </p>
    </form>
  )
}
