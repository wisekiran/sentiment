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

    console.log('result', resultText)

    return (
<>
          <div className="w-full mb-4">
            <div className="relative inline-block">
              {/* Display "Result:" in black */}
              <span className="text-2xl md:text-3xl font-bold text-black">
                Result: 
              </span>
              {/* Conditionally render result text */}
              {resultText && (
                <span className={`text-2xl md:text-3xl font-bold ${resultText === 'Positive' ? 'text-green-500' : 'text-red-500'} ml-2`}>
                  {/* Display result with emoji */}
                  {resultText === 'Positive' ? '😊 Positive' : '😞 Negative'}
                </span>
              )}
              {/* Gradient background only when resultText is available */}
              {resultText && (
                <span
                  className={`absolute -bottom-1 left-0 w-full h-1 rounded-full ${resultText === 'Positive' ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600'}`}
                ></span>
              )}
            </div>
          </div>


        <div className="w-full mb-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="w-full mb-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="w-full px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="userEnteredText" className="sr-only">EnteredText</label>
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
            <div className="w-full flex items-start justify-center px-3 py-3 border-t">
              <button type="submit" onClick={handleButtonClick}
                className="inline-flex items-center rounded cursor-pointer bg-purple-700 px-2 py-1 font-semibold text-white transition [box-shadow:rgb(214,_171,_245)-8px_8px] hover:[box-shadow:rgb(214,_171,_245)0px_0px]">
                Analyze!
              </button>
            </div>
          </div>
        </form>
      </div>
</>
    )
}