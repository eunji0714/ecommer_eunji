import axios from "axios";

const tmdbApi = axios.create({

    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTk3ZTQ5MWVkNmU4MGYwZGUxMmUzNDllYjYwZWE2ZSIsInN1YiI6IjViNjJhOWNmMGUwYTI2N2VlNzAyYjdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-nEypJq66ar-tr-KtFz-AC910YhdLakTDSM-oeIDLwQ'
    },
    baseURL: "https://api.themoviedb.org/3"
})

export default tmdbApi;