<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['sarl_information'])) {
    print_r($_POST);



    
    $type_acte=isset($_POST['type_acte'])?$_POST['type_acte']:null;
    $date_acte=isset($_POST['date_acte'])?$_POST['date_acte']:null;
    $denomination_societe=isset($_POST['denomination'])?$_POST['denomination']:null;
    $sigle_societe=isset($_POST['Sigle'])?$_POST['Sigle']:null;
    $forme_social_societe=isset($_POST['forme_sarl'])?$_POST['forme_sarl']:null;
    $objet_social_societe=isset($_POST['object_social'])?$_POST['object_social']:null;
    $capital_societe=isset($_POST['capital'])?$_POST['capital']:null;
    $valeur_nominale_societe=isset($_POST['valeur_nominale'])?$_POST['valeur_nominale']:null;
    $montant_apport_societe=isset($_POST['montant_apport'])?$_POST['montant_apport']:null;
    $description_apport_societe=isset($_POST['description_apport'])?$_POST['description_apport']:null;

    $Duree_ans_societe=isset($_POST['Duee_ans'])?$_POST['Duee_ans']:null;

    $adresse_seige=isset($_POST['adresse'])?$_POST['adresse']:null;

    $code_postal_siege=isset($_POST['code_postal'])?$_POST['code_postal']:null;


    $ville_siege=isset($_POST['ville'])?$_POST['ville']:null;
    $type_announce=isset($_POST['type_announce'])?$_POST['type_announce']:null;

 

////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
    $Tribunal = isset($_POST['Tribunal']) ? $_POST['Tribunal'] : null;
    echo "Tribunal: $Tribunal<br>";

    $Date_depot = isset($_POST['Date_depot']) ? $_POST['Date_depot'] : null;
    echo "Date de dépôt: $Date_depot<br>";

    $nemuro_depot = isset($_POST['nemuro_depot']) ? $_POST['nemuro_depot'] : null;
    echo "Numéro de dépôt: $nemuro_depot<br>";

    $nemuro_rc = isset($_POST['nemuro_rc']) ? $_POST['nemuro_rc'] : null;
    echo "Numéro RC: $nemuro_rc<br>";
     include("./acte.php");
    include("./announce.php");
    include("./associe.php");
    include("./commaisaire.php");
    include("./company.php");
    include("./depot_legal.php");
    include("./representant.php");
    include("./siege_social.php");

    $acte=new acte($type_acte,$date_acte);
    $acte_id=$acte->insert_to_acte();
    $siege_social=new SiegeSocial($adresse_seige,$code_postal_siege,$ville_siege);
    $siege_id=$siege_social->insertToSiegeSocial();
    $depot_social=new DepotLegal($Tribunal,$Date_depot,$nemuro_depot,$nemuro_rc);
    $depot_id=$depot_social->insertToDepotLegal();
    $company=new Company($denomination_societe,$sigle_societe,$forme_social_societe,$objet_social_societe,$capital_societe,$valeur_nominale_societe
    ,$montant_apport_societe,$description_apport_societe,$Duree_ans_societe,$acte_id,$siege_id,$depot_id,'1');
    $company_id=$company->insertToCompany();


    foreach ($_POST['type_personne'] as $i => $type_personne) {
        $qualite = $_POST['qualite'][$i] ?? null;
        $civilite = $_POST['civilite'][$i] ?? null;
        $nom = $_POST['Nom_represannat'][$i] ?? null;
        $prenom = $_POST['prenom_represannt'][$i] ?? null;
        $adresse = $_POST['adresse_represantant'][$i] ?? null;
        $denomination_represent=$_POST['denomination_represantant'][$i] ?? null;
        $code_postal = $_POST['code_postal_represantant'][$i] ?? null;
        $ville = $_POST['ville_reprsenat'][$i] ?? null;
    
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
    foreach ($_POST['type_associe'] as $i => $type_associe) {
        $civilite_associe = $_POST['civilite_associe'][$i] ?? null;
        $denomination_associes = $_POST['denomination_associe'][$i] ?? null;
        $rc_ssocie = $_POST['rc_associe'][$i] ?? null;
        $nom_associe = $_POST['Nom_associe'][$i] ?? null;
        $prenom_associe = $_POST['prenom_associe'][$i] ?? null;
        $adresse_associe=$_POST['adresse_associe'][$i] ?? null;
        $code_postal_associe = $_POST['code_postal_associe'][$i] ?? null;
        $ville_associe = $_POST['ville_associe'][$i] ?? null;
        $parts_associe = $_POST['parts_associe'][$i] ?? null;

    
         $associe[$i] = new Associe(
            $type_associe,
            $civilite_associe,
            $nom_associe,
            $prenom_associe,
            $adresse_associe,
            $code_postal_associe,
            $ville_associe,
            $parts_associe,
            $denomination_associes,
            $rc_ssocie
        );
    
         $id_associe=$associe[$i]->insertToAssocie();
         $company->insertToAssocie($id_associe,$company_id);

    }
    if (isset($_POST['type_commaissaire'])) {
        foreach ($_POST['type_commaissaire'] as $i => $type_commaissaire) {
            $civilite_commaisaire = $_POST['civilite_commaisaire'][$i] ?? null;
            $Nom_commaisaire= $_POST['Nom_commaisaire'][$i] ?? null;
            $prenom_commaisaire = $_POST['prenom_commaisaire'][$i] ?? null;
            $adresse_commaisaire = $_POST['adresse_commaisaire'][$i] ?? null;
            $Denomination_commaisaire = $_POST['Denomination_commaisaire'][$i] ?? null;
            $code_postal_commaisaire=$_POST['code_postal_commaisaire'][$i] ?? null;
            $ville_commaisaire = $_POST['ville_commaisaire'][$i] ?? null;
          
    
        
             $Commissaire[$i] = new Commissaire(
                $type_commaissaire,
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