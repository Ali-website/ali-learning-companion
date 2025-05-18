import { useState } from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import appPng from "/src/assets/app.png";
import enterprisePng from "/src/assets/enterprise.png";
import robotPng from "/src/assets/robot.png";


const ProductFeature = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2 mb-2">
    <div className="h-5 w-5 rounded-full bg-primary/20 mt-0.5 flex items-center justify-center">
      <div className="h-2 w-2 rounded-full bg-primary"></div>
    </div>
    <span className="text-sm">{text}</span>
  </li>
);

export const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("app");

  const products = [
    {
      id: "app",
      title: "A-L-I Child App",
      description:
        "A playful, intelligent companion designed for children aged 3–16.",
      features: [
        "Conversational AI tailored to each child's personality and learning pace",
        "Curriculum-based learning (Math, English, Quran, Science, and more)",
        "Interactive storytelling, creativity tools, and educational games",
        "Voice recognition with personalized learning paths",
        "Earnable Hikma Points to motivate progress and reward achievements",
      ],
      image: appPng,
    },
    {
      id: "enterprise",
      title: "A-L-I Enterprise for Schools",
      description:
        "An institutional solution built to empower schools, teachers, and classrooms.",
      features: [
        "Centralized dashboard for managing multiple students and classes",
        "Curriculum alignment tools and AI-assisted lesson planning",
        "Classroom behavior tracking and group learning management",
        "Real-time analytics and personalized learning insights for educators",
        "Scalable deployment with school-specific branding and admin control",
      ],
      image: enterprisePng,
    },
    {
      id: "robot",
      title: "A-L-I Robot",
      description:
        "A physical robotic companion that brings A-L-I to life in the real world.",
      features: [
        "Rounded screen with expressive face and animated responses",
        "Built-in camera, microphone, speaker, and touch sensors",
        "Optional geo-fencing decryption for location-based control",
        "Seamless integration with the Child and Enterprise apps",
        "Rechargeable docking station and SD card support",
      ],
      image: robotPng,
    },
  ];

  return (
    <section id="products" className="py-5 bg-secondary/30 dark:bg-background">
      <div className="section-container">
        <h2 className="section-title animate-fade-in">
          A-L-I Ecosystem – The Three Core Products
        </h2>

        <div
          className="mt-12 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <Tabs
            defaultValue="app"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger
                value="app"
                className={cn(
                  "text-base transition-all",
                  activeTab === "app" && "font-semibold"
                )}
              >
                Child App
              </TabsTrigger>
              <TabsTrigger
                value="enterprise"
                className={cn(
                  "text-base transition-all",
                  activeTab === "enterprise" && "font-semibold"
                )}
              >
                Enterprise
              </TabsTrigger>
              <TabsTrigger
                value="robot"
                className={cn(
                  "text-base transition-all",
                  activeTab === "robot" && "font-semibold"
                )}
              >
                Robot
              </TabsTrigger>
            </TabsList>

            {products.map((product) => (
              <TabsContent
                key={product.id}
                value={product.id}
                className="bg-background dark:bg-secondary/5 rounded-xl p-6 md:p-8 lg:p-10 border"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-2/5 flex-shrink-0">
                    <div className="aspect-square rounded-xl bg-black/10 dark:bg-white/5 flex items-center justify-center border border-primary/20">
                      <div className="text-center text-muted-foreground p-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-3/5">
                    <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {product.description}
                    </p>

                    <div>
                      <h4 className="font-medium mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <ProductFeature key={index} text={feature} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
