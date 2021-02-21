class Song {
    constructor(title, artist, duration, album = "", genres = []) {
        this.title = title
        this.artist = artist
        this.duration = duration
        this.isPlaying = false
        this.album = album
        this.genres = genres
        

    }
    play() {
        this.isPlaying = true
    }
    
    stop() {
        this.isPlaying = false
    }

    durationtoMinutes() {
        let seconds = this.duration % 60
        let minutes = Math.floor(this.duration / 60)
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        return `${minutes}:${seconds}`
    }
}

export default Song 