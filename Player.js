class Player {
    constructor(songs) {
        this.songs = songs
        this.random = false
    }

    randomSwitch() {
        this.random = !this.random
    }

    play() {
        let trackOrder = []
        if (!this.random) {
        this.songs.forEach(song => {
            song.play()
            console.log(song.artist + " " + song.title + " " + song.duration + " is playing");
            trackOrder.push(this.songs.indexOf(song))
            song.stop()
        });
    } else {
        let songsDuplicate  = [...this.songs]
        let randomSongIndex
        for (let i = 0; i < songsDuplicate.length; i++) {
            randomSongIndex = Math.floor(Math.random()*songsDuplicate.length)
            let song = songsDuplicate[randomSongIndex]
            
            song.play() 
            console.log(song.artist + " " + song.title + " " + song.duration + " is playing");
            song.stop()

            trackOrder.push(randomSongIndex)
            songsDuplicate.splice(randomSongIndex, 1) 
        }
    }
    return trackOrder

}

}

export default Player