<script>
import { store } from '../store'

export default {
    name: "AppMain",
    props: ["cards1", "cards2", "cards3"],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <div class="container-1">
            <div class="container-flex">
                <h1>Tech Forum!</h1>
                <p>Discuss all the latest technology news and trends</p>
                <button><strong>GET AVADA NOW!</strong></button>
            </div>
        </div>

        <div class="container-2">
            <h5>AVADA FORUM IS THE PLACE TO BE</h5>
            <p>In quis lectus sed leo elementum faucibus in dapibus dictum.<br><br>
                Nulla molestie tortor nec lectus venenatis,sed blandit dui finibus.<br><br>
                dolor at, bibendum purus. Donec vehicula nec tortor ac finibus.
            </p>
        </div>

        <div class="container-3">
            <h5 id="title">PHASELLUS EGET METUS</h5>
            <h1>All the latest news</h1>
            <hr>
            <div class="container-flex-2">
                <div class="box-card" v-for="card in cards1">
                    <img class="box-img" :src="card.image" alt="">
                    <h5>{{ card.title }}</h5>
                    <h6>{{ card.date }} | Comments {{ card.comments }}</h6>
                    <p>{{ card.info }}</p>
                </div>
            </div>
        </div>

        <div class="container-4">
            <div class="container-flex">
                <h4>FEATURED ARTICLE</h4>
                <h1>Cras malesuada et orci eget pharetra</h1>
                <p><small> In quis lectus sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus
                        venenatis,
                        sed blandit due, dolor at bibendum sadips ets ipsums dolores ficilis uns leo lectus
                    </small></p>
                <button><strong>READ MORE</strong></button>
            </div>
        </div>


        <div class="container-3">
            <div class="container-flex-2">
                <div class="box-card" v-for="card in cards2">
                    <img class="box-img" :src="card.image" alt="">
                    <h5>{{ card.title }}</h5>
                    <h6>{{ card.date }} | Comments {{ card.comments }}</h6>
                    <p>{{ card.info }}</p>
                </div>
            </div>
        </div>


        <div class="container-5">
            <div class="box-left">
                <div class="container-flex">
                    <h4>REVIEWED PRODUCT</h4>
                    <h1>Muris viverra atisan ipsum eget felis primis efficitur varius</h1>
                    <p><small> In quis lectus sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus
                            venenatis,sed blandit due, dolor at bibendum
                        </small></p>
                    <button><strong>READ MORE</strong></button>
                </div>
            </div>
            <div class="box-right">
                <h2>Tutorials & Guides</h2>
                <hr>
                <div class="container-flex-3">
                    <div class="box-card-2" v-for="card in cards3">
                        <div class="box-card-2-img">
                        <img :src="card.image" alt="">
                    </div>
                    <div class="box-card-2-info">
                        <h5>{{ card.title }}</h5>
                        <h6>{{ card.date }} | Comments {{ card.comments }}</h6>
                    </div>
                </div>






                    <!-- <div class="box-card-2" v-for="card in cards3">
                                                                                                                                                                                                                        <div class="box-card-2-img">
                                                                                                                                                                                                                            <img :src="card.image" alt="">
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                        <div class="box-card-info">
                                                                                                                                                                                                                            <h5>{{ card.title }}</h5>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                    </div> -->




                </div>

            </div>
        </div>



    </main>
</template>


<style scoped lang="scss">
@use '../style.scss' as *;


// Container-1
.container-1 {
    height: 500px;
    background-image: url(../assets/img/home_slider_bg.jpg);
    background-size: cover;

    h1 {
        color: white;
        font-size: 90px;
    }

    p {
        color: white;
    }

    button {
        width: 200px;
        height: 40px;
        color: white;
        background: $color-1;
        border: none;
        border-radius: 3px;
        margin-top: 30px;
        cursor: pointer;
    }
}

.container-flex {
    width: 70%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

//


// container-2
.container-2 {
    height: 250px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    h5 {
        color: #191919;
        padding-bottom: 20px;
    }

    p {
        color: #707070;
        font-family: 'monospace';
        text-align: center;
    }
}

//


// Container-3
.container-3 {
    width: 70%;
    margin: auto;

    #title {
        text-align: center;
        margin-top: 40px;
        margin-bottom: 20px;
        color: #191919;
    }

    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    hr {
        width: 10%;
        margin: auto;
        border: 1px solid #ff8d61;
    }
}

.container-flex-2 {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}

.box-card {
    width: 30%;
    height: 300px;

    h6 {
        color: #707070;
        margin-top: 5px;
    }

    p {
        color: #707070;
        font-size: small;
        margin-top: 5px;
    }
}

.box-img {
    width: 100%;
    height: 150px;
}

//


// Container-4
.container-4 {
    height: 450px;
    background-image: url(../assets/img/featured_article_1_bg.jpg);
    width: 70%;
    margin: auto;
    background-size: cover;

    h4,
    h1,
    p {
        color: white;
        margin-bottom: 20px;
    }


    button {
        width: 150px;
        height: 40px;
        background-color: #191919;
        border: none;
        color: white;
        border-radius: 2px;
        cursor: pointer;
    }


}

//


// Container-5
.container-5 {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;

}

.box-left {
    display: flex;
    width: 65%;
    height: 400px;
    background-image: url(../assets/img/featured_article_2_bg.jpg);
    background-size: cover;
    flex-direction: column;
    justify-content: center;

    h4,
    h1,
    p {
        color: white;
        margin-bottom: 20px;
    }

    button {
        width: 150px;
        height: 40px;
        background-color: #191919;
        border: none;
        color: white;
        border-radius: 2px;
        cursor: pointer;
    }
}

.box-right {
    width: 30%;
    height: 400px;

    hr {
        width: 30%;
        border: 1px solid #ff8d61;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .container-flex-3 {
        display: flex;
        flex-direction: column;
        height: 310px;
        justify-content: space-between;
    }

    .box-card-2 {
        width: 100%;
        height: 90px;
        display: flex;
    }

    .box-card-2-img {
        height: 90px;

        img {
            width: 100%;
            height: 90px;
        }
    }

    .box-card-2-info {
        width: calc(100% / 3 * 2);
        height: 90px;

        h6 {
            color: #707070;
            margin-top: 5px;
            font-size: x-small;
        }

        h5,
        h6 {
            margin-left: 10px;
        }
    }
}

//
</style>