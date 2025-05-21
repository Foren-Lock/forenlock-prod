const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container-section">
        <h2 className="section-title">What is ForenLock?</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-navy-700 leading-relaxed">
            ForenLock is a research-driven solution that addresses the secure and efficient handling of forensic evidence 
            in the healthcare domain. It ensures the authenticity, privacy, and traceability of evidence throughout the 
            investigation lifecycle.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg bg-navy-50 text-navy-800 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-navy-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p>Ensures evidence cannot be tampered with through blockchain technology.</p>
            </div>
            <div className="p-6 rounded-lg bg-navy-50 text-navy-800 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-navy-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p>Advanced cryptographic methods for secure access control and ZKP used for Secure Authentication.</p>
            </div>
            <div className="p-6 rounded-lg bg-navy-50 text-navy-800 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-navy-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Traceability</h3>
              <p>Complete chain of custody with timestamps and access logs throughout the lifecycle.</p>
            </div>

            <div className="p-6 rounded-lg bg-navy-50 text-navy-800 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-navy-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-navy-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy</h3>
              <p>PII detection and masking engine covering GDPR and Sri Lanka’s PDPA compliance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
