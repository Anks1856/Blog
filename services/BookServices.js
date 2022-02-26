const BASE_URL = 'https://strapi-server-blog.herokuapp.com';


class BookService {

    static async getAllBooks() {
        const res = await fetch(`${BASE_URL}/books?_sort=published_at:desc`);
        const data = await res.json()
        return data;
    }
}
export default  BookService;