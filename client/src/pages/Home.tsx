import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Sparkles, Zap, Users, Heart, Shield, Send } from "lucide-react";
import { useRef } from "react";

// BMW Wellness Supabase asset URLs
const BMW_ASSETS = {
  heroImage: "https://wlwzfjlvwaosonorsvyf.supabase.co/storage/v1/object/public/brand-assets/bmw-wellness/bmw-experience-1.jpg",
  experience2: "https://wlwzfjlvwaosonorsvyf.supabase.co/storage/v1/object/public/brand-assets/bmw-wellness/bmw-experience-2.jpg",
  experience3: "https://wlwzfjlvwaosonorsvyf.supabase.co/storage/v1/object/public/brand-assets/bmw-wellness/bmw-experience-3.jpg",
  logo: "https://wlwzfjlvwaosonorsvyf.supabase.co/storage/v1/object/public/brand-assets/bmw-wellness/logo.png",
};

// WhatsApp click-to-chat link
const WHATSAPP_LINK = "https://wa.me/601170321128?text=Hi%20Amanda,%20I%20am%20interested%20in%20BMW%20Wellness%20and%20would%20like%20to%20book%20a%20session.";
const TELEGRAM_LINK = "https://t.me/BMW_Wellness_Bot";

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
          <div className="flex items-center gap-3">
            <img src={BMW_ASSETS.logo} alt="BMW Wellness" className="h-10 w-auto" />
            <div className="text-xl font-bold text-primary tracking-wide">
              BMW Wellness
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
            <a href="#capsule" className="hover:text-accent transition-colors">
              12-in-1 Capsule
            </a>
            <a href="#services" className="hover:text-accent transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
          <Button
            variant="default"
            className="rounded-full px-6 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Book Session
            </a>
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
          <img
            src={BMW_ASSETS.heroImage}
            alt="BMW Wellness 12-in-1 Bio-Physics Energy Capsule Chamber"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-primary/60 z-5" />
        </motion.div>

        <div className="container relative z-20 px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-accent text-sm font-medium mb-6 border border-accent/30">
              <Sparkles className="w-4 h-4" />
              <span>For Seniors Who Want to Feel Younger</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-primary-foreground tracking-tight">
              Restore Your Energy.<br />
              <span className="text-secondary">Ease Your Pain.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-lg">
              The 12-in-1 Bio-Physics Energy Capsule Chamber — designed for seniors who want to feel younger, reduce chronic pain, and reclaim their vitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full text-lg px-8 bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 text-accent-foreground font-semibold"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Experience the Capsule <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-lg px-8 border-secondary/40 text-secondary hover:bg-secondary/10 font-medium bg-transparent"
                asChild
              >
                <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                  <Send className="w-4 h-4 mr-2" />
                  Chat with BMW AI
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/50"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* 12-in-1 Capsule Feature Section */}
      <section id="capsule" className="py-24 md:py-32 relative overflow-hidden bg-muted">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4 z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

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
                  src={BMW_ASSETS.experience2}
                  alt="BMW Wellness 12-in-1 Bio-Physics Energy Capsule Chamber"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm font-medium uppercase tracking-wider">9 Advanced Technologies</span>
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
                <h4 className="font-bold text-xl text-primary mb-2">12-in-1 Technology</h4>
                <p className="text-sm text-muted-foreground">Comprehensive bio-physics energy therapy in one session.</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Flagship Technology</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                12-in-1 Bio-Physics<br />
                <span className="italic text-muted-foreground">Energy Capsule Chamber</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground mb-8">
                <p>
                  Designed specifically for seniors experiencing chronic pain, low energy, or recovering from illness. Our 12-in-1 chamber combines 9 cutting-edge bio-physics technologies to restore your body&apos;s natural energy flow.
                </p>
              </div>

              {/* 9 Technologies Grid */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { icon: Zap, name: "Magnetic Vortex" },
                  { icon: Sparkles, name: "Negative Ions" },
                  { icon: Shield, name: "Magnetism" },
                  { icon: Heart, name: "Brain Wave Entrainment" },
                  { icon: Zap, name: "Far Infrared" },
                  { icon: Shield, name: "Jade Energy Stone" },
                  { icon: Zap, name: "Mono Light Therapy" },
                  { icon: Zap, name: "Graphene Conduction" },
                  { icon: Shield, name: "Ozone Sterilization" },
                ].map((tech, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-3 bg-card rounded-xl border border-border/50">
                    <tech.icon className="w-6 h-6 text-accent mb-2" />
                    <span className="text-xs font-medium text-foreground/80">{tech.name}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Book Your Session <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0" style={{ opacity: 0.05 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative z-10 px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Benefits from the 12-in-1 Capsule?</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Specifically designed for seniors seeking preventive wellness and natural recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, title: "Chronic Pain", desc: "Natural pain relief without medication" },
              { icon: Zap, title: "Low Energy", desc: "Restore vitality and daily energy" },
              { icon: Heart, title: "Post-Illness Recovery", desc: "Support your body after illness" },
              { icon: Shield, title: "Preventive Wellness", desc: "Maintain health as you age" },
            ].map((benefit, i) => (
              <div key={i} className="space-y-4 p-6">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-xl">{benefit.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background relative overflow-hidden">
        <div className="container px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Experience BMW Wellness</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Professional bio-physics energy therapy services for your health and wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Service 1: 12-in-1 Capsule */}
            <Card className="overflow-hidden border-2 border-accent/30 hover:border-accent/50 transition-colors">
              <div className="aspect-video overflow-hidden">
                <img
                  src={BMW_ASSETS.experience3}
                  alt="12-in-1 Bio-Physics Energy Capsule Chamber"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-semibold text-accent uppercase tracking-wide">Flagship</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">12-in-1 Energy Capsule Chamber</h3>
                <p className="text-muted-foreground mb-6">
                  Our signature treatment combining 9 bio-physics technologies for comprehensive wellness. 60 minutes of deep therapeutic energy restoration.
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-primary">RM 80</span>
                  <span className="text-muted-foreground">from per session</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "9 advanced bio-physics technologies",
                    "60-minute full session",
                    "Personalized wellness consultation",
                    "Post-session recovery guidance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Book Capsule Session <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Service 2: Bio-resonance Scan */}
            <Card className="overflow-hidden border-2 border-secondary/30 hover:border-secondary/50 transition-colors">
              <div className="aspect-video overflow-hidden bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <span className="text-muted-foreground text-sm">Bio-Resonance Scan Technology</span>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                  <span className="text-sm font-semibold text-secondary uppercase tracking-wide">Wellness Assessment</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Bio-Resonance Scan + Treatment</h3>
                <p className="text-muted-foreground mb-6">
                  Advanced body energy scanning to identify imbalances, followed by targeted treatment. First visit complimentary with any session booking.
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-primary">FREE</span>
                  <span className="text-muted-foreground">first scan (45 min)</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "Comprehensive energy scan",
                    "Personalized treatment plan",
                    "Expert wellness consultation",
                    "Follow-up recommendations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-secondary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-secondary/30 text-secondary hover:bg-secondary/10 font-semibold"
                  asChild
                >
                  <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                    Book Bio-Resonance Scan <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted relative overflow-hidden">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                美康养身<br />
                <span className="text-muted-foreground">Beauty Meridian Wellness</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground mb-8">
                <p>
                  BMW Wellness is a social health center dedicated to helping seniors restore their vitality through advanced bio-physics energy therapy. Our 12-in-1 Bio-Physics Energy Capsule Chamber represents the latest in non-invasive wellness technology.
                </p>
                <p>
                  We believe in preventive healthcare — addressing health concerns before they become serious issues. Our approach combines ancient wisdom with modern science to deliver gentle, effective treatments for seniors.
                </p>
              </div>

              <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border/50">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">BMW AI Assistant</h4>
                  <p className="text-sm text-muted-foreground">
                    Amanda&apos;s cloned voice, powered by Longevity Valley Agentic Commerce — available 24/7 to answer your questions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={BMW_ASSETS.heroImage}
                  alt="BMW Wellness Center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-sm font-medium uppercase tracking-wider mb-1">Social Health Center for Seniors</div>
                  <div className="text-lg font-bold">Preventive Wellness · Energy Medicine</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-primary-foreground/70 text-lg mb-8">
                Ready to experience the 12-in-1 Bio-Physics Energy Capsule? Contact us today to book your session or learn more about our services.
              </p>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="font-bold">WhatsApp</h4>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/70 hover:text-[#25D366] transition-colors"
                    >
                      011 703 21128
                    </a>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0088cc]/20 flex items-center justify-center">
                    <Send className="w-6 h-6 text-[#0088cc]" />
                  </div>
                  <div>
                    <h4 className="font-bold">Telegram</h4>
                    <a
                      href={TELEGRAM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/70 hover:text-[#0088cc] transition-colors"
                    >
                      @BMW_Wellness_Bot
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-primary-foreground/70">
                      11, Jalan 4/92B, Taman Kobena<br />
                      Cheras, Malaysia
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button
                  size="lg"
                  className="rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold"
                  asChild
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    WhatsApp Amanda
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold bg-transparent"
                  asChild
                >
                  <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                    <Send className="mr-2 w-4 h-4" />
                    Chat on Telegram
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-card rounded-3xl overflow-hidden aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-primary text-xl mb-2">Visit Us</h4>
                  <p className="text-muted-foreground mb-4">
                    11, Jalan 4/92B<br />
                    Taman Kobena, Cheras<br />
                    Malaysia
                  </p>
                  <a
                    href="https://maps.google.com/?q=Taman+Kobena+Cheras+Malaysia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline text-sm"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-foreground text-primary py-12 border-t border-border/10">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={BMW_ASSETS.logo} alt="BMW Wellness" className="h-8 w-auto brightness-0" />
              <div className="text-lg font-bold">BMW Wellness</div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-primary/60 text-sm">
                美康养身 Beauty Meridian Wellness — Social Health Center for Seniors
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-[#25D366] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-[#0088cc] transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-primary/10 text-center text-primary/40 text-sm">
            © {new Date().getFullYear()} BMW Wellness. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
