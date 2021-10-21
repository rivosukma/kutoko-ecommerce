import axios from "axios"

export const getItems = async() => {
    try{
        const response = await axios.get(process.env.apiUrl + '/items')
        return response
    } catch(err) {
        return console.log(err)
    }
}