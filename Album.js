class Album {
    constructor(name, songList, genres) {
        this.name = name
        this.songList = songList
        this.genres = genres
    }
    duration() {
        let result = 0
        this.songList.forEach(element => {
            result += element.duration
        });
   
        let seconds = result % 60
        let minutes = Math.floor(result / 60)
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        return `${minutes}:${seconds}`
    }

    trackCount() {
        return this.songList.length
    }


    isPlaying(){
        let result = false
        this.songList.forEach(element => {
            if (element.isPlaying == true) {
                result = true
            }
        });
        return result
    }


    addSong(song) {
        let result
        if (!this.songList.includes(song)) {
            this.songList.push(song)
            result = true
        } else {
            console.log("The album already has this song");
            result = false
        }
        return result
    }


    removeSong(song) {
        let indexOfSong = this.songList.indexOf(song)
        if (indexOfSong > -1) {
            this.songList.splice(indexOfSong, 1)
        }
    }



}

export default Album