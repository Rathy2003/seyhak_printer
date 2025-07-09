<template>
    <div style="margin: 20px 0;" id="top-bar">
        <h1>ធៀបការ</h1>
        <div id="price-filter">
            <div>
                <label for="start-price">តម្លៃចាប់ពី</label>
                <input type="text" placeholder="០៛">
            </div>
            &nbsp;&nbsp;
            <div>
                <label for="start-price">ដល់</label>
                <input type="text" placeholder="០៛">
            </div>

        </div>
    </div>

    <div id="product-list">
        <ProductCard v-for="product in products" :key="product.id" :product="product"/>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';

export default{
    components:{
        ProductCard
    },
    data(){
        return{
            products: [
                {
                    id:1,
                    name: 'Invitaion Card 001',
                    image:'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg'
                },
                {
                    id:2,
                    name: 'Invitaion Card 002',
                    image:'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg'
                },
                {
                    id:3,
                    name: 'Invitaion Card 003',
                    image:'https://i.pinimg.com/736x/61/81/f2/6181f24ea34c4b91f847bf550c81df3b.jpg'
                },
                {
                    id:4,
                    name: 'Invitaion Card 004',
                    image:'https://nutcaseshop.com/cdn/shop/files/9_9eac3938-c9bf-460e-bd1e-d6b794b7f27d.jpg?v=1707213823'
                },
                {
                    id:5,
                    name: 'Invitaion Card 005',
                    image:'https://www.biziv.com/images/marriage-invitations.jpg'
                },
                {
                    id:6,
                    name: 'Invitaion Card 006',
                    image:'/photo_2025-07-09_10-04-07.jpg'
                },
                {
                    id:7,
                    name: 'Invitaion Card 007',
                    image:'/photo_2025-07-09_10-56-21.jpg'
                }
            ]
        }
    }
}

</script>

<style scoped>
#product-list{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

#top-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;

    & div#price-filter{
        display: flex;

        & div{
            display: flex;
            align-items: center;
            gap: 15px;

            & input{
                border-radius: 5px;
                border: 1px solid #ccc;
                padding: 8px 10px;
            }
        }
    }
}

@media all and (max-width: 710px){
    #top-bar{
        align-items: start;
        flex-direction: column;
        gap: 15px;
    }
}
</style>