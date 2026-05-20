import React from 'react';
import './Reviews.css';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah J.',
    text: '"Absolutely obsessed with my lashes! They look incredibly futuristic yet natural enough for every day. The best in the business."',
    rating: 5
  },
  {
    name: 'Mia R.',
    text: '"Clean, professional, and the aesthetic of the place is amazing. My volume set lasted 4 weeks. Highly recommend!"',
    rating: 5
  },
  {
    name: 'Chloe T.',
    text: '"I wanted a bold, standout look and they delivered exactly that without making it look overdone. Pure artistry."',
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2 className="section-title">Client <span className="text-accent">Love</span></h2>
        <p className="section-subtitle">Don't just take our word for it.</p>
        
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="var(--accent-color)" color="var(--accent-color)" />
                ))}
              </div>
              <p className="review-text">{review.text}</p>
              <p className="review-name">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
