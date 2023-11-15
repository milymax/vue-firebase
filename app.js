console.log("Hello, Vue!")

const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            alamat: "Jl. Ahmad Yani No.12",
            website: "www.gmedia.com",
            title: "",
            author: "",
            x: 0,
            y: 0,
            books: [
                { title: "pulang", author: "tere liye", img: "assets/1.jpeg", url: "https://google.com", isFav: true },
                { title: "bulan", author: "tere liye", img: "assets/2.jpeg", url: "https://gramedia.com", isFav: false },
                { title: "hujan", author: "tere liye", img: "assets/3.jpeg", url: "https://gmedia.com", isFav: true },
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        },
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount("#app")