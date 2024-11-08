<?php

class Annonce {
    private $pdo;
    private $id_societe;
    private $id_type;

    public function __construct($id_societe, $id_type) {
        $this->id_societe = $this->sanitizeInput($id_societe);
        $this->id_type = $this->sanitizeInput($id_type);

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

     public function insertToAnnonce() {
        $stmt = $this->pdo->prepare("
            INSERT INTO annonce (id_societe, id_type) 
            VALUES (:id_societe, :id_type)
        ");

        try {
            $stmt->execute([
                ':id_societe' => $this->id_societe,
                ':id_type' => $this->id_type
            ]);
            echo "Record inserted successfully into the annonce table.";
        } catch (PDOException $e) {
            echo "Insert failed: " . $e->getMessage();
        }
    }

    public function __destruct() {
        $this->pdo = null; 
    }
}

?>
