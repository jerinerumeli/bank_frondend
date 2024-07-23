import axios from "axios";
import {apiBaseUrl, header} from './Constants/Constants'

const instance=axios.create({
    baseURL:apiBaseUrl,

})

export default instance