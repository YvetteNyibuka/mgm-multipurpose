interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 px-4 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
