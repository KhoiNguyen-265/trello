import { Button } from "@/components/ui/button";
import {
  CardDescription,
  CardHeader,
  CardTitle,
  Card as ShadcnCard,
} from "@/components/ui/card";
import { Link, MessagesSquare, Users } from "lucide-react";

function Card({ card }) {
  const isShowCardActions =
    !!card?.memberIds?.length ||
    !!card?.comments?.length ||
    !!card?.attachments?.length;

  return (
    <>
      <ShadcnCard className="relative mx-auto w-full max-w-sm shrink-0 pt-0 shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
        {card?.cover && (
          <div className="aspect-video w-full rounded-t-xl bg-black/35">
            <img
              src={card?.cover}
              alt={card.title}
              className="aspect-video w-full rounded-t-xl object-cover"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle>{card?.title}</CardTitle>
          <CardDescription>{card?.description}</CardDescription>
        </CardHeader>
        {isShowCardActions && (
          <div className="flex items-center gap-2 px-2 pb-4">
            <Button variant="ghost">
              <Users /> {card?.memberIds?.length}
            </Button>
            <Button variant="ghost">
              <MessagesSquare /> {card?.comments?.length}
            </Button>
            <Button variant="ghost">
              <Link /> {card?.attachments?.length}
            </Button>
          </div>
        )}
      </ShadcnCard>
    </>
  );
}

export default Card;
