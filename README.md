# Meeting Minutes Segmentation Tool

## Project Overview
You are tasked with building a component that helps civil servants efficiently break up meeting transcripts into sub-transcripts. The component's primary function is to split a meeting transcript into smaller segments based on predefined meeting sections/items, which is the first step in creating formal meeting minutes.

This is a task that is complex for low-tech users so your aim is to build a component that is easy to use and understand.

### Core Requirements
- Create a component that accepts:
  - A meeting transcript (input)
  - A list of meeting sections/items (input)
  - Returns segmented sub-transcripts corresponding to each section

### Key Focus Areas
- Design an intuitive user interface suitable for non-technical users
- Implement a clear and straightforward user experience
- Create a solution that makes the segmentation process efficient and accurate

### Available Resources
- Project Structure:
  - This is a minimal Next.js 14 application with App Router
  - The main page component is located at `app/page.tsx` (currently empty)
  - You are expected to build your component(s) within the `app` directory
  - Feel free to create additional components, utilities, or hooks as needed

- Sample Data:
  - Meeting transcript: `data/care_assessment_transcript.json`
  - Meeting sections: `data/care_assessment_sections.json`

- AI Prediction Helper:
  - Location: `app/utils.ts`
  - Purpose: Assists users in predicting section start points within the transcript
  - Implementation: Currently includes a dummy implementation that randomly predicts section start points
  - Usage: Optional - you may choose to incorporate this in your solution
  - Note: Please focus on how best to build a 'human in the loop' component for meeting transcript segmentation using the dummy AI prediction helper function and just assume that the AI prediction function is real.

### Project Setup

1. Clone the repository
2. Install dependencies using your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

