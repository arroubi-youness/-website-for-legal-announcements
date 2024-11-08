const ville_societe = document.getElementById("ville_cd");
const ville_reprsnt = document.querySelector(".ville_reprsenat_cd_class");


const button_add_reperstant = document.getElementById("add_represant");
const div_repesant = document.getElementById("represant");
const plus = document.getElementById("plus_but"); /////represantant added

button_add_reperstant.addEventListener("mouseover", function () {
  plus.style.backgroundColor = "#dc7c3f";
  plus.style.color = "white";
});
button_add_reperstant.addEventListener("mouseout", function () {
  plus.style.backgroundColor = "white";
  plus.style.color = "#dc7c3f";
});
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
     <div id="dupliquer_represant_cd" class="dupliquer_represant_cd_class">
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                <label  
                                    class="block mb-2 md:mb-0  mr-[58px]   font-normal text-gray-900 dark:text-white">Modification</label>
                                <select id="Modification_cd" name="Modification_cd[]"
                                    class="bg-gray-50 placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required>


                                    <option class=" " value="" disabled selected>choisir la Modification</option>

                                    <option value="1">Nomination sans départ</option>
                                    <option value="2">Départ sans remplacement</option>
                                    <option value="3">Départ avec remplacement </option>



                                </select>
                            </div>
                            <div  class="font-bold modification_type ml-[78px] mt-5 text-[#dc7c3f]"
                            >Arrivant :

                            </div>
                            <div class=" w-[80%] xl:w-[90%] mx-auto ml-9 md:ml-[78px] mr-3 opacity-40 h-[2px]   bg-slate-400 "></div>

                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                <label  
                                    class="block mb-2 md:mb-0  mr-[114px]   font-normal text-gray-900 dark:text-white">Type</label>
                                <select id="type_personne_cd" name="type_personne_cd[]"
                                    class="bg-gray-50 placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required>


                                    <option class=" " value="" disabled selected>choisir le type</option>

                                    <option value="1"> Personne physique</option>
                                    <option value="2"> Personne morale</option>

 


                                </select>
                            </div>

                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                <label  
                                    class="block mb-2 md:mb-0  mr-[96px]   font-normal text-gray-900 dark:text-white">Qualité</label>
                                <select id="qualite_cd" name="qualite_cd[]"
                                    class="bg-gray-50 qualite_represant placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required>


                                    <option class=" " value="" disabled selected>choisir la Qualité du dirigeant
                                    </option>
                                    <option value="8">Administrateur</option>

                                    <option value="1"> Co-gérant</option>
                                    <option value="2">Gérant</option>
                                    <option value="3"> Directeur Général</option>
                                    <option value="4">Directeur Général Délégué</option>
                                    <option value="5">Président</option>
                                    <option value="6">Président Directeur Général</option>
                                    <option value="7">Autre</option>



                                </select>
                            </div>
                                                                 <div class="hidden morale_add_represant">
                                                                    <div
                                                                        class=" flex flex-col  ml-[9%]      md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                                                        <label
                                                                            class="block mb-2 md:mb-0   mr-[46px]   font-normal text-gray-900 dark:text-white">Dénomination</label>
                                                                        <input type="text" id="denomination_represantant_cd"
                                                                            name="denomination_represantant_cd[]"
                                                                            class="bg-gray-50 border denomination_represantant_cd_class    md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                                                            required placeholder="   Ecrire l'adresse" />
                                                                    </div>
                                                                </div>
                            <div class="morale_remove_represant">

                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                    <label for="type_acte"
                                        class="block mb-2 md:mb-0  mr-[99px]   font-normal text-gray-900 dark:text-white">Civilité</label>
                                    <select id="civilite_cd" name="civilite_cd[]"
                                        class="bg-gray-50 placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required>


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
                                    <input type="text" id="Nom_represannat_cd" name="Nom_represannat_cd[]"
                                        class="bg-gray-50 border    md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required placeholder="   Ecrire le nom " />
                                </div>
                            </div>
                            <div class="morale_remove_represant">
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                    <label  
                                        class="block mb-2 md:mb-0   mr-[90px]   font-normal text-gray-900 dark:text-white">Prénom</label>
                                    <input type="text" id="prenom_represannt_cd" name="prenom_represannt_cd[]"
                                        class="bg-gray-50 border     md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required placeholder="   Ecrire le Prénom" />
                                </div>
                            </div>
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                <label for="date_acte"
                                    class="block mb-2 md:mb-0   mr-[90px]   font-normal text-gray-900 dark:text-white">Adresse</label>
                                <input type="text" id="adresse_represantant_cd" name="adresse_represantant_cd[]"
                                    class="bg-gray-50 border   md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required placeholder="   Ecrire l'adresse" />
                            </div>
                            
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                <label for="date_acte"
                                    class="block mb-2 md:mb-0   mr-[62px]    font-normal text-gray-900 dark:text-white">Code
                                    postal</label>
                                <input type="text" id="code_postal_represantant_cd" name="code_postal_represantant_cd[]"
                                    class="bg-gray-50 border  md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[25%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required placeholder="   Ecrire le  code" />
                            </div>
                            <div
                                class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                <label  
                                    class="block mb-2 md:mb-0  mr-[115px]    font-normal text-gray-900 dark:text-white">Ville</label>
                                <select id="ville_reprsenat_cd" name="ville_reprsenat_cd[]"
                                    class="bg-gray-50 placeholder-gray-400 ville_reprsenat_cd_class md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                    required>


                                    <option value="" disabled selected>choisir la ville</option>



                                </select>


                            </div>

                            <div class="hidden_partant hidden ">
                                <div  class="font-bold modification_type ml-[78px] mt-5 text-[#dc7c3f]"
                                >Partant  :
    
                                </div>
                                <div class=" w-[80%] xl:w-[90%] mx-auto ml-9 md:ml-[78px] mr-3 opacity-40 h-[2px]   bg-slate-400 "></div>
    
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                    <label  
                                        class="block mb-2 md:mb-0  mr-[114px]   font-normal text-gray-900 dark:text-white">Type</label>
                                    <select id="type_personne_cd_partant" name="type_personne_cd_partant[]"
                                        class="bg-gray-50 placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required>
    
    
                                        <option class=" " value="" disabled selected>choisir le type</option>
    
                                        <option value="1"> Personne physique</option>
     
    
    
                                    </select>
                                </div>
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                    <label for="type_acte"
                                        class="block mb-2 md:mb-0  mr-[96px]   font-normal text-gray-900 dark:text-white">Qualité</label>
                                    <select id="qualite_cd_partant" name="qualite_cd_partant[]"
                                        class="bg-gray-50 qualite_represant placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required>
    
    
                                        <option class=" " value="" disabled selected>choisir la Qualité du dirigeant
                                        </option>
                                        <option value="8">Administrateur</option>
    
                                        <option value="1"> Co-gérant</option>
                                        <option value="2">Gérant</option>
                                        <option value="3"> Directeur Général</option>
                                        <option value="4">Directeur Général Délégué</option>
                                        <option value="5">Président</option>
                                        <option value="6">Président Directeur Général</option>
                                        <option value="7">Autre</option>
    
    
    
                                    </select>
                                </div>
                                <div class="morale_remove_represant">
    
                                    <div
                                        class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                        <label  
                                            class="block mb-2 md:mb-0  mr-[99px]   font-normal text-gray-900 dark:text-white">Civilité</label>
                                        <select id="civilite_cd_partant" name="civilite_cd_partant[]"
                                            class="bg-gray-50 placeholder-gray-400 md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                            required>
    
    
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
                                        <input type="text" id="Nom_represannat_cd_partant" name="Nom_represannat_cd_partant[]"
                                            class="bg-gray-50 border    md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                            required placeholder="   Ecrire le nom " />
                                    </div>
                                </div>
                                <div class="morale_remove_represant">
                                    <div
                                        class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                        <label  
                                            class="block mb-2 md:mb-0   mr-[90px]   font-normal text-gray-900 dark:text-white">Prénom</label>
                                        <input type="text" id="prenom_represannt_cd_partant" name="prenom_represannt_cd_partant[]"
                                            class="bg-gray-50 border     md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                            required placeholder="   Ecrire le Prénom" />
                                    </div>
                                </div>
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                    <label for="date_acte"
                                        class="block mb-2 md:mb-0   mr-[90px]   font-normal text-gray-900 dark:text-white">Adresse</label>
                                    <input type="text" id="adresse_represantant_cd_partant" name="adresse_represantant_cd_partant[]"
                                        class="bg-gray-50 border   md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[50%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required placeholder="   Ecrire l'adresse" />
                                </div>
                                
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-3">
                                    <label for="date_acte"
                                        class="block mb-2 md:mb-0   mr-[62px]    font-normal text-gray-900 dark:text-white">Code
                                        postal</label>
                                    <input type="text" id="code_postal_represantant_cd_partant" name="code_postal_represantant_cd_partant[]"
                                        class="bg-gray-50 border  md:ml-7 placeholder-gray-400 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[25%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required placeholder="   Ecrire le  code" />
                                </div>
                                <div
                                    class=" flex flex-col  ml-[9%]    md:flex md:flex-row md:justify-start md:items-center  md:ml-20 mt-5">
                                    <label for="type_acte"
                                        class="block mb-2 md:mb-0  mr-[115px]    font-normal text-gray-900 dark:text-white">Ville</label>
                                    <select id="ville_reprsenat_cd_partant" name="ville_reprsenat_cd_partant[]"
                                        class="bg-gray-50 placeholder-gray-400 ville_reprsenat_cd_class md:ml-7 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-[#4094bc]  focus:border-[#4094bc]  block w-11/12 md:w-[30%] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#4094bc]  dark:focus:border-[#4094bc] "
                                        required>
    
    
                                        <option value="" disabled selected>choisir la ville</option>
    
    
    
                                    </select>
    
    
                                </div>

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
       

  
      const selectElements = document.querySelectorAll(".ville_reprsenat_cd_class");
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

document.addEventListener("change", function (event) {
  if (
    event.target.tagName === "SELECT" &&
    event.target.name === "Modification_cd[]"
  ) {
    const parentContainer = event.target.closest(
      ".dupliquer_represant_cd_class"
    );
    const type_derigent = parentContainer.querySelector(".modification_type");
    const partant_div = parentContainer.querySelector(".hidden_partant");
    console.log("ggggggg");
    if (event.target.value === "2") {
      // Personne morale
      type_derigent.innerHTML = "Partant";
      partant_div.classList.add("hidden");

    } else if (event.target.value === "3") {
        type_derigent.innerHTML = "Arrivant";

      partant_div.classList.remove("hidden");
    } else {
      type_derigent.innerHTML = "Arrivant";
      partant_div.classList.add("hidden");

    }
  }
});


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


  document.addEventListener('change', function(event) {
    if (event.target.tagName === 'SELECT' && event.target.name === 'type_personne_cd[]') {
      const parentContainer = event.target.closest('.dupliquer_represant_cd_class');
      const denominationDiv = parentContainer.querySelector('.morale_add_represant');
      console.log("ggggggg");
      if (event.target.value === "2") { // Personne morale
        denominationDiv.classList.remove('hidden');
      } else {
        denominationDiv.classList.add('hidden');
      }
    }});





  const apiUrl = "./cities.json";
let a = 0;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const cities = data.cities.data;
    cities.forEach((city) => {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");
     


      option1.value = option2.value  = a;
      option1.textContent = option2.textContent  = city.names.fr;

      ville_reprsnt.appendChild(option1);
       ville_societe.appendChild(option2);
    
      a++;
    });
  })
  .catch((error) => {
    console.error("Error fetching cities:", error);
  });
