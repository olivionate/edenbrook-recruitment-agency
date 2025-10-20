import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-brand-navy mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-4xl space-y-6 text-gray-700">
            <section>
              <p className="text-sm text-gray-500 mb-8">Last Updated: January 2024</p>
              
              <p className="mb-6">
                At Edenbrook Recruitment Agency Ltd, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">Personal Information</h3>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Name, email address, phone number, and contact details</li>
                <li>Resume/CV, employment history, and professional qualifications</li>
                <li>Educational background and certifications</li>
                <li>Work authorization and visa status</li>
                <li>References and background check information</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">Automatically Collected Information</h3>
              <p className="mb-4">When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>IP address, browser type, and device information</li>
                <li>Pages visited, time spent on pages, and navigation paths</li>
                <li>Cookies and similar tracking technologies data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>To match candidates with suitable job opportunities</li>
                <li>To communicate with you about job openings and recruitment processes</li>
                <li>To conduct background checks and verify credentials</li>
                <li>To provide recruitment and HR consultancy services</li>
                <li>To improve our services and website functionality</li>
                <li>To comply with legal obligations and regulations</li>
                <li>To send relevant updates and marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Client Companies:</strong> To facilitate job placements and recruitment processes</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operations (background check providers, IT services)</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              </ul>
              <p className="mb-4">
                We never sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">5. Data Retention</h2>
              <p className="mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Candidate information is typically retained for up to 3 years unless you request deletion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for processing (where applicable)</li>
                <li>Object to processing for direct marketing purposes</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us at info@edenbrook.co.ke
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">7. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience on our website. You can manage cookie preferences through your browser settings. For more details, see our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">8. International Data Transfers</h2>
              <p className="mb-4">
                As we operate globally across 20+ countries, your information may be transferred to and processed in countries outside your residence. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">9. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Edenbrook Recruitment Agency Ltd</strong></p>
                <p className="mb-2">2nd Floor, Room 225, Delta House</p>
                <p className="mb-2">University Way, Nairobi CBD</p>
                <p className="mb-2">P.O. Box 2097 - 00621 Village Market</p>
                <p className="mb-2">Email: info@edenbrook.co.ke</p>
                <p>Phone: 0720 517 303 / 0721 658 788</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
