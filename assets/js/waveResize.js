const portfolioWaves = document.getElementsByClassName('expandableWave');

function setImageSource() {
    const windowWidth = window.innerWidth;
    const thresholdWidth = 740;
    if (windowWidth >= thresholdWidth) {
        const scaleX = windowWidth / thresholdWidth;
        for (const portfolioWave of portfolioWaves) {
            portfolioWave.style.transform = `scaleX(${scaleX})`;
        }
    } else {
        for (const portfolioWave of portfolioWaves) {
            portfolioWave.style.transform = 'scaleX(1)';
        }
    }
}

setImageSource();

window.addEventListener('resize', setImageSource);