<?php

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['sa_information'])) {
    print_r($_POST);



    
    $type_acte=isset($_POST['type_acte_sa'])?$_POST['type_acte_sa']:null;
    $date_acte=isset($_POST['date_acte_sa'])?$_POST['date_acte_sa']:null;
    $denomination_societe=isset($_POST['denomination_sa'])?$_POST['denomination_sa']:null;
    $sigle_societe=isset($_POST['Sigle_sa'])?$_POST['Sigle_sa']:null;
    $forme_social_societe=isset($_POST['forme_sa'])?$_POST['forme_sa']:null;
    $objet_social_societe=isset($_POST['object_social_sa'])?$_POST['object_social_sa']:null;
    $capital_societe=isset($_POST['capital_sa'])?$_POST['capital_sa']:null;
    $valeur_nominale_societe=isset($_POST['valeur_nominale_sa'])?$_POST['valeur_nominale_sa']:null;
    $montant_apport_societe=isset($_POST['apports_sa'])?$_POST['apports_sa']:null;
    $description_apport_societe=isset($_POST['description_apport_sa'])?$_POST['description_apport_sa']:null;

    $Duree_ans_societe=isset($_POST['Duee_ans_sa'])?$_POST['Duee_ans_sa']:null;
    $adresse_seige=isset($_POST['adresse_sa'])?$_POST['adresse_sa']:null;
    $code_postal_siege=isset($_POST['code_postal_sa'])?$_POST['code_postal_sa']:null;


    $ville_siege=isset($_POST['ville_sa'])?$_POST['ville_sa']:null;

    $type_announce=isset($_POST['type_announce'])?$_POST['type_announce']:null;

    $organe_social=isset($_POST['organe_social_sa'])?$_POST['organe_social_sa']:null;
    $dispositions=isset($_POST['dispositions_sa'])?$_POST['dispositions_sa']:null;

    $avantages=isset($_POST['avantages_sa'])?$_POST['avantages_sa']:null;
     echo $organe_social;
     echo $dispositions;
     echo $avantages;

 

// ////////////////////////////////////////////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////////////////////////////////////////
    $Tribunal = isset($_POST['Tribunal_sa']) ? $_POST['Tribunal_sa'] : null;
    

    $Date_depot = isset($_POST['Date_depot_sa']) ? $_POST['Date_depot_sa'] : null;
    echo "Date de dépôt: $Date_depot<br>";

    $nemuro_depot = isset($_POST['nemuro_depot_sa']) ? $_POST['nemuro_depot_sa'] : null;
    echo "Numéro de dépôt: $nemuro_depot<br>";

    $nemuro_rc = isset($_POST['nemuro_rc_sa']) ? $_POST['nemuro_rc_sa'] : null;
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
    $depot_id=$depot_social->insertToDepotLegal();
    $stipulation=new SASInformation($organe_social,$dispositions,$avantages);
    $stipulation_id=$stipulation->insertToSASInformation();
 
  


    $company=new Company($denomination_societe,$sigle_societe,$forme_social_societe,$objet_social_societe,$capital_societe,$valeur_nominale_societe
    ,$montant_apport_societe,$description_apport_societe,$Duree_ans_societe,$acte_id,$siege_id,$depot_id,$stipulation_id);
    $company_id=$company->insertToCompany();
    


    foreach ($_POST['type_personne_sa'] as $i => $type_personne) {
        $qualite = $_POST['qualite_sa'][$i] ?? null;
        $civilite = $_POST['civilite_sa'][$i] ?? null;
        $nom = $_POST['Nom_represannat_sa'][$i] ?? null;
        $prenom = $_POST['prenom_represannt_sa'][$i] ?? null;
        $adresse = $_POST['adresse_represantant_sa'][$i] ?? null;
        $denomination_represent=$_POST['denomination_represantant_sa'][$i] ?? null;
        $code_postal = $_POST['code_postal_represantant_sa'][$i] ?? null;
        $ville = $_POST['ville_reprsenat_sa'][$i] ?? null;
    
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
    foreach ($_POST['type_membre_sa'] as $i => $type_membre) {
        $qualite = $_POST['qualite_membre_sa'][$i] ?? null;
        $civilite = $_POST['civilite_membre_sa'][$i] ?? null;
        $nom = $_POST['Nom_membre_sa'][$i] ?? null;
        $prenom = $_POST['prenom_membre_sa'][$i] ?? null;
        $adresse = $_POST['adresse_membre_sa'][$i] ?? null;
        $denomination_represent=$_POST['denomination_membre_sa'][$i] ?? null;
        $code_postal = $_POST['code_postal_membre_sa'][$i] ?? null;
        $ville = $_POST['ville_membre_sa'][$i] ?? null;
    
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
    foreach ($_POST['type_commaissaire_sa'] as $i => $type_commaissaire_sas) {
        $civilite_commaisaire = $_POST['civilite_commaisaire_sa'][$i] ?? null;
        $Nom_commaisaire= $_POST['Nom_commaisaire_sa'][$i] ?? null;
        $prenom_commaisaire = $_POST['prenom_commaisaire_sa'][$i] ?? null;
        $adresse_commaisaire = $_POST['adresse_commaisaire_sa'][$i] ?? null;
        $Denomination_commaisaire = $_POST['Denomination_commaisaire_sa'][$i] ?? null;
        $code_postal_commaisaire=$_POST['code_postal_commaisaire_sa'][$i] ?? null;
        $ville_commaisaire = $_POST['ville_commaisaire_sa'][$i] ?? null;
      

    
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