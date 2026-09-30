export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  number: string
  image: { src: string; alt: string; caption: string; width: number; height: number }
  intro: string
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
  sources?: { label: string; href: string }[]
}

export const posts: BlogPost[] = [
  {
    slug: 'can-a-nontechnical-person-become-a-partner',
    image: { src: '/insights/nontechnical-partner.jpg', alt: 'An indigo arch joins emerald steps to form a bridge, with a glass conversation bubble above.', caption: 'Different strengths, one delivery partnership: you bring client relationships, we bring technical execution.', width: 1536, height: 1024 },
    title: 'Can a nontechnical person become a partner? Absolutely.',
    excerpt: 'You do not need development skills to join the partnership. You focus on professional client relationships while our delivery team handles the technical work.',
    category: 'Partnership', date: 'September 16, 2026', readTime: '5 min read', number: '01',
    intro: 'You do not need to be a developer, understand programming languages, or know how to architect software. The partnership is intentionally designed so a capable nontechnical professional can participate with the full support of an experienced development team.',
    sections: [
      {
        heading: 'Your role is professional—not technical',
        paragraphs: [
          'The partner is the account owner and client-facing representative. Your strengths should be reliability, clear communication, good judgment, and a willingness to stay involved. You do not need to write code or manage the technical delivery yourself.',
          'You maintain your professional profile, review important activity, join client conversations when required, and help create a trustworthy experience for the client. You should always communicate accurately about your role and the team responsible for delivery.',
        ],
        bullets: [
          'Communicate clearly and professionally',
          'Be available for scheduled client meetings',
          'Review proposals and important decisions',
          'Maintain your account, laptop, and internet access',
          'Follow the rules of the platform being used',
        ],
      },
      {
        heading: 'We prepare you before every meeting',
        paragraphs: [
          'You will not walk into a technical meeting unprepared. Before a call, our team studies the opportunity and creates a practical briefing in plain language. We review the client’s business goal, the proposed approach, likely questions, project scope, timeline, and the next step we want from the conversation.',
          'When a topic is highly technical, we explain what you need to know without expecting you to become an engineer. We can also rehearse the conversation, clarify terminology, and identify questions that should be passed to a technical specialist rather than answered on the spot.',
        ],
        bullets: [
          'A concise summary of the client and project',
          'Key talking points and expected questions',
          'Plain-language explanations of the proposed solution',
          'Clear boundaries around pricing, scope, and commitments',
          'A plan for follow-up questions and next steps',
        ],
      },
      {
        heading: 'Technical support during the call',
        paragraphs: [
          'When appropriate and permitted, a member of the technical team can join the call directly. In other situations, the team can remain available in the background to help with technical questions and provide accurate information during the conversation.',
          'The objective is never to hide who is doing the work. The client should receive an honest picture of the partnership and delivery team. Support arrangements must also comply with the meeting rules and the policies of the freelance platform.',
        ],
      },
      {
        heading: 'The development team handles delivery',
        paragraphs: [
          'After a project begins, our team manages the technical lifecycle: requirements, architecture, design implementation, development, testing, deployment, project management, and ongoing support. We keep the partner informed so they can speak confidently about progress without needing to perform the engineering work.',
          'This division of responsibilities is what makes the partnership accessible to nontechnical people. You bring account ownership, professionalism, and client participation. We bring the engineering capability and operating system required to deliver the project.',
        ],
      },
      {
        heading: 'What makes a strong nontechnical partner?',
        paragraphs: [
          'The best partners are not necessarily the most technical. They are dependable, responsive, honest, organized, and comfortable speaking with people. They prepare before calls, avoid making unsupported promises, and ask the team when they do not know an answer.',
          'If that describes you, a lack of development experience does not prevent you from applying. Technical knowledge can be supported; trust and professional responsibility must come from both sides.',
        ],
      },
    ],
  },
  {
    slug: 'earn-revenue-from-an-underused-freelance-account',
    image: { src: '/insights/freelance-growth.jpg', alt: 'A laptop beside a series of stone steps with gradually growing green plants.', caption: 'A professional channel grows through consistent research, thoughtful proposals, and reliable delivery.', width: 1536, height: 1024 },
    title: 'Can an underused freelance account become a real revenue channel?',
    excerpt: 'A strong profile may be sitting idle. With the right delivery partner, it can become an active—and carefully managed—business channel.',
    category: 'Growth', date: 'September 12, 2026', readTime: '6 min read', number: '02',
    intro: 'An established freelance profile can have real business value: history, trust, context, and access to relevant opportunities. But a profile alone does not create revenue. It needs consistent research, thoughtful proposals, professional conversations, and dependable delivery behind it.',
    sections: [
      { heading: 'Why good accounts go quiet', paragraphs: ['Freelance channels are often underused because one person cannot do everything at once. Finding the right jobs takes time. Proposals require research. Client calls need preparation. Then the actual work still has to be scoped, built, tested, and supported.', 'A delivery partnership closes that operating gap. The account owner remains the genuine client-facing professional, while an experienced product and engineering team supplies the research, proposal support, technical expertise, and execution.'] },
      { heading: 'What the partner contributes', paragraphs: ['The model only works when the account owner stays involved. The partner maintains ownership and oversight, reviews important activity, joins calls when required, manages the payment side, and communicates truthfully about who will perform the work.'], bullets: ['An accurate, established professional profile', 'Reliable availability for reviews and client calls', 'A dedicated, secure work environment', 'Professional communication and sound judgment', 'Commitment to the platform’s current rules'] },
      { heading: 'What the Codvoro team contributes', paragraphs: ['The technical and operations team turns opportunity into delivery. That includes researching suitable jobs, preparing tailored proposals, covering agreed application costs, briefing the partner before calls, and managing the full product lifecycle from development through deployment.', 'This is not passive income and it is not an account-rental arrangement. It is a documented operating partnership in which both sides have real responsibilities and the client receives an accurate picture of the delivery team.'] },
      { heading: 'A sustainable revenue loop', paragraphs: ['The goal is to improve the entire chain: better-fit opportunities lead to stronger proposals; stronger proposals lead to good projects; good delivery creates positive client relationships and repeat work.', 'Growth should be gradual. Start with a clear agreement, one well-matched project, visible records, and a review of what worked before increasing volume.'] },
    ],
  },
  {
    slug: 'will-freelance-partnership-income-cause-a-tax-problem',
    image: { src: '/insights/financial-records.jpg', alt: 'Organized document folders, a glass paper tray, and an indigo calculator on a desk.', caption: 'Keep agreements, invoices, platform statements, and payment confirmations together for a clear financial record.', width: 1536, height: 1024 },
    title: 'Will partnership income create a tax problem? Here’s how to prepare.',
    excerpt: 'Receiving gross platform payments can create confusing tax documents. Clean agreements, invoices, payment records, and professional advice reduce surprises.',
    category: 'Finance', date: 'September 9, 2026', readTime: '7 min read', number: '03',
    intro: 'The short answer is that freelance income creates tax responsibilities, not automatically a “tax crash.” Problems usually arise when gross receipts, business expenses, team payments, and supporting records do not line up.',
    sections: [
      { heading: 'Why the number on a tax form may look high', paragraphs: ['A platform may report gross payments associated with the account. The IRS explains that Form 1099-K gross payment amounts are not reduced for fees, refunds, credits, or other adjustments. That means the number on the form may be higher than the amount ultimately treated as profit.', 'All business income still needs to be reported correctly, whether or not a 1099 form arrives. How income and expenses are reported depends on the person’s facts and business structure.'] },
      { heading: 'Build the paper trail before you need it', paragraphs: ['A transfer to a technical team should never be an unexplained number. A written agreement should define the relationship and revenue calculation. Each technical-services payment should have a detailed invoice, and payment confirmations should match the books.'], bullets: ['Signed partnership or services agreement', 'Platform statements and project-level revenue records', 'Invoices describing actual services delivered', 'Receipts for platform fees and other business expenses', 'Bank or payment confirmations', 'Applicable tax forms and foreign-vendor documentation'] },
      { heading: 'Plan for cash flow', paragraphs: ['Independent workers may need to make estimated tax payments because tax is not usually withheld like it is from employee wages. A partner should avoid treating every dollar received as spendable cash and ask a qualified tax professional how much to reserve.', 'Never describe team payments as deductions without professional review. A CPA or enrolled agent should determine what is deductible, how the business relationship should be classified, and which forms are required.'] },
      { heading: 'What prevents the surprise', paragraphs: ['Reconcile the platform statement, bank activity, project calculation, and invoice every month—not at tax time. Give the complete file to a tax professional early, especially in the first year of the arrangement.', 'This article provides general educational information for U.S. readers and is not tax, legal, or accounting advice. Rules and individual circumstances change; consult your own qualified professional.'] },
    ],
    sources: [
      { label: 'IRS Gig Economy Tax Center', href: 'https://www.irs.gov/businesses/gig-economy-tax-center' },
      { label: 'IRS: What to do with Form 1099-K', href: 'https://www.irs.gov/businesses/what-to-do-with-form-1099-k' },
      { label: 'IRS: Gather your tax documents', href: 'https://www.irs.gov/filing/gather-your-documents' },
    ],
  },
  {
    slug: 'building-a-transparent-freelance-partnership',
    image: { src: '/insights/transparent-partnership.jpg', alt: 'Two interlocking blue and green forms and orderly documents inside a transparent glass structure.', caption: 'Clear ownership, shared visibility, and documented decisions hold a working partnership together.', width: 1536, height: 1024 },
    title: 'What a transparent freelance partnership actually looks like',
    excerpt: 'Clear ownership, visible project activity, and documented payments turn a loose arrangement into a durable working relationship.',
    category: 'Partnership', date: 'September 4, 2026', readTime: '5 min read', number: '04',
    intro: 'A good partnership does not begin with vague promises. It begins with a shared understanding of who owns what, who does the work, how decisions are made, and how revenue moves.',
    sections: [
      { heading: 'Separate the responsibilities', paragraphs: ['The partner owns and maintains their professional channel, stays involved in important decisions, and represents the business professionally when client participation is needed. The technical and operations team researches suitable opportunities, prepares proposals, supports calls, and delivers the work.', 'That separation keeps expectations realistic. It also lets each side contribute where they are strongest.'] },
      { heading: 'Make the work visible', paragraphs: ['Transparency should be operational, not aspirational. Both parties should be able to see relevant opportunities, proposals, client communication, project status, revenue, platform fees, invoices, and payments.'], bullets: ['A written agreement before work begins', 'Project-level records and revenue calculations', 'Detailed invoices for technical services', 'Traceable payments and retained documentation'] },
      { heading: 'Build for the long term', paragraphs: ['The real objective is not a single project. It is a repeatable system that can produce stronger proposals, successful delivery, positive client relationships, and repeat business over time.', 'Any activity must follow the rules of the platform being used. Account ownership, identity, access, and client communications should always remain accurate and properly authorized.'] },
    ],
  },
  {
    slug: 'how-the-30-70-revenue-model-works',
    image: { src: '/insights/revenue-sharing.jpg', alt: 'Ten equal blocks form one bar: three green blocks for the partner and seven blue blocks for the team.', caption: 'One agreed revenue base: 30% for the partner and 70% for the technical and operations team.', width: 1536, height: 1024 },
    title: 'How the 30/70 revenue model works',
    excerpt: 'A practical look at the responsibilities, documentation, and project math behind the partnership structure.',
    category: 'Operations', date: 'August 27, 2026', readTime: '4 min read', number: '05',
    intro: 'Revenue sharing only works when the value on both sides is specific. Our standard structure assigns 30% to the partner and 70% to the technical and operations team.',
    sections: [
      { heading: 'What each share covers', paragraphs: ['The partner’s share recognizes account ownership, availability, client-facing participation, payment administration, and professional representation. The team’s share covers opportunity research, proposals, agreed application costs, call preparation, engineering, project management, testing, deployment, delivery, and ongoing support.'] },
      { heading: 'A simple project example', paragraphs: ['For a project with $10,000 in defined project revenue, the partner share is $3,000 and the technical and operations team share is $7,000. The agreement should define whether platform fees or other approved expenses are deducted before or after this calculation.'] },
      { heading: 'Documentation matters', paragraphs: ['Each project should have a recorded calculation. Technical-service payments should be supported by invoices describing the real services delivered, and both parties should retain the agreement, platform statements, invoices, and payment confirmations.', 'This structure is for documenting legitimate business activity—not hiding income or avoiding tax. Each partner remains responsible for their own reporting and should consult a qualified tax professional.'] },
    ],
  },
  {
    slug: 'preparing-for-client-calls-as-a-partner',
    image: { src: '/insights/client-call-preparation.jpg', alt: 'A laptop, microphone, notebook, and green conversation bubble arranged for a prepared client call.', caption: 'A useful project brief and available technical support help you enter client conversations prepared.', width: 1536, height: 1024 },
    title: 'Preparing for client calls as a delivery partner',
    excerpt: 'A calm, repeatable preparation process helps partners represent the work clearly—even when the project is technically complex.',
    category: 'Client Success', date: 'August 18, 2026', readTime: '4 min read', number: '06',
    intro: 'Client calls are where trust becomes tangible. The partner is the client-facing representative; the delivery team makes sure they enter every conversation prepared.',
    sections: [
      { heading: 'Before the call', paragraphs: ['The team prepares a short brief covering the client’s goals, the proposed solution, likely questions, key technical details, timeline, and next steps. The partner reviews it early enough to clarify anything that feels uncertain.'], bullets: ['Confirm the agenda and desired outcome', 'Review the project summary and talking points', 'Know what can be promised—and what needs follow-up', 'Test audio, video, and the meeting link'] },
      { heading: 'During the conversation', paragraphs: ['The partner’s job is not to improvise deep technical answers. It is to listen carefully, communicate honestly, and represent the working relationship professionally. When permitted and appropriate, the technical team can join or provide background support.'] },
      { heading: 'After the call', paragraphs: ['Capture decisions, open questions, and commitments in writing. A concise follow-up keeps the client, partner, and delivery team aligned—and gives the project a clean starting point.'] },
    ],
  },
]

export function getPost(slug: string) { return posts.find((post) => post.slug === slug) }
