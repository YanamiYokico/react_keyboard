import React, { useEffect } from 'react';

export const App: React.FC = () => {
  useEffect(() => {
    const handleKeyboardKey = (event: KeyboardEvent) => {
      const key = event.key;

      document.querySelector('.App__message')!.textContent =
        `The last pressed key is [${key}]`;
    };

    window.addEventListener('keydown', handleKeyboardKey);

    return () => {
      window.removeEventListener('keydown', handleKeyboardKey);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">Nothing was pressed yet</p>
    </div>
  );
};
