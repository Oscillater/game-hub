import platform from "../data/platform";

interface Platform{
    id:number;
    name:string;
    slug:string;
}
const usePlatforms=()=>({data:platform,Loading:false,error:null})

export default usePlatforms;