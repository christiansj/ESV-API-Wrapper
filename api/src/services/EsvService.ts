class EsvService {
    fetchVerse(passage: string){
        return fetch(`https://api.esv.org/v3/passage/text/?q=${passage}`, {
            method: 'GET',
            headers: {'Authorization': `Token ${process.env.ESV_API_KEY}`} 
        })
    }
}