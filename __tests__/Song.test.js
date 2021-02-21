import Song from '../Song.js'
import Artist from '../Artist.js'
import Album from '../Album.js'
import { expect } from '@jest/globals'


describe("Test of Song.js", () => {
    let hummerSmashedFaceSong 
    let cannibalCorpse

    beforeEach(() => {
        hummerSmashedFaceSong = new Song("Hummer smashed face", cannibalCorpse, 243)
    })

    test("Song has a title", () => {
        expect(hummerSmashedFaceSong.title).toBe("Hummer smashed face")
    })

    test("Song can be created without entering value of album property", () => {
        expect(hummerSmashedFaceSong.album).toBe("")
    })

    test("Song can be created without entering value of genre property", () => {
        expect(hummerSmashedFaceSong.album).toBe("")
    })

    test("Fuction play() works", () => {
        expect(hummerSmashedFaceSong.isPlaying).toBe(false)
        hummerSmashedFaceSong.play()
        expect(hummerSmashedFaceSong.isPlaying).toBe(true)
    })

    test("Fuction stop() works", () => {
        hummerSmashedFaceSong.play()
        expect(hummerSmashedFaceSong.isPlaying).toBe(true)
        hummerSmashedFaceSong.stop()
        expect(hummerSmashedFaceSong.isPlaying).toBe(false)
    })

    test("Fuction durationtoMinutes() calculates right", () => {
        expect(hummerSmashedFaceSong.durationtoMinutes()).toBe("4:03")

    })
})