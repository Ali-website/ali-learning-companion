
import { Image } from 'lucide-react';

const FeatureCard = ({ 
  title, 
  description, 
  index 
}: { 
  title: string; 
  description: string; 
  index: number;
}) => {
  return (
    <div 
      className="flex flex-col items-center p-6 rounded-xl glass-card hover:shadow-lg transition-all transform hover:-translate-y-1 group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="mb-4 w-full aspect-square max-w-[180px] bg-black/20 dark:bg-white/10 rounded-full flex items-center justify-center border border-primary/20 overflow-hidden group-hover:border-primary/50 transition-colors">
        <Image className="w-12 h-12 text-primary/50 group-hover:text-primary transition-colors" />
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground text-center text-sm">{description}</p>
    </div>
  );
};

export const FeaturesSection = () => {
  const features = [
    {
      title: "Interactive AI-Conversations",
      description: "Engage children in meaningful dialogues that stimulate learning and curiosity."
    },
    {
      title: "Personalized Study Materials",
      description: "Tailored learning paths that adapt to each child's unique needs and progress."
    },
    {
      title: "Gamified Lessons",
      description: "Fun, game-like lessons that motivate kids to learn through play and earn Hikma Points."
    },
    {
      title: "Geofincing",
      description: "Geo-fencing is a security feature integrated into A-L-I that ensures it can only activate specific functionalities or operate fully when it is physically located within authorized zones."
    },
    {
      title: "Full Parental Control",
      description: "Only parents decide how A-L-I behaves. A-L-I is designed with a powerful parent-first control system that ensures every feature, interaction, and learning pathway is governed by the parent."
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="section-container">
        <h2 className="section-title animate-fade-in">
          Tailored Educational Solutions for All Ages
        </h2>
        <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
          From gamified lessons to interactive stories, discover the range of offerings designed to cater 
          to your child's educational journey, fostering joy and curiosity in learning.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
