function sleep(ms){
    return new Promise((resolve) => setTimeout (resolve,ms));
}
    const phrases = ["WHO ARE WE","WE ARE INNOVATORS"," WE ARE MOTIVATORS"," WE ARE THE FUTURE"];
    const el = document.getElementById("typewriterwaw");

    let sleepTime = 100;

    let cutPhraseIndex = 0;

    const writeLoop = async () => {
        while(true){
            let curWord = phrases[cutPhraseIndex];
            for(let i = 0; i < curWord.length; i++){
                el.innerText = curWord.substring(0, i + 1);
                await sleep(sleepTime);
            }

            await sleep(sleepTime * 10);

            for(let i = curWord.length; i > 0; i--){
                el.innerText = curWord.substring(0, i - 1);
                await sleep(sleepTime);
            }
         
            await sleep(sleepTime * 5);

            if(cutPhraseIndex == phrases.length - 1){
                cutPhraseIndex = 0;
            }
            else{
                cutPhraseIndex++;
            }

        }
    };
    writeLoop();