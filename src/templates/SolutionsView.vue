<template>

<section class="solutions-section">

    <div class="solutions-heading">
        <h2>SOLUTIONS</h2>
    </div>
    <div class="solution-cards-wrapper">

        <div class="solution-card">
            <div class="solution-head">
                <h3>Live Sound Engineering</h3>
            </div>
            <div class="solution-text">
                <p>We provide professional front-of-house and monitor mixing for concerts, festivals, and live performances. Our engineers ensure balanced, powerful, and clear sound in any venue.</p>
            </div>
        </div>

        


        <div class="solution-card">
            <div class="solution-head">
                <h3>PA System Setup & Operation</h3>
            </div>
            <div class="solution-text">
                <p>Design and deployment of scalable sound systems tailored to indoor and outdoor events. We handle full setup, tuning, and real-time system control for optimal coverage and clarity.</p>
            </div>
        </div>





        <div class="solution-card">
            <div class="solution-head">
                <h3>Event Technical Support</h3>
            </div>
            <div class="solution-text">
                <p>On-site technical specialists managing all audio equipment before and during the event. We ensure smooth operation, fast troubleshooting, and uninterrupted performance.</p>
            </div>
        </div>





        <div class="solution-card">
            <div class="solution-head">
                <h3>Equipment Rental</h3>
            </div>
            <div class="solution-text">
                <p>High-quality professional audio systems available for events of any size. From speakers and mixers to microphones and processing units, fully tested and ready for use.</p>
            </div>
        </div>






        <div class="solution-card">
            <div class="solution-head">
                <h3>Festival & Concert Production</h3>
            </div>
            <div class="solution-text">
                <p>Complete audio solutions for large-scale events, including system design, stage setup, and multi-zone sound distribution for complex environments.</p>
            </div>
        </div>






        <div class="solution-card">
            <div class="solution-head">
                <h3>Corporate Event Audio</h3>
            </div>
            <div class="solution-text">
                <p>Reliable and clean sound solutions for conferences, presentations, and brand events. Focused on speech clarity, consistency, and professional delivery.</p>
            </div>
        </div>








        <div class="solution-card">
            <div class="solution-head">
                <h3>Audio System Design</h3>
            </div>
            <div class="solution-text">
                <p>Custom design of sound systems for venues, clubs, halls, and outdoor spaces. Optimized for acoustics, coverage, and performance efficiency.</p>
            </div>
        </div>







        <div class="solution-card">
            <div class="solution-head">
                <h3>On-Site Sound Crew</h3>
            </div>
            <div class="solution-text">
                <p>Experienced technicians available for full event support, ensuring fast setup, precise tuning, and smooth live operation from start to finish.</p>
            </div>
        </div>





    </div>

</section>



</template>

<style>

.solution-cards-wrapper{
    width: 100%;
    padding: 30px 10%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.solutions-heading > h2{
    text-align: center;
}


.solution-card{
    padding: .75em;
    background-color: var(--fg);
}

.solution-card > div{
    width: 100%;
}

.solution-head > h3{
    margin-bottom: .5em;
}

.solution-text > p{
    font-size: 1.25vw;
}





@media (max-width: 900px) {
    .solution-cards-wrapper{
        grid-template-columns: repeat(1, 1fr);
    }

    .solution-text > p{
        font-size: 3.5vw;
    }

}

</style>

<script></script>