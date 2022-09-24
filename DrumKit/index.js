window.onload = () => {

    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active')
    },350);

    for(let i = 0; i< anchors.length; i++){
        const anchor = anchors[i];

        anchor.addEventListener('click', e =>{
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.remove('is-active');

            setTimeout(() => {
                window.location.href = target;
            },350)
        })
    }
}



window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(audio);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    //console.log(key);
    key.classList.add('playing');

});


function removeTransition(e){
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
    
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


