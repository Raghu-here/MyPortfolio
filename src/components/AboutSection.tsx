const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">About</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Who I am
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-5 gap-12 items-center">
          {/* Profile placeholder */}
          <div className="md:col-span-2 section-reveal flex justify-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-muted flex items-center justify-center border border-border overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="text-center">
                <span className="font-heading text-6xl font-bold gradient-text">RS</span>
                <p className="text-sm text-muted-foreground mt-2">Raghuraj Singh</p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="md:col-span-3 section-reveal space-y-5">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Hi, I'm <span className="text-foreground font-semibold">Raghu</span> — an aspiring Full Stack Developer and B.Tech Computer Science Engineering student at MT University, Punjab. I'm passionate about building clean, responsive web applications and continuously expanding my technical skillset.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Currently focused on mastering modern web development, I enjoy working with HTML, CSS, Python, and C/C++. I believe in writing clean code, thoughtful UI design, and solving real-world problems through technology.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and working on creative side projects that push my boundaries as a developer.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Web Development", "Problem Solving", "Clean Code", "UI/UX"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
