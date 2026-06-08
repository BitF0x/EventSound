<template>
    <div class="hero-wrapper">


        <div class="hero-txt">
            <h1>Precision Sound for Live Experiences</h1>
            <span>We design and deliver professional audio systems for concerts, festivals, and corporate events across Europe.</span>
        </div>

    </div>



</template>


<style>


    .hero-wrapper{
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image:linear-gradient(var(--transparent),var(--transparent) ), url("../assets/bgs/bg_3.jpg");
        background-position: center;
        background-size: cover;
    }

    .hero-txt{
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--transparent);
    }

    .hero-txt > h1{
        text-align: center;
        color: var(--accent);
        font-size: 5vw;
        text-shadow: 0px 0px 10px var(--bg);
    }
    .hero-txt > span{
        width: 70%;
        font-size: 1.5vw;
        font-weight: bold;
        text-shadow: 0px 0px 10px var(--bg);

    }


@media (max-width: 900px) {

    .hero-txt > h1{
        font-size: 10vw;
    }
    .hero-txt > span{
        width: 100%;
        font-size: 5vw;
        padding: 1em .75em;
    }

}

</style>