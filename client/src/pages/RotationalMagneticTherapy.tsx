import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ArrowRight, Check, Cpu, Zap, Activity } from "lucide-react";
import { useRef } from "react";

// JSON-LD structured data for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is rotational magnetic therapy (旋磁疗法)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rotational Magnetic Therapy (旋磁疗法) is an advanced bio-energetic therapy using rotating magnetic fields, developed by Professor Wang Shijie, combining magnetic therapy with heat and vibration for enhanced recovery."
      }
    },
    {
      "@type": "Question",
      "name": "How does rotational magnetic therapy differ from PEMF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rotational magnetic therapy uses a continuous 3D rotating field while PEMF uses pulsed waves. Rotational therapy often integrates heat and vibration in a 3-in-1 system, targeting performance rather than clinical outcomes."
      }
    },
    {
      "@type": "Question",
      "name": "Who invented rotational magnetic therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professor Wang Shijie developed rotational magnetic therapy (旋磁疗法). He is the named inventor of the technology used in DR MAGfield therapy beds."
      }
    },
    {
      "@type": "Question",
      "name": "How long is a typical therapy session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical rotational magnetic therapy session lasts 30-45 minutes. No downtime is required — you can return to training immediately after."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is Rotational Magnetic Therapy (旋磁疗法)? The Complete Expert Guide",
  "author": {
    "@type": "Person",
    "name": "Professor Wang Shijie",
    "jobTitle": "Inventor, Rotational Magnetic Therapy Technology"
  },
  "publisher": {
    "@type": "Organization",
    "name": "DR MAGfield",
    "url": "https://drmagfield.longevityvalley.ai"
  },
  "datePublished": "2026-03-27"
};

export default function RotationalMagneticTherapy() {
  const comparisonRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...faqSchema, ...articleSchema }) }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold font-bold text-primary tracking-wide">DR MAGfield</a>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
            <a href="/#qi-master" className="hover:text-primary transition-colors">The Qi Master</a>
            <a href="/#qi-mini" className="hover:text-primary transition-colors">The Qi Mini</a>
            <a href="/rotational-magnetic-therapy" className="hover:text-primary transition-colors text-primary">旋磁疗法</a>
            <a href="/golf-recovery-faq" className="hover:text-primary transition-colors">Golf Recovery</a>
          </div>
          <Button variant="default" className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
            Book Session
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-secondary">
              <Cpu className="w-4 h-4 text-accent" />
              <span>旋磁疗法 — Rotational Magnetic Therapy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              What is Rotational Magnetic Therapy (旋磁疗法)?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              An advanced bio-energetic therapy using rotating magnetic fields — developed by Professor Wang Shijie — combining magnetic therapy, heat, and vibration for enhanced human performance and recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-lg px-8 bg-primary hover:bg-primary/90">
                Experience It <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-lg px-8 border-primary/20 hover:bg-secondary/50" onClick={() => comparisonRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                Compare vs PEMF
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is 旋磁疗法 */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6">How It Works</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Rotational Magnetic Therapy (旋磁疗法, pronounced "xuán cí liáo fǎ") generates a continuously rotating magnetic field — rather than static or pulsed waves — that interacts with cellular membranes and ion channels.
            </p>
            <p>
              The DR MAGfield system delivers this through a <strong>3-in-1 therapy bed</strong> that combines:
            </p>
            <ul className="space-y-3">
              {[
                { icon: <Cpu className="w-5 h-5 text-accent" />, title: "Rotational Magnetic Field", desc: "Continuous 3D rotating field for uniform tissue penetration" },
                { icon: <Zap className="w-5 h-5 text-accent" />, title: "Active Thermal Therapy", desc: "Targeted heat to relax muscles and increase circulation" },
                { icon: <Activity className="w-5 h-5 text-accent" />, title: "Vibration Therapy", desc: "Gentle mechanical oscillation supporting blood flow" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-secondary/20 p-4 rounded-xl">
                  {item.icon}
                  <div>
                    <strong className="text-foreground">{item.title}</strong>
                    <p className="text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Professor Wang Section */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-white/80 backdrop-blur-sm border-white/50">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Professor Wang Shijie</h3>
                  <p className="text-sm text-accent font-medium mb-3">Inventor, Rotational Magnetic Therapy Technology</p>
                  <p className="text-muted-foreground">
                    Professor Wang Shijie developed rotational magnetic therapy with a specific goal: help the body recover its natural energy balance through magnetic field rotation. His research established new protocols for non-invasive recovery enhancement, focusing on athletes and active individuals who push their bodies and need to recover just as hard.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PEMF Comparison */}
      <section ref={comparisonRef} className="py-20 px-6" id="comparison">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Rotational Magnetic Therapy vs PEMF</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Feature</th>
                  <th className="text-left py-3 px-4 font-medium text-primary">旋磁疗法 Rotational</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">PEMF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Mechanism", "Continuous rotating 3D magnetic field", "Pulsed electromagnetic waves"],
                  ["Treatment consistency", "Uniform field coverage", "Variable based on pulse frequency"],
                  ["Heat integration", "Often combined with thermal therapy", "Typically standalone"],
                  ["Vibration", "Integrated in 3-in-1 systems", "Not standard"],
                  ["Research origin", "Professor Wang Shijie", "Various Western researchers"],
                  ["Market positioning", "Performance & recovery", "Primarily clinical/medical"],
                  ["Typical users", "Athletes, active individuals", "Patients seeking medical treatment"]
                ].map(([feature, rotational, pemf], i) => (
                  <tr key={i} className="bg-secondary/5 hover:bg-secondary/10 transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground">{feature}</td>
                    <td className="py-3 px-4 text-primary">{rotational}</td>
                    <td className="py-3 px-4 text-muted-foreground">{pemf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            <strong>Key distinction:</strong> PEMF has FDA clearances for bone healing and depression. Rotational magnetic therapy is positioned for performance optimization — targeting athletes and active individuals who want to recover faster and perform better.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-secondary/10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-border">
              <AccordionTrigger className="text-lg font-bold text-primary">What is rotational magnetic therapy (旋磁疗法)?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Rotational Magnetic Therapy (旋磁疗法) is an advanced bio-energetic therapy using rotating magnetic fields, developed by Professor Wang Shijie, combining magnetic therapy with heat and vibration for enhanced recovery. The rotating field creates more uniform penetration than pulsed alternatives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-border">
              <AccordionTrigger className="text-lg font-bold text-primary">How does it differ from PEMF?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Rotational magnetic therapy uses a continuous 3D rotating field while PEMF uses pulsed waves. Rotational therapy often integrates heat and vibration in a 3-in-1 system, targeting performance rather than clinical outcomes. Both are magnetic therapies but with different delivery mechanisms and applications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-border">
              <AccordionTrigger className="text-lg font-bold text-primary">Who invented rotational magnetic therapy?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Professor Wang Shijie developed rotational magnetic therapy (旋磁疗法). He is the named inventor of the technology used in DR MAGfield therapy beds. His research focuses on non-invasive recovery enhancement for athletes and active individuals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b-border">
              <AccordionTrigger className="text-lg font-bold text-primary">How long is a typical session?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                A typical rotational magnetic therapy session lasts 30-45 minutes. No downtime is required — you can return to training or daily activities immediately after.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b-border">
              <AccordionTrigger className="text-lg font-bold text-primary">Is it safe?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Rotational magnetic therapy is a non-invasive recovery modality. It is not intended to diagnose, treat, cure, or prevent any disease. Consult a healthcare provider before beginning any new therapy regimen if you have concerns.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Rotational Magnetic Therapy</h2>
          <p className="text-xl opacity-90 mb-8">
            DR MAGfield — Malaysia's first golf club bio-energetic therapy lounge at Kelab Rahman Putra Malaysia.
          </p>
          <Button size="lg" className="rounded-full text-lg px-8 bg-accent text-accent-foreground hover:bg-accent/90">
            Book Your Session <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-70">© {new Date().getFullYear()} DR MAGfield. Kelab Rahman Putra Malaysia.</p>
          <p className="text-xs opacity-50 mt-2">Turn Pain into Pure Performance.</p>
        </div>
      </footer>
    </div>
  );
}
