import Artist from '../Artist.js'
import Album from "../Album.js"
import Song from "../Song.js"
import Genre from "../Genre.js"
import { expect } from '@jest/globals'

describe ("Test of Artist.js", () => {
    let slayer
    let reignInBloodAlbum
    let angelOfDeathSong
    let deathMetal

    let theDoors
    let strangeDaysAlbum
    let loveMeTwoTimesSong
    let hardRock


    beforeEach(() => {
        deathMetal = new Genre("Death Metal")
        angelOfDeathSong = new Song("Angel Of Death", slayer, 290, reignInBloodAlbum, [deathMetal])
        reignInBloodAlbum = new Album("Reign in Blood", [angelOfDeathSong], [deathMetal] )
        slayer = new Artist("Slayer", [reignInBloodAlbum], [deathMetal])

        theDoors = new Artist("The Doors")
        loveMeTwoTimesSong = new Song("Love Me Two Times", theDoors, 197)
        hardRock = new Genre("Hard Rock")
        strangeDaysAlbum = new Album("Strange Days", [], hardRock)

    })

    test("Check addAlbum() function works right", () => {
        theDoors.addAlbums(strangeDaysAlbum)
        expect(theDoors.albums.includes(strangeDaysAlbum)).toBe(true)
    })

    test("Check addGenres function works right", () => {
        theDoors.addGenres(hardRock)
        expect(theDoors.genres.includes(hardRock)).toBe(true)
    })


})