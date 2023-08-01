const changeText = () => {
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(0,05,0..3), rgba(0,0,0,1)),url('https://img.freepik.com/free-vector/silhouette-excited-audience-colourful-music-notes-background_1048-14332.jpg?size=626&ext=jpg&ga=GA1.1.909912166.1690258113&semt=ais')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML = "Ale ale ale ale ale ale ale ale ale ale"
    }, 200)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(25, 2, 2, 0.3), rgba(23, 80, 23, 0.4)),url('https://img.freepik.com/free-vector/grunge-style-music-background-with-speakers_1048-2513.jpg?size=626&ext=jpg&ga=GA1.1.909912166.1690258113&semt=ais')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML = "Kaadhal sonna kanamae"
    }, 400)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(2, 2, 2, 3), rgba(2, 2, 2)),url('https://img.freepik.com/free-vector/music-speaker-with-wave-equalizer-frequency-background_1017-32308.jpg?size=626&ext=jpg&ga=GA1.2.909912166.1690258113&semt=ais')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML = "Adhu kadavulai kanda kanamae"
    }, 600)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(2, 0, 0, 0.3), rgb(3, 2, 4)),url('https://as2.ftcdn.net/v2/jpg/05/97/08/35/1000_F_597083556_s5svcnyhU8AY1ziAghcHiqnxxeG2kCUv.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML = "Kaatraai parakudhu manamae oh oh ooooh"
    }, 800)
}

setInterval(changeText, 900)