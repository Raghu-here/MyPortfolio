const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Subtle decorative circles */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 pt-16">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Available for opportunities
          </span>
        </div>

        <h1 className="animate-fade-in-up-delay-1 font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
          Raghuraj Singh
        </h1>

        <p className="animate-fade-in-up-delay-2 mt-4 text-xl sm:text-2xl font-heading font-medium text-muted-foreground">
          Computer Science Engineering Student
        </p>

        <p className="animate-fade-in-up-delay-2 mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Aspiring Full Stack Developer currently mastering modern web technologies.
          Passionate about building responsive, user-centric web applications and
          exploring the frontiers of software engineering.
        </p>

        <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:raghurajsingh152007@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ boxShadow: 'var(--shadow-button)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </a>
          <a
            href="tel:+919817679706"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-card text-foreground font-medium text-sm border border-border transition-all duration-300 hover:border-primary hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
