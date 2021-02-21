import search from "../search.js"
import Album from "../Album.js"
import Song from "../Song.js"
import Genre from "../Genre.js"
import Artist from "../Artist.js"
import { expect } from "@jest/globals"


describe ("Test of search.js", () => {
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
        reignInBloodAlbum = new Album("Reign in Blood", [angelOfDeathSong], [deathMetal])

        slayer = new Artist("Slayer", [reignInBloodAlbum], [deathMetal])

        loveMeTwoTimesSong = new Song("Love Me Two Times", theDoors, 197)
        hardRock = new Genre("Hard Rock")
        strangeDaysAlbum = new Album("Strange Days", [loveMeTwoTimesSong], hardRock)

        theDoors = new Artist("The Doors", [strangeDaysAlbum], [hardRock])
    })

    test("Test search of an album", () => {
        expect(search(slayer, "album", "reign").name).toEqual("Reign in Blood");
    })

    test("Test search of an album", () => {
        expect(search(theDoors, "song", "times").title).toEqual("Love Me Two Times");
    })

})