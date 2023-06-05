<script>
import { store } from '../store'

export default {
    name: "AppFooter",
    props: ["popularTopics", "recentTopics", "latestReplies"],
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <div class="container-footer-1">
        <h2>Subscribe to our Newsletter</h2>
        <div class="input-info">
            <input type="text" name="" id="" placeholder="insert your email*">
            <button> <strong>SEND</strong> </button>
        </div>
    </div>



    <div class="container-footer-2">
        <div class="container-flex-footer">
            <div class="box">
                <h6>AVADA TECH FORUM</h6>
                <span>Sed semper, nisl id feugiat eleifend, erat est eigssim felis, quis auctor elit enim nec ante. Cras et
                    nibh risud. Pellentesque non mi sit amet mi intermentum</span>
            </div>
            <div class="box">
                <h6>POPULAR TOPICS</h6>
                <div v-for="popularTopic in popularTopics">
                    <p>{{ popularTopic.text }}</p>
                    <hr>
                </div>

            </div>
            <div class="box">
                <h6>RECENT TOPICS</h6>
                <div v-for="recentTopic in recentTopics">
                    <p>{{ recentTopic.text }}</p>
                    <hr>
                </div>
            </div>
            <div class="box">
                <h6>LATEST REPLIES</h6>
                <div v-for="latestReplie in latestReplies">
                    <p>{{ latestReplie.text }}</p>
                    <hr>
                </div>
            </div>

        </div>
        <hr>

        <div class="container-footer-3">
            <div class="container-flex-2">
                <div class="box-left">
                    <span class="font"><font-awesome-icon icon="fa-regular fa-copyright" /> Copyright 2012 - 2020 | Avada
                        Theme by <span class="font-2">Theme Fusion</span> | all Rights Reserved | Powered by <span
                            class="font-2">WordPress</span> </span>
                </div>
                <div class="box-right">
                    <div id="color-1"><font-awesome-icon icon="fa-brands fa-facebook-f" style="color: white;" /></div>
                    <div id="color-2"><font-awesome-icon icon="fa-brands fa-twitter" style="color: white;" /></div>
                    <div id="color-3"><font-awesome-icon icon="fa-brands fa-instagram" style="color: white;" /></div>
                    <div id="color-4"><font-awesome-icon icon="fa-brands fa-youtube" style="color: white;" /></div>
                </div>


            </div>
            <div id="button"><button><font-awesome-icon icon="fa-solid fa-chevron-up" style="color: white;" /></button>
            </div>

        </div>

    </div>
</template>

<style scoped lang="scss">
@use '../style.scss' as *;

.container-footer-1 {
    height: 200px;
    background-color: $color-4;

    h2 {
        display: flex;
        justify-content: center;
        padding-top: 50px;
        font-family: serif;
    }

    .input-info {
        display: flex;
        justify-content: center;
        padding-top: 30px;

        button {
            width: 148px;
            height: 40px;
            margin-left: 20px;
            background-color: black;
            color: $color-white;
            border: none;
            cursor: pointer;
            border-radius: 2px;
        }

        button:active {
            transform: translateY(1px);

        }

        input {
            width: 325px;
            border: 1px solid #C0C0C0;
            padding-left: 5px;
        }
    }
}


.container-footer-2 {
    height: 300px;
}

.container-flex-footer {
    width: 70%;
    display: flex;
    margin: auto;
    height: 300px;
    justify-content: space-between;


    .box {
        width: 23%;
        height: 300px;
        display: flex;
        flex-direction: column;

        h6 {
            margin-top: 35px;
            margin-bottom: 20px;
        }

        span {
            font-size: x-small;
            color: $color-5;
        }

        p {
            font-size: x-small;
            margin-bottom: 10px;
            margin-top: 10px;
        }
    }


}

hr {
    color: $color-4;
    border-top: none;
    border-left: none;
    border-right: none;
}

.container-footer-3 {
    height: 70px;

    #button {
        display: flex;
        justify-content: flex-end;
        margin-right: 60px;

        button {
            width: 36px;
            height: 30px;
            border: none;
            border-radius: 4px;
            background-color: $color-5;
        }
    }

    .container-flex-2 {
        width: 70%;
        display: flex;
        margin: auto;
        height: 70px;
    }

    .box-left {
        width: calc(100% / 3 * 2);
        display: flex;
        align-items: center;


        .font {
            font-size: x-small;
            color: $color-5;
        }

        .font-2 {
            font-size: x-small;
            color: black;
        }
    }

    .box-right {
        width: calc(100% / 3);
        display: flex;
        justify-content: end;
        align-items: center;


        div {
            width: 30px;
            height: 30px;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #color-1 {
            background-color: #3b5998;
            font-size: small;

        }

        #color-2 {
            background-color: #00acee;
            font-size: small;
            margin-left: 10px;
        }

        #color-3 {
            background-color: #3f729b;
            font-size: small;
            margin-left: 10px;
        }

        #color-4 {
            background-color: #c4302b;
            font-size: small;
            margin-left: 10px;
        }


    }
}
</style>