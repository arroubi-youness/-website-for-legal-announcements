<?php
class Membre {
    private $pdo;
    private $type;
    private $denomination;
    private $rc;
    private $adresse;
    private $codePostal;
    private $ville;
    private $nombreParts;

    public function __construct($type, $denomination, $rc, $adresse, $codePostal, $ville, $nombreParts) {
         $this->type = $type;
        $this->denomination = $denomination;
        $this->rc = $rc;
        $this->adresse = $adresse;
        $this->codePostal = $codePostal;
        $this->ville = $ville;
        $this->nombreParts = $nombreParts;

        try {
            $this->pdo = new PDO("mysql:host=localhost;dbname=annonces_legales", "root", "");
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
        } catch (PDOException $e) {
            die("Database connection failed: " . $e->getMessage());  
        }
    }

    public function insertTomembre() {
        try {
            $sql = "INSERT INTO membre (Type, Dénomination, RC, Adresse, Code_Postal, Ville, Nombre_de_Parts_Libérées)
                    VALUES (:type, :denomination, :rc, :adresse, :code_postal, :ville, :nombre_parts)";
            
            $stmt = $this->pdo->prepare($sql);
            $stmt->bindParam(':type', $this->type);
            $stmt->bindParam(':denomination', $this->denomination);
            $stmt->bindParam(':rc', $this->rc);
            $stmt->bindParam(':adresse', $this->adresse);
            $stmt->bindParam(':code_postal', $this->codePostal);
            $stmt->bindParam(':ville', $this->ville);
            $stmt->bindParam(':nombre_parts', $this->nombreParts);
            $stmt->execute();
            
            echo "Membre inserted successfully!";
            return $this->pdo->lastInsertId(); 

        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
}
?>
