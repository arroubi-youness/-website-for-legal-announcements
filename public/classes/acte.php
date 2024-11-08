<?php

  class  acte {
    private $pdo;
    private $nature_acte;
    private $date_acte;
    public function __construct($nature_acte, $date_acte)
    {
         $this->nature_acte = $nature_acte;
         $this->date_acte = $date_acte;

         try {
            $this->pdo = new PDO("mysql:host=localhost;dbname=annonces_legales", "root", "");
        } catch (PDOException $e) {
            echo $e->getMessage();
        }

    }
    public function insert_to_acte()
    {
        $stmt = $this->pdo->prepare("INSERT INTO status_acte (nom_acte, date_acte) VALUES (:nom, :date)");
        $stmt->execute([
            ':nom' => $this->nature_acte,
            ':date' => $this->date_acte,
            
        ]);
        return $this->pdo->lastInsertId();


    }
    public function __destruct() {
        $this->pdo = null;  
    }

  };

?>