// components/ui/ProjectCard.tsx
export const ProjectCard = ({ title, description, tags }: { title: string, description: string, tags: string[] }) => {
  return (
    <div className="border border-line p-6 hover:border-accent transition-colors duration-300">
      <h3 className="font-display text-xl font-bold text-ink mb-2">{title}</h3>
      <p className="text-muted text-sm mb-4">{description}</p>
      <div className="flex gap-2">
        {tags.map(tag => (
          <span key={tag} className="font-mono text-[10px] uppercase text-accent border border-accent/20 px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};