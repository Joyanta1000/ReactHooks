import { useState } from 'react';
import ThemeContext from './components/ThemeContext';
import SomeComponent from './components/SomeComponent';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        <SomeComponent/>
    </ThemeContext.Provider>
  );
};

export default App;
