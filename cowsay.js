const cowsay = (text = '') => {
    const textLength = String(text).trim().length;
    const up = '_'.repeat(textLength);
    const down = '-'.repeat(textLength);

    return `
       ${up}
     < ${text} >
       ${down}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
    `;
}

console.log(cowsay("Valchan was here"));
