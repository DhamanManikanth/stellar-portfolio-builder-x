
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface StarRatingProps {
  totalStars?: number;
  onChange?: (rating: number) => void;
}

const StarRating = ({ totalStars = 5, onChange }: StarRatingProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    if (onChange) {
      onChange(selectedRating);
    }
  };

  return (
    <section id="rating" className="py-20 vibrant-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2 border-vibrant-red text-vibrant-orange font-medium">Your Opinion</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">Rate Your <span>Experience</span></h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            How would you rate your experience? Your feedback helps me improve!
          </p>
        </div>

        <Card className="max-w-xl mx-auto overflow-hidden custom-card border-none shadow-glow-sm hover:shadow-glow-md">
          <CardContent className="p-8">
            <div className="flex flex-col items-center justify-center">
              <div className="flex space-x-2 mb-6">
                {[...Array(totalStars)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <button
                      key={index}
                      type="button"
                      className="focus:outline-none transition-transform hover:scale-110"
                      onClick={() => handleStarClick(starValue)}
                      onMouseEnter={() => setHoveredRating(starValue)}
                      onMouseLeave={() => setHoveredRating(0)}
                      aria-label={`Rate ${starValue} out of ${totalStars} stars`}
                    >
                      <Star
                        size={40}
                        fill={(hoveredRating || rating) >= starValue ? "#facc15" : "transparent"}
                        color={(hoveredRating || rating) >= starValue ? "#facc15" : "#d1d5db"}
                        strokeWidth={1.5}
                        className="star-icon cursor-pointer"
                      />
                    </button>
                  );
                })}
              </div>
              {rating > 0 && (
                <div className="animate-fade-in text-center">
                  <p className="text-white text-lg font-medium mb-2">
                    You rated: <span className="text-vibrant-orange font-semibold">{rating} star{rating !== 1 ? 's' : ''}</span>
                  </p>
                  <p className="text-gray-300 text-sm">
                    {rating <= 2 ? "I'll work hard to improve!" : 
                     rating <= 4 ? "Thanks for your feedback!" : 
                     "Thank you for your excellent rating!"}
                  </p>
                </div>
              )}
              {!rating && hoveredRating > 0 && (
                <div className="animate-fade-in">
                  <p className="text-gray-300 text-sm">
                    Click to rate {hoveredRating} star{hoveredRating !== 1 ? 's' : ''}
                  </p>
                </div>
              )}
              {!rating && !hoveredRating && (
                <div>
                  <p className="text-gray-300 text-sm">
                    Click on a star to rate your experience
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StarRating;
