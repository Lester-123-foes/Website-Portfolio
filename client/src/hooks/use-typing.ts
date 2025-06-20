import { useState, useEffect } from 'react';

export function useTyping(phrases: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [currentText, setCurrentText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return currentText;
}
