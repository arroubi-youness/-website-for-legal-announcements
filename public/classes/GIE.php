<?php

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['gie_information'])) {
    print_r($_POST);



    
    $type_acte=isset($_POST['type_acte_gie'])?$_POST['type_acte_gie']:null;
    $date_acte=isset($_POST['date_acte_gie'])?$_POST['date_acte_gie']:null;
    $denomination_societe=isset($_POST['denomination_gie'])?$_POST['denomination_gie']:null;
    $sigle_societe=isset($_POST['Sigle_gie'])?$_POST['Sigle_gie']:null;
    $forme_social_societe=isset($_POST['forme_gie'])?$_POST['forme_gie']:null;
    $objet_social_societe=isset($_POST['object_social_gie'])?$_POST['object_social_gie']:null;
    $capital_societe=isset($_POST['capital_gie'])?$_POST['capital_gie']:null;
    $valeur_nominale_societe=isset($_POST['valeur_nominale_gie'])?$_POST['valeur_nominale_gie']:null;
    $montant_apport_societe=isset($_POST['apports_gie'])?$_POST['apports_gie']:null;
    $description_apport_societe=isset($_POST['description_apport_gie'])?$_POST['description_apport_gie']:null;

    $Duree_ans_societe=isset($_POST['Duee_ans_gie'])?$_POST['Duee_ans_gie']:null;
    $adresse_seige=isset($_POST['adresse_gie'])?$_POST['adresse_gie']:null;
    $code_postal_siege=isset($_POST['code_postal_gie'])?$_POST['code_postal_gie']:null;


    $ville_siege=isset($_POST['ville_gie'])?$_POST['ville_gie']:null;



    $type_announce=isset($_POST['type_announce'])?$_POST['type_announce']:null;

// ////////////////////////////////////////////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////////////////////////////////////////
    $Tribunal = isset($_POST['Tribunal_gie']) ? $_POST['Tribunal_gie'] : null;
    

    $Date_depot = isset($_POST['Date_depot_gie']) ? $_POST['Date_depot_gie'] : null;
    echo "Date de dépôt: $Date_depot<br>";

    $nemuro_depot = isset($_POST['nemuro_depot_gie']) ? $_POST['nemuro_depot_gie'] : null;
    echo "Numéro de dépôt: $nemuro_depot<br>";

    $nemuro_rc = isset($_POST['nemuro_rc_gie']) ? $_POST['nemuro_rc_gie'] : null;
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
    include("./membre.php");


    $acte=new acte($type_acte,$date_acte);
    $acte_id=$acte->insert_to_acte();
    $siege_social=new SiegeSocial($adresse_seige,$code_postal_siege,$ville_siege);
    $siege_id=$siege_social->insertToSiegeSocial();
    $depot_social=new DepotLegal($Tribunal,$Date_depot,$nemuro_depot,$nemuro_rc);
    $depot_id=$depot_social->insertToDepotLegal();
 
 
  


    $company=new Company($denomination_societe,$sigle_societe,$forme_social_societe,$objet_social_societe,$capital_societe,$valeur_nominale_societe
    ,$montant_apport_societe,$description_apport_societe,$Duree_ans_societe,$acte_id,$siege_id,$depot_id,'1');
    $company_id=$company->insertToCompany();
    


    foreach ($_POST['type_personne_gie'] as $i => $type_personne) {
        $qualite = $_POST['qualite_gie'][$i] ?? null;
        $civilite = $_POST['civilite_gie'][$i] ?? null;
        $nom = $_POST['Nom_represannat_gie'][$i] ?? null;
        $prenom = $_POST['prenom_represannt_gie'][$i] ?? null;
        $adresse = $_POST['adresse_represantant_gie'][$i] ?? null;
        $denomination_represent=$_POST['denomination_represantant_gie'][$i] ?? null;
        $code_postal = $_POST['code_postal_represantant_gie'][$i] ?? null;
        $ville = $_POST['ville_reprsenat_gie'][$i] ?? null;
    
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
    foreach ($_POST['type_membre_gie'] as $i => $type_membre) {
        $denomination = $_POST['denomination_membre_gie'][$i] ?? null;
        $rc = $_POST['rc_membre_gie'][$i] ?? null;
        $adresse = $_POST['adresse_membre_gie'][$i] ?? null;
        $code_postal_gie = $_POST['code_postal_membre_gie'][$i] ?? null;
        $ville_gie = $_POST['ville_membre_gie'][$i] ?? null;
        $parts=$_POST['parts_membre_gie'][$i] ?? null;
    
         $membre_organe[$i] = new Membre(
            $type_membre,
            $denomination,
            $rc,
            $adresse,
            $code_postal_gie,
            $ville_gie,
            $ville_gie
            
        );
    
         $membre=$membre_organe[$i]->insertTomembre();
         $company->insertMembreCompany($membre,$company_id);

    }
    foreach ($_POST['type_membre_organe_gie'] as $i => $type_membre) {
        $qualite = $_POST['qualite_membre_organe_gie'][$i] ?? null;
        $civilite = $_POST['civilite_membre_organe_gie'][$i] ?? null;
        $nom = $_POST['Nom_membre_organe_gie'][$i] ?? null;
        $prenom = $_POST['prenom_membre_organe_gie'][$i] ?? null;
        $adresse = $_POST['adresse_membre_organe_gie'][$i] ?? null;
        $denomination_represent=$_POST['denomination_membre_organe_gie'][$i] ?? null;
        $code_postal = $_POST['code_postal_membre_organe_gie'][$i] ?? null;
        $ville = $_POST['ville_membre_organe_gie'][$i] ?? null;
    
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
    if(isset($_POST['type_commaissaire_gie'])){
        foreach ($_POST['type_commaissaire_gie'] as $i => $type_commaissaire_sas) {
            $civilite_commaisaire = $_POST['civilite_commaisaire_gie'][$i] ?? null;
            $Nom_commaisaire= $_POST['Nom_commaisaire_gie'][$i] ?? null;
            $prenom_commaisaire = $_POST['prenom_commaisaire_gie'][$i] ?? null;
            $adresse_commaisaire = $_POST['adresse_commaisaire_gie'][$i] ?? null;
            $Denomination_commaisaire = $_POST['Denomination_commaisaire_gie'][$i] ?? null;
            $code_postal_commaisaire=$_POST['code_postal_commaisaire_gie'][$i] ?? null;
            $ville_commaisaire = $_POST['ville_commaisaire_gie'][$i] ?? null;
          
    
        
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
        

    }
 
    $announce=new Annonce($company_id,$type_announce);
    $announce->insertToAnnonce();

}
$_SESSION['message'] = "Information saved successfully!";

 header("Location: ../home.php");
 exit();

?>