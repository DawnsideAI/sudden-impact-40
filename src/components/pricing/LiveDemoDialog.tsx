
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Phone } from "lucide-react";

interface LiveDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LiveDemoDialog = ({ open, onOpenChange }: LiveDemoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Call our AI Voice Agent</DialogTitle>
          <DialogDescription>
            Experience our AI voice technology firsthand by calling the number below.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center gap-4 py-6">
          <div className="w-16 h-16 rounded-full bg-agency-vibrantPurple/20 flex items-center justify-center">
            <Phone className="h-8 w-8 text-agency-vibrantPurple" />
          </div>
          <p className="text-2xl font-semibold text-center">1-800-123-4567</p>
          <p className="text-sm text-muted-foreground text-center">
            Available 24/7 - Toll Free
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LiveDemoDialog;
