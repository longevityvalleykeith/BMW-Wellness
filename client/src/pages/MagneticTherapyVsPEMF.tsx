import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Zap, Cpu } from "lucide-react";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Magnetic Therapy vs PEMF for Athletes: Which Is Better for Recovery?",
  "publisher": {
    "@type": "Organization",
    "name": "DR MAGfield",
    "url": "https://drmagfield.longevityvalley.ai"
  },
  "datePublished": "2026-03-27"
};

export default function MagneticTherapyVsPEMF() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold font-bold text-primary tracking-wide">DR MAGfield</a>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
            <a href="/#qi-master" className="hover:text-primary transition-colors">The Qi Master</a>
            <a href="/#qi-mini" className="hover:text-primary transition-colors">The Qi Mini</a>
            <a href="/rotational-magnetic-therapy" className="hover:text-primary transition-colors">旋磁疗法</a>
            <a href="/golf-recovery-faq" className="hover:text-primary transition-colors">Golf Recovery</a>
          </div>
          <Button variant="default" className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
            Book Session
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-secondary">
              <Cpu className="w-4 h-4 text-accent" />
              <span>Technology Comparison</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Magnetic Therapy vs PEMF for Athletes
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              An honest comparison between rotational magnetic therapy (旋磁疗法) and Pulsed Electromagnetic Field therapy — cut through the marketing and decide which recovery technology fits your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Factor</th>
                  <th className="text-left py-3 px-4 font-medium text-primary">旋磁疗法 Rotational Magnetic</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">PEMF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Magnetic field type", "Continuous rotating 3D field", "Pulsed wave"],
                  ["Multi-modal delivery", "3-in-1: magnetic + heat + vibration", "Typically single-modality"],
                  ["Treatment time", "30-45 min", "15-30 min per session"],
                  ["Primary positioning", "Sports performance & recovery", "Clinical rehabilitation"],
                  ["Research base", "Growing (primarily Asian markets)", "Extensive (Western clinical studies)"],
                  ["Best for", "Athletes seeking edge, pain management", "Post-surgical recovery, bone healing"],
                  ["Availability", "Premium lounges, specialized centers", "Widely available"],
                  ["Cost range", "Premium (specialized equipment)", "Variable"],
                  ["Heat integrated", <span key="y"><Check className="w-4 h-4 text-green-500 inline" /></span>, <span key="n"><X className="w-4 h-4 text-red-400 inline" /></span>],
                  ["Vibration integrated", <span key="y"><Check className="w-4 h-4 text-green-500 inline" /></span>, <span key="n"><X className="w-4 h-4 text-red-400 inline" /></span>]
                ].map(([factor, rotational, pemf], i) => (
                  <tr key={i} className="bg-secondary/5 hover:bg-secondary/10 transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground">{factor}</td>
                    <td className="py-3 px-4 text-primary">{rotational}</td>
                    <td className="py-3 px-4 text-muted-foreground">{pemf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How PEMF Works */}
      <section className="py-20 px-6 bg-secondary/10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">How PEMF Works</h2>
          <p className="text-lg text-muted-foreground mb-6">
            PEMF delivers electromagnetic pulses at specific frequencies through coils or pads placed on the body. The pulsed nature of the field creates varying biological effects depending on frequency, intensity, and waveform.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            PEMF has FDA clearance for certain applications including bone healing and depression treatment. In sports recovery, athletes use PEMF mats and devices for:
          </p>
          <ul className="space-y-3">
            {["Post-exercise muscle recovery", "Joint discomfort reduction", "Sleep quality improvement"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How 旋磁疗法 Works */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">How Rotational Magnetic Therapy Works</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Rotational Magnetic Therapy (developed by Professor Wang Shijie) generates a continuously rotating magnetic field rather than pulsed waves. The rotation creates a more uniform penetration pattern, theoretically providing consistent coverage across the treatment area.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            The DR MAGfield system integrates three modalities simultaneously:
          </p>
          <div className="space-y-4">
            {[
              { title: "Rotational magnetic field", desc: "The core technology, delivered continuously — uniform coverage across treatment area" },
              { title: "Targeted heat", desc: "Thermal therapy integrated into the treatment surface — relaxes muscles, increases circulation" },
              { title: "Vibration therapy", desc: "Gentle mechanical oscillation — supports blood flow and lymphatic drainage" }
            ].map((item, i) => (
              <Card key={i} className="bg-white/80">
                <CardContent className="p-4 flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-primary">{item.title}</strong>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-lg text-muted-foreground mt-6">
            This 3-in-1 approach means you're getting magnetic therapy, heat therapy, and vibrational therapy simultaneously — potentially more efficient than single-modality PEMF sessions.
          </p>
        </div>
      </section>

      {/* Which Is Better for Golfers */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Which Is Better for Golfers?</h2>
          <div className="space-y-6">
            <Card className="bg-white/80">
              <CardContent className="p-6">
                <h3 className="font-bold text-primary text-xl mb-3">For golfers specifically:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Back and spine focus:</strong> Golfers frequently experience lower back strain. The full-length therapy bed format allows comprehensive spinal coverage.</li>
                  <li><strong>Pre-round preparation:</strong> 30-minute sessions before a round may support mobility and circulation.</li>
                  <li><strong>Post-round recovery:</strong> End-of-day sessions may help address accumulated fatigue and muscle strain.</li>
                  <li><strong>No electrodes required:</strong> Unlike some PEMF devices, no lead placement needed — you simply lie on the bed.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/80">
              <CardContent className="p-6">
                <h3 className="font-bold text-primary text-xl mb-3">For general athletes:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>PEMF may be preferable for targeted post-injury recovery</li>
                  <li>Rotational magnetic therapy may support general maintenance and recovery cycles</li>
                  <li>Consider your primary goal: clinical recovery vs. performance optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-8">Common Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-border">
              <AccordionTrigger className="text-lg font-bold text-primary">Is one better than the other?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Both modalities represent legitimate non-invasive recovery technologies. The choice depends on your goals. Neither is "better" in absolute terms — it depends on whether you prioritize clinical rehabilitation (PEMF) or performance optimization (rotational magnetic therapy).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-border">
              <AccordionTrigger className="text-lg font-bold text-primary">Can I use both?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes — many athletes use both modalities. Use PEMF for targeted post-injury recovery and rotational magnetic therapy for general maintenance and performance support. Consult your healthcare provider to create a protocol that works for your situation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-border">
              <AccordionTrigger className="text-lg font-bold text-primary">Which is available at DR MAGfield?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                DR MAGfield offers rotational magnetic therapy (3-in-1: magnetic field + heat + vibration) at our Experience Lounge in Kelab Rahman Putra Malaysia. We specialize in performance-focused recovery — athletes, golfers, and active individuals who want to train harder and recover faster.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-20 px-6 bg-accent text-accent-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">The Bottom Line</h2>
          <div className="space-y-6 text-lg">
            <p><strong>Choose Rotational Magnetic Therapy</strong> if you want an integrated 3-in-1 experience, prefer a performance positioning over medical framing, and value the spa-like lounge environment.</p>
            <p><strong>Choose PEMF</strong> if you have specific clinical needs (bone healing, post-surgical recovery), prefer more widely available options, or want a device you can use at home.</p>
          </div>
          <Button size="lg" className="rounded-full text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90 mt-8">
            Experience 旋磁疗法 at DR MAGfield <ArrowRight className="ml-2 w-4 h-4" />
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
