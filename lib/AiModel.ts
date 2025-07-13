import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});

const config = {
  thinkingConfig: {
    thinkingBudget: -1,
  },
  responseMimeType: 'application/json', 
};

const modelName = 'gemini-2.5-pro';

export async function getStoryScript(prompt: string) {
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model: modelName,
    config,
    contents,
  });

  let fullOutput = '';
  for await (const chunk of response) {
    fullOutput += chunk.text;
  }

  return fullOutput;
}
