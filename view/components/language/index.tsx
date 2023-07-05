import React, { useState } from 'react';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('english');

  const handleLanguageSwitch = () => {
    if (language === 'english') {
      setLanguage('persian');
    } else {
      setLanguage('english');
    }
  };

  return (
    <div>
      <button onClick={handleLanguageSwitch}>Switch Language</button>
      <p>{language === 'english' ? 'English Content' : 'محتوای فارسی'}</p>
    </div>
  );
};

export default LanguageSwitcher;
