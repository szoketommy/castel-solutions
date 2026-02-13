import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Layers, Ruler, Settings, Zap, MousePointer2, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-draw-in");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".draw-trigger").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-primary/20">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/116991139/XiSBzPTGKXMZJIKP.jpg" alt="Castel Solutions" className="w-8 h-8" />
            <span className="font-heading font-bold text-xl tracking-tight">CASTEL.SOLUTIONS</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {["Philosophy", "Services", "Approach", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider">
                {item}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button variant="outline" className="rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono text-xs uppercase tracking-widest">
              Book Audit
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
            {["Philosophy", "Services", "Approach", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium hover:text-primary transition-colors uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="w-full rounded-none bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest h-12">
              Book Audit
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-border">
          {/* Technical Grid Lines - Animated */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-full h-px bg-border/50 origin-left animate-[grow-x_1.5s_ease-out_forwards]"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-border/50 origin-right animate-[grow-x_1.5s_ease-out_0.5s_forwards]"></div>
            <div className="absolute top-0 left-1/4 w-px h-full bg-border/50 origin-top animate-[grow-y_1.5s_ease-out_0.2s_forwards]"></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-border/50 origin-bottom animate-[grow-y_1.5s_ease-out_0.7s_forwards]"></div>
            
            {/* Measurement Markers */}
            <div className="absolute top-1/4 left-4 font-mono text-[10px] text-muted-foreground animate-fade-in opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">ELEVATION: 1200</div>
            <div className="absolute bottom-4 right-1/4 font-mono text-[10px] text-muted-foreground animate-fade-in opacity-0 [animation-delay:1.2s] [animation-fill-mode:forwards]">SCALE: 1:100</div>
          </div>

          <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 border border-primary/30 px-3 py-1 bg-background/50 backdrop-blur-sm">
                <span className="w-2 h-2 bg-primary"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">RevOps Architects for Scale</span>
              </div>
              
              <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight text-foreground">
                ARCHITECTING <br/>
                <span className="text-primary italic">OUTCOMES.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed border-l-2 border-primary/20 pl-6">
                From <strong className="text-foreground">PROblems</strong> to <strong className="text-foreground">PROfit</strong>. We design, audit, and rebuild the systems behind your business so growth becomes predictable.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs uppercase tracking-widest h-12 px-8 border-2 border-transparent">
                  Start Architecture <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-none border-2 border-foreground/20 hover:border-primary hover:text-primary font-mono text-xs uppercase tracking-widest h-12 px-8 bg-transparent">
                  View Case Studies
                </Button>
              </div>

              <div className="pt-8 flex items-center gap-8 text-xs font-mono text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 border border-current"></div>
                  <span>SYSTEM_AUDIT_V1</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 border border-current rounded-full"></div>
                  <span>STATUS: ONLINE</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center group perspective-1000">
              {/* Architectural Sketch Image */}
              <div className="relative w-full h-full transition-transform duration-700 ease-out transform group-hover:scale-[1.02]">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/116991139/FxQwJDHxDzlKUvoR.png" 
                  alt="Architectural Sketch" 
                  className="w-full h-full object-contain mix-blend-multiply opacity-90"
                />
                
                {/* Interactive Hotspots - Tap supported */}
                <div 
                  className="absolute top-[35%] left-[45%] w-24 h-24 cursor-pointer z-20 group/hotspot"
                  onMouseEnter={() => setActiveHotspot("foundation")}
                  onMouseLeave={() => setActiveHotspot(null)}
                  onClick={() => setActiveHotspot(activeHotspot === "foundation" ? null : "foundation")}
                >
                  <div className={`absolute inset-0 border rounded-full transition-all duration-300 animate-pulse-slow ${activeHotspot === "foundation" ? "border-primary bg-primary/10" : "border-primary/0 group-hover/hotspot:border-primary/50"}`}></div>
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-primary text-primary-foreground text-[10px] px-2 py-1 transition-opacity whitespace-nowrap font-mono uppercase tracking-wider ${activeHotspot === "foundation" ? "opacity-100" : "opacity-0 group-hover/hotspot:opacity-100"}`}>
                    Foundation: System Audit
                  </div>
                </div>

                <div 
                  className="absolute top-[15%] right-[30%] w-20 h-20 cursor-pointer z-20 group/hotspot"
                  onMouseEnter={() => setActiveHotspot("structure")}
                  onMouseLeave={() => setActiveHotspot(null)}
                  onClick={() => setActiveHotspot(activeHotspot === "structure" ? null : "structure")}
                >
                  <div className={`absolute inset-0 border rounded-full transition-all duration-300 animate-pulse-slow ${activeHotspot === "structure" ? "border-primary bg-primary/10" : "border-primary/0 group-hover/hotspot:border-primary/50"}`}></div>
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-primary text-primary-foreground text-[10px] px-2 py-1 transition-opacity whitespace-nowrap font-mono uppercase tracking-wider ${activeHotspot === "structure" ? "opacity-100" : "opacity-0 group-hover/hotspot:opacity-100"}`}>
                    Structure: Process Engineering
                  </div>
                </div>

                <div 
                  className="absolute bottom-[20%] left-[20%] w-28 h-16 cursor-pointer z-20 group/hotspot"
                  onMouseEnter={() => setActiveHotspot("scale")}
                  onMouseLeave={() => setActiveHotspot(null)}
                  onClick={() => setActiveHotspot(activeHotspot === "scale" ? null : "scale")}
                >
                  <div className={`absolute inset-0 border rounded-full transition-all duration-300 animate-pulse-slow ${activeHotspot === "scale" ? "border-primary bg-primary/10" : "border-primary/0 group-hover/hotspot:border-primary/50"}`}></div>
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-primary text-primary-foreground text-[10px] px-2 py-1 transition-opacity whitespace-nowrap font-mono uppercase tracking-wider ${activeHotspot === "scale" ? "opacity-100" : "opacity-0 group-hover/hotspot:opacity-100"}`}>
                    Scale: Growth Modeling
                  </div>
                </div>

                {/* Floating Annotations - Dynamic based on hover */}
                <div className={`absolute top-[20%] right-[10%] bg-background border border-primary/50 p-2 shadow-sm max-w-[150px] transition-all duration-300 ${activeHotspot === 'structure' ? 'scale-110 border-primary bg-primary/5' : ''}`}>
                  <div className="text-[10px] font-mono text-muted-foreground mb-1">EFFICIENCY</div>
                  <div className="text-xl font-bold text-primary">85%</div>
                </div>
                
                <div className={`absolute bottom-[30%] left-[10%] bg-background border border-primary/50 p-2 shadow-sm max-w-[150px] transition-all duration-300 ${activeHotspot === 'scale' ? 'scale-110 border-primary bg-primary/5' : ''}`}>
                  <div className="text-[10px] font-mono text-muted-foreground mb-1">GROWTH_RATE</div>
                  <div className="text-xl font-bold text-primary">+40%</div>
                </div>

                {/* Decorative Lines connecting annotations */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                  <line x1="80%" y1="25%" x2="60%" y2="40%" stroke="currentColor" className="text-primary/30" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="20%" y1="65%" x2="40%" y2="50%" stroke="currentColor" className="text-primary/30" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Dynamic connection lines */}
                  <line x1="50%" y1="40%" x2="20%" y2="65%" stroke="currentColor" className={`text-primary transition-all duration-300 ${activeHotspot === 'foundation' ? 'opacity-100 stroke-2' : 'opacity-0'}`} />
                  <line x1="70%" y1="20%" x2="80%" y2="25%" stroke="currentColor" className={`text-primary transition-all duration-300 ${activeHotspot === 'structure' ? 'opacity-100 stroke-2' : 'opacity-0'}`} />
                </svg>
                
                {/* Hover/Tap Instruction */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-mono text-muted-foreground bg-background/80 px-3 py-1 rounded-full border border-border/50 backdrop-blur-sm animate-bounce-slow whitespace-nowrap">
                  <MousePointer2 className="w-3 h-3" />
                  <span className="hidden md:inline">EXPLORE BLUEPRINT</span>
                  <span className="md:hidden">TAP TO EXPLORE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="py-24 border-b border-border bg-background/50">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="font-heading text-3xl font-bold mb-4">THE BLUEPRINT</h2>
                <div className="w-12 h-1 bg-primary mb-6"></div>
                <p className="text-muted-foreground">
                  We don't just fix problems; we re-engineer the foundation. Our philosophy is rooted in the belief that sustainable growth requires structural integrity.
                </p>
              </div>
              <div className="md:col-span-8 grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Structural Integrity", desc: "Building systems that withstand the pressure of scaling." },
                  { title: "Raw Materiality", desc: "Using data as the raw material for decision making." },
                  { title: "Information Density", desc: "Clear, concise communication channels that eliminate noise." },
                  { title: "Timeless Design", desc: "Processes that adapt and endure market shifts." }
                ].map((item, i) => (
                  <div key={i} className="draw-trigger border border-border p-6 hover:border-primary transition-colors group relative overflow-hidden opacity-0 translate-y-4 transition-all duration-700 ease-out">
                    <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                      <Ruler className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <div className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">Capabilities</div>
                <h2 className="font-heading text-4xl font-bold">OPERATIONAL ARCHITECTURE</h2>
              </div>
              <Button variant="outline" className="rounded-none border-foreground hover:bg-foreground hover:text-background font-mono text-xs uppercase tracking-widest">
                Full Service List
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
              {[
                { icon: Layers, title: "System Audit", desc: "Deep dive analysis of your current operational infrastructure." },
                { icon: Settings, title: "Process Engineering", desc: "Designing efficient workflows that minimize friction." },
                { icon: BarChart3, title: "Growth Modeling", desc: "Predictive analytics to forecast and prepare for scale." },
                { icon: Zap, title: "Automation", desc: "Replacing manual redundancy with intelligent automated systems." },
                { icon: Ruler, title: "Standardization", desc: "Creating the playbook for consistent, high-quality output." },
                { icon: Layers, title: "Tech Stack Optimization", desc: "Aligning your tools to work as a cohesive ecosystem." }
              ].map((service, i) => (
                <div key={i} className="draw-trigger bg-background p-8 hover:bg-accent/10 transition-colors group opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{ transitionDelay: `${i * 100}ms` }}>
                  <service.icon className="w-8 h-8 text-muted-foreground mb-6 group-hover:text-primary transition-colors" />
                  <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-foreground text-background relative overflow-hidden">
          {/* Abstract Blueprint Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg width="100%" height="100%">
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
               </pattern>
               <rect width="100%" height="100%" fill="url(#grid)" />
             </svg>
          </div>

          <div className="container relative z-10 text-center">
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">READY TO REBUILD?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Stop patching cracks. Start building a fortress. Let's architect a system that scales with your ambition.
            </p>
            <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-sm uppercase tracking-widest h-14 px-10">
              Schedule Your Blueprint Session
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 bg-background text-sm">
        <div className="container grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 border border-primary flex items-center justify-center">
                <span className="font-heading font-bold text-xs text-primary">C</span>
              </div>
              <span className="font-heading font-bold tracking-tight">CASTEL.SOLUTIONS</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Operations Architecture & Systemization for high-growth enterprises.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-xs">Sitemap</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#philosophy" className="hover:text-primary">Philosophy</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/50 flex justify-between items-center text-xs text-muted-foreground font-mono">
          <p>&copy; 2024 CASTEL.SOLUTIONS. ALL RIGHTS RESERVED.</p>
          <p>EST. 2024 // V0.1</p>
        </div>
      </footer>
    </div>
  );
}
