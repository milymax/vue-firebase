console.log("Hello, Vue!")

const app = Vue.createApp({
    data() {
        return {
            showBio: true,
            alamat: "Jl. Ahmad Yani No.12",
            website: "www.gmedia.com",
            title: "",
            author: "",
            x: 0,
            y: 0,
            myBio: [
                { title: "pulang", author: "tere liye", img: "assets/1.jpeg", url: "https://google.com", isFav: true },
                { title: "bulan", author: "tere liye", img: "assets/2.jpeg", url: "https://gramedia.com", isFav: false },
                { title: "hujan", author: "tere liye", img: "assets/3.jpeg", url: "https://gmedia.com", isFav: true },
            ]
        }
    },
    methods: {
        toogleShowBooks() {
            this.showBio = !this.showBio
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
        toogleFavBooks() {
            this.myBio = !this.myBio
        }
    }
})

app.mount("#app")