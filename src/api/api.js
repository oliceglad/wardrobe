import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    headers: {
        'Content-Type': 'application/json'
    }
})


export const mainAPI = {

    getGoodsByCategory(category, gender, count) {
        return instance.get('/goods', {params: 
            { category, gender, count}
        })
    }
}