import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Check, ChevronRight, Layers, LayoutTemplate, Settings, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary flex items-center justify-center">
              <span className="font-heading font-bold text-primary-foreground text-xl">C</span>
            </div>
            <span className="font-heading font-bold text-lg tracking-tight">castel.solutions</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#philosophy" className="hover:text-primary transition-colors">Philosophy</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#approach" className="hover:text-primary transition-colors">Approach</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="default" className="font-mono text-xs tracking-wider uppercase rounded-none">
            Book Audit
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center border-b border-border overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-architecture.jpg" 
              alt="Brutalist Architecture" 
              className="w-full h-full object-cover opacity-20 grayscale sepia-[.3]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>

          <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20 pb-32">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 border border-border px-3 py-1 bg-background/50 backdrop-blur-sm">
                <span className="w-2 h-2 bg-accent"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">RevOps Architects for Scale</span>
              </div>
              
              <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight text-primary">
                Architect<span className="text-accent">ING</span><br />
                Outcomes.
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed border-l-2 border-accent pl-6">
                From <span className="font-bold text-foreground">PROblems</span> to <span className="font-bold text-foreground">PROfit</span>. We design, audit, and rebuild the systems behind your business so growth becomes predictable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="rounded-none text-base px-8 h-14 bg-primary hover:bg-primary/90">
                  Start Architecture
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-none text-base px-8 h-14 border-primary text-primary hover:bg-primary/5">
                  View Case Studies
                </Button>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative aspect-square max-w-md mx-auto border border-border bg-background p-4 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-700">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent"></div>
                <img 
                  src="/images/blueprint-abstract.jpg" 
                  alt="System Blueprint" 
                  className="w-full h-full object-cover border border-border grayscale contrast-125"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-background/90 border-t border-border p-4 font-mono text-xs">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">FIG 1.0</span>
                    <span>SYSTEM_AUDIT_V1</span>
                  </div>
                  <div className="h-1 w-full bg-muted overflow-hidden">
                    <div className="h-full bg-accent w-[72%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-24 bg-muted/30 border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-6">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  Growth Exposes Everything.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Most businesses don't fail because of bad ideas. They fail because systems don't scale, operations leak value, and growth outpaces structure.
                </p>
                <div className="p-6 bg-background border border-border border-l-4 border-l-destructive">
                  <p className="font-heading font-bold text-lg mb-2">The Founder Reality</p>
                  <p className="text-sm text-muted-foreground">Revenue grows. Complexity explodes. Profit shrinks.</p>
                </div>
              </div>
              
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Broken Workflows", desc: "Processes that rely on 'heroics' instead of design." },
                  { title: "Redundant Tools", desc: "Tech stacks that add friction rather than flow." },
                  { title: "Manual Processes", desc: "High-error tasks that consume valuable talent." },
                  { title: "Misaligned Teams", desc: "Silos that prevent cross-functional execution." }
                ].map((item, i) => (
                  <Card key={i} className="rounded-none border-border bg-background hover:border-accent transition-colors duration-300 group">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-muted-foreground group-hover:text-accent transition-colors">
                        <span className="text-xs">0{i + 1}</span>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-heading text-xl font-medium text-primary">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="py-24 border-b border-border relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-muted/20 -skew-x-12 transform origin-top-right"></div>
          
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">Our Philosophy</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">Organize First. Then Scale.</h2>
              <p className="text-xl text-muted-foreground">We don't start with tools. We start with architecture.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: LayoutTemplate, 
                  title: "Architecture before Acceleration", 
                  text: "Building the structural integrity required to support weight before adding load." 
                },
                { 
                  icon: Layers, 
                  title: "Systems over Heroics", 
                  text: "Replacing individual dependency with reliable, repeatable process design." 
                },
                { 
                  icon: Check, 
                  title: "Execution over Decks", 
                  text: "We don't deliver slideware. We deliver implemented, working outcomes." 
                }
              ].map((feature, i) => (
                <div key={i} className="relative p-8 border border-border bg-background group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <feature.icon className="w-10 h-10 text-accent mb-6 stroke-1" />
                  <h3 className="font-heading text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-primary text-primary-foreground relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/images/detail-stone.jpg")', backgroundSize: 'cover' }}></div>
          
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-primary-foreground/20 pb-8">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
                <p className="text-primary-foreground/70 max-w-md">At the intersection of Strategy, Operations, and Automation.</p>
              </div>
              <div className="hidden md:block font-mono text-sm opacity-50">
                // SERVICES_LIST_V2.0
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  title: "Systems & Infrastructure Audit",
                  items: ["Tools & Tech Stack Analysis", "Process Flow Mapping", "Data Health Check", "Redundancy Identification"],
                  desc: "A deep diagnostic to create a clear roadmap to simplification and scale."
                },
                {
                  title: "Business Process Automation",
                  items: ["Identify Repetitive Tasks", "High-Error Task Elimination", "Bottleneck Removal", "Implementation that Sticks"],
                  desc: "Manual work is expensive. We design automation that supports human talent."
                },
                {
                  title: "Marketing Operations",
                  items: ["Lead Flow Alignment", "CRM System Optimization", "Attribution Reporting", "Funnel Performance"],
                  desc: "Marketing without operations is noise. We ensure your systems capture value."
                },
                {
                  title: "Strategic Pressure-Testing",
                  items: ["Operational Readiness", "Growth Assumption Testing", "Organizational Design", "Reality-Check Strategy"],
                  desc: "Ensuring your strategy survives contact with reality."
                }
              ].map((service, i) => (
                <div key={i} className="group">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="font-heading text-2xl font-bold">{service.title}</h3>
                    <span className="font-mono text-xs opacity-50">0{i+1}</span>
                  </div>
                  <p className="text-primary-foreground/80 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-3 border-l border-primary-foreground/20 pl-6">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm font-medium">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-32 bg-background border-t border-border">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8 p-4 border border-border bg-muted/30 rotate-2">
              <span className="font-mono text-sm font-bold text-primary uppercase tracking-widest">Outcome &gt; Activity</span>
            </div>
            
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">
              Ready to move from <br/>
              <span className="text-muted-foreground line-through decoration-accent decoration-2">PROblems</span> to <span className="text-accent">PROfit</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's architect outcomes—not just ideas. Book a consultation to see if your foundation is ready for scale.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="h-16 px-10 text-lg rounded-none bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all">
                Book an Appointment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-none border-2 hover:bg-muted">
                Explore Services
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-16 border-t border-primary-foreground/10">
        <div className="container grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-6 w-6 bg-accent flex items-center justify-center">
                <span className="font-heading font-bold text-primary text-sm">C</span>
              </div>
              <span className="font-heading font-bold text-lg tracking-tight">castel.solutions</span>
            </div>
            <p className="text-primary-foreground/60 max-w-sm leading-relaxed">
              Operations Architects designing, systemizing, and implementing the operational backbone required for growth.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-6 opacity-70">Sitemap</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-6 opacity-70">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="container mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40 font-mono">
          <p>&copy; {new Date().getFullYear()} castel.solutions. All rights reserved.</p>
          <p>Architected in 2025.</p>
        </div>
      </footer>
    </div>
  );
}
