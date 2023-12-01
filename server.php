<?php
$filetodo = file_get_contents("todo-list.json");

$todoList = json_decode($filetodo, true);

?>