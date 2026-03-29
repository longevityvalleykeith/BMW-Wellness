import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ArrowRight, Check, Cpu, Zap, Activity, Wind, BarChart3 } from "lucide-react";

export default function BuyersGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
              <BarChart3 className="w-4 h-4 text-accent" />
              <span>Recovery Technology Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              How to Choose the Right Recovery Technology
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A practical buyer's guide for athletes and active individuals evaluating recovery technology investments. Compare your options, understand what matters, and make an informed decision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Questions to Ask */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8">Before You Buy — Questions to Ask Yourself</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "What is my primary goal?", a: "Recovery? Performance? Pain management? Different technologies optimize for different outcomes." },
              { q: "Do I prefer clinical or performance positioning?", a: "Clinical = medical outcomes. Performance = training optimization. Most recovery tech serves one or the other." },
              { q: "How much time can I dedicate per session?", a: "Some require 30-45 min sessions. Others take 10-15 min. Factor this into your training schedule." },
              { q: "Do I want home equipment or premium lounge sessions?", a: "Home devices offer convenience. Premium lounges offer clinical-grade equipment without the upfront investment." },
              { q: "What is my budget range?", a: "Home devices: $200-$2000. Premium lounges: $50-$200/session. Factor in long-term cost." },
              { q: "Do I train 4+ times per week?", a: "High-frequency athletes benefit most from premium recovery tech. Occasional users may not justify the investment." }
            ].map((item, i) => (
              <Card key={i} className="bg-white/80">
                <CardContent className="p-5">
                  <h3 className="font-bold text-primary text-lg mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Spectrum */}
      <section className="py-20 px-6 bg-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8">The Recovery Technology Spectrum</h2>
          <div className="space-y-6">
            {[
              { icon: <Zap className="w-6 h-6 text-accent" />, name: "Percussive Therapy", examples: "Theragun, Hypervolt", best: "Quick targeted relief, DIY", session: "10-15 min", cost: "Home device $300-$600", color: "border-accent/30" },
              { icon: <Activity className="w-6 h-6 text-accent" />, name: "Compression Therapy", examples: "Normatec, RecoveryAir", best: "Circulation, athletic recovery", session: "20-30 min", cost: "Home device $400-$1500", color: "border-accent/30" },
              { icon: <Wind className="w-6 h-6 text-accent" />, name: "Cryotherapy", examples: "Cryo Chamber, Ice Bath", best: "Anti-inflammatory, quick recovery", session: "2-5 min", cost: "Chamber $300/session or $50k+ home", color: "border-blue-300/50" },
              { icon: <Cpu className="w-6 h-6 text-accent" />, name: "PEMF", examples: "Bemer, Osprey, iMRS", best: "Clinical recovery, bone healing", session: "15-30 min", cost: "Home device $500-$3000", color: "border-blue-300/50" },
              { icon: <BarChart3 className="w-6 h-6 text-accent" />, name: "Rotational Magnetic (旋磁疗法)", examples: "DR MAGfield Qi Master", best: "Performance athletes, 3-in-1 recovery", session: "30-45 min", cost: "Lounge $100-$200/session", color: "border-primary" }
            ].map((tech, i) => (
              <Card key={i} className={`bg-white/80 border-l-4 ${tech.color}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">{tech.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-primary text-xl mb-1">{tech.name}</h3>
                      <p className="text-xs text-accent font-medium mb-2">Examples: {tech.examples}</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                        <div><span className="text-muted-foreground">Best for:</span> <strong>{tech.best}</strong></div>
                        <div><span className="text-muted-foreground">Session:</span> <strong>{tech.session}</strong></div>
                        <div><span className="text-muted-foreground">Cost:</span> <strong>{tech.cost}</strong></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Matrix */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Decision Matrix — Which Technology Wins?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  {["Use Case", "Percussive", "Compression", "Cryo", "PEMF", "旋磁疗法"].map((h, i) => (
                    <th key={i} className="text-left py-3 px-3 font-medium text-muted-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Quick post-workout", "✅", "⚠️", "⚠️", "❌", "❌"],
                  ["Deep tissue recovery", "✅", "✅", "❌", "✅", "✅"],
                  ["Back/spine focus", "⚠️", "⚠️", "❌", "✅", "✅"],
                  ["Full-body systemic", "❌", "✅", "⚠️", "✅", "✅"],
                  ["Pre-training prep", "✅", "✅", "⚠️", "⚠️", "✅"],
                  ["No setup required", "❌", "❌", "❌", "❌", "✅ Lounge"],
                  ["3-in-1 experience", "❌", "❌", "❌", "❌", "✅"],
                  ["Golf-specific recovery", "⚠️", "✅", "⚠️", "✅", "✅"]
                ].map((row, i) => (
                  <tr key={i} className="bg-secondary/5 hover:bg-secondary/10">
                    <td className="py-2 px-3 font-medium text-foreground">{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <td key={j} className="py-2 px-3 text-muted-foreground">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            ✅ = Strong fit | ⚠️ = Partial fit | ❌ = Not ideal
          </p>
        </div>
      </section>

      {/* Recommendation */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">The Performance-First Athlete's Recommendation</h2>
          <div className="space-y-4 text-lg text-primary-foreground/90">
            <p>
              For athletes who train <strong>4+ times per week</strong> and want comprehensive recovery:
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-left space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <div>
                  <strong>Primary: Rotational magnetic therapy</strong> (2-3x weekly) — 3-in-1 systemic recovery addressing back/spine tension, muscle fatigue, and mobility.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <strong>Secondary: Percussive therapy</strong> (daily as needed) — targeted maintenance for knots and trigger points between sessions.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <strong>Complement: Sleep, hydration, nutrition</strong> — technology supports recovery but basics matter most.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-8">Common Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-border">
              <AccordionTrigger className="text-lg font-bold text-primary">How do I know if I need professional recovery tech?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                If you train 3+ times per week, experience persistent muscle tension, or feel that your recovery is limiting your performance — yes. If you train occasionally and recover fine with rest, basic stretching may suffice.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-border">
              <AccordionTrigger className="text-lg font-bold text-primary">Should I buy home equipment or use a lounge?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Home equipment makes sense if you travel frequently or want daily maintenance. Lounges offer clinical-grade equipment without the $1000-$5000 upfront investment. Many athletes use both — home for quick maintenance, lounge for deep recovery sessions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-border">
              <AccordionTrigger className="text-lg font-bold text-primary">Is rotational magnetic therapy worth it for golfers?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                If you play 2+ times per week or have recurring back/shoulder issues from golf — yes. The 3-in-1 format addresses the specific tensions that accumulate from 100+ swings per round. Cost-per-session at a lounge is comparable to a massage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b-border">
              <AccordionTrigger className="text-lg font-bold text-primary">What's the minimum recovery routine for serious athletes?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Minimum: Sleep (7-9 hours), nutrition, hydration, and 2-3x weekly recovery therapy during heavy training. Add percussive therapy for daily maintenance. Rotational magnetic 1-2x weekly for systemic recovery if training 4+ times.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-accent text-accent-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Rotational Magnetic Therapy</h2>
          <p className="text-xl opacity-90 mb-8">
            Try the 3-in-1 recovery experience at DR MAGfield — Kelab Rahman Putra Malaysia.
          </p>
          <Button size="lg" className="rounded-full text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90">
            Book Your First Session <ArrowRight className="ml-2 w-4 h-4" />
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
