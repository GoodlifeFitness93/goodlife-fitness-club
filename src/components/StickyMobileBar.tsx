import { Phone, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, TEL_LINK } from "@/lib/business";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
      <a
        href={TEL_LINK}
        className="flex min-h-14 items-center justify-center gap-2 bg-secondary font-display text-lg tracking-widest text-secondary-foreground"
        aria-label="Call Goodlife Fitness Club"
      >
        <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        CALL
      </a>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-14 items-center justify-center gap-2 bg-primary font-display text-lg tracking-widest text-primary-foreground"
        aria-label="Message Goodlife Fitness Club on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
        WHATSAPP
      </a>
    </div>
  );
}
