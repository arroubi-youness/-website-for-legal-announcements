<?php

class client
{

    private $pdo;
    private $nom;
    private $prenom;
    private $address;
    private $email;
    private $phone;
    private $password;
    private $pack;

    public function __construct($nom, $prenom, $address, $email, $phone, $password, $pack, $hash_pass = true)
    {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->address = $address;
        $this->phone = $phone;
        $this->pack = $pack;
        $this->setEmail($email);
        if ($hash_pass) {
            $this->setPassword($password);
        } else {
            $this->setPlainPassword($password);
        }

        try {
            $this->pdo = new PDO("mysql:host=localhost;dbname=rental_cars_house", "root", "");
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }



    public function setEmail($email)
    {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $this->email = $email;
        } else {
            throw new Exception("Invalid email format");
        }
    }



    public function setPassword($password)
    {
        $this->password = password_hash($password, PASSWORD_BCRYPT);
    }



    public function setPlainPassword($password)
    {
        $this->password = $password;
    }

    public function save()
    {
        $stmt = $this->pdo->prepare("INSERT INTO client (nom, prenom, address, email,phone,status,password,pack_id) VALUES (:nom, :prenom, :address, :email,:phone,:status,:password,:pack)");
        $stmt->execute([
            ':nom' => $this->nom,
            ':prenom' => $this->prenom,
            ':address' => $this->address,
            ':email' => $this->email,
            ':password' => $this->password,
            ':phone' => $this->phone,
            ':status' => 'pending',
            ':pack' => $this->pack
        ]);
        $a = $this->email;
        header("Location: ../packs.html?mail=$a");
        exit();
    }
   


    ///////select  al  client 
    function allclient()
    {
        $ins = $this->pdo->prepare("SELECT client.*, packs.pack_name AS name
                FROM client
                INNER JOIN packs ON client.pack_id = packs.id_pack;
                ");
        $ins->execute();
        $table = $ins->fetchAll();
        foreach ($table as $var) {

            echo '
                    <tr>
                        <td class="border-b  border-b-gray-300       p-4 pl-8 text-slate-400 ">' . $var['id'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['nom'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['prenom'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['email'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['address'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['phone'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['status'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['name'] . '</td>
                        <td class="border-b border-b-gray-300   p-4 pr-8 text-slate-400"><button class="w-[42%] h-8 bg-red-500 hover:bg-red-700 rounded-xl ml-9" onclick="delete_client(' . $var['id'] . ')"><i class="bx bxs-trash text-white"></i></button></td>


                    </tr>
                    
                    ';
        }
    }

    function pendingClient()
    {
        $ins = $this->pdo->prepare(" SELECT client.*, packs.pack_name AS name
                FROM client
                INNER JOIN packs ON client.pack_id = packs.id_pack
                WHERE status = ?");
        $ins->execute(['pending']);
        $table = $ins->fetchAll(PDO::FETCH_ASSOC);
        foreach ($table as $var) {

            echo '
                    <tr>
                        <td class="border-b  border-b-gray-300       p-4 pl-8 text-slate-400 ">' . $var['id'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['nom'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['prenom'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['email'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['address'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['phone'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['name'] . '</td>

                        <td class="border-b border-b-gray-300    p-4 pr-8 text-slate-400"><button class="w-[40%] h-8 bg-green-500 hover:bg-green-700 rounded-xl ml-9"  onclick="accept_client(' . $var['id'] . ')"   ><i class="bx bx-check  text-white text-2xl font-bold  text-center"  ></button></td>
                        <td class="border-b border-b-gray-300   p-4 pr-8 text-slate-400"><button class="w-[42%] h-8 bg-red-500 hover:bg-red-700 rounded-xl ml-9" onclick="reject_client(' . $var['id'] . ')"><i class="bx bxs-trash text-white"></i></button></td>


                    </tr>
                    
                    ';
        }
    }


    function RejectClient()
    {
        $ins = $this->pdo->prepare("SELECT client.*, packs.pack_name AS name
                FROM client
                INNER JOIN packs ON client.pack_id = packs.id_pack
                WHERE status = ?");
        $ins->execute(['rejected']);
        $table = $ins->fetchAll(PDO::FETCH_ASSOC);
        foreach ($table as $var) {

            echo '
                    <tr>
                        <td class="border-b  border-b-gray-300       p-4 pl-8 text-slate-400 ">' . $var['id'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['nom'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['prenom'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['email'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['address'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['phone'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['name'] . '</td>
                        <td class="border-b border-b-gray-300   p-4 pr-8 text-slate-400"><button class="w-[42%] h-8 bg-red-500 hover:bg-red-700 rounded-xl ml-9" onclick="delete_client(' . $var['id'] . ')"><i class="bx bxs-trash text-white"></i></button></td>


                    </tr>
                    
                    ';
        }
    }


    function AcceptClient()
    {
        $ins = $this->pdo->prepare("SELECT client.*, packs.pack_name AS name
                FROM client
                INNER JOIN packs ON client.pack_id = packs.id_pack
                WHERE status = ?");
        $ins->execute(['accepted']);
        $table = $ins->fetchAll(PDO::FETCH_ASSOC);
        foreach ($table as $var) {

            echo '
                    <tr>
                        <td class="border-b  border-b-gray-300       p-4 pl-8 text-slate-400 ">' . $var['id'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['nom'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['prenom'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['email'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['address'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['phone'] . '</td>
                        <td class="border-b border-b-gray-300  p-4 text-slate-400">' . $var['name'] . '</td>

                          <td class="border-b border-b-gray-300   p-4 pr-8 text-slate-400"><button class="w-[42%] h-8 bg-red-500 hover:bg-red-700 rounded-xl ml-9" onclick="delete_client(' . $var['id'] . ')"><i class="bx bxs-trash text-white"></i></button></td>
 

                    </tr>
                    
                    ';
        }
    }

    //////accept client
    function accept_clients($idClient)
    {
        $ins = $this->pdo->prepare('

                UPDATE client
                SET status = ?
                WHERE id=?;
             
            ');
        $ins->execute(['accepted', $idClient]);
    }

    function reject_clients($idClient)
    {
        $ins = $this->pdo->prepare('

                UPDATE client
                SET status = ?
                WHERE id=?;
             
            ');
        $ins->execute(['rejected', $idClient]);
    }

    function delete_clients($idClient)
    {
        $ins = $this->pdo->prepare('
                DELETE FROM  client
                WHERE id=?;
            ');
        $ins->execute([$idClient]);
    }


    public function test_exist_client()


    {
        $stmt = $this->pdo->prepare("SELECT  password,status,id FROM client WHERE email = :email");
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->bindParam(':email', $this->email);
        $stmt->execute();
        $table = $stmt->fetch();
        print_r($table);
        echo $this->password;

        
        
        if ($table && password_verify($this->password, $table['password'])) {

            if ($this->email == "admin@gmail.com") {
                header("Location: ../dashbord.php");
                exit();
            } elseif($table['status']=='pending') {
                header("Location: ../pendnig.php?value=1");
                exit();
            }
            elseif($table['status']=='rejected'){
                header("Location: ../pendnig.php?value=2");
                exit();
            }
            else{
                header("Location: ../accept.php?otehr=".$table['id']."");
                exit();
            }
        } else {
            echo
            '<script>
                    alert("Password incorrect");
             </script>';
        }
    }
}


////////////adding data to data base 
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['signup'])) {
    $name = $_POST['Firstname'];

    $prenom = $_POST['secondname'];
    $address = $_POST['Address'];
    $email = $_POST['Email'];
    $phone = $_POST['Phone'];
    $password = $_POST['Password'];
    $pack = $_POST['pack'];
    $confirm_password = $_POST['Password-confirm'];
    if (empty($name) || empty($prenom) || empty($address) || empty($email) || empty($phone) || empty($password) || empty($confirm_password)) {
        header("Location: ../sign_up.php");
        exit();
    }

    if ($password === $confirm_password) {

        $customer = new client($name, $prenom, $address, $email, $phone, $password, $pack);
        $customer->save();
    } else {
        header("Location: ../sign_up.php");
        exit();
    }
}
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['signin'])) {
    $email_login = $_POST['mail'];
    $password_login = $_POST['password_sign'];
    if (empty($email_login) || empty($password_login)) {

        echo '<script>
        alert("Please fill all fields");
        window.location.href = "../login.html";
        </script>';
    }

    $customer_test = new client('', '', '', $email_login, '', $password_login,'', false);
     $customer_test->test_exist_client();
}
