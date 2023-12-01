<?php
$filetodo = file_get_contents("todo-list.json");

$todoList = json_decode($filetodo, true);

if (isset($_POST['task'])){
    $newObject = [
        "text" => $_POST['task'],
        "done" => false 
    ];
    array_push($todoList, $newObject);
    file_put_contents('todo-list.json', json_encode($todoList));
}

header('Content-Type: application/json');
echo json_encode($todoList);
?>