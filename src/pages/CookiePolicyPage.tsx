import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-background pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8">Cookie Policy</h1>
          
          <div className="prose max-w-4xl space-y-6 text-gray-700">
            <section>
              <p className="text-sm text-gray-500 mb-8">Last Updated: January 2024</p>
              
              <p className="mb-6">
                This Cookie Policy explains how Edenbrook Recruitment Agency Ltd uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">1. What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help the website remember your preferences, improve your experience, and provide analytics information to help us understand how visitors use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">2. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">Strictly Necessary Cookies</h3>
              <p className="mb-4">
                These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Session management and authentication</li>
                <li>Security and fraud prevention</li>
                <li>Load balancing and performance</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">Performance Cookies</h3>
              <p className="mb-4">
                These cookies collect information about how visitors use our website, such as which pages are visited most often. This helps us improve the website's performance and user experience.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Google Analytics for website traffic analysis</li>
                <li>Page load performance monitoring</li>
                <li>Error tracking and debugging</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">Functionality Cookies</h3>
              <p className="mb-4">
                These cookies allow the website to remember choices you make (such as your language preference or region) and provide enhanced, personalized features.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Language and region preferences</li>
                <li>Form autofill preferences</li>
                <li>User interface customization</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">Targeting/Advertising Cookies</h3>
              <p className="mb-4">
                These cookies are used to deliver relevant advertisements and track advertising campaign effectiveness. They may be set by our advertising partners.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>LinkedIn, Facebook, and Google advertising pixels</li>
                <li>Retargeting and remarketing campaigns</li>
                <li>Conversion tracking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">3. Third-Party Cookies</h2>
              <p className="mb-4">
                We may also use third-party service providers who set cookies on our website to provide their services:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                <li><strong>LinkedIn:</strong> For social media integration and advertising</li>
                <li><strong>Facebook:</strong> For social media sharing and advertising</li>
                <li><strong>Twitter:</strong> For social media integration</li>
              </ul>
              <p className="mb-4">
                These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">4. Cookie Duration</h2>
              
              <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">Session Cookies</h3>
              <p className="mb-4">
                These temporary cookies are deleted when you close your browser. They help maintain your session as you navigate through our website.
              </p>

              <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">Persistent Cookies</h3>
              <p className="mb-4">
                These cookies remain on your device for a set period or until you delete them. They remember your preferences for future visits. Typical durations include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Preference cookies: 1-2 years</li>
                <li>Analytics cookies: 2 years</li>
                <li>Advertising cookies: 90 days to 1 year</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">5. Managing Cookies</h2>
              <p className="mb-4">
                You can control and manage cookies in several ways:
              </p>

              <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">Browser Settings</h3>
              <p className="mb-4">
                Most web browsers allow you to manage cookie preferences through their settings. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Delete cookies after each browsing session</li>
                <li>Accept or reject cookies on a case-by-case basis</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">Browser-Specific Instructions</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Microsoft Edge:</strong> Settings → Cookies and Site Permissions</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-navy mt-6 mb-3">Opt-Out Tools</h3>
              <p className="mb-4">
                You can opt out of certain types of cookies through these tools:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Google Analytics Opt-out Browser Add-on</li>
                <li>Network Advertising Initiative opt-out page</li>
                <li>Digital Advertising Alliance opt-out page</li>
              </ul>

              <p className="mb-4 mt-6 font-semibold text-brand-navy">
                Note: Blocking or deleting cookies may impact your experience on our website and limit certain functionalities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">6. Do Not Track Signals</h2>
              <p className="mb-4">
                Some browsers include a "Do Not Track" (DNT) feature. Our website does not currently respond to DNT signals, as there is no industry standard for how to handle them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">7. Mobile Devices</h2>
              <p className="mb-4">
                Mobile devices use identifiers that function similarly to cookies. You can manage these through your device settings:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>iOS:</strong> Settings → Privacy → Advertising → Limit Ad Tracking</li>
                <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">8. Changes to This Cookie Policy</h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. We will notify you of significant changes by posting the updated policy on our website with a new "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">9. More Information</h2>
              <p className="mb-4">
                For more information about cookies and how they work, visit:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>www.allaboutcookies.org</li>
                <li>www.youronlinechoices.eu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-navy mt-8 mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have questions about our use of cookies, please contact us:
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

export default CookiePolicyPage;
