import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const posts = [
  {
    title: "Designing a Scalable Full-Stack Architecture from Day One",
    excerpt:
      "A practical guide to structuring React and Node.js applications for long-term maintainability, from API boundaries to deployment workflows.",
    date: "Feb 2026",
    readTime: "7 min read",
    tags: ["Architecture", "React", "Node.js"],
    href: "#",
  },
  {
    title: "From REST to Real-Time: Building Event-Driven Features",
    excerpt:
      "How to add real-time collaboration to a full-stack product using WebSockets, background jobs, and resilient data modeling.",
    date: "Jan 2026",
    readTime: "6 min read",
    tags: ["Full-Stack", "WebSockets", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Shipping Faster with CI/CD and Feature Flags",
    excerpt:
      "Lessons learned implementing CI pipelines, preview environments, and feature flag strategies that reduce risk while improving release velocity.",
    date: "Dec 2025",
    readTime: "8 min read",
    tags: ["DevOps", "CI/CD", "Engineering"],
    href: "#",
  },
];

export function Blog() {
  return (
    <section id="writing" className="py-16 md:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-primary mb-3 text-center">
              Writing
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
              Technical Articles
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
              I share practical insights from building full-stack products, improving
              team workflows, and shipping reliable software.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <ScrollReveal key={post.title} delay={300 + index * 100}>
                <article className="h-full p-6 rounded-lg bg-background border border-border hover-lift flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-foreground/60 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted text-foreground/80 rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={post.href}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                    aria-label={`Read article: ${post.title}`}>
                    Read article
                    <ArrowUpRight size={16} />
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
