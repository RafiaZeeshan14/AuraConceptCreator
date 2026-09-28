export const testimonials = [
  {
    quote: (
      <>Aura Concept Creator turned our vision into a powerful digital experience. Their <em>creativity</em>, attention to detail, and professionalism are <em>unmatched.</em></>
    ),
    name: "Hamza Raza",
    role: "Founder, Nexora",
    initials: "HR",
  },
  {
    quote: (
      <>From strategy to execution, the Aura team delivered <em>beyond our expectations.</em> They are reliable, innovative, and truly invested in our success.</>
    ),
    name: "Zainab Malik",
    role: "Marketing Head, Solvix",
    initials: "ZM",
  },
  {
    quote: (
      <>Working with Aura was a seamless experience. Their designs are modern, their process is smooth, and the <em>results speak for themselves.</em></>
    ),
    name: "Ahsan Khan",
    role: "CEO, Pixello",
    initials: "AK",
  },
] as const;

export type Testimonial = (typeof testimonials)[number];