<?php
session_start();
$isLoggedIn = isset($_SESSION['user_id']) ? true : false;
?>
<script>
    var isLoggedIn = <?php echo json_encode($isLoggedIn); ?>;
</script>
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    // Connessione al database
    $conn = new mysqli("localhost", "root", "", "electrovision");
    if ($conn->connect_error) {
        die("Connessione fallita: " . $conn->connect_error);
    }

    // Inserimento nel database
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $password);

    if ($stmt->execute()) {
        echo "Nuovo account creato con successo!";
    } else {
        echo "Errore: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
