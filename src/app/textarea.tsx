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
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Post userEnteredText
              </button>
              <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                <button
                  type="button"
                  className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                  <span className="sr-only">Upload image</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
</>
    )
}