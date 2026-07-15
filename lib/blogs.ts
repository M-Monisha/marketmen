// ── Central blog data store ───────────────────────────────────────────────────
export type Blog = {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
  sections: {
    heading?: string;
    subheadings?: { title: string; body: string }[];
    body?: string;
    bullets?: string[];
    closing?: string;
  }[];
};

export const blogs: Blog[] = [
  {
    slug: 'btl-vs-atl-why-on-ground-is-winning-in-2024',
    title: 'BTL vs ATL: Why On-Ground Is Winning in 2024',
    date: 'Dec 12, 2024',
    category: 'Strategy',
    readTime: '6 min read',
    coverImage: '/blog 1.jpeg',
    excerpt:
      'For decades, Indian marketing budgets were built around ATL. But brands today are asking a harder question: did anyone actually do anything because of my campaign?',
    sections: [
      {
        body: "For decades, Indian marketing budgets were built around ATL (Above The Line) — television, print, and radio. It was a broadcast game: reach as many people as possible and hope the message stuck. But brands today are asking a harder question: did anyone actually do anything because of my campaign?\n\nThat question is why BTL (Below The Line) — on-ground activations, retail branding, rural outreach, experiential events — is no longer the \"smaller cousin\" of ATL. It's where growing brands are shifting real budget.",
      },
      {
        heading: 'Why the shift is happening',
        subheadings: [
          {
            title: '1. Attention is fragmented, but presence isn\'t',
            body: 'A TV ad competes with fifteen other tabs open on a viewer\'s phone. A branded shop-in-shop display, a sampling booth at a haat, or a well-run dealer meet doesn\'t compete for attention — it is the moment. There\'s no skip button on a real conversation with a consumer.',
          },
          {
            title: '2. Measurability has caught up',
            body: 'The old objection to BTL was "we can\'t track it." That\'s no longer true. GPS-tagged campaign tracking, photo and video documentation of every touchpoint, and footfall/engagement data mean on-ground activity is now as measurable as a digital ad — often more, because you\'re tracking real-world behavior, not just impressions.',
          },
          {
            title: "3. India's growth is happening outside the metros",
            body: "A huge share of consumption growth is in Tier 2, Tier 3 towns and rural India — markets where a 30-second TV spot has far less pull than a village haat activation or a local retail branding push. Brands that want that growth need boots on the ground, not just airtime.",
          },
          {
            title: '4. Trust is built in person',
            body: 'Categories like FMCG, auto, and BFSI depend on trust at the point of decision. A dealer meet where a customer can sit in the vehicle, or a rural mechanic meet where a brand demonstrates its product hands-on, builds conviction that a hoarding never will.',
          },
        ],
      },
      {
        heading: "It's not BTL instead of ATL — it's BTL making ATL work harder",
        body: "The smartest campaigns today use ATL to build awareness and BTL to convert it into action — sampling, sign-ups, footfall, purchase. A Chyawanprash winter campaign that runs across 12 states and 340+ cities doesn't replace a national ad — it's what turns that ad's reach into actual shelf pickup.",
      },
      {
        heading: 'The execution problem',
        body: "The reason many brands under-invest in BTL isn't that they don't believe in it — it's that on-ground execution is hard. It means managing vendors across states, securing local permissions, coordinating logistics in cities you've never operated in, and trusting that what happens on day one in Nagpur is the same quality as day one in Coimbatore.\n\nThat's the gap a single execution partner with pan-India reach, verified vendors, and dedicated project management is built to close — one point of accountability, instead of twenty regional agencies to manage.",
      },
      {
        heading: 'Bottom line',
        body: 'In 2024, "on-ground" isn\'t a nostalgic throwback to pre-digital marketing. It\'s the most direct, trackable, and trust-building channel Indian brands have — and it\'s winning because it delivers what ATL alone can\'t: proof that people showed up.',
      },
    ],
  },
  {
    slug: 'how-to-plan-a-haat-bazaar-campaign-for-fmcg-brands',
    title: 'How to Plan a Haat Bazaar Campaign for FMCG Brands',
    date: 'Nov 28, 2024',
    category: 'Rural Marketing',
    readTime: '7 min read',
    coverImage: '/blog 2.jpeg',
    excerpt:
      'Haat bazaars are one of the most underrated channels in FMCG marketing — high-footfall, cash-transacting, decision-ready rural consumers, all in one place. Here\'s how to plan one properly.',
    sections: [
      {
        body: "Haat bazaars — the weekly rural markets that anchor commerce across thousands of Indian villages — are one of the most underrated channels in FMCG marketing. They bring together exactly the audience most brands struggle to reach through conventional media: high-footfall, cash-transacting, decision-ready rural consumers, all in one place, on a predictable schedule.\n\nDone well, a haat activation can deliver sampling, trial, and sales in a single day. Done poorly, it's a stall nobody remembers. Here's how to plan one properly.",
      },
      {
        heading: '1. Map the right haats, not just any haats',
        body: 'Not every haat suits every brand. Start with the category fit — a personal care brand needs different footfall than an agri-input or a snacks brand. Look at:',
        bullets: [
          'Weekly footfall volume and catchment radius',
          'Dominant local trade categories (this tells you what the crowd is already there to buy)',
          'Seasonal timing — harvest season haats look very different from off-season ones',
          'Accessibility for your team and stock — some haats are logistically brutal to reach',
        ],
        closing:
          'A campaign across UP, MP, and Rajasthan needs a completely different haat calendar than one focused on Maharashtra — local buying cycles and festival calendars shift the plan district by district.',
      },
      {
        heading: '2. Design for a rural, not urban, attention span',
        body: "Haat crowds move fast and are there to transact, not browse. Your activation needs to work in the ten seconds someone glances at your stall while walking past:",
        bullets: [
          'Loud, simple visual branding — no fine print, no complex messaging',
          'Live demonstration over static display — people trust what they see working',
          'Local language, always. English or even Hindi-only signage underperforms badly in many belts',
          'A clear, tangible reason to stop: free sample, price-off, or a simple contest',
        ],
      },
      {
        heading: '3. Build the right team on the ground',
        body: "This is where most haat campaigns fail — not in the idea, but in execution. You need local promoters who understand the dialect and market dynamics, not city-based staff parachuted in for a day. A local team also handles something outsiders can't: relationships with the market committee, which often decide where you're even allowed to set up.",
      },
      {
        heading: '4. Handle permissions before you show up',
        body: 'Haat bazaars are typically overseen by a local panchayat or market committee. Space allocation, timing, and even what you\'re allowed to distribute (especially with food or pharma samples) need sign-off in advance. Skipping this step is the fastest way to lose a campaign day to a dispute at the gate.',
      },
      {
        heading: '5. Track it properly',
        body: 'A rural activation is still a campaign — treat it like one. GPS-tagged coverage confirms your team was actually where they said they\'d be. Photo and video documentation from every stall gives you both proof of execution and content for future planning. Sampling counts, engagement numbers, and even informal feedback from stallholders all feed into whether this haat earns a repeat visit next season.',
      },
      {
        heading: '6. Think in cycles, not one-offs',
        body: "The real value of haat marketing comes from showing up repeatedly. A brand seen once is a curiosity; a brand seen at the same haat every week for a season becomes familiar, and familiarity is what converts trial into habit — especially in categories like FMCG where repeat purchase is the whole game.",
      },
      {
        heading: 'The takeaway',
        body: 'Haat bazaar campaigns work when they\'re planned like precision operations, not one-off stunts — right location, right language, right local team, and a system for proving it happened. Brands that get the fundamentals right unlock a channel that many of their competitors are still ignoring.',
      },
    ],
  },
  {
    slug: 'shop-in-shop-branding-a-complete-playbook',
    title: 'Shop-in-Shop Branding: A Complete Playbook',
    date: 'Nov 15, 2024',
    category: 'Retail Branding',
    readTime: '8 min read',
    coverImage: '/blog 3.jpeg',
    excerpt:
      'Shop-in-shop branding turns a shared shelf into a mini-showroom for your brand. Done right, it\'s one of the highest-leverage tools in retail marketing. Here\'s the full playbook.',
    sections: [
      {
        heading: 'What shop-in-shop actually solves',
        body: "Shop-in-shop (SIS) branding — carving out a dedicated, brand-owned space within a larger retail environment — is one of the highest-leverage tools in a retail marketing kit. Done right, it turns a shared shelf into a mini-showroom for your brand. Done wrong, it's an expensive display that blends into the noise of the store.\n\nIn a crowded general trade or modern trade store, your product is fighting for eyeballs against dozens of competing brands, all shouting for the same three seconds of shopper attention. SIS branding solves this by claiming a physical zone that's unmistakably yours — consistent colors, signage, and layout that make your brand the obvious, easiest choice the moment a shopper looks that way.",
      },
      {
        heading: 'Step 1: Choose the right stores',
        body: 'Not every outlet deserves a shop-in-shop investment. Prioritize stores by:',
        bullets: [
          'Footfall and category relevance (a high-traffic store in your core category beats a bigger store with the wrong customer mix)',
          'Existing sales performance — SIS works best as an accelerator, not a rescue plan',
          "Owner willingness — a shop-in-shop needs the retailer's genuine buy-in, since they're giving up flexible shelf space long-term",
        ],
      },
      {
        heading: 'Step 2: Design for the space, not just the brand',
        body: "A shop-in-shop has to work within the physical and visual reality of the store it sits in — width, lighting, existing fixtures, sightlines from the entrance. Good SIS design:",
        bullets: [
          "Uses consistent brand colors and materials so it's recognizable across every outlet",
          'Prioritizes visibility from the main walking path, not just up close',
          'Balances product density with clarity — an overstuffed display looks cheap, not premium',
          "Is genuinely low-maintenance for store staff, or it'll be abandoned within weeks",
        ],
      },
      {
        heading: 'Step 3: Plan the build and installation logistics',
        body: "This is where multi-city rollouts live or die. Fabrication quality needs to be consistent whether the unit is going up in Mumbai or a Tier 3 town, which means standardized specs, vetted local vendors, and quality checks at installation — not just at the design stage. A rollout across hundreds of outlets needs a project management structure that can catch problems city by city, not just at head office.",
      },
      {
        heading: 'Step 4: Get retailer and channel buy-in',
        body: "A shop-in-shop is a long-term ask of a retailer — dedicated space is dedicated revenue-per-square-foot they're trusting you with. Trade incentives, clear margin conversations, and demonstrating (even with a pilot) that the space will move product faster than open shelving all matter here. This is a channel marketing conversation as much as a design one.",
      },
      {
        heading: "Step 5: Maintain it — don't just install it",
        body: "The biggest failure mode in SIS branding isn't bad design, it's neglect. A shop-in-shop that looks pristine on installation day and faded, dusty, or half-broken three months later actively hurts brand perception. A maintenance cadence — restocking, cleaning, repair, refresh cycles tied to new campaigns — is what keeps the investment paying off.",
      },
      {
        heading: 'Step 6: Measure what matters',
        body: "Track sell-through at SIS outlets against comparable non-SIS outlets in the same category to isolate the actual lift. Combine this with visual audits (photo documentation of every unit, on a schedule) so you know which outlets need attention before a retailer complains — or worse, before a shopper notices.",
      },
      {
        heading: 'The takeaway',
        body: "Shop-in-shop branding isn't a one-time fabrication project — it's an ongoing retail program that needs the right site selection, consistent execution across cities, retailer partnership, and disciplined upkeep. Brands that treat it as infrastructure, not decoration, are the ones who see it actually move sales.",
      },
    ],
  },
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find(b => b.slug === slug);
}
