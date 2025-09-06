import { useEffect } from 'react';
import UseLocalStorage from './useLocalStorage';    
export default function Header() {
    const [isDark, setIsDark] =UseLocalStorage('darkMode', false);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDark);
        localStorage.setItem('darkMode', isDark);
    }, [isDark]);

    function toggleMode() {
        setIsDark(prev => !prev);
    }

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <button onClick={toggleMode} className='modeButton'>
                {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    );
}
