# Meeting Minutes Segmentation Tool

## Project Overview
You are tasked with building a NextJS component that helps civil servants break up a transcript of a meeting into segments each corresponding to a specific item/section from the meeting. The aim is to make it easy for users to go through the meetingtranscript and decide which block of dialogue corresponds to the start of each item/section. The output set of transcript segments will be used for a downstream minuting task (which you don't need to worry about).
 
### Core Requirements
- Create a component that accepts:
  - A meeting transcript (input)
  - A list of meeting sections/items (input)
  - Returns segmented sub-transcripts corresponding to each section

### Key Focus Areas
- Design an intuitive user interface that is understandable by users with low technical literacy
- (Optionally) Add human-in-the-loop features that leverage a dummy AI prediction function to assist users in more quickly finding the start of a section.

### Available Resources
- Project Structure:
  - This is a minimal Next.js 14 application with App Router
  - The main page component is located at `app/page.tsx` (currently empty)
  - You are expected to build your component(s) within the `app` directory
  - Feel free to create additional components, utilities, or hooks as needed

- Sample Data:
  - Meeting transcript: `data/care_assessment_transcript.json`
  - Meeting sections: `data/care_assessment_sections.json`

- Dummy AI Prediction Helper:
  - Location: `app/utils.ts`
  - Purpose: Assists users in predicting section start points within the transcript
  - Implementation: Currently includes a dummy implementation that randomly predicts section start points (do not modify the implementation and focus how best to use it in your component)
  - Usage: Optional - you may choose to incorporate this in your solution

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

