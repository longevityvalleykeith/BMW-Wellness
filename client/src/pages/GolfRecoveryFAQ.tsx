import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Sparkles, Target, Clock, Activity, Flag, Zap } from "lucide-react";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What technology do pro golfers use for recovery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional golfers use a variety of recovery technologies including cryotherapy, compression systems (Normatec), percussive therapy (Theragun), and increasingly, magnetic-based therapies. Rotational magnetic therapy is emerging as a preferred modality for golfers seeking to address back tension and maintain mobility throughout a tournament season."
      }
    },
    {
      "@type": "Question",
      "name": "How often should golfers do recovery therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most athletes benefit from recovery therapy 2-4 times per week during heavy training or tournament periods. For golfers, post-round sessions (2-3 times weekly) can help address accumulated tension from repetitive swings, walking, and postural strain."
      }
    },
    {
      "@type": "Question",
      "name": "Best recovery therapy for golfers with back pain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Golfers with back pain often benefit from rotational magnetic therapy, which combines magnetic field treatment with heat and vibration to address muscle tension, improve circulation, and support mobility. Combined with proper swing mechanics work, this can be an effective component of a comprehensive back care program."
      }
    },
    {
      "@type": "Question",
      "name": "What is 旋磁疗法 and how does it help golfers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "旋磁疗法 (Rotational Magnetic Therapy) is a technology developed by Professor Wang Shijie using rotating magnetic fields combined with heat and vibration. For golfers, it may support recovery from swing-related muscle fatigue, address back and shoulder tension, and help maintain the mobility needed for consistent performance."
      }
    },
    {
      "@type": "Question",
      "name": "How long does recovery therapy take before a round?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A pre-round recovery session typically runs 20-30 minutes. This allows enough time for the therapy to support circulation and mobility without causing fatigue. Many golfers find 30-minute sessions 1-2 hours before tee time help them feel looser and more prepared."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use recovery technology before and after golf?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Pre-round sessions (30 minutes, 1-2 hours before playing) may help warm up tissues and support mobility. Post-round sessions (within 2-4 hours of finishing) may help address accumulated tension from walking 18 holes and repetitive swings."
      }
    },
    {
      "@type": "Question",
      "name": "How does DR MAGfield's therapy differ from a massage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Massage uses manual pressure and manipulation of soft tissues. Rotational magnetic therapy (DR MAGfield) uses electromagnetic fields, heat, and vibration to address recovery at a cellular level. Many clients describe it as complementary to massage: therapy beds address deep tissue and cellular recovery, while massage addresses immediate muscle tension."
      }
    },
    {
      "@type": "Question",
      "name": "Is magnetic therapy allowed in professional golf?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Magnetic therapy is not a prohibited modality under professional golf's anti-doping rules. Recovery technologies like magnetic therapy beds, compression systems, and cryotherapy are generally permitted. However, athletes should verify current rules with their governing body and consult team physicians."
      }
    }
  ]
};

export default function GolfRecoveryFAQ() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold font-serif text-primary tracking-wide">DR MAGfield</a>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
            <a href="/#qi-master" className="hover:text-primary transition-colors">The Qi Master</a>
            <a href="/#qi-mini" className="hover:text-primary transition-colors">The Qi Mini</a>
            <a href="/rotational-magnetic-therapy" className="hover:text-primary transition-colors">旋磁疗法</a>
            <a href="/golf-recovery-faq" className="hover:text-primary transition-colors text-primary">Golf Recovery</a>
          </div>
          <Button variant="default" className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
            Book Session
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-secondary">
              <Flag className="w-4 h-4 text-accent" />
              <span>Golf-Specific Recovery</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Golf Recovery Technology
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Expert answers to the questions golfers ask about recovery technology, rotational magnetic therapy, and maintaining peak performance.
            </p>
            <Button size="lg" className="rounded-full text-lg px-8 bg-primary hover:bg-primary/90">
              Book Your Recovery Session <Target className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "100+", label: "Swings per round" },
              { value: "6-8mi", label: "Walking per 18 holes" },
              { value: "45min", label: "Optimal session" },
              { value: "2-3x", label: "Weekly recommended" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main FAQ */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-serif text-primary mb-8">Golf Recovery FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-border">
              <AccordionTrigger className="text-lg font-serif text-primary">
                What technology do pro golfers use for recovery?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Professional golfers use a variety of recovery technologies including cryotherapy, compression systems (Normatec), percussive therapy (Theragun), and increasingly, magnetic-based therapies. Rotational magnetic therapy is emerging as a preferred modality for golfers seeking to address back tension and maintain mobility throughout a tournament season.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-border">
              <AccordionTrigger className="text-lg font-serif text-primary">
                How often should golfers do recovery therapy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most athletes benefit from recovery therapy 2-4 times per week during heavy training or tournament periods. For golfers, post-round sessions (2-3 times weekly) can help address accumulated tension from repetitive swings, walking, and postural strain. Maintenance phases may reduce to 1-2 sessions weekly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-border">
              <AccordionTrigger className="text-lg font-serif text-primary">
                Best recovery therapy for golfers with back pain?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Golfers with back pain often benefit from rotational magnetic therapy, which combines magnetic field treatment with heat and vibration to address muscle tension, improve circulation, and support mobility. Combined with proper swing mechanics work and stretching, this can be an effective component of a comprehensive back care program.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b-border">
              <AccordionTrigger className="text-lg font-serif text-primary">
                What is 旋磁疗法 and how does it help golfers?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                旋磁疗法 (Rotational Magnetic Therapy) is a technology developed by Professor Wang Shijie using rotating magnetic fields combined with heat and vibration. For golfers, it may support recovery from swing-related muscle fatigue, address back and shoulder tension, and help maintain the mobility needed for consistent performance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b-border">
              <AccordionTrigger className="text-lg font-serif text-primary">
                How long does recovery therapy take before a round?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                A pre-round recovery session typically runs 20-30 minutes. This allows enough time for the therapy to support circulation and mobility without causing fatigue. Many golfers find 30-minute sessions 1-2 hours before tee time help them feel looser and more prepared.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-b-border">
              <AccordionTrigger className="text-lg font-serif text-primary">
                Can I use recovery technology before and after golf?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Pre-round sessions (30 minutes, 1-2 hours before playing) may help warm up tissues and support mobility. Post-round sessions (within 2-4 hours of finishing) may help address accumulated tension from walking 18 holes and repetitive swings. Some users prefer the evening for longer, more restorative sessions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className="border-b-border">
              <AccordionTrigger className="text-lg font-serif text-primary">
                How does DR MAGfield's therapy differ from a massage?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Massage uses manual pressure and manipulation of soft tissues. Rotational magnetic therapy (DR MAGfield) uses electromagnetic fields, heat, and vibration to address recovery at a cellular level — improving circulation and reducing inflammation. Many clients describe it as complementary to massage: therapy beds address deep tissue and cellular recovery, while massage addresses immediate muscle tension and knots.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8" className="border-b-border">
              <AccordionTrigger className="text-lg font-serif text-primary">
                Is magnetic therapy allowed in professional golf?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Magnetic therapy is not a prohibited modality under professional golf's anti-doping rules. Recovery technologies like magnetic therapy beds, compression systems, and cryotherapy are generally permitted. However, athletes should verify current rules with their governing body and consult team physicians.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Recovery Schedule */}
      <section className="py-20 px-6 bg-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-serif text-primary mb-8 text-center">Sample Golf Week Recovery Schedule</h2>
          <div className="grid md:grid-cols-7 gap-4">
            {[
              { day: "Mon", session: "Rest", icon: "😴" },
              { day: "Tue", session: "Pre-round 30min", icon: "⛳" },
              { day: "Wed", session: "Post-round 45min", icon: "🔄" },
              { day: "Thu", session: "Rest", icon: "😴" },
              { day: "Fri", session: "Pre-round 30min", icon: "⛳" },
              { day: "Sat", session: "Post-round 45min", icon: "🔄" },
              { day: "Sun", session: "Restorative 45min", icon: "🧘" }
            ].map((item, i) => (
              <Card key={i} className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-bold text-primary text-sm">{item.day}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.session}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Individual schedules vary. Consult with your therapist to customize a recovery protocol.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Recover Smarter?</h2>
          <p className="text-xl opacity-90 mb-8">
            Experience rotational magnetic therapy at Malaysia's first golf club bio-energetic therapy lounge.
          </p>
          <Button size="lg" className="rounded-full text-lg px-8 bg-accent text-accent-foreground hover:bg-accent/90">
            Book Your Golf Recovery Session <Flag className="ml-2 w-4 h-4" />
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
