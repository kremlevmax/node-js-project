import Album from '../Album.js'
import Song from '../Song.js'
import Genre from '../Genre.js'

describe ('Test of Album.js', () => {
    let arrivalAlbum 
    let voulezVousAlbum
    let gimmeGimmeGimmeSong
    let dancingQueenSong
    let moneyMoneyMoneySong
    let popGenre
    let discoGenre

    beforeEach(() => {
        popGenre = new Genre("Pop")
        discoGenre = new Genre("Disco")
        gimmeGimmeGimmeSong = new Song("Gimme, gimme, gimme", "Abba", 290, voulezVousAlbum, [popGenre, discoGenre])
        dancingQueenSong = new Song("Dancing Queen", "Abba", 232, arrivalAlbum, [popGenre, discoGenre])
        moneyMoneyMoneySong = new Song("Money, money, money", "Abba", 186, arrivalAlbum, [popGenre, discoGenre])
        voulezVousAlbum = new Album("Voulez-Vous", [gimmeGimmeGimmeSong], [popGenre, discoGenre])
        arrivalAlbum = new Album("Arrival", [dancingQueenSong, moneyMoneyMoneySong], [popGenre, discoGenre])
    })

    test("arrivalAlbum is an instance of the Album class", () => {
        expect(arrivalAlbum).toBeInstanceOf(Album)
    })

    test("voulezVousAlbum is an instance of the Album class", () => {
        expect(voulezVousAlbum).toBeInstanceOf(Album)
    })

    test("arrivalAlbum's name is 'Arrival'", () => {
        expect(arrivalAlbum.name).toBe("Arrival")
    })

    test("voulezVousAlbum has a song gimmeGimmeGimmeSong", () => {
        expect(voulezVousAlbum.songList.includes(gimmeGimmeGimmeSong)).toBe(true)
    })

    test("Check that total album duration calcultating right", () => {
        expect(arrivalAlbum.duration()).toBe("6:58")
    })

    test("Check that number of tracks is counted right", () => {
        expect(arrivalAlbum.trackCount()).toBe(2)
    })

    test("Check isPlaying() function, if song is playing", () => {
        gimmeGimmeGimmeSong.play()
        expect(voulezVousAlbum.isPlaying()).toBe(true)
    })

    test("Check isPlaying() function, if song isn't playing", () => {
        expect(arrivalAlbum.isPlaying()).toBe(false)
    })

    test("Check addSong() function, if song is already in", () => {
        expect(voulezVousAlbum.addSong(gimmeGimmeGimmeSong)).toBe(false)
    })

    test("Check addSong() function, if song isn't in album", () => {
        expect(voulezVousAlbum.addSong(dancingQueenSong)).toBe(true)
    })

    test("Check removeSong() function, if song is in album", () => {
        arrivalAlbum.removeSong(moneyMoneyMoneySong)
        expect(arrivalAlbum.songList.includes(moneyMoneyMoneySong)).toBe(false)
    })

    test("Check removeSong() function, if song isn't in album", () => {
        voulezVousAlbum.removeSong(moneyMoneyMoneySong)
        expect(voulezVousAlbum.songList.includes(moneyMoneyMoneySong)).toBe(false)
    })

})
