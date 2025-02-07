<?php

require_once('db.php');

$role = $_POST['role'];
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$password = $_POST['password'];


$sql = "INSERT INTO users (role, name, tel, password, email) VALUES ('$role', '$name' ,'$tel' ,'$password', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "<script>alert('hello')</script>";
    // echo "Данные успешно добавлены!";
} else {
    echo "Ошибка: " . $conn->error;
}

$conn->close();
?>
