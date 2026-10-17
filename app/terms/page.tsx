import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use" };

export default function Terms() {
  return (
    <LegalPage title="Terms of Use">
      <p>By downloading or using MixSharp you agree to these Terms. If you do not agree, please do not use the app.</p>

      <section>
        <h2>1. License</h2>
        <p>We grant you a personal, non-exclusive, non-transferable, revocable license to use MixSharp on Apple devices you own or control, subject to the Apple Media Services Terms and these Terms.</p>
      </section>

      <section>
        <h2>2. Pro purchase</h2>
        <p>MixSharp is free to use with optional Pro features. Pro is offered as an in-app purchase billed by Apple. Purchases are final except as required by law or Apple&apos;s policies, and can be restored on devices signed in with the same Apple ID.</p>
      </section>

      <section>
        <h2>3. Safe listening</h2>
        <p>Ear training involves listening to audio at controlled levels. Keep your volume at a comfortable level, take breaks, and stop if you experience discomfort. MixSharp is not a medical device and does not diagnose or treat hearing conditions.</p>
      </section>

      <section>
        <h2>4. Your content</h2>
        <p>You are responsible for any audio files you add and must have the right to use them. Your files stay on your device.</p>
      </section>

      <section>
        <h2>5. Acceptable use</h2>
        <p>You agree not to copy, modify, reverse engineer or redistribute the app except as permitted by law, and not to misuse it or interfere with its operation.</p>
      </section>

      <section>
        <h2>6. Intellectual property</h2>
        <p>MixSharp, its design, logo and content are owned by us and protected by applicable law. These Terms do not transfer any ownership to you.</p>
      </section>

      <section>
        <h2>7. Disclaimer and limitation of liability</h2>
        <p>The app is provided &quot;as is&quot; without warranties of any kind. To the maximum extent permitted by law, we are not liable for indirect, incidental or consequential damages arising from your use of the app.</p>
      </section>

      <section>
        <h2>8. Changes and termination</h2>
        <p>We may update these Terms or the app at any time. Continued use after changes means you accept them. You may stop using the app at any time by deleting it.</p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>Questions? Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. See also our <a href="/privacy">Privacy Policy</a>.</p>
      </section>
    </LegalPage>
  );
}
