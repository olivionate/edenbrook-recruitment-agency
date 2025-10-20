import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-background pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8">Terms of Service</h1>
          
          <div className="prose max-w-4xl space-y-6 text-gray-700">
            <section>
              <p className="text-sm text-gray-500 mb-8">Last Updated: January 2024</p>
              
              <p className="mb-6">
                Welcome to Edenbrook Recruitment Agency Ltd. These Terms of Service ("Terms") govern your use of our services and website. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the services provided by Edenbrook Recruitment Agency Ltd, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">2. Services Description</h2>
              <p className="mb-4">Edenbrook provides the following recruitment and HR services:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Local and overseas recruitment services</li>
                <li>Executive headhunting and talent acquisition</li>
                <li>Training and capacity building programs</li>
                <li>HR consultancy and advisory services</li>
                <li>Expatriate services and work permit assistance</li>
                <li>Payroll management and HR outsourcing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">3. User Obligations</h2>
              
              <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">For Job Seekers</h3>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide accurate, current, and complete information in your application</li>
                <li>Update your information promptly if any changes occur</li>
                <li>Not misrepresent your qualifications, experience, or credentials</li>
                <li>Attend scheduled interviews and notify us of any conflicts in advance</li>
                <li>Maintain confidentiality of client information shared during the recruitment process</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">For Employers/Clients</h3>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide accurate job descriptions and requirements</li>
                <li>Conduct fair and non-discriminatory hiring practices</li>
                <li>Honor fee agreements and payment terms</li>
                <li>Notify us promptly of any changes to job requirements or hiring decisions</li>
                <li>Not directly approach candidates we present for at least 12 months without our involvement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">4. Fees and Payment Terms</h2>
              <p className="mb-4">
                Our fees are agreed upon in writing with client companies before service commencement. Standard terms include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Recruitment fees are typically calculated as a percentage of the candidate's first-year salary</li>
                <li>Retainer fees may apply for executive search and headhunting services</li>
                <li>Payment terms are net 30 days from invoice date unless otherwise agreed</li>
                <li>Replacement guarantees apply within specified periods (typically 90 days)</li>
                <li>Additional charges may apply for background checks, assessments, and advertising</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">5. Intellectual Property</h2>
              <p className="mb-4">
                All content on our website, including text, graphics, logos, images, and software, is the property of Edenbrook Recruitment Agency Ltd and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">6. Confidentiality</h2>
              <p className="mb-4">
                Both parties agree to maintain confidentiality of sensitive information shared during the recruitment process, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Candidate personal information and resumes</li>
                <li>Client company information and hiring strategies</li>
                <li>Salary information and compensation packages</li>
                <li>Proprietary business information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                While we strive to provide excellent service, Edenbrook Recruitment Agency Ltd:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Does not guarantee job placement for candidates</li>
                <li>Does not guarantee the performance or suitability of placed candidates</li>
                <li>Is not liable for decisions made by employers or candidates</li>
                <li>Is not responsible for any indirect, consequential, or incidental damages</li>
                <li>Limits total liability to the amount of fees paid for the specific service in question</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">8. Termination</h2>
              <p className="mb-4">
                Either party may terminate the service relationship with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Outstanding fees remain payable</li>
                <li>Confidentiality obligations continue</li>
                <li>We may retain your information as required by law or for legitimate business purposes</li>
                <li>Non-solicitation agreements remain in effect for the agreed period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">9. Dispute Resolution</h2>
              <p className="mb-4">
                In the event of any dispute arising from these Terms or our services, the parties agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>First attempt resolution through good-faith negotiation</li>
                <li>Consider mediation before pursuing legal action</li>
                <li>Submit to the jurisdiction of Kenyan courts</li>
                <li>Be governed by the laws of Kenya</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">10. Compliance with Laws</h2>
              <p className="mb-4">
                All parties agree to comply with applicable employment laws, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Equal employment opportunity and non-discrimination laws</li>
                <li>Data protection and privacy regulations</li>
                <li>Immigration and work authorization requirements</li>
                <li>Labor and employment standards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">11. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">12. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact us:
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

export default TermsOfServicePage;
