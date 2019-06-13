console.log("build.js running");


// profile pics and logo(on about.html aren't uploaded to cloudinary)
const imagesURL = {
  //nature photos
  "img/nature_photography/Puffins_Fratercula_arctica_at_the_Bempton_Cliffs_UK.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664091/Sarah%20portfolio/Puffins_Fratercula_arctica_at_the_Bempton_Cliffs_UK.jpg",
  "img/nature_photography/Eggs_of_an_Owl_butterfly_Caligo_memnon.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664093/Sarah%20portfolio/Eggs_of_an_Owl_butterfly_Caligo_memnon.jpg",
  "img/nature_photography/The_cadaver_of_a_coyote_Canis_latrans_found_at_Arches_National_Park_USA.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664089/Sarah%20portfolio/The_cadaver_of_a_coyote_Canis_latrans_found_at_Arches_National_Park_USA.jpg",
  "img/nature_photography/Arches_National_Park.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664090/Sarah%20portfolio/Arches_National_Park.jpg",
  "img/nature_photography/Giraffe_Giraffa_camelopardalis.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664088/Sarah%20portfolio/Giraffe_Giraffa_camelopardalis.jpg",
  "img/nature_photography/Grooming_adult_mute_swan_Cygnus_olor.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664088/Sarah%20portfolio/Grooming_adult_mute_swan_Cygnus_olor.jpg",
  "img/nature_photography/Burrowing_owl_Athene_cunicularia.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664087/Sarah%20portfolio/Burrowing_owl_Athene_cunicularia.jpg",
  "img/nature_photography/Iridescent_feathers_on_a_Feral_Pigeon_Columbia_livia_domestica.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664087/Sarah%20portfolio/Iridescent_feathers_on_a_Feral_Pigeon_Columbia_livia_domestica.jpg",
  "img/nature_photography/Merlin_Falco_columbarius.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664085/Sarah%20portfolio/Merlin_Falco_columbarius.jpg",
  "img/nature_photography/Village_in_Bukovina_Romania.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664085/Sarah%20portfolio/Village_in_Bukovina_Romania.jpg",
  "img/nature_photography/Red_deer_Cervus_elaphus_and_carrion_crow_Corvus_corone_at_Wollaton_Park_UK.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664087/Sarah%20portfolio/Red_deer_Cervus_elaphus_and_carrion_crow_Corvus_corone_at_Wollaton_Park_UK.jpg",
  "img/nature_photography/Cliff_chipmunk_Tamias_dorsalis_at_Bryce_Canyon.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664085/Sarah%20portfolio/Cliff_chipmunk_Tamias_dorsalis_at_Bryce_Canyon.jpg",
  "img/nature_photography/Antelope_Canyon_USA.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664082/Sarah%20portfolio/Antelope_Canyon_USA.jpg",
  "img/nature_photography/Reforestation_of_the_Whisby_Nature_Reserve_UK_with_birch_woodland.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664082/Sarah%20portfolio/Reforestation_of_the_Whisby_Nature_Reserve_UK_with_birch_woodland.jpg",
  "img/nature_photography/Arthur_s Seat_extinct_volcano_Edinburgh.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540663693/Sarah%20portfolio/Arthur_s_Seat_extinct_volcano_Edinburgh.jpg",
  "img/nature_photography/Peak_District_National_Park_UK.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664079/Sarah%20portfolio/Peak_District_National_Park_UK.jpg",
  "img/nature_photography/One_of_the_250_species_of_bees_in_the_UK.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664078/Sarah%20portfolio/One_of_the_250_species_of_bees_in_the_UK.jpg",
  "img/nature_photography/Edible_crab_Cancer_pagurus_at_a_rock_pool_at_Filey_Brigg_UK.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664076/Sarah%20portfolio/Edible_crab_Cancer_pagurus_at_a_rock_pool_at_Filey_Brigg_UK.jpg",
  "img/nature_photography/Larva_of_a_zebra_longwing_Heliconus_charithonia_equipped_with_impressive_spikes_for_its_defense.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664077/Sarah%20portfolio/Larva_of_a_zebra_longwing_Heliconus_charithonia_equipped_with_impressive_spikes_for_its_defense.jpg",
  "img/nature_photography/Trees_at_Peak_District_National_Park_UK.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664079/Sarah%20portfolio/Trees_at_Peak_District_National_Park_UK.jpg",
  "img/nature_photography/Fly_Agaric_Amanita_muscaria.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664079/Sarah%20portfolio/Fly_Agaric_Amanita_muscaria.jpg",
  "img/nature_photography/Sheep_in_Llanidloes_UK.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664079/Sarah%20portfolio/Sheep_in_Llanidloes_UK.jpg",
  "img/nature_photography/Sherwood_forest_UK.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540664080/Sarah%20portfolio/Sherwood_forest_UK.jpg",
  //lab photos
  "img/lab_photography/Daphnia_pulex.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720986/Sarah%20portfolio/Lab_photos/Daphnia_pulex.jpg",
  "img/lab_photography/Polyphemus_pediculus.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720990/Sarah%20portfolio/Lab_photos/Polyphemus_pediculus.jpg",
  "img/lab_photography/Dikerogammerus_haemophabes_precopulatory_pairing.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720984/Sarah%20portfolio/Lab_photos/Dikerogammerus_haemophabes_precopulatory_pairing.jpg",
  "img/lab_photography/Two_crustaceans_of_the_order_Cyclopoidea.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720993/Sarah%20portfolio/Lab_photos/Two_crustaceans_of_the_order_Cyclopoidea.jpg",
  "img/lab_photography/Otolith_of_a_Yellowbar_Angelfish_Pomacanthus_maculosus.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720989/Sarah%20portfolio/Lab_photos/Otolith_of_a_Yellowbar_Angelfish_Pomacanthus_maculosus.jpg",
  "img/lab_photography/Drosphila_suzukii_ovaries.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720984/Sarah%20portfolio/Lab_photos/Drosphila_suzukii_ovaries.jpg",
  "img/lab_photography/Swimming_Daphnia_magna.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720992/Sarah%20portfolio/Lab_photos/Swimming_Daphnia_magna.jpg",
  "img/lab_photography/Daphnia_magna.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720984/Sarah%20portfolio/Lab_photos/Daphnia_magna.jpg",
  "img/lab_photography/Bloody_red_shrimp_Hemimysis_anomala.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720984/Sarah%20portfolio/Lab_photos/Bloody_red_shrimp_Hemimysis_anomala.jpg",
  "img/lab_photography/SEM_image_of_a_common_rough_woodlouse_Porcelio_scaber.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720991/Sarah%20portfolio/Lab_photos/SEM_image_of_a_common_rough_woodlouse_Porcelio_scaber.jpg",
  "img/lab_photography/Crangonyx pseudogracilis_SEM.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720984/Sarah%20portfolio/Lab_photos/Crangonyx_pseudogracilis_SEM.jpg",
  "img/lab_photography/SEM_image_of_a_water_slater_Asellus_aquaticus.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720990/Sarah%20portfolio/Lab_photos/SEM_image_of_a_water_slater_Asellus_aquaticus.jpg",
  "img/lab_photography/Sexual_dimorphism_of_Common_Blues_Polyommatus_icarus.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720991/Sarah%20portfolio/Lab_photos/Sexual_dimorphism_of_Common_Blues_Polyommatus_icarus.jpg",
  "img/lab_photography/Elephant_hawk_moth_Deilephila_elpenor.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720986/Sarah%20portfolio/Lab_photos/Elephant_hawk_moth_Deilephila_elpenor.jpg",
  "img/lab_photography/Scales_of_a_Blue_morpho_butterfly_Morpho_peleides.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720993/Sarah%20portfolio/Lab_photos/Scales_of_a_Blue_morpho_butterfly_Morpho_peleides.jpg",
  "img/lab_photography/Skull_of_an_owl.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720992/Sarah%20portfolio/Lab_photos/Skull_of_an_owl.jpg",
  "img/lab_photography/Skull_of_a_green_wood_pecker_Picus_viridis.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720991/Sarah%20portfolio/Lab_photos/Skull_of_a_green_wood_pecker_Picus_viridis.jpg",
  "img/lab_photography/Blaschka_glass_model_of_a_jellyfish.jpg": "https://res.cloudinary.com/doagarfl4/image/upload/v1540720984/Sarah%20portfolio/Lab_photos/Blaschka_glass_model_of_a_jellyfish.jpg"
}

if(process.argv.slice(2)[0] == "--production"){
  process.env.NODE_ENV = "production";
  console.log("production mode on");
}

const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


let inputFolder = "src/views";
let outputFolder = "src";


let views = fs.readdirSync(inputFolder);
writeFiles(views);

function writeFiles(views){
  let baseFile = fs.readFileSync('base.html','utf8');

  let views_paths = views.map(function(elem){
    // return (__dirname + "/views/" + elem);
    return (__dirname + "/" + inputFolder + "/" + elem);
  })

  const base_DOM = new JSDOM(baseFile);


  if(process.env.NODE_ENV === "production"){
    //output file as defined by the webpack config
    // let mainScript = view_DOM.window.document.createElement('script');
    // view_app_el.appendChild(mainScript);
    // mainScript.type = "text/javascript";
    // mainScript.src = "dist/views.js";
    // mainScript.classList.add('app-script');

    // global script applies to all views, doesn't need to be reloaded, hence now class "app-script"
    let globalScript = base_DOM.window.document.createElement('script');
    base_DOM.window.document.body.appendChild(globalScript);
    globalScript.type = "text/javascript";
    globalScript.src = "dist/main.js";

    let globalStyle = base_DOM.window.document.createElement('link');
    base_DOM.window.document.querySelector('head').appendChild(globalStyle);
    globalStyle.type = "text/css";
    globalStyle.rel = "stylesheet";
    globalStyle.href = "global--production.css";
  } else {
    let globalStyle = base_DOM.window.document.createElement('link');
    base_DOM.window.document.querySelector('head').appendChild(globalStyle);
    globalStyle.type = "text/css";
    globalStyle.rel = "stylesheet";
    globalStyle.href = "global.css";

    // global script applies to all views, doesn't need to be reloaded, hence now class "app-script"
    let globalScript = base_DOM.window.document.createElement('script');
    base_DOM.window.document.body.appendChild(globalScript);
    globalScript.type = "module";
    globalScript.src = "main.js";

    let globalScript2 = base_DOM.window.document.createElement('script');
    base_DOM.window.document.body.appendChild(globalScript2);
    globalScript2.type = "module";
    globalScript2.src = "app.js";

  }


  const head = base_DOM.window.document.querySelector('head');
  headinnerHTML = head.innerHTML;


  views_paths.forEach(function(doc_path, index){
    //dom for view file..
    let html_string = fs.readFileSync(doc_path, 'utf8');
    let view_DOM = new JSDOM(html_string)
    let view_app_el = view_DOM.window.document.body.querySelector("#app");
    //dom for base file
    let new_html_DOM = base_DOM
    let navLinks = Array.from(new_html_DOM.window.document.querySelectorAll(".nav-link"));

    //navlinks
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") == views[index]){
        link.classList.add("active");
      }
    });
    //for production
    if(process.env.NODE_ENV === "production"){
      let viewScripts = Array.from(view_DOM.window.document.body.querySelectorAll('script'));
      let baseScripts = Array.from(base_DOM.window.document.body.querySelectorAll('script'));
      let stylesheets = Array.from(view_DOM.window.document.querySelectorAll('link'));
  
      let bgImages = Array.from(view_DOM.window.document.body.querySelectorAll('*[background-image-src]'));
      let images = Array.from(view_DOM.window.document.body.querySelectorAll('img[src]'));
      [...bgImages, ...images].forEach( img => {

        if( imagesURL.hasOwnProperty(img.src)){
          img.setAttribute('src', imagesURL[img.getAttribute('src')]);
        }
        else if( imagesURL.hasOwnProperty(img.getAttribute('background-image-src')) ){
          img.setAttribute('background-image-src', imagesURL[img.getAttribute('background-image-src')]);
        }
      });
      //delete all scripts from DOM
      //add in dist_main.js
      [...viewScripts, ...stylesheets].forEach(script => {
        script.parentNode.removeChild(script);
       // script.src = `dist${script.src.replace('js', '')}`;
      })
  
    }

    //meta tags
    function metaTags(obj){
      const title = obj["title"];
      const description = obj["description"];
      const pageName = obj["pageName"];
      return `<!-- Place this data between the <head> tags of your website -->
      <meta charset="UTF-8">
      <title>${ title }</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="${ description }" />
      <meta name="keywords" content="science communication, science writer, Sarah Houben, journalism, nature photography, scientific images">

      <!-- Schema.org markup for Google+ -->
      <meta itemprop="name" content="${ title }">
      <meta itemprop="description" content="${ description }">
      <meta itemprop="image" content="https://res.cloudinary.com/doagarfl4/image/upload/v1540746436/Sarah%20portfolio/Houben_Thumbnail_Social.jpg">
      
      <!-- Twitter Card data -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:site" content="@SHviews">
      <meta name="twitter:title" content="${ title }">
      <meta name="twitter:description" content="${ description }">
      <meta name="twitter:creator" content="@SHviews">
      <!-- Twitter summary card with large image must be at least 280x150px -->
      <meta name="twitter:image:src" content="https://res.cloudinary.com/doagarfl4/image/upload/v1540746436/Sarah%20portfolio/Houben_Thumbnail_Social.jpg">
      
      <!-- Open Graph data -->
      <meta property="og:title" content="${ title }" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://www.sarahhouben.com/${ pageName }" />
      <meta property="og:image" content="https://res.cloudinary.com/doagarfl4/image/upload/v1540746436/Sarah%20portfolio/Houben_Thumbnail_Social.jpg" />
      <meta property="og:description" content=" ${ description }" />
      <meta property="og:site_name" content="Sarah Houben" />
      <meta property="article:published_time" content="2018-10-28T05:59:00+01:00" />`
    }

    const metaObject = {
      "about.html": { 
        "title": "Sarah Houben | About", 
        "description": "Sarah Houben is a science writer and photographer based in Berlin.",
        "pageName": "about.html"
      },
      "contact.html": { 
        "title": "Sarah Houben | Contact", 
        "description": "Get in touch with Sarah here. She'll get back to you as soon as she can.",
        "pageName": "contact.html"
      },
      "index.html": { 
        "title": "Sarah Houben | Home", 
        "description": "Sarah Houben is a freelance science writer and photographer based in Berlin.",
        "pageName": "index.html"
      },
      "lab-photos.html": { 
        "title": "Sarah Houben | Lab Photography", 
        "description": "A selection of photos taken within the studio and laboratory by Sarah Houben.",
        "pageName": "lab-photos.html"
      },
      "nature-photos.html": { 
        "title": "Sarah Houben | Nature Photography", 
        "description": "A selection of photos taken outdoors and in nature by Sarah Houben.",
        "pageName": "nature-photos.html"
      },
      "projects.html": { 
        "title": "Sarah Houben | Projects", 
        "description": "Overview of Sarah Houben's science communication projects.",
        "pageName": "projects.html"
      },
    }
    if( metaObject.hasOwnProperty(views[index])  ){
      head.innerHTML = metaTags(metaObject[views[index]]) + headinnerHTML;
    }







    
    //replace app div contents
    new_html_DOM.window.document.body.querySelector("#app").innerHTML = view_app_el.innerHTML;
    //write to views
    let write_file_path = __dirname + "/" + outputFolder + "/" + views[index];
    let write_contents = new_html_DOM.serialize();
    console.log("writing to ", write_file_path);
    fs.writeFileSync(write_file_path, write_contents, 'utf8');
  })

}
