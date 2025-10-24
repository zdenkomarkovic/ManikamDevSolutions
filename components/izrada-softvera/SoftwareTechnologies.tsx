"use client";

import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaAws } from "react-icons/fa";

export default function SoftwareTechnologies() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
        Tehnologije Koje Koristimo
      </h2>
      <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto">
        Koristimo najsavremenije tehnologije i best practices da kreiramo brz, siguran i
        skalabilan softver.
      </p>

      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <FaReact className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Frontend</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>React.js & Next.js</strong> - moderne web aplikacije</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>TypeScript</strong> - type-safe development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Vue.js & Angular</strong> - enterprise aplikacije</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>React Native</strong> - cross-platform mobile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Electron</strong> - desktop aplikacije</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <FaNodeJs className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Backend</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Node.js & Express</strong> - scalable APIs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Python & Django</strong> - complex business logic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>FastAPI</strong> - high-performance APIs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>GraphQL & REST</strong> - API architectures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Microservices</strong> - distributed systems</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <FaDatabase className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Database & Cloud</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>PostgreSQL & MySQL</strong> - relational databases</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>MongoDB</strong> - NoSQL databases</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Redis</strong> - caching & real-time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>AWS, Azure, GCP</strong> - cloud infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span><strong>Docker & Kubernetes</strong> - containerization</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Dodatne Tehnologije i Servisi</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">DevOps & CI/CD</h4>
              <p className="text-gray-600 text-sm">
                GitHub Actions, GitLab CI, Jenkins, automated testing, deployment pipelines,
                monitoring i logging (Prometheus, Grafana, ELK stack)
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Sigurnost</h4>
              <p className="text-gray-600 text-sm">
                OAuth 2.0, JWT authentication, encryption, GDPR compliance, security audits,
                penetration testing, SSL/TLS, firewall configuration
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Integracije</h4>
              <p className="text-gray-600 text-sm">
                Payment gateways (Stripe, PayPal), shipping APIs, accounting software (QuickBooks),
                email services (SendGrid), SMS (Twilio), social media APIs
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Testing</h4>
              <p className="text-gray-600 text-sm">
                Jest, Pytest, Cypress, Selenium, unit testing, integration testing,
                end-to-end testing, load testing, performance testing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
