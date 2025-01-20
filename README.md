
You are tasked with building a component that is designed for a civil servant who is tasked with producing a minute of a meeting. 

The function of the component is to do the first step in downstream task of producing a minute of a meeting. 

The first step is to split the transcript of the meeting into 'sub transcripts' corresponding to specific sections/items of the meeting. 

The component should take in a transcript object and a list of sections/items and return a list of sub transcripts.

It should 


Some things you should focus on:

- Think about a nice user interface and experience that makes it easy to understand and use (for low-tech users)


Dummy data is in the `data/care_assessment_transcript.json` file and the sections are in the `data/care_assessment_sections.json` file.

There is also a dummy implementation of the AI prediction function in the `app/utils.ts` file. This is meant to be an AI prediction function that is meant to be used by the user to do human in the loop prediction of the section start. You may optionally use this function.

No need to write any tests.


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

