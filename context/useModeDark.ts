import { useMediaQuery, useLocalStorage, useUpdateEffect } from "usehooks-ts";


const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

interface UseDarkModeOutput {
    isDarkMode: Boolean;
    toggle: () => void;
    enable: () => void;
    disable: () => void;
}

function useDarkMode(defaultValue? : boolean): UseDarkModeOutput {
    const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
    const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
        'usehooks-ts-dark-mode',
        defaultValue ?? isDarkOS ?? false,
    )

    useUpdateEffect(() => {
        setDarkMode(isDarkOS)
    }, [isDarkOS])
    return {
        isDarkMode,
        toggle: () => setDarkMode(prev => !prev),
        enable: () => setDarkMode(true),
        disable: () => setDarkMode(false),
    }
}
export default useDarkMode