<?php

class DepotLegal {
    private $pdo;
    private $tribunal;
    private $date_depot;
    private $numero_depot;
    private $numero_rc;

    public function __construct($tribunal, $date_depot, $numero_depot, $numero_rc) {
        $this->tribunal = $this->sanitizeInput($tribunal);
        $this->date_depot = $this->sanitizeInput($date_depot);
        $this->numero_depot = $this->sanitizeInput($numero_depot);
        $this->numero_rc = $this->sanitizeInput($numero_rc);

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

    public function insertToDepotLegal() {
        $stmt = $this->pdo->prepare("
            INSERT INTO depot_legal (Tribunal,Date_de_dépôt,Numéro_de_dépôt,Numéro_de_RC) 
            VALUES (:tribunal, :date_depot, :numero_depot, :numero_rc)
        ");

        try {
            $stmt->execute([
                ':tribunal' => $this->tribunal,
                ':date_depot' => $this->date_depot,
                ':numero_depot' => $this->numero_depot,
                ':numero_rc' => $this->numero_rc
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
