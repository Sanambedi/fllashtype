import React from 'react';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import TryAgain from '../TryAgain/TryAgain';
import "./TestContainer.css";
const TestContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain
}) => {
    return ( 
        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-cont">
                        <TypingChallengeContainer 
                            timeRemaining={timeRemaining}
                            timerStarted={timerStarted} 
                            selectedParagraph={selectedParagraph}
                            words={words}
                            characters={characters}
                            wpm={wpm}
                            testInfo={testInfo}
                            onInputChange={onInputChange}
                        />
                    </div>
                ):(
                    <div className="try-again-cont">
                        <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
                    </div>
                )
            }
            
        </div>
    );
}
 
export default TestContainer;