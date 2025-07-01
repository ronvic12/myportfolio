# Creating Portfolio using NextJS, React and NodeJS for API



## Usage of Shadcn/UI for lightweight compatability of the components(meaning only install necessary components for the website)

https://ui.shadcn.com/docs/installation/next
 

Components needed:
- Button
- Scroll Area 
- Input
- Select 
- ToolTip 
 npx shadcn@latest add input button scroll-area select tooltip

For Framer motion(Animation):
npm i framer-motion

## Usage of Client Components for navigation
```jsx
"use client"
import { usePathname } from "next/navigation";
```

📌 Layout Structure:
Header (Sticky)
Your name & title (e.g., Ronvic Ernest Cuevas – Web Developer)

A clean navigation bar with: Home | Resume | My Projects| Contact


📄 Resume Page Sections:
1. Introduction (Hero Section)
Your photo/avatar on one side, and a short bio on the other.

"I'm a passionate Web Developer specializing in full-stack development, problem-solving, and database optimization."

Call-to-action: [Download Résumé] button.






📄 Resume Page Sections:
1. Introduction (Hero Section)
Your photo/avatar on one side, and a short bio on the other.

"I'm a passionate Web Developer specializing in full-stack development, problem-solving, and database optimization."

Call-to-action: [Download Résumé] button.

2. Skills
Display as categories (Frontend, Backend, Database, Tools).

Use icons or badges (HTML, CSS, JavaScript, Node.js, MySQL, AWS, etc.).

Could be a horizontal scrollable list or grid format.

3. Experience
(List work experience in reverse chronological order.)

Company | Job Title | Dates

Bullet points highlighting key contributions:

Maintained and developed web applications at Anderson Continuing Education.

Migrated MySQL database to AWS RDS, reducing downtime.

Fixed email authentication issues by modifying SPF records.

Use bold or italics to highlight achievements (e.g., increased user retention by 30%).


4. Education & Certifications
Degree & University | Year

Certifications (JavaScript, Node.js, etc.)




Projects
Title | Tech Stack | Demo/GitHub Links

Short descriptions with key challenges & solutions.

Can be a carousel or grid layout.

Contact Section
Email | LinkedIn | GitHub | Portfolio URL

Optional contact form for inquiries.




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
