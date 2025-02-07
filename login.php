<?php


$name = $_POST['name'];
$email = $_POST['email'];

$sql = "INSERT INTO users (name, email) VALUES ('$name', '$email')";

if ($conn->query(query: $sql) === TRUE) {
    echo "Данные успешно добавлены!";
} else {
    echo "Ошибка: " . $conn->error;
}

$conn->close();
?>
