'use client';

import { useEffect, useState } from 'react';
import FinishedWord from '@/types/FinishedWord';
import TypedWord from '@/types/TypedWord';
import useTime from './useTime';

interface FieldProps {
  words: string[];
  maxTime: number;
}

const useField = ({ words: initWords, maxTime }: FieldProps) => {
  const { startedTyping, startTyping, remainingTime } = useTime(maxTime);

  const [stats, setStats] = useState({
    wordsPerTime: 0,
    charsPerTime: 0,
    accuracy: 0,
  });

  const [originalWord, setOriginalWord] = useState<string>(initWords[0]);
  const [activeWord, setActiveWord] = useState<string>(initWords[0]);
  const [activeWordRemovedPart, setActiveWordRemovedPart] = useState<string>('');

  // 15 words, first word is future activeWord
  const [wordsQueue, setWordsQueue] = useState(initWords.slice(1));

  const [finishedWords, setFinishedWords] = useState<FinishedWord[]>([]);

  const typedWordDefault: TypedWord = { value: '', isCorrect: false };
  const [typedWord, setTypedWord] = useState<TypedWord>(typedWordDefault);

  const [completeCalled, setCompleteCalled] = useState(false);

  useEffect(() => {
    setOriginalWord(initWords[0]);
    setActiveWord(initWords[0]);

    setWordsQueue(initWords.slice(1));
  }, [initWords]);

  const updateWordsQueue = () => {
    setWordsQueue(p => p.slice(1));
  };

  const onType = (char: string) => {
    if (!startedTyping) {
      return;
    }

    const newTypedWord = typedWord.value + char;

    if (originalWord.startsWith(newTypedWord)) {
      // Valid typing
      setActiveWordRemovedPart(p => p + (activeWord[0] || ''));
      setActiveWord(p => p.slice(1));

      setTypedWord({
        value: newTypedWord,
        isCorrect: true,
      });

      // If the word is completed
      if (newTypedWord === originalWord) {
        setCompleteCalled(true);
      }
    } else {
      // Invalid
      setTypedWord({
        value: newTypedWord,
        isCorrect: false,
      });
    }
  };

  const onBackspace = () => {
    if (!startedTyping) {
      return;
    }

    const wasCorrect = originalWord.startsWith(typedWord.value);
    const newTypedWord = typedWord.value.slice(0, typedWord.value.length - 1);

    if (originalWord.startsWith(newTypedWord)) {
      // Valid word now
      if (wasCorrect) {
        setActiveWord(p => (activeWordRemovedPart[activeWordRemovedPart.length - 1] || '') + p);
        setActiveWordRemovedPart(p => p.slice(0, p.length - 1));
      }

      setTypedWord({
        value: newTypedWord,
        isCorrect: true,
      });
    } else {
      // Invalid
      setTypedWord({
        value: newTypedWord,
        isCorrect: false,
      });
    }
  };

  useEffect(() => {
    if (completeCalled) {
      setCompleteCalled(false);
      onComplete();
    }
  }, [completeCalled, typedWord]);

  const onComplete = () => {
    document.getElementById('field_cursor')?.focus();

    if (!startedTyping) {
      startTyping();
      return;
    }

    if (typedWord.value.length === 0) {
      return;
    }

    setActiveWord(wordsQueue[0]);
    setActiveWordRemovedPart('');
    setOriginalWord(wordsQueue[0]);

    updateWordsQueue();

    setFinishedWords(p => [...p, typedWord]);

    setTypedWord(typedWordDefault);
  };

  return {
    stats,
    startedTyping,
    remainingTime,
    wordsQueue,
    finishedWords,
    activeWord,
    activeWordRemovedPart,
    typedWord,
		completeCalled,
    onType,
    onBackspace,
    onComplete,
  };
};

export default useField;
