
import { useEffect, useState } from "react";

function useTypewriter(words, typingSpeed = 120, deletingSpeed = 70, pauseTime = 1500) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((previous) => (previous + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1);

        setText(nextText);
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [
    words,
    wordIndex,
    text,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
}

export default useTypewriter;
