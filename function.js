function downloadCV() {
    const link = document.createElement('a');
    link.href = './image/samuel.png';
    link.download = 'Samuel_Galliani-Royer_CV.png';
    link.click();
}