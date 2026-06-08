<template>

<section class="about-us-section">

    <div class="about-us">
        <div class="img-bg-1">
            <h2>ABOUT US</h2>
        </div>
        <div class="aboutus-txt">
            <div class="about-us-parag">
                <p>We provide professional sound equipment and technical support for events of all sizes — from private celebrations to large-scale productions. Our team ensures clear, powerful, and reliable audio tailored to each venue and audience. We work closely with event organizers to design and deliver the right sound solution for every situation. From setup to live operation, we handle every technical detail with precision. The result is a seamless audio experience that keeps every event sounding its best.</p>
            </div>
        </div>

    </div>

    <div class="responsibility">

        <div class="responsibility-parag">
            <h2>RESPONSIBILITY</h2>
            <p>With high-quality audio systems, experienced technicians, and reliable setup, we ensure everything runs smoothly from the first sound check to the final moment. Our team carefully plans and configures every detail to match the venue, audience size, and event type, making sure the sound is always clear, balanced, and powerful. We handle the full technical process, including installation, live monitoring, and real-time adjustments during the event. By combining precision engineering with hands-on experience, we reduce risks and eliminate technical issues before they happen. The result is a seamless audio experience that allows artists, speakers, and audiences to focus fully on the event itself.</p>
        </div>

        <div class="img-bg-2"></div>

    </div>





    <div class="our-goal">
        <h2>OUR GOAL</h2>
        <p>Our goal is to make every event sound clear, powerful, and unforgettable.</p>
    </div>



</section>





</template>


<style>

.about-us-section{
    width: 100%;
    overflow-y: scroll;
    overflow: hidden;

}

.about-us > div{
    width: 50%;
}

.about-us{
    width: 100%;
    min-height: 70vh;
    display: flex;
}

.img-bg-1{
    flex: 1;
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(var(--transparent), var(--transparent)),url("/src/assets/bgs/bg_1.jpg");
    background-position: center;
    background-size: cover;
}

.img-bg-1 > h2{
    width: 100%;
    text-align: center;
    text-shadow: 0px 0px 10px var(--bg);
    background-color: var(--transparent);
}

.aboutus-txt{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
}

.about-us-parag{
    width: 60%;
    padding: 2em;
    background-color: var(--fg);
    border: 4px solid var(--accent);
}









.responsibility{
    width: 100%;
    display: flex;
    align-items: center;
}   

.responsibility-parag{
    width: 40%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em;
    padding: 3em;
    border: 4px solid var(--accent);
    background-color: var(--fg);
}
.responsibility-parag > h2{
    text-align: center;
}
.responsibility-parag > p{
    width: 60%;
}

.img-bg-2{
    flex: 1;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(var(--transparent), var(--transparent)),url("/src/assets/bgs/bg_2.jpg");
    background-position: center;
    background-size: cover;
}






.our-goal{
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(var(--transparent), var(--transparent)),url("/src/assets/bgs/bg_6.jpg");
    background-position: center;
    background-size: cover;
    text-shadow: 0px 0px 10px var(--bg);
}



</style>