import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cpu, MapPin, Users, Globe } from "lucide-react";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DR MAGfield",
  "url": "https://drmagfield.longevityvalley.ai",
  "logo": "https://drmagfield.longevityvalley.ai/logo.png",
  "description": "Malaysia's first golf club bio-energetic therapy lounge specializing in rotational magnetic therapy (旋磁疗法) at Kelab Rahman Putra Malaysia.",
  "address": {
    "@type": "PostalAddress",
    "name": "Kelab Rahman Putra Malaysia",
    "addressLocality": "Kuala Lumpur",
    "addressCountry": "MY"
  },
  "founder": {
    "@type": "Person",
    "name": "Dr MAGfield"
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

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
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">About</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              DR MAGfield
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Malaysia's first golf club bio-energetic therapy lounge. Bridging Qi-driven performance technology with modern science at Kelab Rahman Putra Malaysia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8">Who We Are</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              DR MAGfield exists at the intersection of Qi-driven performance technology and modern science. Founded by Dr MAGfield and Arie, we opened Malaysia's first golf club bio-energetic therapy lounge at Kelab Rahman Putra Malaysia (KRPM) — a space designed for athletes and active individuals who take their recovery as seriously as their training.
            </p>
            <p>
              We believe pain-free movement is a competitive edge. That recovery is not a luxury — it's part of the game. That technology should work with the body's natural rhythms, not against them.
            </p>
            <p>
              Our tagline — <em>Turn Pain into Pure Performance</em> — captures what we do: we help athletes, golfers, and active individuals move better, recover faster, and perform at their best.
            </p>
          </div>
        </div>
      </section>

      {/* Professor Wang Shijie */}
      <section className="py-20 px-6 bg-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8">Our Technology</h2>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Professor Wang Shijie</h3>
                  <p className="text-accent font-medium mb-4">Inventor, Rotational Magnetic Therapy (旋磁疗法)</p>
                  <div className="prose prose-sm text-muted-foreground space-y-3">
                    <p>
                      Professor Wang Shijie developed rotational magnetic therapy with a specific goal: help the body recover its natural energy balance through magnetic field rotation.
                    </p>
                    <p>
                      His research established new protocols for non-invasive recovery enhancement. Unlike many wellness technologies that emerge from clinical settings, Professor Wang's work was specifically designed for <strong>performance athletes</strong> — people who push their bodies and need to recover just as hard.
                    </p>
                    <p>
                      The technology — 旋磁疗法 — uses continuously rotating magnetic fields combined with thermal therapy and gentle vibration to address recovery at a systemic level. This is <strong>not PEMF</strong>. Different mechanism. Different story. Different target user.
                    </p>
                    <p>
                      When Dr MAGfield and Arie were looking for the right technology to power Malaysia's first golf club performance recovery lounge, they chose Professor Wang Shijie's rotational magnetic system — because it was built for athletes, not patients.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8">Where to Find Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Experience Lounge</h3>
                    <p className="text-muted-foreground">
                      Kelab Rahman Putra Malaysia (KRPM)<br />
                      Kuala Lumpur, Malaysia
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Malaysia's first golf club bio-energetic therapy lounge
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Who We Serve</h3>
                    <p className="text-muted-foreground">
                      Athletes, golfers, and active individuals who want to perform at their best. Performance over medical. Pain-free movement is your competitive edge.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Cpu className="w-8 h-8" />, title: "Technology With Purpose", desc: "Every technology we use must genuinely support human performance — not just generate claims." },
              { icon: <Globe className="w-8 h-8" />, title: "Bridging Traditions", desc: "Ancient Qi wisdom meets modern Magnetic Vortex science — both have value, together they work better." },
              { icon: <Users className="w-8 h-8" />, title: "Athletes First", desc: "We are here for people who move. Golfers, runners, active individuals who take recovery seriously." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4 mx-auto">
                  <div className="text-accent">{item.icon}</div>
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-accent text-accent-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl opacity-90 mb-8">
            Book your first rotational magnetic therapy session at DR MAGfield, Kelab Rahman Putra Malaysia.
          </p>
          <Button size="lg" className="rounded-full text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90">
            Book Your Session
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
