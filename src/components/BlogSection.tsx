import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "How Often Should You Get an Eye Exam in Ontario?",
    excerpt: "Understanding the recommended frequency for eye exams based on age and risk factors in Ontario's healthcare system.",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg",
    category: "Eye Health",
  },
  {
    id: 2,
    title: "Top 5 Eyewear Trends in Pickering",
    excerpt: "Discover the latest frame styles and lens technologies that are popular among Pickering residents this year.",
    readTime: "3 min read",
    image: "https://images.pexels.com/photos/342103/pexels-photo-342103.jpeg",
    category: "Fashion",
  },
  {
    id: 3,
    title: "Dry Eyes? Here's What You Can Do",
    excerpt: "Practical solutions and professional treatments available for managing dry eye syndrome in Canada's climate.",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg",
    category: "Treatment",
  },
];

const faqs = [
  {
    question: "How often should I get an eye exam in Pickering?",
    answer: "Adults should have comprehensive eye exams every 1-2 years, or annually if you're over 60 or have existing eye conditions. Our Pickering optometrists provide thorough examinations to maintain your eye health."
  },
  {
    question: "Do you accept insurance for eye exams in Pickering?",
    answer: "Yes, we accept most major insurance plans including OHIP for covered eye exams, and private insurance for frames and lenses. Contact our Pickering location for specific coverage details."
  },
  {
    question: "What types of eyeglasses do you offer in Pickering?",
    answer: "We offer a wide selection of designer frames, progressive lenses, bifocals, and specialty eyewear. Our collection includes both luxury and budget-friendly options to suit every style and need."
  },
  {
    question: "Do you provide contact lens fittings?",
    answer: "Absolutely! Our experienced optometrists provide comprehensive contact lens fittings, including specialty lenses for astigmatism and presbyopia, with ongoing support and care training."
  },
];

const BlogSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#083133] mb-4">
            Eye Care Knowledge
          </h2>
          <p className="font-open-sans text-xl text-[#083133] max-w-3xl mx-auto">
            Stay informed about eye health, eyewear trends, and vision care tips from our expert optometrists in Pickering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Blog Posts */}
          <div>
            <h3 className="font-montserrat font-bold text-2xl text-[#083133] mb-8">Latest Articles</h3>
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-[#77D5D4]/20 text-[#083133] px-3 py-1 rounded-full text-xs font-montserrat font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center text-[#083133] text-sm">
                          <Clock size={14} className="mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h4 className="font-montserrat font-bold text-lg text-[#083133] mb-3 group-hover:text-[#46B8B6] transition-colors">
                        {post.title}
                      </h4>
                      <p className="font-open-sans text-[#083133] leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="font-montserrat font-bold text-2xl text-[#083133] mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-montserrat font-semibold text-[#083133] pr-4">
                      {faq.question}
                    </h4>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-[#46B8B6] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#46B8B6] flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="font-open-sans text-[#083133] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;