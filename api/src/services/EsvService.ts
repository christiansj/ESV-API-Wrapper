class EsvService {
    async fetchVerse(passage: string){
        const response = await fetch(`https://api.esv.org/v3/passage/text/?q=${passage}`, {
            method: 'GET',
            headers: {'Authorization': `Token ${process.env.ESV_API_KEY}`} 
        })

        const result = await response.json();
        return result;
    }
}

export default EsvService;