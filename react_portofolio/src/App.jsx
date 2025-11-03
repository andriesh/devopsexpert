import React from 'react'
export default function App(){
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <h1 className="text-3xl font-bold">Andrei Rusnac</h1>
      <p className="mt-1">DevOps & SRE Engineer • Platform Engineer</p>
      <p className="mt-4 max-w-2xl">Building scalable, observable and secure cloud-native platforms.</p>
      <div className="mt-6 flex gap-3">
        <a href="/CV_Andrei_Rusnac_Visual.pdf" className="px-4 py-2 rounded bg-royal text-white">Download CV (Visual)</a>
        <a href="/CV_Andrei_Rusnac_ATS.pdf" className="px-4 py-2 rounded border">Download CV (ATS)</a>
        <a href="https://www.linkedin.com/in/andrieshrusnac/" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
        <a href="https://www.credly.com/users/andriesh/" target="_blank" rel="noreferrer" className="underline">Credly</a>
      </div>
    </div>
  )
}
