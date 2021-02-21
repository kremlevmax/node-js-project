let search = (artist, searchType, searchWord) => {
    searchType = searchType.toLowerCase()
    let result = false
    
    if (searchType == "album") {
        artist.albums.forEach(element => {
            if (element.name.toLowerCase().includes(searchWord.toLowerCase())) {
                result = element
            }
        });
    } else if (searchType == "song") {
        artist.albums.forEach(album => {
            album.songList.forEach(element => {
                if (element.title.toLowerCase().includes(searchWord.toLowerCase())) {
                    result = element
                }
            })
    } ) 
}
    return result
}

export default search