import { useEffect, useRef } from "react";
import { ArrowDown, Bot } from "lucide-react";
import aliVideo from '/src/assets/AliVideo.mov';

export const HeroSection = () => {
  const robotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (robotRef.current) {
        robotRef.current.classList.add("animate-wiggle");

        setTimeout(() => {
          if (robotRef.current) {
            robotRef.current.classList.remove("animate-wiggle");
          }
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20 pt-32"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg -z-10"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white dark:bg-primary/30 opacity-10 animate-float"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-glow">
              A
              <span className="bg-white mx-1 px-1 rounded text-black">
                -L-
              </span>
              I, is Your Automated Learning Intelligence
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              A-L-I, is an AI-powered robot transforming education with engaging
              conversations and personalized lessons for a fun, effective
              learning journey at home and school.
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col items-center gap-8">
            <div className="w-full bg-black/20 dark:bg-white/10 rounded-xl flex items-center justify-center border border-primary/20 overflow-hidden">
              <div className="flex flex-col items-center gap-4">
                <video
                  src={aliVideo}
                  controls
                  autoPlay
                  muted
                  loop
                />
              </div>
            </div>

            {/* Robot Animation */}
            <div
              ref={robotRef}
              className="glass-card p-8 flex items-center gap-4 transform transition-all animate-float"
            >
              <div className="relative w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="h-10 w-10 text-primary" />
                <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse opacity-50"></div>
              </div>
              <div className="flex flex-col">
                <p className="font-medium">Hello, I'm A-L-I :)</p>
                <p className="text-sm text-muted-foreground">
                  Your AI Learning Companion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
        onClick={scrollToAbout}
      >
        <p className="text-sm text-muted-foreground mb-2">Scroll Down</p>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
