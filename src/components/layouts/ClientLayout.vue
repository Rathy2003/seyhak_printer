<template>
    <div id="container">
        <header>
            <div>
                សីហាក់បោះពុម្ភ
            </div>
        </header>
        <nav id="nav-bar">
            <ul>
                <li>
                    <router-link to="/">ទំព័រដើម</router-link>
                </li>
                <li>
                    <router-link to="/">ធៀបការ</router-link>
                </li>
                <li>
                    <router-link to="/">ធៀបបុណ្យ</router-link>
                </li>
            </ul>
        </nav>

        <main>

            <div id="feature-wrapper">
                <div id="category-wrapper">

                </div>
                <div id="slider-wrapper"  style="height: 100%; display: flex;">
                    <swiper
                        :modules="modules"
                        :slides-per-view="1"
                        :space-between="50"
                        navigation
                        :pagination="{ clickable: true }"
                        :autoplay="{ delay: 2500, disableOnInteraction: false }"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        id="mySlider"
                        >
                        <swiper-slide v-for="image in images" :key="image.url"><img class="img-slider" :src="image.url"></swiper-slide>
                    </swiper>
                </div>
            </div>

            <RouterView />
        </main>
    </div>
</template>

<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default {
    components: {
         Swiper,
      SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation, Pagination,Autoplay, Scrollbar, A11y],
            images: [
                {
                    url: 'https://ttprinting.wordpress.com/wp-content/uploads/2021/01/06.jpg?w=1024',
                },
                {
                    url: 'https://s6.kh1.co/__image/w=1200,h=630,q=100/c2/c29eef98755f60926d8a28c786962b929dc4d444.jpg',
                },
                {
                    url: 'https://ttprinting.wordpress.com/wp-content/uploads/2021/01/06.jpg?w=1024',
                },
                // Add as many as you like!
            ],
            // Responsive breakpoints
            breakpoints: {
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        }
    },
    methods: {
        onSwiper(swiper) {
            console.log(swiper);
        },
        onSlideChange() {
            console.log('slide change');
        }
    }
}
</script>

<style>
#container {
    width: 90%;
    margin: 0 auto;

    & header {
        margin: 20px 0;
    }

    & #nav-bar {
        background: #2b2a2a;
        color: white;
        padding: 15px;
    }
    padding-bottom: 25px;
}

nav#nav-bar ul {
    display: flex;
    list-style: none;
    gap: 15px;

    & li a {
        color: white;
        text-decoration: none;
    }
}

main #feature-wrapper {
    display: flex;
    gap: 15px;
    height: 400px;

    & #category-wrapper {
        background-color: #ccc;
        min-width: 300px;
    }

    & #slider-wrapper {
        background-color: #999;
        width: calc(100% - 315px);
    }
}
#img-slider{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>