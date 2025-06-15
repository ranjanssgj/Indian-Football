import { GlassCard } from '@/components/ui/glass-card';
import { FileText, ShieldAlert } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-b from-primary/10 to-transparent rounded-lg">
        <ShieldAlert className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Privacy Policy</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
        </p>
        <p className="text-sm text-muted-foreground mt-2">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </section>

      <GlassCard className="p-6 md:p-10 space-y-6">
        <section>
          <h2 className="font-headline text-2xl text-primary mb-3 flex items-center gap-2">
            <FileText className="h-6 w-6" /> Introduction
          </h2>
          <p className="text-foreground/80">
            Welcome to Indian Football Hub ("we", "us", "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl text-primary mb-3 flex items-center gap-2">
            <FileText className="h-6 w-6" /> Information We Collect
          </h2>
          <p className="text-foreground/80 mb-2">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc list-inside text-foreground/80 space-y-1 pl-4">
            <li>Register on the website (if applicable).</li>
            <li>Subscribe to a newsletter or other communications from us.</li>
            <li>Participate in interactive features, such as commenting or using our AI tools.</li>
            <li>Contact us via email or our contact form.</li>
          </ul>
          <p className="text-foreground/80 mt-2">
            The personal information we collect may include your name, email address, and any other information you choose to provide. For AI tools like the news summarizer, we process the text you input but do not store it long-term beyond what is necessary for the function to operate.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl text-primary mb-3 flex items-center gap-2">
            <FileText className="h-6 w-6" /> How We Use Your Information
          </h2>
          <p className="text-foreground/80 mb-2">
            We use personal information collected via our website for a variety of business purposes described below:
          </p>
          <ul className="list-disc list-inside text-foreground/80 space-y-1 pl-4">
            <li>To provide, operate, and maintain our website.</li>
            <li>To improve, personalize, and expand our website.</li>
            <li>To understand and analyze how you use our website.</li>
            <li>To develop new products, services, features, and functionality.</li>
            <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes (with your consent).</li>
            <li>To process your transactions (if any).</li>
            <li>To find and prevent fraud.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-headline text-2xl text-primary mb-3 flex items-center gap-2">
            <FileText className="h-6 w-6" /> Log Files and Cookies
          </h2>
          <p className="text-foreground/80">
            Indian Football Hub follows a standard procedure of using log files. These files log visitors when they visit websites. We may also use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>
        
        <section>
          <h2 className="font-headline text-2xl text-primary mb-3 flex items-center gap-2">
            <FileText className="h-6 w-6" /> Third-Party Services
          </h2>
          <p className="text-foreground/80">
            We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. (e.g., Google Analytics, Genkit AI for summarization).
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl text-primary mb-3 flex items-center gap-2">
            <FileText className="h-6 w-6" /> Data Security
          </h2>
          <p className="text-foreground/80">
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl text-primary mb-3 flex items-center gap-2">
            <FileText className="h-6 w-6" /> Your Privacy Rights
          </h2>
          <p className="text-foreground/80">
            Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. Please contact us to exercise these rights.
          </p>
        </section>
        
        <section>
          <h2 className="font-headline text-2xl text-primary mb-3 flex items-center gap-2">
            <FileText className="h-6 w-6" /> Changes to This Privacy Policy
          </h2>
          <p className="text-foreground/80">
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl text-primary mb-3 flex items-center gap-2">
            <FileText className="h-6 w-6" /> Contact Us
          </h2>
          <p className="text-foreground/80">
            If you have questions or comments about this policy, you may email us at [privacy@indianfootballhub.example.com] or by post to: [Placeholder Address].
          </p>
        </section>
      </GlassCard>
    </div>
  );
}
