/*Script file.*/

/*Function that generates and returns a random number between 0 and 35.*/
function returnRandom() {
    var max = 35;
    return Math.floor(Math.random() * max) + 1;
}

/*Function that displays reviews of Counselling Crows and changes them every 3.6 seconds by interacting with the returnRandom function.*/
function rotateReview() {
    setInterval(function() {
        var testimonies = [36];
        testimonies[0] = "<p><i>'Awesome service, I cannot reccommend Counselling Crows highly enough!'</i><br />Adam, 27</p>";
        testimonies[1] = "<p><i>'Wonderful people, they are right when they say that no one is alone!'</i><br />Diane, 54</p>";
        testimonies[2] = "<p><i>'I love Counselling Crows! I want to volunteer as a Crow when I graduate!'</i><br />Katherine, 24</p>";
        testimonies[3] = "<p><i>'Great work, great value! I cannot believe this service is free!'</i><br />Henrique, 33</p>";
        testimonies[4] = "<p><i>'The Crows helped me through a very difficult divorce, thank you!'</i><br />Elton, 32</p>";
        testimonies[5] = "<p><i>'This service changed my life, I am forever grateful!'</i><br />Brandy, 28</p>";
        testimonies[6] = "<p><i>'Amazing! I cannot reccomend Jenny as a therapist enough!'</i><br />Terry, 26</p>";
        testimonies[7] = "<p><i>'Counselling Crows rock! No better service available, period.'</i><br />Charlie, 43</p>";
        testimonies[8] = "<p><i>'Make the call! This service saves lives! God bless Counselling Crows!</i><br />Antonio, 30</p>";
        testimonies[9] = "<p><i>'When I got my diagnosis, I lost all hope. Counselling Crows helped me find it again!'</i><br />Geppetto, 57</p>";
        testimonies[10] = "<p><i>'I was addicted to alcohol when I first contacted Counselling Crows. I am now 36 weeks sober!'</i><br />Jack, 36</p>";
        testimonies[11] = "<p><i>'The Crows do not just take you under their wings, they hold on and make you fly'</i><br />Edward, 36</p>";
        testimonies[12] = "<p><i>'I love, love, love Counselling Crows!'</i><br />Jessica, 17</p>";
        testimonies[13] = "<p><i>'I had to make a very big decision and was really stressed, the Crows helped me find the answer!'</i><br />Harry, 28</p>";
        testimonies[14] = "<p><i>'I was very anxious to make the first call, but I am so glad I did!'</i><br />Kyle, 27</p>";
        testimonies[15] = "<p><i>'Ek kan nie praat Engels nie, maar dit is nie a probleem nie!'</i><br />Faf, 29</p>";
        testimonies[16] = "<p><i>'I love rooks, hoodies, magpies, and jackdaws, but these Crows are my favourite!'</i><br />Erik, 69</p>";
        testimonies[17] = "<p><i>'Jacob is very helpful, he is incredible!'</i><br />Cleo, 22</p>";
        testimonies[18] = "<p><i>'My only regret about phoning the Crows is that I waited so long to do so!'</i><br />Michael, 50</p>";
        testimonies[19] = "<p><i>'Finally, free talk therapy that actually works!'</i><br />Tony, 68</p>";
        testimonies[20] = "<p><i>'I was depressed about growing old, but the Crows made me feel ten years younger!'</i><br />Martin, 79</p>";
        testimonies[21] = "<p><i>'I was ashamed of my past, now I am proud of my present!'</i><br />Montel, 47</p>";
        testimonies[22] = "<p><i>'If I ever went to prison, Counselling Crows would be my one phone call!'</i><br />Joey, 49</p>";
        testimonies[23] = "<p><i>'All the trainees at Counselling Crows are so sweet!'</i><br />Caroline, 80</p>";
        testimonies[24] = "<p><i>'The Crows only show love and love is the best thing they do!'</i><br />Theodore, 40</p>";
        testimonies[25] = "<p><i>'I needed to move on from something very embarrassing and the Crows helped me do just that!'</i><br />Gary, 60</p>";
        testimonies[26] = "<p><i>'With the great Crows' help, I was able to move on from my ceaselessly returning  past!'</i><br />Nick, 30</p>";
        testimonies[27] = "<p><i>'I struggled with insomnia, but the Crows have 24/7 support and that really helped me!'</i><br />Tyler, 31</p>";
        testimonies[28] = "<p><i>'For years I had painful PTSD, slowly I am becoming me again!'</i><br />Benjamin, 39</p>";
        testimonies[29] = "<p><i>'I forgot who I was, but the Crows helped me redefine myself!'</i><br />Marshall, 38</p>";
        testimonies[30] = "<p><i>'It is never too late to seek support, you are worth it!'</i><br />David, 52</p>";
        testimonies[31] = "<p><i>'The Crows are all so kind, I think they have changed everybody's perceptions of crows!'</i><br />Belle, 64</p>";
        testimonies[32] = "<p><i>'I will never forget what the Crows have done for me and so many others!'</i><br />Ileene, 55</p>";
        testimonies[33] = "<p><i>'Simply said, the Crows made me happier!'</i><br />Aoife, 26</p>";
        testimonies[34] = "<p><i>'I want to live again!'</i><br />Donna, 46</p>";
        testimonies[35] = "<p><i>'To the Counselling Crows!'</i><br />Summer, 41</p>";
        document.getElementById("testimonies").innerHTML = testimonies[returnRandom()] + "<br />" + testimonies[returnRandom()] + "<br />" + testimonies[returnRandom()] + "<br />" + testimonies[returnRandom()] + "<br />" + testimonies[returnRandom()] + "<br />" + testimonies[returnRandom()];
    }, 3600);
}

/*Function that hides the thumbnail images and unhides an expanded and explained version of the clicked image.*/
function switchScene(profileid) {
    document.getElementById("gallery").style.display = "none";
    document.getElementById(profileid).style.display = "block";
}

/*Function that validates the name, telephone, email, and message sections of the form by setting length and character parameters with alerts.*/
function finaliseForm() {
    var name = document.getElementById("name");
    var telephone = document.getElementById("telephone");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    if (name.value.length < 3 || name.value.length > 36) {
        alert("Please enter a name that is 3-36 characters!");
        return;
    } else if (!name.value.match(/^[a-zA-Z\s]*$/)) {
        alert("Please enter a name that only has letters a-z and spaces!");
        return;
    } else if (telephone.value.length < 9 || telephone.value.length > 10) {
        alert("Please enter a telephone number that is 9-10 characters!");
        return;
    } else if (!telephone.value.match(/^[0-9]*$/)) {
        alert("Please enter a telephone number that only has numbers 0-9!");
        return;
    } else if (email.value.length < 6 || email.value.length > 36) {
        alert("Please enter an email that is 6-36 characters!");
        return;
    } else if (message.value.length < 36 || message.value.length > 360) {
        alert("Please enter a message that is 36-360 characters!");
        return;
    } else {
        alert("Form successfully submitted!");
    }
}