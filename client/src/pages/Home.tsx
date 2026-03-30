import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Sparkles, Wind } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold font-bold text-primary tracking-wide">
            DR MAGfield
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
            <a href="#qi-master" className="hover:text-primary transition-colors">
              The Qi Master
            </a>
            <a href="#qi-mini" className="hover:text-primary transition-colors">
              The Qi Mini
            </a>
            <a href="#technology" className="hover:text-primary transition-colors">
              Technology
            </a>
          </div>
          <Button variant="default" className="rounded-full px-6 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            Book Session
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="container relative z-20 px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full text-secondary-foreground text-sm font-medium mb-6 border border-secondary">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Turn Pain into Pure Performance</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-primary tracking-tight">
              Turn Pain into<br />
              <span className="text-accent">Pure Performance.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Experience the fusion of Qi-driven performance technology and proprietary Magnetic Vortex therapy for total body recovery at Kelab Rahman Putra Malaysia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-lg px-8 bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 text-accent-foreground font-semibold">
                Book Your Recovery Session <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-lg px-8 border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 font-medium"
                style={{ borderColor: '#25D366' }}
                asChild
              >
                <a href="https://wa.me/60126595319" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" style={{ color: '#25D366' }} />
                  WhatsApp Arie
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Product 1: Qi Master */}
      <section id="qi-master" className="py-24 md:py-32 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container relative z-10 px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/5] md:aspect-square">
                <img 
                  src="/images/qi-master.webp" 
                  alt="DR MAGfield Qi Master Spinal Care Bed"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm font-medium uppercase tracking-wider">Active Thermal Therapy</span>
                  </div>
                </div>
              </div>
              {/* Floating Feature Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-xs"
              >
                <h4 className="font-bold text-xl text-primary mb-2">Magnetic Vortex</h4>
                <p className="text-sm text-muted-foreground">Proprietary technology that penetrates deep to restore natural energy flow.</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">The Flagship</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                The Qi Master: <br />
                <span className="italic text-muted-foreground">Recharge Your Core.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground mb-8">
                <p>
                  Stress, poor posture, and age compress your spine, blocking your body's natural energy flow (Qi). This blockage is often the root of fatigue, pain, and poor health.
                </p>
                <p>
                  More than a bed, the Qi Master is a daily performance ritual. Lie down, let the warmth melt away tension, and feel the magnetic energy driving your body back into peak alignment.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  "Thermal Decompression melts muscle tension",
                  "Restores natural posture alignment",
                  "Awakens body's innate vitality (Qi)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Book Your Recovery Session <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Concept Explainer: Magnetic Vortex */}
      <section className="py-20 bg-muted text-primary relative overflow-hidden">
        <div className="absolute inset-0" style={{ opacity: 0.06 }}>
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2D3748" strokeWidth="1"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>

        <div className="container relative z-10 px-6 text-center max-w-4xl mx-auto">
          <Wind className="w-12 h-12 mx-auto mb-6 text-accent opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What is Magnetic Vortex Technology?</h2>
          <p className="text-xl md:text-2xl leading-relaxed font-light opacity-90">
            "Imagine a gentle, invisible, spiraling energy field working in perfect harmony with soothing thermal heat. It penetrates deep into your body, creating a non-invasive, revitalizing effect—like a powerful, deep-tissue massage combined with a performance recovery treatment."
          </p>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container px-6">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
            {[
              { value: "100+", label: "Sessions Delivered at KRPM" },
              { value: "3-in-1", label: "Therapy in One Session" },
              { value: "45 min", label: "Average Recovery Session" },
              { value: "100%", label: "Natural, Non-Invasive" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-accent font-semibold">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                quote: "After 18 holes, my lower back used to seize up. One session on the Qi Master and I'm walking the course pain-free the next day. Game-changing.",
                name: "Rajesh M.",
                title: "15-handicap golfer, KL",
              },
              {
                quote: "I was skeptical about magnetic therapy until I tried it here. The difference in my swing recovery is noticeable. I'm sleeping better and training harder.",
                name: "David T.",
                title: "Competitive amateur, Selangor",
              },
              {
                quote: "The atmosphere at KRPM is premium, the team is professional, and the results speak for themselves. My only regret is not finding this sooner.",
                name: "Michelle L.",
                title: "Low-handicap golfer, PJ",
              },
            ].map((t, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <div className="text-accent text-xl mb-4">★★★★★</div>
                <blockquote className="text-card-foreground leading-relaxed mb-6 font-medium">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Treatment Room Photo */}
          <div className="rounded-3xl overflow-hidden aspect-video bg-muted flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-muted-foreground text-sm mb-2">Treatment Room — KRPM Experience Lounge</div>
              <div className="text-xs text-muted-foreground/70">Photo: brand-guideline-product.png</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted relative">
        <div className="container px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">Recovery Plans</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Choose Your Recovery Plan</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Flexible options for every golfer — from single sessions to monthly membership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Single Session */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Single Session</div>
              <div className="text-4xl font-bold text-primary mb-1">RM 150</div>
              <div className="text-sm text-muted-foreground mb-8">per 45-min session</div>
              <ul className="space-y-3 mb-8">
                {["Full Qi Master bed session", "Rotational magnetic therapy", "Thermal + vibration", "Post-session recovery tips"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full rounded-full border-primary/30 text-primary hover:bg-primary/5">
                Book Single Session
              </Button>
            </div>

            {/* Monthly Plan */}
            <div className="bg-card rounded-2xl p-8 border-2 border-accent shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">Monthly Plan</div>
              <div className="text-4xl font-bold text-primary mb-1">RM 450</div>
              <div className="text-sm text-muted-foreground mb-8">4 sessions per month</div>
              <ul className="space-y-3 mb-8">
                {["4 x Qi Master sessions", "Priority booking at KRPM", "Personalized recovery tracking", "WhatsApp support with Arie", "Free recovery assessment"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Start Monthly Plan <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Annual Membership */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Annual Member</div>
              <div className="text-4xl font-bold text-primary mb-1">RM 3,600</div>
              <div className="text-sm text-muted-foreground mb-8">48 sessions over 12 months</div>
              <ul className="space-y-3 mb-8">
                {["48 Qi Master sessions", "Unlimited priority booking", "Free guest passes (4/year)", "Dedicated locker at KRPM", "Annual performance review", "Earliest access to new therapies"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full rounded-full border-primary/30 text-primary hover:bg-primary/5">
                Become a Member
              </Button>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10">
            All sessions at Kelab Rahman Putra Malaysia.{" "}
            <a href="https://wa.me/60126595319" className="text-accent underline hover:no-underline">
              WhatsApp Arie
            </a>{" "}
            to arrange your first session.
          </p>
        </div>
      </section>

      {/* Product 2: Qi Mini */}
      <section id="qi-mini" className="py-24 md:py-32 relative">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Compact Power</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                The Qi Mini: <br />
                <span className="italic text-muted-foreground">Foundation of Vitality.</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Your pelvic floor is the hidden powerhouse of your core. The Qi Mini delivers gentle, rhythmic, and circulating energy waves to this vital area—an effortless, internal workout for your body's foundation.
              </p>

              <Accordion type="single" collapsible className="w-full mb-8">
                <AccordionItem value="item-1" className="border-b-border/50">
                  <AccordionTrigger className="text-lg font-bold text-primary">The Hidden Powerhouse</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Weakness in your pelvic floor can lead to instability and energy drops. The Qi Mini targets this foundational area to restore balance from the bottom up.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b-border/50">
                  <AccordionTrigger className="text-lg font-bold text-primary">Effortless Core Workout</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Just sit and let the Qi Mini do the work. The circulating stimulation helps to tone and strengthen the muscles that support your spine and internal organs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b-border/50">
                  <AccordionTrigger className="text-lg font-bold text-primary">Boost Your Energy (Qi)</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    By improving circulation and strengthening your core foundation, the Qi Mini helps unblock and boost your body's central energy flow.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Order Your Qi Mini Today
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 relative"
            >
              <div className="relative rounded-full aspect-square bg-secondary/20 flex items-center justify-center p-12">
                <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-primary/10" />
                
                <img 
                  src="/images/qi-mini.png" 
                  alt="DR MAGfield Qi Mini"
                  className="w-full h-auto drop-shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Energy Waves Effect */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/10 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust / Footer Section */}
      <footer className="bg-primary text-primary-foreground py-16 border-t border-white/10">
        <div className="container px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold font-bold mb-4">DR MAGfield</div>
              <p className="text-primary-foreground/70 max-w-sm">
                Bridging Qi-driven performance technology with modern science — at Kelab Rahman Putra Malaysia.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#qi-master" className="hover:text-white transition-colors">Qi Master</a></li>
                <li><a href="#qi-mini" className="hover:text-white transition-colors">Qi Mini</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} DR MAGfield. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
