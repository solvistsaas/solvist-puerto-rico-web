import LandingNav from '@/components/landing/LandingNav'
import HeroSection from '@/components/landing/HeroSection'
import ProblemSection from '@/components/landing/ProblemSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'
import { PlatformSection } from '@/components/landing/PlatformSection'
import AuditSection from '@/components/landing/AuditSection'
import WhyNowSection from '@/components/landing/WhyNowSection'
import ComparisonSection from '@/components/landing/ComparisonSection'
import CtaSection from '@/components/landing/CtaSection'
import FaqSection from '@/components/landing/FaqSection'
import { faqs } from '@/components/landing/faqs'
import LandingFooter from '@/components/landing/LandingFooter'
import MobileStickyCTA from '@/components/landing/MobileStickyCTA'
import { JsonLd } from '@/components/JsonLd'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNav />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <PlatformSection />
      <AuditSection />
      <WhyNowSection />
      <ComparisonSection />
      <CtaSection />
      <FaqSection />
      <LandingFooter />
      <MobileStickyCTA />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.a,
            },
          })),
        }}
      />
    </div>
  )
}
