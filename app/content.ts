export const site = {
  name: "Tripp Drummond",
  handle: "@trippdrummond",
  location: "Building from the US",
  tagline: "0 → 100k on YouTube, with AI — in public.",
  youtube: "https://www.youtube.com/@trippdrummond?sub_confirmation=1",
  twitter: "https://x.com/",
  github: "https://github.com/trippdrummond1-glitch",
  email: "tripp.drummond1@gmail.com",
  startDate: new Date("2026-01-01"),
};

export const making: string[] = [
  "Videos.",
  "Scripts.",
  "Thumbnails.",
  "Workflows.",
  "Numbers.",
  "Mistakes.",
  "Noise.",
  "Signal.",
];

export const journey = {
  subscribers: 0,
  videos: 0,
  hoursInAI: 120,
  subscriberGoal: 100_000,
  revenueGoal: 10_000,
};

export const videos: { title: string; tag: string; status: "live" | "draft" | "soon" }[] = [
  {
    title: "I used 7 AI tools to build a YouTube channel in a weekend",
    tag: "AI workflow",
    status: "soon",
  },
  {
    title: "The honest numbers of a month-one creator",
    tag: "Build in public",
    status: "soon",
  },
  {
    title: "Remotion: how I'm automating my video intros with code",
    tag: "Programmatic video",
    status: "soon",
  },
];

export const learnings: { title: string; excerpt: string; reading: string }[] = [
  {
    title: "Why I'm documenting every failure, not just the wins",
    excerpt:
      "Most creators only post the highlight reel. Here's the case for sharing the bad takes, the zero-view weeks, and the scripts that didn't work.",
    reading: "3 min read",
  },
  {
    title: "My AI stack for going from idea to published video",
    excerpt:
      "A practical walkthrough of the tools I reach for — research, scripting, thumbnails, and edit-assist — and where each one earns its keep.",
    reading: "6 min read",
  },
  {
    title: "The corporate day job is the unfair advantage",
    excerpt:
      "Everyone treats the 9-5 as a blocker. I'm leaning into it: how structured work habits and a stable paycheck actually compound into creator leverage.",
    reading: "4 min read",
  },
];
