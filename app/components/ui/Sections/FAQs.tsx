"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionTitle from "../SectionTitle";

interface FAQ {
  question: string;
  answer: string;
}
const faqs: FAQ[] = [
  {
    question: "What does MGM Multipurpose Ltd specialize in?",
    answer:
      "We specialize in architectural & engineering design, infrastructure construction & development, and technical consultancy & project management. From concept to completion, we deliver safe, sustainable, and climate-resilient infrastructure projects.",
  },
  {
    question: "Why should I choose MGM for my infrastructure project?",
    answer:
      "Our strength lies in combining innovation with technical expertise and strong local knowledge. We focus on delivering cost-effective, climate-smart, and future-ready infrastructure that improves lives and strengthens communities.",
  },
  {
    question: "Do you only operate in Rwanda?",
    answer:
      "No, while our headquarters is in Rwanda, we serve clients across the East African region. Our portfolio includes projects in road rehabilitation, bridge supervision, and urban drainage systems on both national and regional levels.",
  },
  {
    question: "What makes your projects sustainable?",
    answer:
      "We adopt climate-resilient designs, use durable and locally sourced materials, and incorporate smart engineering practices that ensure our projects stand the test of time while minimizing environmental impact.",
  },
  {
    question: "Can MGM handle both small and large-scale projects?",
    answer:
      "Yes. From community facilities to large infrastructure developments, our experienced technical team is equipped to manage projects of varying scales with the same level of commitment and excellence.",
  },
  {
    question:
      "How does MGM ensure projects are delivered on time and within budget?",
    answer:
      "Through careful planning, technical consultancy, and efficient project management, we maintain strict timelines and transparent communication to keep projects cost-effective and on schedule.",
  },
  {
    question:
      "Do you collaborate with governments, NGOs, or private developers?",
    answer:
      "Absolutely. We work with government institutions, non-governmental organizations, and private developers to deliver infrastructure solutions that meet community and regional development goals.",
  },
  {
    question: "What kind of team will work on my project?",
    answer:
      "Our team includes skilled architects, engineers, and project managers. We pride ourselves on collaboration, innovation, and a client-focused approach to ensure every project exceeds expectations.",
  },
  {
    question: "How can I get a consultation with MGM Multipurpose Ltd?",
    answer:
      "You can reach us directly through our contact form, email, or phone. Our experts will be happy to discuss your project needs and provide tailored guidance.",
  },
  {
    question: "What is your long-term vision?",
    answer:
      "Our vision is to innovate today for the resilient infrastructure of tomorrow — shaping East Africa with infrastructure that supports sustainable growth, community development, and climate resilience.",
  },
  {
    question:
      "Aren’t international firms usually more experienced than local companies like MGM?",
    answer:
      "While many international firms have strong reputations, MGM Multipurpose Ltd brings something unique: deep local knowledge, understanding of regional challenges, and direct engagement with East African communities. We combine international best practices with local expertise to deliver solutions that are both innovative and context-specific.",
  },
  {
    question: "How can I be sure your projects meet international standards?",
    answer:
      "Our engineers and architects are trained to align with international engineering and construction standards. We also collaborate with global partners and adhere to strict quality controls, ensuring that every project is safe, durable, and competitive with international benchmarks.",
  },
  {
    question:
      "What if my project is complex and requires cutting-edge solutions?",
    answer:
      "Complexity is our specialty. From bridge supervision to urban drainage systems, our portfolio demonstrates our ability to deliver technically demanding projects. We integrate modern technology, climate-smart practices, and innovative design to tackle even the most challenging infrastructure demands.",
  },
  {
    question:
      "Isn’t it risky to entrust large-scale projects to a growing company?",
    answer:
      "On the contrary, our growth is fueled by trust, proven results, and satisfied clients. We combine a youthful, dynamic team with experienced senior engineers and project managers. This balance ensures innovative thinking with dependable execution — lowering risks and delivering excellence.",
  },
  {
    question: "How do I know you can actually deliver on time?",
    answer:
      "We believe credibility comes from results. MGM has successfully managed road, bridge, and drainage projects on time and within budget. We achieve this by using strong project management frameworks, transparent communication, and disciplined execution strategies.",
  }
];


interface FAQItemProps {
  question: string;
  answer: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isExpanded, onToggle }: FAQItemProps) => {
  const handleToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle();
  };

  return (
    <div
      className={`rounded-lg mb-4 border transition-colors duration-200 cursor-pointer select-none ${
        isExpanded
          ? "bg-primary-50 border-primary-200"
          : "bg-gray-100 border-gray-200"
      }`}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleToggle(e);
        }
      }}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 py-4 pointer-events-none">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-left text-primary-700">
          {question}
        </h3>
        <div className={`w-6 h-6 flex items-center justify-center rounded-full border border-gray-40 transition-colors duration-200
          ${isExpanded ? " border-primary" : " border-gray-600"}`}>
          {isExpanded ? (
            <ChevronUp className="text-primary" />
          ) : (
            <ChevronDown className="text-gray-600" />
          )}
        </div>
      </div>
      {isExpanded && (
        <div className="px-4 sm:px-6 pb-4 text-sm sm:text-base text-primary pointer-events-none">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function FAQs() {
  const [expandedFAQIndex, setExpandedFAQIndex] = useState<number | null>(null);

  return (
    <section
      id="faqs"
      className="py-8 sm:py-12 lg:py-16 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto md:px-0 px-6">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our platform and services."
        />
        <div className="mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isExpanded={expandedFAQIndex === index}
              onToggle={() => {
                setExpandedFAQIndex(expandedFAQIndex === index ? null : index);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
