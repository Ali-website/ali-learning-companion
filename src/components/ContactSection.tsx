import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactItem = ({ 
  icon: Icon, 
  label, 
  placeholder,
  href
}: { 
  icon: React.ElementType; 
  label: string; 
  placeholder: string;
  href?: string;
}) => {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 dark:bg-secondary/10 transition hover:bg-primary/10 cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-muted-foreground text-sm">{placeholder}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : content;
};

export const ContactSection = () => {
  return (
    <section id="contact" className="py-5 bg-secondary/30 dark:bg-background">
      <div className="section-container">
        <h2 className="section-title animate-fade-in">
          Get in Touch
        </h2>
        <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Have questions about A-L-I? We'd love to hear from you.
        </p>
        
        <div className="max-w-xl mx-auto mt-12">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <ContactItem
              icon={Mail}
              label="Email"
              placeholder="bashar@aliaicompanion.com"
              href="mailto:bashar@aliaicompanion.com"
            />
            <ContactItem
              icon={Linkedin}
              label="LinkedIn"
              placeholder="LinkedIn.com/company/a-l-i-companion"
              href="https://www.linkedin.com/company/a-l-i-companion/"
            />
            <ContactItem
              icon={Phone}
              label="Phone"
              placeholder="+962 79 7773 763"
              href="tel:+962797773763"
            />
          </div>
        </div>
      </div>
    </section>
  );
};