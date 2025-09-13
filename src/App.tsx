import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-400">
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/vite.svg" alt="SPS Solar Logo" className="h-10 w-10" />
              <span className="text-xl font-bold text-gray-800">SPS Solar</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img src="/vite.svg" alt="SPS Solar System Logo" className="mx-auto mb-6 h-24 w-24 drop-shadow-lg" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            SPS SOLAR SYSTEM P/L
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 text-yellow-100">
            Professional Solar Panel Systems
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-blue-100">
            Harness the power of the sun with our expert solar solutions. Clean energy for a sustainable future.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Services Section */}
            <section id="services" className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-400 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Services</h3>
              </div>
              <div className="space-y-4">
                {['Sales & Consultation', 'Professional Installation', 'Maintenance & Service'].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Why Choose Us</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                SPS Solar System P/L is your trusted partner for renewable energy solutions. We specialize in high-quality solar panel systems for residential and commercial properties, offering comprehensive services from initial consultation to ongoing maintenance.
              </p>
            </section>
          </div>

          {/* Contact & Visual Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Section */}
            <section id="contact" className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Get In Touch</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-800 text-lg">Saeed Solar</p>
                  <p className="text-gray-600">Solar Energy Specialist</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:0412624434" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    0412 62 44 34
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:saeedsolar8@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    saeedsolar8@gmail.com
                  </a>
                </div>
              </div>
            </section>

            {/* Solar Visual */}
            <section className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
                  <circle cx="60" cy="60" r="25" fill="#FFF" fillOpacity="0.9" />
                  <g stroke="#FFD600" strokeWidth="4">
                    <line x1="60" y1="10" x2="60" y2="30" />
                    <line x1="60" y1="90" x2="60" y2="110" />
                    <line x1="10" y1="60" x2="30" y2="60" />
                    <line x1="90" y1="60" x2="110" y2="60" />
                    <line x1="25" y1="25" x2="40" y2="40" />
                    <line x1="80" y1="80" x2="95" y2="95" />
                    <line x1="25" y1="95" x2="40" y2="80" />
                    <line x1="80" y1="40" x2="95" y2="25" />
                  </g>
                </svg>
                <h4 className="text-xl font-bold mb-2">Clean Energy</h4>
                <p className="text-sm opacity-90">Sustainable • Efficient • Reliable</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/vite.svg" alt="SPS Solar Logo" className="h-8 w-8" />
            <span className="text-lg font-semibold">SPS Solar System P/L</span>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SPS Solar System P/L. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
