
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Review = {
  name: string;
  role: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Sam Jameel",
    role: "The Academy",
    text: "I love how A-L-I adapts to my child's learning pace. It's like having a personal tutor who understands their needs."
  },
  {
    name: "Mariam S.",
    role: "ANS",
    text: "A-L-I has transformed my child's approach to learning. They are more engaged and curious than ever before. Truly a game-changer!"
  },
  {
    name: "Michael Brown",
    role: "Social Moms",
    text: "The personalized touch of A-L-I has made education fun for my kids. They now look forward to learning every day!"
  }
];

const ReviewCard = ({ review, className }: { review: Review; className?: string }) => {
  return (
    <div className={cn(
      "p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex flex-col h-full min-w-[280px] animate-fade-in",
      className
    )}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Users className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold">{review.name}</h3>
          <p className="text-sm text-muted-foreground">{review.role}</p>
        </div>
      </div>
      <div className="flex-grow">
        <p className="italic text-muted-foreground">{review.text}</p>
      </div>
      <div className="mt-6 flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className="w-5 h-5 text-yellow-400 fill-current" 
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export const ReviewsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      // Initialize on mount
      checkScrollability();
      
      // Check again after images might have loaded
      window.addEventListener('load', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      
      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('load', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="reviews" className="py-5">
      <div className="section-container">
        <h2 className="section-title animate-fade-in">
          What Our Users Say
        </h2>
        
        <div className="relative mt-12 group">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 py-6 no-scrollbar"
            style={{ scrollbarWidth: 'none' }}
          >
            {reviews.map((review, index) => (
              <ReviewCard 
                key={index} 
                review={review} 
                className="w-[340px] flex-shrink-0"
              />
            ))}
          </div>
          
          {/* Scroll controls */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 transform">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "rounded-full bg-background/80 backdrop-blur-sm hover:bg-background text-primary",
                !canScrollLeft && "opacity-0 pointer-events-none",
                "transition-opacity duration-300"
              )}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 transform">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "rounded-full bg-background/80 backdrop-blur-sm hover:bg-background text-primary",
                !canScrollRight && "opacity-0 pointer-events-none",
                "transition-opacity duration-300"
              )}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
