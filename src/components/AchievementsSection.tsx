import { useScrollReveal } from "@/hooks/useScrollReveal";

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
      "Maintaining an excellent academic record with a CGPA of 8.8 in Computer Science Engineering at Amity University, Punjab.",
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
  const heading = useScrollReveal({ variant: "fade-up" });

  return (
    <section id="achievements" className="py-20 sm:py-28 lg:py-32">
      <div className="section-container">
        <div ref={heading.ref} style={heading.style}>
          <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-widest">Achievements</span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Milestones & highlights
          </h2>
        </div>

        <div className="mt-10 sm:mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-border">
            <div className="w-full bg-primary/40 animate-timeline-grow" style={{ transformOrigin: "top" }} />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {achievements.map((item, i) => (
              <AchievementItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementItem = ({ item, index }: { item: typeof achievements[0]; index: number }) => {
  const card = useScrollReveal({ variant: "fade-up", delay: index * 120 });

  return (
    <div ref={card.ref} style={card.style} className="relative pl-12 sm:pl-18">
      {/* Timeline dot */}
      <div className="absolute left-3 sm:left-5 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10">
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
      </div>

      <div className="p-4 sm:p-6 rounded-2xl bg-card border border-border hover-lift group transition-all duration-300 hover:border-primary/30" style={{ boxShadow: 'var(--shadow-card)' }}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-lg transition-transform duration-300 group-hover:scale-125 inline-block shrink-0">{item.icon}</span>
              <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base lg:text-lg group-hover:text-primary transition-colors duration-300 break-words">
                {item.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
          <span className="text-xs text-muted-foreground font-medium whitespace-nowrap bg-muted px-2.5 py-1 rounded-full self-start shrink-0">
            {item.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
