<template>

<section class="contacts-section">

<div class="contact-left">

    <div class="contact-text">
        <h2>CONTACT US</h2>
        <p>Get in touch to discuss your event requirements, equipment needs, or technical support. Our team will respond quickly and help you plan the right audio solution.</p>
    </div>

</div>




<div class="contact-right">
    <form>

        <div class="input-cntr">
            <label>Name *</label>
            <input type="text">
        </div>

        <div class="input-cntr">
            <label>Last name *</label>
            <input type="text">
        </div>


        <div class="input-cntr">
            <label>Email *</label>
            <input type="email">
        </div>



        <div class="input-cntr">
            <label>Subject</label>
            <input type="text">
        </div>



        <div class="input-cntr">
            <label>Message</label>
            <textarea></textarea>
        </div>



        <div class="input-cntr">
            <button>SEND</button>
        </div>


    </form>
</div>


</section>



</template>


<style>


.contacts-section{
    display: flex;
    height: 90vh;
}


.contact-left, .contact-right{
    width: 50%;
    display: flex;
    flex-direction: column;
}


.contact-left{
    justify-content: space-between;
}

.contact-text{
    width: 70%;
    margin: auto;
    border: 4px solid var(--accent);
    padding: .75em;
}

.contact-img{
    width: 100%;
    height: 50%;

    background-image: url("/src/assets/bgs/bg_5.jpg");
    background-position: center;
    background-size: cover;
}





.contact-right{

    display: flex;
    align-items: center;

}

.contact-right > form{
    width: 50%;
}


.input-cntr{
    display: flex;
    flex-direction: column;
    margin: .75em 0;
    padding: .5em 0;
    border-bottom: 1px solid var(--fg);
}
.input-cntr:last-child{
    border: none;
}


label{
    padding: .125em .25em;
}

label, input, textarea{
    font-size: 1vw;
}

input, textarea{
    background-color: var(--fg);
    border: 1px solid var(--accent);
    border-radius: 5px;
    padding: .25em .125em;
}

textarea{
    resize: none;
    height: 300px;
}

.input-cntr > button{
    border: 1px solid var(--accent);
    border-radius: 5px;
    background-color: var(--bg);
    font-size: 1.5vw;
    font-weight: bold;
    padding: .25em 0;
    transition: .25s;
    cursor: pointer;
}
.input-cntr > button:hover{
    color: var(--bg);
    background-color: var(--accent);
}

@media (max-width: 900px) {
    .contacts-section{
        flex-direction: column;
        padding: 1em 0;
    }    

    .contact-left, .contact-right{
        width: 100%;
    }

    .contact-text{
        width: 90%;
    }
    .contact-text > h2{
        text-align: center;
    }
    .contact-text > p{
        font-size: 4vw;
    }

    .contact-right > form{
        width: 100%;
        padding: 1em 1.125em;
    }

    label, input, textarea, .input-cntr > button{
        font-size: 4vw;
    }

    .input-cntr > button{
        padding: 1em 0;
    }

}

</style>