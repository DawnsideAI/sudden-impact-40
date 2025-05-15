
import { useRef } from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface DemoRequestFormProps {
  onFormSubmit?: () => void;
  showVideo?: boolean;
}

const DemoRequestForm = ({ onFormSubmit, showVideo = false }: DemoRequestFormProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useIsMobile();
  
  const phoneNumber = "+1 (302) 618-3977";

  // Render demo video if showVideo prop is true
  if (showVideo) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/HuU_pxXVVqo"
              title="AI Voice Agent Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative">
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="p-8 flex flex-col items-center justify-center text-center"
      >
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ type: "spring", stiffness: 260, damping: 20, repeat: Infinity, repeatType: "reverse", duration: 2 }}
          className="bg-gradient-to-r from-brand-pink to-brand-aqua w-16 h-16 rounded-full flex items-center justify-center mb-6"
        >
          <PhoneCall size={30} className="text-white" />
        </motion.div>
        
        <motion.a
          href={`tel:${phoneNumber.replace(/\D/g, '')}`}
          className="text-3xl font-bold mb-5 text-brand-aqua"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {phoneNumber}
        </motion.a>
        
        <Button
          variant="action"
          size="xl"
          className="shadow-lg bg-gradient-to-r from-brand-pink to-brand-aqua hover:shadow-xl transition-all duration-300"
          onClick={() => window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`}
        >
          <PhoneCall className="mr-2" /> Call Now
        </Button>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Watch Demo Video</h3>
          <div className="aspect-video w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.youtube.com/embed/HuU_pxXVVqo"
              title="AI Voice Agent Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DemoRequestForm;
