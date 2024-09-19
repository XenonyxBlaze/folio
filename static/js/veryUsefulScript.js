
const isDarkMode = () => 
    window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches;

if (isDarkMode()) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}
console.log("OH hi hello there!! What are you doing here?? You really went for the inspect element huh? Well, I hope you're having a great day! :D Hit me up and let me know you found this!");