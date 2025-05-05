
import { Mail, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactItem = ({ 
  icon: Icon, 
  label, 
  placeholder 
}: { 
  icon: React.ElementType; 
  label: string; 
  placeholder: string;
}) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 dark:bg-secondary/10">
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-muted-foreground text-sm">{placeholder}</p>
      </div>
    </div>
  );
};

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30 dark:bg-background">
      <div className="section-container">
        <h2 className="section-title animate-fade-in">
          Get in Touch
        </h2>
        <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Have questions about A-L-I? We'd love to hear from you.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <ContactItem
              icon={Mail}
              label="Email"
              placeholder="Will be filled later"
            />
            <ContactItem
              icon={Linkedin}
              label="LinkedIn"
              placeholder="Will be filled later"
            />
            <ContactItem
              icon={Phone}
              label="Phone"
              placeholder="Will be filled later"
            />
            
            <div className="bg-white/50 dark:bg-white/5 rounded-xl p-6 border border-border mt-8">
              <h3 className="text-lg font-medium mb-3">Office Hours</h3>
              <p className="text-muted-foreground mb-1">Monday to Friday: 9am - 5pm</p>
              <p className="text-muted-foreground">Weekends: Closed</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={4}
                />
              </div>
              
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
