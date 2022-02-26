import axios from "axios";

const BASE_URL = 'https://strapi-server-blog.herokuapp.com';


class BlogService {

    static async getAllBlogs() {
        const res = await axios.get(`${BASE_URL}/blogs?blog_type.BlogType=Blog&_sort=published_at:desc`);
        return await res.data
    }

    static async getFeaturedBlogs() {
        const res = await axios.get(`${BASE_URL}/blogs?_sort=published_at:desc&IsFeatured=true&_limit=4`);
        return await res.data
    }
}
export default  BlogService;
