<?php

class SiegeSocial {
    private $pdo;
    private $adresse;
    private $code_postal;
    private $ville;

    public function __construct($adresse, $code_postal, $ville) {
        $this->adresse = $adresse;
        $this->code_postal = $code_postal;
        $this->ville = $ville;

        try {
            $this->pdo = new PDO("mysql:host=localhost;dbname=annonces_legales", "root", "");
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
        } catch (PDOException $e) {
            die("Database connection failed: " . $e->getMessage());  
        }
    }

    public function insertToSiegeSocial() {
        $stmt = $this->pdo->prepare("INSERT INTO siege_sociale (Adresse,Code_postal,Ville) VALUES (:adresse, :code_postal, :ville)");

        try {
            $stmt->execute([
                ':adresse' => $this->adresse,
                ':code_postal' => $this->code_postal,
                ':ville' => $this->ville,
            ]);
            return $this->pdo->lastInsertId();

        } catch (PDOException $e) {
            echo "Insert failed: " . $e->getMessage();  
    }
 
}
}
?>
