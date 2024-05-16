'use server'

import Sentiment from "sentiment";

export async function getSentiment(text: string) {
  const sentiment = new Sentiment();
  const result = sentiment.analyze(text);

  return Promise.resolve(result);
}