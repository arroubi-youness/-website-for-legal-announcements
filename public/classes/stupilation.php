<?php
class SASInformation {
    private $pdo;
    private $organe_social_habilité;
    private $dispositions_statutaires;
    private $avantages;

    public function __construct($organe_social_habilité,$dispositions_statutaires,$avantages) {
         $this->organe_social_habilité = $organe_social_habilité;
        $this->dispositions_statutaires = $dispositions_statutaires;
        $this->avantages = $avantages;
        echo "sadfnasdfknasdf";

        try {
            $this->pdo = new PDO("mysql:host=localhost;dbname=annonces_legales", "root", "");
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Database connection failed: " . $e->getMessage());
        }
    }

    public function insertToSASInformation() {
        try {
             $stmt = $this->pdo->prepare("
                INSERT INTO sipulation (Organe_social_habilité, Dispositions_statutaires, Avantages) 
                VALUES (?, ?, ?)
            ");
        
             $stmt->execute([
                $this->organe_social_habilité,
                $this->dispositions_statutaires,
                $this->avantages
            ]);
        
            echo "Insertion successful!";
            return $this->pdo->lastInsertId();

        } catch (PDOException $e) {
            error_log("Insert failed: " . $e->getMessage());
            return "Insertion failed: " . $e->getMessage();
        }
        
    }

    public function __destruct() {
        $this->pdo = null;
    }
}
?>

<?php
  
?>
