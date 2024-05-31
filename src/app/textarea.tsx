'use client'
import React, {useState} from 'react'
import { getSentiment } from './sentiment';
import Sentiment from 'sentiment';

export const TextAreaComponent = () => {
    const [userEnteredText, setComment] = useState('');
    const [resultText, setResultText] = useState('');

    const convertSentimentResult = (result: Sentiment.AnalysisResult): 'Positive' | 'Negative' => {
       if(result.score < 0) {
        return 'Negative';
       }
       return 'Positive'
    }

    const handleCommentChange = (event: any) => {
      setComment(event.target.value);
    };
  
    const handleButtonClick = () => {
      // Make function call with userEnteredText
      getSentiment(userEnteredText).then((result) => {
        setResultText(convertSentimentResult(result));
      })
    };

    return (
<>
<div className="w-full mb-4">
        <p className="font-medium text-xl text-slate-700 dark:text-slate-400">Result: {resultText}</p>
    </div>


        <div className="w-full mb-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="w-full mb-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="w-full px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="userEnteredText" className="sr-only">Your userEnteredText</label>
              <textarea
                value={userEnteredText}
                onChange={handleCommentChange}
                id="userEnteredText"
                rows={4}
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Enter something here"
                required
              ></textarea>
            </div>
            <div className="w-full flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                onClick={handleButtonClick}
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-purple-800"
              >
                Go!
              </button>
            </div>
          </div>
        </form>
      </div>
</>
    )
}