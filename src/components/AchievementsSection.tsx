const achievements = [
  {
    title: "Amazon Clone Project",
    description:
      "Built a full Amazon clone from scratch as the first milestone in the Full Stack Web Development journey, demonstrating proficiency in frontend architecture and responsive design.",
    date: "2025",
    icon: "🚀",
  },
  {
    title: "85+ GitHub Contributions",
    description:
      "Consistently contributing to open-source and personal projects, maintaining an active development presence with 85+ contributions in the past year.",
    date: "2025–2026",
    icon: "💻",
  },
  {
    title: "CGPA 8.8 in B.Tech CSE",
    description:
      "Maintaining an excellent academic record with a CGPA of 8.8 in Computer Science Engineering at MT University, Punjab.",
    date: "Ongoing",
    icon: "🎓",
  },
  {
    title: "Barrel Network Project",
    description:
      "Developed Barrel Network, a TypeScript-based project showcasing modern development practices and collaborative coding skills.",
    date: "2026",
    icon: "⚡",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Achievements</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Milestones & highlights
          </h2>
        </div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {achievements.map((item, i) => (
              <div key={i} className="section-reveal relative pl-16 sm:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-6 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="p-6 rounded-2xl bg-card border border-border hover-lift" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        <h3 className="font-heading font-semibold text-foreground text-base sm:text-lg">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap bg-muted px-2.5 py-1 rounded-full">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
