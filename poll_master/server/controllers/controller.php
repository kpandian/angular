<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);

define("MODELS_PATH",'../models');


if(isset($_REQUEST)){
$myfile = fopen("newfile1.txt", "w") or die("Unable to open file!");
fwrite($myfile,print_r($_REQUEST,1));
fclose($myfile);
}

if(isset($_GET)){
$myfile = fopen("newfile2.txt", "w") or die("Unable to open file!");
fwrite($myfile,print_r($_GET,1));
fclose($myfile);
}

if(isset($_POST)){
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
fwrite($myfile,print_r($_POST,1));
fclose($myfile);


    $request_action = $_POST['action'];

    if($request_action == 'login_action'){
        include_once(MODELS_PATH.'/login.php');
        $output = $auth->login($_POST);
    }
    else
    {
        $output = array("Status"=>"failed","error"=>"unknown action");
    }

}
else if(isset($_GET)){

    $request_action = $_GET['action'];

}
else{

    $output = array("Status"=>'failed',"error"=>"unknown header");

}

echo json_encode($output);

?>