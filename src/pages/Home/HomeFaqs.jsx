import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How much does event management cost in Kerala?',
    answer: 'Event management costs vary depending on the size, scale, and services required. Contact us for a custom quote.',
  },
  {
    question: 'What Event Management Services does Melodia Event Management Company provide in Kerala?',
    answer: 'We offer end-to-end event planning, decor, entertainment, catering coordination, and more.',
  },
  {
    question: 'Do You Arrange Events on a Budget?',
    answer: 'Yes! We offer tailored solutions to fit your budget while maintaining quality.',
  },
  {
    question: 'Can I contact your past clients or references? Can I attend one of your upcoming events nearby?',
    answer: 'Yes, we can connect you with references and arrange viewings of upcoming events with prior notice.',
  },
  {
    question: 'Who is the owner of Melodia Event Management Company?',
    answer: 'Melodia is managed by a team of seasoned professionals passionate about events.',
  },
  {
    question: 'How much does a destination wedding cost in Kerala?',
    answer: 'Destination wedding costs start from ₹5L and vary depending on guest count, location, and inclusions.',
  },
  {
    question: 'Why Should We Hire an Event Planner/ Event Management Company?',
    answer: 'To save time, reduce stress, and ensure flawless execution of your dream event.',
  },
  {
    question: 'Why is entertainment important in weddings? Do you offer entertainment services?',
    answer: 'Entertainment elevates the celebration! Yes, we offer music, dance, and other performances.',
  },
  {
    question: 'When is the best time to hire an event company or event planner in Kerala?',
    answer: 'At least 3–6 months in advance for better planning, bookings, and execution.',
  },
  {
    question: 'What sets your event management company apart and how can clients trust that their events will be handled with excellence?',
    answer: 'We combine creativity, experience, and professionalism to create unforgettable experiences.',
  },
];

export default function HomeFaqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-30 md:px-10 lg:px-20 max-w-7xl mx-auto">
      <h3 className="text-center text-xl text-yellow-600 font-medium mb-2">
        Do you have any other questions?
      </h3>
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
        Please check these FAQs.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" p-5  transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="ml-4">
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 mt-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-700 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}