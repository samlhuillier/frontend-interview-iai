# Meeting Minutes Segmentation Tool

## Project Overview
You are tasked with building a component that helps civil servants efficiently process meeting transcripts. The component's primary function is to split a meeting transcript into smaller segments based on predefined meeting sections/items, which is the first step in creating formal meeting minutes.

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
- Sample Data:
  - Meeting transcript: `data/care_assessment_transcript.json`
  - Meeting sections: `data/care_assessment_sections.json`
- AI Prediction Helper:
  - Location: `app/utils.ts`
  - Purpose: Assists users in predicting section start points within the transcript
  - Implementation: Currently includes a dummy implementation that randomly predicts section start points
  - Usage: Optional - you may choose to incorporate this in your solution
  - Note: Do not modify the dummy AI prediction helper function. Please focus on the UI/UX and the logic of the component.

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

