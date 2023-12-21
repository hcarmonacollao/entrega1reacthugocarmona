import axios from "axios";

export async function getproducts(){
    return await axios.get('https://dummyjson.com/products')
}