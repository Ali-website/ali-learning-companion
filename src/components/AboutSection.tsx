import interactiveLearningPng from "/src/assets/interactive-learning.png";
import personalizedExperiencePng from "/src/assets/personalized-experience.png";


const AboutCard = ({
  title,
  description,
  index,
  src,
}: {
  title: string;
  description: string;
  index: number;
  src: string;
}) => {
  return (
    <div
      className="flex flex-col items-center"
      style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
    >
      <div className="mb-6 w-full aspect-video bg-black/20 dark:bg-white/10 rounded-xl flex items-center justify-center border border-primary/20 overflow-hidden animate-fade-in">
        <img src={src} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-5 bg-secondary/30 dark:bg-background">
      <div className="section-container">
        <h2 className="section-title animate-fade-in">
          Discover the Unique Benefits of A-L-I AI Companion for Your Child
        </h2>
        <p
          className="section-subtitle animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          With a focus on engagement and personalization, A-L-I fosters a love
          of learning through interactive experiences tailored to each child's
          unique needs and interests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <AboutCard
            title="Interactive Learning"
            description="Experience a new way of learning with interactive conversations that captivate your child's interest, making education enjoyable and effective. Engage them like never before!"
            index={0}
            src={interactiveLearningPng}
          />
          <AboutCard
            title="Personalized Experience"
            description="A-L-I adapts in real-time to your child's progress and learning style, ensuring that each lesson is tailored to their needs for optimal growth and understanding."
            index={1}
            src={personalizedExperiencePng}
          />
        </div>
      </div>
    </section>
  );
};
