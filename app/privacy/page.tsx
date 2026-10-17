import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This Privacy Policy explains how MixSharp (&quot;we&quot;, &quot;us&quot;) handles information when you use the MixSharp app
        for iPhone, iPad and Mac and this website.
      </p>

      <section>
        <h2>1. Information we collect</h2>
        <ul>
          <li><strong>No account.</strong> MixSharp does not require you to create an account or give us your name or email.</li>
          <li><strong>Training data.</strong> Your drill results, skill ratings and settings are stored on your device.</li>
          <li><strong>Your own audio.</strong> Audio files you add are processed on your device and are not uploaded to us.</li>
          <li><strong>Anonymous usage data.</strong> If enabled, we use Firebase Analytics to collect anonymous usage events (for example, which drills are used and whether sessions are completed). You can turn this off in Settings with &quot;Share anonymous usage data&quot;.</li>
          <li><strong>Purchases.</strong> Purchases are handled by Apple. We use RevenueCat to verify your Pro entitlement; it receives an anonymous app user ID and purchase status, not your payment details.</li>
        </ul>
      </section>

      <section>
        <h2>2. How we use information</h2>
        <p>We use the information above to operate the app, restore purchases, understand how the app is used and improve it. We do not sell your personal information and do not use it for advertising.</p>
      </section>

      <section>
        <h2>3. Third-party services</h2>
        <ul>
          <li>Google Firebase Analytics — anonymous usage analytics.</li>
          <li>RevenueCat — in-app purchase management.</li>
          <li>Apple — App Store, payments and device services.</li>
        </ul>
        <p>These providers process data under their own privacy policies.</p>
      </section>

      <section>
        <h2>4. Data retention and deletion</h2>
        <p>Data stored on your device is removed when you delete the app. Anonymous analytics data is retained according to our analytics provider&apos;s standard retention settings.</p>
      </section>

      <section>
        <h2>5. Children</h2>
        <p>MixSharp is not directed at children under 13 and we do not knowingly collect personal information from them.</p>
      </section>

      <section>
        <h2>6. Your rights</h2>
        <p>Depending on where you live, you may have rights to access, correct or delete your personal data. Because we hold no account data about you, most information is under your control on your device. To make a request, contact us below.</p>
      </section>

      <section>
        <h2>7. Changes to this policy</h2>
        <p>We may update this policy from time to time. The date above shows when it was last revised.</p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>Questions? Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.</p>
      </section>
    </LegalPage>
  );
}
