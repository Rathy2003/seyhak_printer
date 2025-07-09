<template>
    <div>
        <div class="product-card" :style="{backgroundImage: `url(${product.image})`}">
        </div>
        <p>{{ product.name }}</p>
        <span>តម្លៃ៖ 20000៛</span>
    </div>
</template>

<script>
export default{
    props:['product']
}
</script>

<style scoped>
.product-card{
    width: 100%;
    aspect-ratio: 1/1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
p{
    margin-top: 15px;
}
span{
    display: block;
    margin-top: 8px;
}
</style>