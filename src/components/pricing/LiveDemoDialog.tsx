
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

interface LiveDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LiveDemoDialog = ({ open, onOpenChange }: LiveDemoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border border-brand-pink/10 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-gray-800">Call our AI Voice Agent</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Experience our AI voice technology firsthand by calling the number below.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-4 py-6 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5 rounded-lg px-4">
          <motion.div 
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white"
          >
            <Phone className="h-8 w-8" />
          </motion.div>
          <p className="text-2xl font-semibold text-center text-gray-800">+1 (302) 618-3977</p>
          <p className="text-sm text-gray-500 text-center">
            Available 24/7 - Toll Free
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LiveDemoDialog;
