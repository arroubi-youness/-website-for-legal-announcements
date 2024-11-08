<?php

class Company {
    private $pdo;
    private $denomination;
    private $sigle;
    private $forme_sociale;
    private $objet_social;
    private $capital_dh;
     private $valeur_nominale_dh;
    private $montant_apports_numeraire_dh;
    private $description_apports_nature;
    private $duree_ans;
    private $id_acte_etran;
    private $id_siege;

    private $stipulation_id;


    public function __construct($denomination, $sigle, $forme_sociale, $objet_social, $capital_dh, $valeur_nominale_dh, $montant_apports_numeraire_dh, $description_apports_nature, $duree_ans, $id_acte_etran, $id_siege, $depot_id,$stipulation_id) {
        $this->denomination = $this->sanitizeInput($denomination);
        $this->sigle = $this->sanitizeInput($sigle);
        $this->forme_sociale = $this->sanitizeInput($forme_sociale);
        $this->objet_social = $this->sanitizeInput($objet_social);
        $this->capital_dh = $this->sanitizeInput($capital_dh);
         $this->valeur_nominale_dh = $this->sanitizeInput($valeur_nominale_dh);
        $this->montant_apports_numeraire_dh = $this->sanitizeInput($montant_apports_numeraire_dh);
        $this->description_apports_nature = $this->sanitizeInput($description_apports_nature);
        $this->duree_ans = $this->sanitizeInput($duree_ans);
        $this->id_acte_etran = $this->sanitizeInput($id_acte_etran);
        $this->id_siege = $this->sanitizeInput($id_siege);
        $this->depot_id = $this->sanitizeInput($depot_id);
        $this->stipulation_id = $this->sanitizeInput($stipulation_id);

         echo "111111111111111111111111111111 ggggggg11";



        try {
            $this->pdo = new PDO("mysql:host=localhost;dbname=annonces_legales", "root", "");
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Database connection failed: " . $e->getMessage());
        }
    }

    private function sanitizeInput($input) {
        return htmlspecialchars(strip_tags($input));
    }

    public function insertToCompany() {
        $stmt = $this->pdo->prepare("
            INSERT INTO company (Denomination,Sigle,Forme_sociale,Objet_social, Capital_DH, Valeur_nominale_DH, Montant_des_apports_en_numéraire_DH, Description_des_apports_en_nature_et_leurs_valeurs, Durée_ANS, id_acte_etran, id_siege, depot_id,stipulation_id) 
            VALUES (:denomination, :sigle, :forme_sociale, :objet_social, :capital_dh, :valeur_nominale_dh, :montant_apports_numeraire_dh, :description_apports_nature, :duree_ans, :id_acte_etran, :id_siege, :depot_id,:stipulation_id)
        ");

        try {
            $stmt->execute([
                ':denomination' => $this->denomination,
                ':sigle' => $this->sigle,
                ':forme_sociale' => $this->forme_sociale,
                ':objet_social' => $this->objet_social,
                ':capital_dh' => $this->capital_dh,
                 ':valeur_nominale_dh' => $this->valeur_nominale_dh,
                ':montant_apports_numeraire_dh' => $this->montant_apports_numeraire_dh,
                ':description_apports_nature' => $this->description_apports_nature,
                ':duree_ans' => $this->duree_ans,
                ':id_acte_etran' => $this->id_acte_etran,
                ':id_siege' => $this->id_siege,
                ':depot_id' => $this->depot_id,
                ':stipulation_id' => $this->stipulation_id
                 

            ]);
             return $this->pdo->lastInsertId();
        } catch (PDOException $e) {
            echo "Insert failed: " . $e->getMessage();
        }
    }
    public function insertToRepresentant($id_represent, $id_company_etranger) {
        $stmt = $this->pdo->prepare("
            INSERT INTO represent_company (id_represent, id_company_etranger) 
            VALUES (:id_represent, :id_company_etranger)
        ");

        try {
            $stmt->execute([
                ':id_represent' => $this->sanitizeInput($id_represent),
                ':id_company_etranger' => $this->sanitizeInput($id_company_etranger),
            ]);
            echo "Record inserted successfully into the representant table.";
        } catch (PDOException $e) {
            echo "Insert failed: " . $e->getMessage();
        }
    }


    public function insertToCommissaire($a,$b) {
        $stmt = $this->pdo->prepare("
            INSERT INTO  commaisiare_company (id_commaissaire_etrange, id_societe_etrange) 
            VALUES (:id_commaissaire_etrange, :id_societe_etrange)
        ");

        try {
            $stmt->execute([
                ':id_commaissaire_etrange' => $a,
                ':id_societe_etrange' => $b,
            ]);
            echo "Record inserted successfully into the commissaire table.";
        } catch (PDOException $e) {
            echo "Insert failed: " . $e->getMessage();
        }
    }
    public function insertMembreCompany($id_membre, $id_company) {
        try {
            $sql = "INSERT INTO membre_company (id_membre, id_comany) VALUES (:id_membre, :id_company)";
            $stmt = $this->pdo->prepare($sql);
            $stmt->bindParam(':id_membre', $id_membre);
            $stmt->bindParam(':id_company', $id_company);
            $stmt->execute();
            
            echo "Record inserted successfully!";
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
    public function insertToAssocie($id_associe_etrange, $id_societe) {
        $stmt = $this->pdo->prepare("
            INSERT INTO associe_company (id_associe_etrange, id_societe) 
            VALUES (:id_associe_etrange, :id_societe)
        ");

        try {
            $stmt->execute([
                ':id_associe_etrange' => $this->sanitizeInput($id_associe_etrange),
                ':id_societe' => $this->sanitizeInput($id_societe),
            ]);
            return $this->pdo->lastInsertId();

         } catch (PDOException $e) {
            echo "Insert failed: " . $e->getMessage();
        }
    }
    public function insertMembreOrganeCompany($id_membre_organe, $id_company) {
        try {
             $sql = "INSERT INTO membre_organe_company (id_membre_organe, id_company) VALUES (:id_membre_organe, :id_company)";
            
             $stmt = $this->pdo->prepare($sql);
            
             $stmt->bindParam(':id_membre_organe', $id_membre_organe, PDO::PARAM_INT);
            $stmt->bindParam(':id_company', $id_company, PDO::PARAM_INT);
            
             $stmt->execute();
            
             return "Insertion successful!";
        } catch (PDOException $e) {
             return "Error: " . $e->getMessage();
        }
    }


    public function __destruct() {
        $this->pdo = null;  
    }

    
}

?>
