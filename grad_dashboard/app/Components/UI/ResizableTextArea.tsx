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
      className={`w-full outline-none text-slate-700 border-[1.2px] rounded-lg shadow-sm p-2 focus:outline-blue-400 text-sm resize-y min-h-[${minHeight}px]`}
      style={{ minHeight: `${minHeight}px` }}
    />
  );
};

export default ResizableTextBox;
