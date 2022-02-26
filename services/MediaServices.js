const BASE_URL = 'https://strapi-server-blog.herokuapp.com';
import axios from "axios";

class MediaService {

    static async addMedia(formData) {
        console.log(formData);
        const res = await axios.post(`${BASE_URL}/upload` , formData, {headers : {
            "Content-Type" : "multipart/form-data"
        }});
        return await res.data
        //return data;
    }
}
export default  MediaService;