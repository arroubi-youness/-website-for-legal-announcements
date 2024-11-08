<?php

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['sas_information'])) {
    print_r($_POST);



    
    $type_acte=isset($_POST['type_acte_sas'])?$_POST['type_acte_sas']:null;
    $date_acte=isset($_POST['date_acte_sas'])?$_POST['date_acte_sas']:null;
    $denomination_societe=isset($_POST['denomination_sas'])?$_POST['denomination_sas']:null;
    $sigle_societe=isset($_POST['Sigle_sas'])?$_POST['Sigle_sas']:null;
    $forme_social_societe=isset($_POST['forme_sas'])?$_POST['forme_sas']:null;
    $objet_social_societe=isset($_POST['object_social_sas'])?$_POST['object_social_sas']:null;
    $capital_societe=isset($_POST['capital_sas'])?$_POST['capital_sas']:null;
    $valeur_nominale_societe=isset($_POST['valeur_nominale_sas'])?$_POST['valeur_nominale_sas']:null;
    $montant_apport_societe=isset($_POST['valeur_apport_sas'])?$_POST['valeur_apport_sas']:null;
    $description_apport_societe=isset($_POST['description_apport_sas'])?$_POST['description_apport_sas']:null;

    $Duree_ans_societe=isset($_POST['Duee_ans_sas'])?$_POST['Duee_ans_sas']:null;
    $adresse_seige=isset($_POST['adresse_sas'])?$_POST['adresse_sas']:null;
    $code_postal_siege=isset($_POST['code_postal_sas'])?$_POST['code_postal_sas']:null;


    $ville_siege=isset($_POST['ville_sas'])?$_POST['ville_sas']:null;

    $type_announce=isset($_POST['type_announce'])?$_POST['type_announce']:null;

    $organe_social=isset($_POST['organe_social_sas'])?$_POST['organe_social_sas']:null;
    $dispositions=isset($_POST['dispositions_sas'])?$_POST['dispositions_sas']:null;

    $avantages=isset($_POST['avantages_sas'])?$_POST['avantages_sas']:null;
     echo $organe_social;
     echo $dispositions;
     echo $avantages;

 

// ////////////////////////////////////////////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////////////////////////////////////////
    $Tribunal = isset($_POST['Tribunal_sas']) ? $_POST['Tribunal_sas'] : null;
    

    $Date_depot = isset($_POST['Date_depot_sas']) ? $_POST['Date_depot_sas'] : null;
    echo "Date de dépôt: $Date_depot<br>";

    $nemuro_depot = isset($_POST['nemuro_depot_sas']) ? $_POST['nemuro_depot_sas'] : null;
    echo "Numéro de dépôt: $nemuro_depot<br>";

    $nemuro_rc = isset($_POST['nemuro_rc_sas']) ? $_POST['nemuro_rc_sas'] : null;
    echo "Numéro RC: $nemuro_rc<br>";
    include("acte.php");
    include("announce.php");
    include("commaisaire.php");
    include("company.php");
    include("depot_legal.php");
    include("representant.php");
    include("siege_social.php");
    include("membre_de_organe.php");
    include("stupilation.php");


    $acte=new acte($type_acte,$date_acte);
    $acte_id=$acte->insert_to_acte();
    $siege_social=new SiegeSocial($adresse_seige,$code_postal_siege,$ville_siege);
    $siege_id=$siege_social->insertToSiegeSocial();
    $depot_social=new DepotLegal($Tribunal,$Date_depot,$nemuro_depot,$nemuro_rc);
    $depot_id=$depot_social->insertToDepotLegal();$stipulation=new SASInformation($organe_social,$dispositions,$avantages);
    $stipulation_id=$stipulation->insertToSASInformation();
    
   


    $company=new Company($denomination_societe,$sigle_societe,$forme_social_societe,$objet_social_societe,$capital_societe,$valeur_nominale_societe
    ,$montant_apport_societe,$description_apport_societe,$Duree_ans_societe,$acte_id,$siege_id,$depot_id,$stipulation_id);
    $company_id=$company->insertToCompany();
    


    foreach ($_POST['type_personne_sas'] as $i => $type_personne) {
        $qualite = $_POST['qualite_sas'][$i] ?? null;
        $civilite = $_POST['civilite_sas'][$i] ?? null;
        $nom = $_POST['Nom_represannat_sas'][$i] ?? null;
        $prenom = $_POST['prenom_represannt_sas'][$i] ?? null;
        $adresse = $_POST['adresse_represantant_sas'][$i] ?? null;
        $denomination_represent=$_POST['denomination_represantant_sas'][$i] ?? null;
        $code_postal = $_POST['code_postal_represantant_sas'][$i] ?? null;
        $ville = $_POST['ville_reprsenat_sas'][$i] ?? null;
    
         $represent[$i] = new Representant(
            $type_personne,
            $qualite,
            $civilite,
            $nom,
            $prenom,
            $adresse,
            $denomination_represent,
            $code_postal,
            $ville
        );
    
         $id_reprsent=$represent[$i]->insertToRepresentant();
         $company->insertToRepresentant($id_reprsent,$company_id);

    }
    foreach ($_POST['type_membre'] as $i => $type_membre) {
        $qualite = $_POST['qualite_membre'][$i] ?? null;
        $civilite = $_POST['civilite_membre'][$i] ?? null;
        $nom = $_POST['Nom_membre'][$i] ?? null;
        $prenom = $_POST['prenom_membre'][$i] ?? null;
        $adresse = $_POST['adresse_membre'][$i] ?? null;
        $denomination_represent=$_POST['denomination_membre'][$i] ?? null;
        $code_postal = $_POST['code_postal_membre'][$i] ?? null;
        $ville = $_POST['ville_membre'][$i] ?? null;
    
         $membre_organe[$i] = new Membre_organe(
            $type_membre,
            $qualite,
            $civilite,
            $nom,
            $prenom,
            $adresse,
            $denomination_represent,
            $code_postal,
            $ville
        );
    
         $membre_organe=$membre_organe[$i]->insertTomembreorgane();
         $company->insertMembreOrganeCompany($membre_organe,$company_id);

    }
    foreach ($_POST['type_commaissaire_sas'] as $i => $type_commaissaire_sas) {
        $civilite_commaisaire = $_POST['civilite_commaisaire_sas'][$i] ?? null;
        $Nom_commaisaire= $_POST['Nom_commaisaire_sas'][$i] ?? null;
        $prenom_commaisaire = $_POST['prenom_commaisaire_sas'][$i] ?? null;
        $adresse_commaisaire = $_POST['adresse_commaisaire_sas'][$i] ?? null;
        $Denomination_commaisaire = $_POST['Denomination_commaisaire_sas'][$i] ?? null;
        $code_postal_commaisaire=$_POST['code_postal_commaisaire_sas'][$i] ?? null;
        $ville_commaisaire = $_POST['ville_commaisaire_sas'][$i] ?? null;
      

    
         $Commissaire[$i] = new Commissaire(
            $type_commaissaire_sas,
            $civilite_commaisaire,
            $Nom_commaisaire,
            $prenom_commaisaire,
            $adresse_commaisaire,
            $code_postal_commaisaire,
            $Denomination_commaisaire,
            $ville_commaisaire
            
        );
    
         $id_commissaire=$Commissaire[$i]->insertToCommissaire();
         $company->insertToCommissaire($id_commissaire,$company_id);

    }
    
    $announce=new Annonce($company_id,$type_announce);
    $announce->insertToAnnonce();

}

$_SESSION['message'] = "Information saved successfully!";

 header("Location: ../home.php");
 exit();

?>