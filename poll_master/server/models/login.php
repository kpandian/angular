<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
$auth = new loginModel();
class loginModel{
    public function __construct(){
        /*include_once('connect.php');
        $this->conn = $conn;*/
    }
    public function login($params){
    include_once('connect.php');
        $sql = "SELECT au_id as id,au_name as name FROM admin_users where au_name='".$params['username']."' and au_pwd=md5('".$params['password']."') and au_status='1' LIMIT 1";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $user_details = array();
            while($row = $result->fetch_assoc()) {
                $user_details['id'] = $row["id"];
                $user_details['name'] = $row["name"];
            }
            $output = array("Status"=>"success","user_details"=>$user_details);
        }
        else
        {
            $output = array("Status"=>"failed","error"=>"Authentication Failed");
        }
        return $output;
    }
}
?>