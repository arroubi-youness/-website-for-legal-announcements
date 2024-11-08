const selectElement = document.getElementById("ville_sa");
const ville_reprs = document.querySelectorAll(".ville_reprsenat_sas_class");
console.log(selectElement);
const ville_commaisire = document.getElementById("ville_commaisaire_sa");

const button_add_reperstant = document.getElementById("add_represant");
const div_repesant = document.getElementById("represant");
const associe_div_big = document.getElementById("membre_div_big");
const button_add_associe = document.getElementById("add_membre");
const button_add_commaisaire = document.getElementById("add_commaisaire_sa");
console.log(button_add_commaisaire);
const big_div_comaissaire = document.getElementById("commissaire_sa");
 
 
const plus = document.getElementById("plus_but"); /////represantant added
const plus_associe = document.getElementById("plus_button"); /////membre added
const plus_commaissaire = document.getElementById("plus_but_commaisire"); /////commaisaire added

button_add_reperstant.addEventListener("mouseover", function () {
  plus.style.backgroundColor = "#dc7c3f";
  plus.style.color = "white";
});
button_add_reperstant.addEventListener("mouseout", function () {
  plus.style.backgroundColor = "white";
  plus.style.color = "#dc7c3f";
});
///////////////////////////////////////membre  addes
button_add_associe.addEventListener("mouseover", function () {
  plus_associe.style.backgroundColor = "#dc7c3f";
  plus_associe.style.color = "white";
});
button_add_associe.addEventListener("mouseout", function () {
  plus_associe.style.backgroundColor = "white";
  plus_associe.style.color = "#dc7c3f";
});
/////////////////////////////commaisaire added
button_add_commaisaire.addEventListener("mouseover", function () {
  plus_commaissaire.style.backgroundColor = "#dc7c3f";
  plus_commaissaire.style.color = "white";
});
button_add_commaisaire.addEventListener("mouseout", function () {
  plus_commaissaire.style.backgroundColor = "white";
  plus_commaissaire.style.color = "#dc7c3f";
});

//////addd   represent 

let nbr_reprsant = 1;
button_add_reperstant.addEventListener("click", function () {
  const newDiv_represatnt = document.createElement("div");
  nbr_reprsant++;
  newDiv_represatnt.innerHTML = `
    <div class="added">
    <div class=" w-[80%] xl:w-[80%] mx-auto ml-9 md:ml-12 mr-3 opacity-40 h-[2px] mt-6 bg-slate-400 "></div>

    <div id="delete_represant" class="w-10/12 mx-auto md:mx-0 md:w-[25%] relative  mt-5 md:left-[78px] h-10 flex  cursor-pointer   rounded-lg bg-transparent">
                    <div  id="minus_but"  class="w-1/6 flex  justify-center   items-center bg-white text-[#dc7c3f] border-2 border-[#dc7c3f] font-semibold text-2xl h-10 rounded-l-lg"><i class='bx bx-minus'></i></div>
                    <div class="w-5/6 flex justify-center  items-center bg-[#dc7c3f] text-white font-medium border-2 border-[#dc7c3f] rounded-r-lg ">Supprimer un représentant légal</div>

            </div>
   <div id="dupliquer_represant" class="dupliquer_represant_class">
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                <label
                                    class="block mb-2 md:mb-0  mr-[114px]   font-normal text-gray-900 dark:text-white">Type</label>
                                <select id="type_personne_sa" name="type_personne_sa[]"
                                    class="bg-gray-50 placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required>


                                    <option class=" " value="" disabled selected>choisir le type</option>

                                    <option value="1"> Personne physique</option>
                                    <option value="2">Personne morale</option>



                                </select>
                            </div>
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                <label
                                    class="block mb-2 md:mb-0  mr-[96px]   font-normal text-gray-900 dark:text-white">Qualité</label>
                                <select id="qualite_sa" name="qualite_sa[]"
                                    class="bg-gray-50 qualite_represant placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required>


                                    <option class=" " value="" disabled selected>choisir la Qualité du dirigeant
                                    </option>

                                    <option value="3"> Directeur Général</option>
                                    <option value="4">Directeur Général Délégué</option>
                                     <option value="6">Président Directeur Général</option>
 




                                </select>
                            </div>
                            <div class="morale_remove_represant">

                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                    <label
                                        class="block mb-2 md:mb-0  mr-[99px]   font-normal text-gray-900 dark:text-white">Civilité</label>
                                    <select id="civilite_sa" name="civilite_sa[]"
                                        class="bg-gray-50 placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                         >


                                        <option class=" " value="" disabled selected>choisir la Civilité</option>

                                        <option value="1"> Monsieur </option>
                                        <option value="2">Madame</option>



                                    </select>
                                </div>
                            </div>


                            <div class="morale_remove_represant">
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                    <label
                                        class="block mb-2 md:mb-0   mr-[112px]  font-normal text-gray-900 dark:text-white">Nom</label>
                                    <input type="text" id="Nom_represannat_sa" name="Nom_represannat_sa[]"
                                        class="bg-gray-50 border    md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                          placeholder="   Ecrire le nom " />
                                </div>
                            </div>
                            <div class="morale_remove_represant">
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                    <label for="date_acte"
                                        class="block mb-2 md:mb-0   mr-[90px]   font-normal text-gray-900 dark:text-white">Prénom</label>
                                    <input type="text" id="prenom_represannt_sa" name="prenom_represannt_sa[]"
                                        class="bg-gray-50 border     md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                          placeholder="   Ecrire le Prénom" />
                                </div>
                            </div>
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                <label for="date_acte"
                                    class="block mb-2 md:mb-0   mr-[90px]   font-normal text-gray-900 dark:text-white">Adresse</label>
                                <input type="text" id="adresse_represantant_sa" name="adresse_represantant_sa[]"
                                    class="bg-gray-50 border   md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required placeholder="   Ecrire l'adresse" />
                            </div>
                            <div class="hidden morale_add_represant">
                                <div
                                    class=" flex flex-col  ml-[9%]      md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                    <label
                                        class="block mb-2 md:mb-0   mr-[46px]   font-normal text-gray-900 dark:text-white">Dénomination</label>
                                    <input type="text" id="denomination_represantant_sa"
                                        name="denomination_represantant_sa[]"
                                        class="bg-gray-50 border    md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                          placeholder="   Ecrire l'adresse" />
                                </div>
                            </div>
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                <label  
                                    class="block mb-2 md:mb-0   mr-[62px]    font-normal text-gray-900 dark:text-white">Code
                                    postal</label>
                                <input type="text" id="code_postal_represantant_sa"
                                    name="code_postal_represantant_sa[]"
                                    class="bg-gray-50 border  md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[25%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required placeholder="   Ecrire le  code" />
                            </div>
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                <label
                                    class="block mb-2 md:mb-0  mr-[115px]    font-normal text-gray-900 dark:text-white">Ville</label>
                                <select id="ville_reprsenat_sa" name="ville_reprsenat_sa[]"
                                    class="bg-gray-50 ville_reprsenat_sas_class placeholder-gray-400  md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required>


                                    <option value="" disabled selected>choisir la ville</option>



                                </select>


                            </div>
                        </div>
    
    
    `;
  div_repesant.appendChild(newDiv_represatnt);




  ////////cities  added 
  const apiUrl = "./cities.json";

 let cityIndex = 0;

 fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const cities = data.cities.data;
    cities.forEach((city) => {
       

  
      const selectElements = document.querySelectorAll(".ville_reprsenat_sas_class");
      console.log(selectElements.length);
      for (let i = 0; i < selectElements.length; i++) {
        const option = document.createElement("option");
        option.value = cityIndex;
        option.textContent = city.names.fr;
        selectElements[i].appendChild(option);
      }

      cityIndex++;
    });
  })
  .catch((error) => {
    console.error("Error fetching cities:", error);
  });
});
//////////////////
/////////added  mebre 

let nbr_membre = 1;
button_add_associe.addEventListener("click", function () {
  const newDiv_membre = document.createElement("div");
  nbr_membre++;
  newDiv_membre.innerHTML = `
    <div class="added_membre">
    <div class=" w-[80%] xl:w-[80%] mx-auto ml-9 md:ml-12 mr-3 opacity-40 h-[2px] mt-6 bg-slate-400 "></div>

    <div id="delete_membre" class="w-10/12 mx-auto md:mx-0 md:w-[17%] relative  mt-5 md:left-[78px] h-10 flex  cursor-pointer   rounded-lg bg-transparent">
                    <div  id="minus_button"  class="w-1/6 flex  justify-center   items-center bg-white text-[#dc7c3f] border-2 border-[#dc7c3f] font-semibold text-2xl h-10 rounded-l-lg"><i class='bx bx-minus'></i></div>
                    <div class="w-5/6 flex justify-center  items-center bg-[#dc7c3f] text-white font-medium border-2 border-[#dc7c3f] rounded-r-lg ">Supprimer l'associé</div>

            </div>
    <div id="dupliquer_membre" class="dupliquer_membre_class">
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                <label
                                    class="block mb-2 md:mb-0  mr-[114px]   font-normal text-gray-900 dark:text-white">Type</label>
                                <select id="type_membre_sa" name="type_membre_sa[]"
                                    class="bg-gray-50 placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required>


                                    <option class=" " value="" disabled selected>choisir le type</option>

                                    <option value="1"> Personne physique</option>
                                    <option value="2">Personne morale</option>



                                </select>
                            </div>
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                <label
                                    class="block mb-2 md:mb-0  mr-[95px]   font-normal text-gray-900 dark:text-white">Qualité</label>
                                <select id="qualite_membre_sa" name="qualite_membre_sa[]"
                                    class="bg-gray-50 placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required>


                                    <option class=" " value="" disabled selected>choisir la Qualité</option>

                                    <option value="8"> Administrateur </option>
                                    <option value="9">Membre du Conseil de surveillance</option>
                                    <option value="10">Président du Conseil d'administration</option>

                                    <option value="11">Président du Conseil de surveillance</option>

                                    <option value="7">Autre</option>




                                </select>
                            </div>
                            <div class="remove_field_in_membre">
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                    <label
                                        class="block mb-2 md:mb-0  mr-[99px]   font-normal text-gray-900 dark:text-white">Civilité</label>
                                    <select id="civilite_membre_sa" name="civilite_membre_sa[]"
                                        class="bg-gray-50 placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                         >


                                        <option class=" " value="" disabled selected>choisir la Civilité</option>

                                        <option value="1"> Monsieur </option>
                                        <option value="2">Madame</option>



                                    </select>
                                </div>
                            </div>
                            <div class="hidden  denomination_membre_class ">
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                    <label
                                        class="block mb-2 md:mb-0   mr-[47px]  font-normal text-gray-900 dark:text-white">Dénomination</label>
                                    <input type="text" id="denomination_membre_sa" name="denomination_membre_sa[]"
                                        class="bg-gray-50 border  md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                          placeholder="   Ecrire la Dénomination " />
                                </div>
                            </div>

                            <div class="remove_field_in_membre">
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                    <label
                                        class="block mb-2 md:mb-0   mr-[112px]  font-normal text-gray-900 dark:text-white">Nom</label>
                                    <input type="text" id="Nom_membre_sa" name="Nom_membre_sa[]"
                                        class="bg-gray-50 border  md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                          placeholder="   Ecrire le nom " />
                                </div>
                            </div>
                            <div class="remove_field_in_membre">
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                    <label for="date_acte"
                                        class="block mb-2 md:mb-0   mr-[90px]   font-normal text-gray-900 dark:text-white">Prénom</label>
                                    <input type="text" id="prenom_membre_sa" name="prenom_membre_sa[]"
                                        class="bg-gray-50 border  md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                          placeholder="   Ecrire le Prénom" />
                                </div>
                            </div>
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                <label for="date_acte"
                                    class="block mb-2 md:mb-0   mr-[90px]   font-normal text-gray-900 dark:text-white">Adresse</label>
                                <input type="text" id="adresse_membre_sa" name="adresse_membre_sa[]"
                                    class="bg-gray-50 border  md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required placeholder="   Ecrire l'adresse" />
                            </div>
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                <label for="date_acte"
                                    class="block mb-2 md:mb-0   mr-[62px]    font-normal text-gray-900 dark:text-white">Code
                                    postal</label>
                                <input type="text" id="code_postal_membre_sa" name="code_postal_membre_sa[]"
                                    class="bg-gray-50 border  md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[25%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required placeholder="   Ecrire le  code" />
                            </div>
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                <label
                                    class="block mb-2 md:mb-0  mr-[115px]    font-normal text-gray-900 dark:text-white">Ville</label>
                                <select id="ville_membre_sa" name="ville_membre_sa[]"
                                    class="bg-gray-50 placeholder-gray-400  ville_membre_class  md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required>


                                    <option value="" disabled selected>choisir la ville</option>



                                </select>


                            </div>

                        </div>
    `;
  associe_div_big.appendChild(newDiv_membre);

  const apiUrl = "./cities.json";

  let cityIndex = 0;
 
  fetch(apiUrl)
   .then((response) => response.json())
   .then((data) => {
     const cities = data.cities.data;
     cities.forEach((city) => {
        
 
   
       const selectElements = document.querySelectorAll(".ville_membre_class");
       console.log(selectElements.length);
       for (let i = 0; i < selectElements.length; i++) {
         const option = document.createElement("option");
         option.value = cityIndex;
         option.textContent = city.names.fr;
         selectElements[i].appendChild(option);
       }
 
       cityIndex++;
     });
   })
   .catch((error) => {
     console.error("Error fetching cities:", error);
   });
 });
 

/////////////commaissaire_sas
let nbr_commaisisre_sa = 1;
button_add_commaisaire.addEventListener("click", function () {
   
   const newDiv_commaisire = document.createElement("div");
  nbr_commaisisre_sa++;
  newDiv_commaisire.innerHTML = `
    <div class="added_commaissaire">
    <div class=" w-[80%] xl:w-[80%] mx-auto ml-9 md:ml-12 mr-3 opacity-40 h-[2px] mt-6 bg-slate-400 "></div>

    <div id="delete_commaisaire_sas" class="w-10/12 mx-auto md:mx-0 md:w-[30%] relative  mt-5 md:left-[78px] h-10 flex  cursor-pointer   rounded-lg bg-transparent">
                    <div  id="minus_button"  class="w-1/6 flex  justify-center   items-center bg-white text-[#dc7c3f] border-2 border-[#dc7c3f] font-semibold text-2xl h-10 rounded-l-lg"><i class='bx bx-minus'></i></div>
                    <div class="w-5/6 flex justify-center  items-center bg-[#dc7c3f] text-white font-medium border-2 border-[#dc7c3f] rounded-r-lg ">Supprimer le commissaire aux comptes</div>

            </div>
     <div id="dupliquer_commissaire_sa">

                            <div class="added_commaissaire_sa">
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                    <label
                                        class="block mb-2 md:mb-0  mr-[112px]   font-normal text-gray-900 dark:text-white">Type</label>
                                    <select id="type_commaissaire_sa" name="type_commaissaire_sa[]"
                                        class="bg-gray-50  type_commaissaire_class placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required>


                                        <option class=" " value="" disabled selected>choisir le type
                                        </option>

                                        <option value="1"> Personne physique</option>
                                        <option value="2">Personne morale</option>



                                    </select>
                                </div>
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                    <label
                                        class="block mb-2 md:mb-0  mr-[99px]   font-normal text-gray-900 dark:text-white">Civilité</label>
                                    <select id="civilite_commaisaire_sa" name="civilite_commaisaire_sa[]"
                                        class="bg-gray-50 placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required>


                                        <option class=" " value="" disabled selected>choisir la Civilité</option>

                                        <option value="1"> Monsieur </option>
                                        <option value="2">Madame</option>



                                    </select>
                                </div>
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                    <label
                                        class="block mb-2 md:mb-0   mr-[112px]  font-normal text-gray-900 dark:text-white">Nom</label>
                                    <input type="text" id="Nom_commaisaire_sa" name="Nom_commaisaire_sa[]"
                                        class="bg-gray-50 border  md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required placeholder="   Ecrire le nom " />
                                </div>
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                    <label
                                        class="block mb-2 md:mb-0   mr-[90px]   font-normal text-gray-900 dark:text-white">Prénom</label>
                                    <input type="text" id="prenom_commaisaire_sa" name="prenom_commaisaire_sa[]"
                                        class="bg-gray-50 border  md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required placeholder="   Ecrire le Prénom" />
                                </div>
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                    <label
                                        class="block mb-2 md:mb-0   mr-[90px]   font-normal text-gray-900 dark:text-white">Adresse</label>
                                    <input type="text" id="adresse_commaisaire_sa" name="adresse_commaisaire_sa[]"
                                        class="bg-gray-50 border  md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required placeholder="   Ecrire l'adresse" />
                                </div>
                                <div id="Denomination_commaisaire_sas" class="hidden Denomination_commaisaire_sas_div">
                                    <div
                                        class="flex flex-col  ml-[9%]      md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                        <label for="Denomination_commaisaire_sa"
                                            class="block mb-2 md:mb-0   mr-[45px]   font-normal text-gray-900 dark:text-white">Dénomination</label>
                                        <input type="text" id="Denomination_commaisaire_sa"
                                            name="Denomination_commaisaire_sa[]"
                                            class="bg-gray-50 border  md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                               placeholder="   Ecrire ici" />
                                    </div>
                                </div>
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                    <label
                                        class="block mb-2 md:mb-0   mr-[62px]    font-normal text-gray-900 dark:text-white">Code
                                        postal</label>
                                    <input type="text" id="code_postal_commaisaire_sa"
                                        name="code_postal_commaisaire_sa[]"
                                        class="bg-gray-50 border  md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[25%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required placeholder="   Ecrire le  code" />
                                </div>
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                    <label
                                        class="block mb-2 md:mb-0  mr-[115px]    font-normal text-gray-900 dark:text-white">Ville</label>
                                    <select id="ville_commaisaire_sa" name="ville_commaisaire_sa[]"
                                        class="bg-gray-50 placeholder-gray-400 ville_commaisaire_sas_class md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required>


                                        <option value="" disabled selected>choisir la ville</option>



                                    </select>


                                </div>

                            </div>
                        </div>
    
    `;
  big_div_comaissaire.appendChild(newDiv_commaisire);

  const apiUrl = "./cities.json";

  let cityIndex = 0;
 
  fetch(apiUrl)
   .then((response) => response.json())
   .then((data) => {
     const cities = data.cities.data;
     cities.forEach((city) => {
        
 
   
       const selectElements = document.querySelectorAll(".ville_commaisaire_sas_class");
       console.log(selectElements.length);
       for (let i = 0; i < selectElements.length; i++) {
         const option = document.createElement("option");
         option.value = cityIndex;
         option.textContent = city.names.fr;
         selectElements[i].appendChild(option);
       }
 
       cityIndex++;
     });
   })
   .catch((error) => {
     console.error("Error fetching cities:", error);
   });
 });
 
/////////////////////////
///////////////////////supprimer  effect  hover
div_repesant.addEventListener("mouseover", function (event) {
    if (event.target.closest("#delete_represant")) {
      const addRepresanttDiv = event.target.closest("#delete_represant");
      addRepresanttDiv.querySelector("i.bx-minus").style.color = "white";
      addRepresanttDiv.querySelector("#minus_but").style.backgroundColor =
        "#dc7c3f";
    }
  });
  div_repesant.addEventListener("mouseout", function (event) {
    if (event.target.closest("#delete_represant")) {
      const addRepresanttDiv = event.target.closest("#delete_represant");
      addRepresanttDiv.querySelector("i.bx-minus").style.color = "#dc7c3f";
      addRepresanttDiv.querySelector("#minus_but").style.backgroundColor =
        "white";
    }
  });
  
  div_repesant.addEventListener("click", function (event) {
    if (
      event.target.id === "delete_represant" ||
      event.target.closest("#delete_represant")
    ) {
      const deleteButton = event.target.closest("#delete_represant");
  
      const parentDiv = deleteButton.parentElement;
  
      if (parentDiv) {
        parentDiv.remove();
      }
    }
  });


  ///////supprimer  effect  button   membre

  associe_div_big.addEventListener("mouseover", function (event) {
    if (event.target.closest("#delete_membre")) {
      const addRepresanttDiv = event.target.closest("#delete_membre");
      addRepresanttDiv.querySelector("i.bx-minus").style.color = "white";
      addRepresanttDiv.querySelector("#minus_button").style.backgroundColor =
        "#dc7c3f";
    }
  });
  associe_div_big.addEventListener("mouseout", function (event) {
    if (event.target.closest("#delete_membre")) {
      const addRepresanttDiv = event.target.closest("#delete_membre");
      addRepresanttDiv.querySelector("i.bx-minus").style.color = "#dc7c3f";
      addRepresanttDiv.querySelector("#minus_button").style.backgroundColor =
        "white";
    }
  });
  
  associe_div_big.addEventListener("click", function (event) {
    if (
      event.target.id === "delete_membre" ||
      event.target.closest("#delete_membre")
    ) {
      const deleteButton = event.target.closest("#delete_membre");
  
      const parentDiv = deleteButton.parentElement;
  
      if (parentDiv) {
        parentDiv.remove();
      }
    }
  });


  //////////////supprimer effect  button commaissaire
  big_div_comaissaire.addEventListener("mouseover", function (event) {
    if (event.target.closest("#delete_commaisaire_sas")) {
      const addRepresanttDiv = event.target.closest("#delete_commaisaire_sas");
      addRepresanttDiv.querySelector("i.bx-minus").style.color = "white";
      addRepresanttDiv.querySelector("#minus_button").style.backgroundColor =
        "#dc7c3f";
    }
  });
  big_div_comaissaire.addEventListener("mouseout", function (event) {
    if (event.target.closest("#delete_commaisaire_sas")) {
      const addRepresanttDiv = event.target.closest("#delete_commaisaire_sas");
      addRepresanttDiv.querySelector("i.bx-minus").style.color = "#dc7c3f";
      addRepresanttDiv.querySelector("#minus_button").style.backgroundColor =
        "white";
    }
  });
  
  big_div_comaissaire.addEventListener("click", function (event) {
    if (
        event.target.id === "delete_commaisaire_sas" ||
        event.target.closest("#delete_commaisaire_sas")
      ) {
        const deleteButton = event.target.closest("#delete_commaisaire_sas");
    
        const parentDiv = deleteButton.parentElement;
    
        if (parentDiv) {
          parentDiv.remove();
        }
      }
  });



/////////////morale  physique  
document.addEventListener('change', function(event) {
    /////////////////commaissaire part
    if (event.target.tagName === 'SELECT' && event.target.name === 'type_commaissaire_sa[]') {
      const parentContainer = event.target.closest('.added_commaissaire_sa');
      const denominationDiv = parentContainer.querySelector('.Denomination_commaisaire_sas_div');
       if (event.target.value === "2") { // Personne morale
        denominationDiv.classList.remove('hidden');
      } else {
        denominationDiv.classList.add('hidden');
      }
    }

    /////////////////////reprsent part
    else if (event.target.tagName === 'SELECT' && event.target.name === 'type_personne_sa[]') {
  
      const parentContainer = event.target.closest('.dupliquer_represant_class');
      const denominationDiv = parentContainer.querySelector('.morale_add_represant');
      const removal_divs=parentContainer.querySelectorAll(".morale_remove_represant");
     
  
  
      if (event.target.value === "2") {  
        denominationDiv.classList.remove('hidden');
        for (let index = 0; index < removal_divs.length; index++) {
          removal_divs[index].classList.add("hidden");
          
        }
      } else {
        denominationDiv.classList.add('hidden');
        for (let index = 0; index < removal_divs.length; index++) {
          removal_divs[index].classList.remove("hidden");
          
        }
  
      }
    }
    else if (event.target.tagName === 'SELECT' && event.target.name === 'type_membre_sa[]') {
  
        const parentContainer = event.target.closest('.dupliquer_membre_class');
        const denominationDiv = parentContainer.querySelector('.denomination_membre_class');
        const removal_divs=parentContainer.querySelectorAll(".remove_field_in_membre");
       
    
    
        if (event.target.value === "2") {  
          denominationDiv.classList.remove('hidden');
          for (let index = 0; index < removal_divs.length; index++) {
            removal_divs[index].classList.add("hidden");
            
          }
        } else {
          denominationDiv.classList.add('hidden');
          for (let index = 0; index < removal_divs.length; index++) {
            removal_divs[index].classList.remove("hidden");
            
          }
    
        }
      }
  

});




/////////cities    for  the   first  time 
 const apiUrl = "./cities.json";

 let cityIndex = 0;

 fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const cities = data.cities.data;
    cities.forEach((city) => {
      const option1 = document.createElement("option");
      const option3 = document.createElement("option");
      const option2 = document.createElement("option");
      const option4 = document.createElement("option");



      option1.value = option3.value =option2.value=option4.value= cityIndex;
      option1.textContent = option3.textContent =option2.textContent=option4.textContent= city.names.fr;

      // Append options to the select elements
      document.getElementById("ville_sa").appendChild(option1);

      const selectElements = document.querySelector(".ville_reprsenat_sas_class");
      const select_membre_Ville=document.querySelector(".ville_membre_class");
      const ville_commaisaire_e=document.querySelector(".ville_commaisaire_sas_class");
       selectElements.appendChild(option3);
       select_membre_Ville.appendChild(option2);
       ville_commaisaire_e.appendChild(option4);

      cityIndex++;
    });
  })
  .catch((error) => {
    console.error("Error fetching cities:", error);
  });
 

