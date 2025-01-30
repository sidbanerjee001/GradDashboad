import React, { useState, useRef, useEffect } from 'react';

interface ResizableTextBoxProps {
  minHeight: number;
  placeholder?: string;
  defaultText?: string;
}

const ResizableTextBox: React.FC<ResizableTextBoxProps> = ({ minHeight, placeholder, defaultText="" }) => {
  const [value, setValue] = useState(defaultText);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, minHeight)}px`;
    }
  }, [value, minHeight]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`w-full p-2 outline-none focus-within:border-blue-500 rounded-sm bg-[#393939] border-[1px] border-[#747474] text-sm resize-y min-h-[${minHeight}px]`}
      style={{ minHeight: `${minHeight}px` }}
    />
  );
};

export default ResizableTextBox;
