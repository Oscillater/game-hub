import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'ba2b57b9ed964402a9fe1e934502de43'
    }
})