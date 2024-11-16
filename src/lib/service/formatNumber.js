export const formatNumber = (number) => {
    if (number >= 1e15) {
        return (number / 1e15).toFixed(1).replace(/\.0$/, '') + 'qa';
    }
    if (number >= 1e12) {
        return (number / 1e12).toFixed(1).replace(/\.0$/, '') + 'tr';
    }
    if (number >= 1e9) {
        return (number / 1e9).toFixed(1).replace(/\.0$/, '') + 'bi';
    }
    if (number >= 1e6) {
        return (number / 1e6).toFixed(1).replace(/\.0$/, '') + 'mi';
    }
    if (number >= 1e3) {
        return (number / 1e3).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return number.toString();
};
