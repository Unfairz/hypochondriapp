$( document ).ready( function() {

  // var interstitialWait = 1500;
  var interstitialWait = 1;
  var interstitialMedium = 900;
  var interstitialLong = 3000;
  var interstitialFast = 550;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function makeSleep() {
    await sleep(2000);
    console.log("Sleep");

  }

  async function noDiseases() {
    await sleep(500);
    $('.tag_line').text("Analyzing your symptoms...");
    $('.tag_line').fadeIn(100);
    await sleep(interstitialWait);
    $('.tag_line').text("Checking our databases...");
    await sleep(interstitialWait);
    $('.tag_line').text("Searching for possible diagnoses...");
    await sleep(interstitialWait);
    $('.tag_line').text("Sorry, no diseases match your symptoms.");
  }

  async function diagnose(disease) {
    await sleep(500);
    $('.tag_line').text("Analyzing your symptoms...");
    $('.tag_line').fadeIn(100);
    await sleep(interstitialWait);
    $('.tag_line').text("Checking our databases...");
    await sleep(interstitialWait);
    $('.tag_line').text("Searching for possible diagnoses...");
    await sleep(interstitialWait);
    $('.tag_line').text("Hmmmm.");
    await sleep(interstitialWait);
    $('.tag_line').text("This isn't looking good.");
    await sleep(interstitialWait);
    $('.tag_line').text("...");
    await sleep(interstitialWait);
    // TODO: vary the screen message.
    $('.tag_line').css("font-size", "1800%");
    $('.tag_line').text("OH");
    await sleep(interstitialFast);
    $('.tag_line').text("MY");
    await sleep(interstitialFast);
    $('.tag_line').text("GOD.");
    await sleep(interstitialFast);
    $('.tag_line').text("YOU");
    await sleep(interstitialFast);
    $('.tag_line').text("COULD");
    await sleep(interstitialFast);
    $('.tag_line').text("HAVE");
    await sleep(interstitialFast);
    $('.tag_line').css("font-size", "450%");
    $('.tag_line').css("font-weight", "800");
    $('.tag_line').css("color", "rgb(187, 21, 21)");
    $('.tag_line').text(disease.toUpperCase());
    await sleep(interstitialLong);
    $('.tag_line').fadeOut();
    $('.symptoms_form').remove();

  }


  $('.symptoms_button').click(function() {
    var symptoms_input = $("input").val();
    if (symptoms_input == "") {
      return;
    }
    // var symptoms_input = $()
    var symptoms_array = symptoms_input.split(",");
    for (var i = 0; i < symptoms_array.length; i++) {
      symptoms_array[i] = symptoms_array[i].trim().toLowerCase();
      // TODO: get rid of last comma, and empty string
    }

    // TODO: if the disease summary has the words "fatal" in it, add more points to "count"
    var diseases_hash = {};
    for (var disease in diseases) {
      var disease_symptoms = diseases[disease]['symptoms'];
      disease_symptoms.forEach(function(disease_symptom) {
        symptoms_array.forEach(function(user_symptom) {
          if (disease_symptom.trim().toLowerCase() == user_symptom) {
            if (disease in diseases_hash) {
              diseases_hash[disease]['count'] += 1;
              diseases_hash[disease]['symptoms'].push(user_symptom);
              // TODO: display the symptoms matched
            } else {
              diseases_hash[disease] = {'count': 1};
              diseases_hash[disease]['symptoms'] = [user_symptom];
              diseases_hash[disease]['summary'] = diseases[disease]['summary'];
              diseases_hash[disease]['url'] = diseases[disease]['url'];
              diseases_hash[disease]['all_symptoms'] = diseases[disease]['all_symptoms'];
            }
          }
        });
      });
    }

    $('.tag_line').fadeOut(300);
    $('.symptoms_input_box').fadeOut(300);
    $('.symptoms_button').fadeOut(300);

    if (Object.keys(diseases_hash).length == 0) {
      noDiseases();
    } else {
      // var diagnosis;
      // for (var disease in diseases_hash) {
      //   if (disease)
      // }
      diagnose("Capillary Leak Syndrome with Arial Deficiency Type I");
    }





  });



});