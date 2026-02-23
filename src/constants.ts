import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'fintech-transformation',
    title: 'Digital Transformation: The Future of FinTech',
    subtitle: 'Redesigning the core banking experience for over 2 million active daily users.',
    category: 'Fintech',
    description: 'A comprehensive redesign of a legacy banking platform to meet modern user expectations.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK32675VA5z1Ifm0cP3c6bKXmkgxFkNmSJfMUwkAkx_6IeW_JCFug4JU_HeD4wTA9vpk7FjfvP-H_adFFA1cgM_F5Q3BKGS0L0hycx7730zfzVjgog4ENJKR6d57badoFiKClypbMcOtya8JCYj23B_mxMrpVt4R_ixhHw6ksx79hKLi97Zl6K79bAhMUx9DExTR_Kr9UGbBVrrOY9Uv47Tnc4EofikwsWmeMHQIsIxMvDhPBkKlaCN2DGZwMx8_ej3stj9WJZK5Y',
    role: 'Lead UI/UX Designer',
    timeline: 'Jan 2023 — June 2023',
    technologies: ['Figma', 'React.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    challenge: "The existing platform suffered from significant technical debt and a fragmented user experience. Customers reported difficulty navigating complex financial data, leading to a high drop-off rate during critical transaction flows. The primary objective was to unify the visual language while improving accessibility and performance.\n\nWe needed to balance high-density information with a clean, approachable aesthetic that didn't overwhelm first-time users but remained efficient for power users who manage multiple portfolios simultaneously.",
    solution: 'Our approach centered on a modular "widget-based" dashboard. This allowed users to customize their view based on their specific financial priorities. We implemented a robust design system that ensured consistency across mobile and desktop environments.\n\nBy utilizing modern frontend technologies, we achieved a 40% improvement in initial load times and introduced real-time data visualization components that made complex trends immediately understandable through intuitive charts and micro-interactions.',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApcIDry_8TyWvJ_-2nN0OoV5z_sntFRXP5VWaf8wZVKD49dl7m86LcSMO_ZBCEbYY3U70Xj9gliw6IV3i33qeZVSSkgoS4mQMNKDjjAxDauuC3atW-XGXXvs9WKmKgGcLqgjmfPShjdMEQZmCNQPh7aQjVuDrNGPfnNhh1HAgE4PE7re6Xz-w3lT5WKgXDJQnna4ZIZF1OjROBBQVJVnoka-SYrYPLZSJqN8IHXGwAe05GudwLIUNgWjknfzJXRrp_EExHEVopAzo',
        caption: 'Unified Analytics Dashboard: Real-time data monitoring interface.',
        alt: 'Modern analytics dashboard with dark theme and blue charts'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkFqQ4mMzk1ZuIaB2tyaOznLEQM5a8MSOdML63YnKYCJOuklKOwtu5lRvbB0MwbCEKxUILiiWDqANzv9bPc86a-UocK90NbeaTlgh86PvSXgy_PJyi47CN1C__7F61KZLk9J0cJ6wOFQ7-mRtUZAc1LTHEzt_GkLzyr5PNB1OueDcTsbF4cCZNzBz2NrrOja_D6ghnHoo9hKJPFc-huOPC4oUvKF2nIvZ2aSqk9y8n3WwZFQdu-leGbkt_9M6oksfvcuR29Y-hjoY',
        caption: 'Mobile Experience: Seamless transaction flows on the go.',
        alt: 'Mobile application screens showing financial transaction history'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMSTUujyPyN9VS1nKCEPonp4yhDku7Iasm0a95idTJOKlKNZD7Xt8jkWL-AW53loRtdyhQPR96XYwhUiGHXx0NJ-GhTCD08vocpk17BnyrGUbCQxcBXsyNWhGYC3rSfFkjN0vTDsVSIhHSNQ6K5LI8t01OjaRTqCkV_FmKrIHw0SF5R4vVIyWh_GNQBzDtLZGKjjoK4cYdMAfw8hbvmo2PgIjIS4iQIb3Ih8jaRrqMGZgrV9CETdkdbmO0jvhR_KgD6_R7LmfHxO0',
        caption: 'Design System: Scalable components and typography guidelines.',
        alt: 'Documentation of a design system with typography and colors'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQeh8ht5BRX49NjvaIz5rSly82EDKtYbaiqBPKLV2fSL9XOL8QgvxrZAmVv19AFjoeLoxNO1Kmap-xsT6v0kuIuUsifz6YE4LgdFbmDcUE5NPK1_bHDeqGg4Um0fQifibtECWKDVeHn14Lmvi0MK-Dmc3U2lVFAEsqMxMhHdRd0ZFz2TZLd9STi-k_eGOTmmwA-751idg88zMDXjCzqLkB1ycNskqMHZuy0CJFgDwzupyMqc0Rfy70YKZFwy2dYmT9Za3iiYyc-wM',
        caption: 'Custom Workflows: Tailored views for institutional investors.',
        alt: 'Abstract view of code and data visualization elements'
      }
    ],
    nextProjectId: 'ecostream-irrigation'
  },
  {
    id: 'ecostream-irrigation',
    title: 'EcoStream: Smart Irrigation Platform',
    subtitle: 'Optimizing water usage for sustainable agriculture through IoT and AI.',
    category: 'Sustainability',
    description: 'An IoT-driven platform helping farmers reduce water waste by up to 30%.',
    heroImage: 'https://picsum.photos/seed/eco/1920/1080',
    role: 'Product Designer',
    timeline: 'Aug 2023 — Dec 2023',
    technologies: ['Figma', 'Vue.js', 'Tailwind CSS', 'D3.js'],
    challenge: 'Farmers lacked real-time visibility into soil moisture levels across large fields.',
    solution: 'We built a sensor-integrated dashboard with predictive analytics.',
    gallery: [],
    nextProjectId: 'nova-banking'
  },
  {
    id: 'nova-banking',
    title: 'Nova Banking',
    subtitle: 'Redesigning the future of personal finance.',
    category: 'Fintech',
    description: 'A mobile-first banking app focused on intuitive wealth management.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfKAKJ0SNI7LXCxI9bA0X6twUB_741ouhE4hlEnFFfgre-tILhm4zIKPM42_0V7f1rYX4qR6RJPYJ_IuGsQssd0AbGOF9rbq9k15BA3eEalx3Lj58UpDHlBQErdabG1jkqKv8ZSFRPNIiV5Fp8OJWTnYWzU4xlVor4Yfm7fWmPP-AnUVgZj-E9O4MGU9NMMaXrxaI3kFojCbzV7_9J00FBgTpWNrmou3pJS5Vs9jvTnJ-tiRlfTRY82_RE20Zwa7aOZteyxF1MwkU',
    role: 'UI Designer',
    timeline: 'Mar 2024 — Present',
    technologies: ['Figma', 'React Native'],
    challenge: 'Complex financial tools were intimidating for young users.',
    solution: 'Gamified savings goals and simplified transaction tracking.',
    gallery: [],
    nextProjectId: 'luxe-marketplace'
  },
  {
    id: 'luxe-marketplace',
    title: 'Luxe Marketplace',
    subtitle: 'A seamless shopping experience for modern brands.',
    category: 'E-Commerce',
    description: 'Optimizing the path to purchase through behavioral data.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiDm0wRLJJJKXy96pZpLqWkQaRraRF16Q1CotMuKfUPOnaAyMcGuAhFC0TKBvsAJhL9xD4eTVTL9T5CvHrlms4RP3EQ5vpuGZYuORup0P7AFTozGxW728JyZKrnXTlbEAtXKutFVUXBXx2NxMx-2WxFYMtr-oU8SA_ljqBEjwFRYu16t-JGUPRwZ8ee4XU3DJnLZaoqJPmbv0ps8carSC3QXPmPlURjxoQeoQ4D-PQLLJUTEX4sXAG044Bqwd8zdnnF7XQgGMfTw8',
    role: 'Lead Designer',
    timeline: 'Oct 2023 — Jan 2024',
    technologies: ['Figma', 'Next.js'],
    challenge: 'High cart abandonment rates on mobile devices.',
    solution: 'Streamlined checkout process and personalized product recommendations.',
    gallery: [],
    nextProjectId: 'vitality-saas'
  },
  {
    id: 'vitality-saas',
    title: 'Vitality SaaS',
    subtitle: 'Empowering users through data-driven wellness.',
    category: 'Healthcare',
    description: 'Real-time health metrics and AI-personalized insights.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLdl5vQMkji1JtU0nuGWgMZt8SByEakM19XVkuFv5bV27RTaRqtqNnm7aqtYx9prCZn3kHg7YijqadvMLUBOA6DkTM2_4wW8hy1dxkXJuDj0VmbPgKRLG1VgvioKrHoiEy6_gX6ts5JYU4DrhbC19FDoEFi4BTJ2Vr1H0rUhRxugXXJJpJn4j3MxxJ9yzRgOBuANhWSppVCpIgG_FvMIrM2HoooeCUXqpjbUo7ET38msROQcaesSSbpNb6ZNriB3tllRtShtSOrAI',
    role: 'Product Designer',
    timeline: 'Feb 2024 — Present',
    technologies: ['Figma', 'React', 'D3.js'],
    challenge: 'Users felt overwhelmed by raw health data.',
    solution: 'Visual storytelling through activity rings and trend analysis.',
    gallery: [],
    nextProjectId: 'fintech-transformation'
  }
];
