const gif=document.getElementById('gif');
const svgPause1=`<svg id="pause" width="10px" class="masterPlay_2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>`
const svgPause=`<svg class="masterPlay_1" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>`
const svgPlay=`<svg class="masterPlay_1" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/></svg>`
const svgPlay1=`<svg id="play" width="15px" class="masterPlay_2" width="20px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/></svg>`
let i=0;

let audioElement=new Audio('./song/song2.mp3');
let songIndex=0;
let curr=0;
let next= songIndex+1;
let prev;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let backward=document.getElementById('masterBackward');
let forward=document.getElementById('masterForward');

let songs=[
    {
        songName:'Jab khidki kholu',
        filePath:'./song/song2.mp3' ,
        coverpath:'./cover/b1.jfif',
    },
    
    {
        songName:'Har saal shikherji mein',
        filePath:'./song/song3.mp3' ,
        coverpath:'./cover/b1.jfif',
    },
    {
        songName:'Prabhu patit pavan',
        filePath:'./song/song1.m4a' ,
        coverpath:'./cover/b1.jfif',
        
        
    },
    {
        songName:'Naam tumhara taranhara',
        filePath:'./song/song4.mp3' ,
        coverpath:'./cover/b1.jfif',
    },
    {
        songName:'He guruvar aap mere',
        filePath:'./song/song5.mp3' ,
        coverpath:'./cover/b1.jfif',
    },
    {
        songName:'jabse dekha mukhda tera',
        filePath:'./song/song6.mp3' ,
        coverpath:'./cover/b1.jfif',
    },
    {
        songName:'Mere bhagwan aaye hai',
        filePath:'./song/song7.mp3' ,
        coverpath:'./cover/b1.jfif',
    },
    {
        songName:'Rama rama ratte ratte',
        filePath:'./song/song8.mp3' ,
        coverpath:'./cover/b1.jfif',
    },
]

let len=songs.length;


songs.forEach((element)=>{
    let newDiv=document.createElement('div');
    newDiv.className='songItem';
    let img=document.createElement('img');
    img.src=element.coverpath;
    newDiv.appendChild(img);
    let span=document.createElement('span');
    span.innerHTML=element.songName;
    span.className='songName';
    newDiv.appendChild(span);
    let span2=document.createElement('span');
    span2.className="songlistplay";
    let div2=document.createElement('div');
    div2.className='play';
    div2.id=i;
    div2.innerHTML=svgPlay1;
    span2.appendChild(div2);
    newDiv.appendChild(span2);
    document.getElementsByClassName('songItemContainer')[0].appendChild(newDiv);
    i++;
})


masterPlay.addEventListener('click', ()=>{
    
    
    
    // console.log(audioElement.currentTime);
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.innerHTML=svgPause;

        gif.style.opacity=1;
        
    }else{
         audioElement.pause();
        masterPlay.innerHTML=svgPlay;
        gif.style.opacity=0;
        
    }
})

audioElement.addEventListener('timeupdate',()=>{
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
    if(myProgressBar.value==100){
        audioElement.pause();
        masterPlay.innerHTML=svgPlay;
        gif.style.opacity=0;
    }
    console.log(progress);
    
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

let count=0;
Array.from(document.getElementsByClassName('play')).forEach((element)=>{
    console.log(element);
    element.addEventListener('click',(e)=>{
        if(element.firstChild.id=='play'){
            if(count==0){
                count++;
                const path=songs[Number(element.id)].filePath;
                audioElement.src=path;
                audioElement.play();
                element.innerHTML=svgPause1;
                masterPlay.innerHTML=svgPause;
                gif.style.opacity=1;
            }
            
        }
        else{
            count--;
            element.innerHTML=svgPlay1;
            masterPlay.innerHTML=svgPlay;
            audioElement.pause();
            gif.style.opacity=0;
            
        }
    })
})

forward.addEventListener('click',()=>{
    songIndex=(songIndex+1)%len;
    const path=songs[songIndex].filePath;
    audioElement.src=path;
    audioElement.play();
    masterPlay.innerHTML=svgPause;
    gif.style.opacity=1;
})
backward.addEventListener('click',()=>{
    songIndex=(songIndex-1+len)%len;
    const path=songs[songIndex].filePath;
    audioElement.src=path;
    audioElement.play();
    masterPlay.innerHTML=svgPause;
    gif.style.opacity=1;
})