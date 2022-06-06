<?php
require("connect.php");

// connect to db
$db = new mysqli($db_host, $db_user, $db_password, $db_name);
if ($db->connect_errno) {
    // if the connection to the db failed
    echo "Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error;
}
$query = "SELECT * FROM colors";
// execute query
if ($db->real_query($query)) {
    // if the query was successful
    $res = $db->use_result();

    $i = 0;
    while ($row = $res->fetch_assoc()) {
        $colors[$i]['name'] = $row["name"];
        $colors[$i]['code'] = $row["code"];

        $i++;
    }
    echo json_encode(['results' => $colors]);
} else {
    // if the query was NOT successful
    http_response_code(404);
}

$db->close();
