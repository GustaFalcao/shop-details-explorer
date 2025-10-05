import { Review } from "@/types/store";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold">{review.author}</h4>
          <p className="text-sm text-muted-foreground">{formatDate(review.date)}</p>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating
                  ? "fill-primary text-primary"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-foreground">{review.comment}</p>
    </Card>
  );
};
