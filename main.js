const elfMorse = (message) => {
        return message
        .toUpperCase()
        .split('')
        .map(char => {
            switch (char) {
                case 'M':
                    return 'hoho hoho';
                case 'E':
                    return 'ho';
                case 'R':
                    return 'ho hoho ho';
                case 'Y':
                    return 'hoho ho hoho hoho';
                default:
                    return '';
            }
        })
        .join(' ');
};
console.log(elfMorse("MERRY"));

