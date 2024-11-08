<?php

 
class Representant {
    private $pdo;
    private $type;
    private $qualite;
    private $civilite;
    private $nom;
    private $prenom;
    private $adresse;
    private $code_postal;
    private $denomination;
    private $ville;

    public function __construct($type, $qualite, $civilite, $nom, $prenom, $adresse,$denomination, $code_postal, $ville) {
        $this->type = $this->sanitizeInput($type);
        $this->qualite = $this->sanitizeInput($qualite);
        $this->civilite = $this->sanitizeInput($civilite);
        $this->nom = $this->sanitizeInput($nom);
        $this->prenom = $this->sanitizeInput($prenom);
        $this->adresse = $this->sanitizeInput($adresse);
        $this->code_postal = $this->sanitizeInput($code_postal);
        $this->denomination = $this->sanitizeInput($denomination);

        $this->ville = $this->sanitizeInput($ville);

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

    public function insertToRepresentant() {
        $stmt = $this->pdo->prepare("
            INSERT INTO represent (type,Qualité, Civilité,Nom,Prénom,Adresse,Code_Postal,Ville,denomination) 
            VALUES (:type, :qualite, :civilite, :nom, :prenom, :adresse, :code_postal, :ville,:denomina)
        ");

        try {
            $stmt->execute([
                ':type' => $this->type,
                ':qualite' => $this->qualite,
                ':civilite' => $this->civilite,
                ':nom' => $this->nom,
                ':prenom' => $this->prenom,
                ':adresse' => $this->adresse,
                ':code_postal' => $this->code_postal,
                ':ville' => $this->ville,
                ':denomina' => $this->denomination

            ]);
            return $this->pdo->lastInsertId();
        } catch (PDOException $e) {
            echo "Insert failed: " . $e->getMessage();  
        }
    }

    public function __destruct() {
        $this->pdo = null;  
    }
}

?>




 