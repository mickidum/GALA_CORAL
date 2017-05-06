<?php
//headers
header('Pragma: public');
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Content-Description: File Transfer');
header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename=export.csv;');
header('Content-Transfer-Encoding: binary');


if($_POST) {
$email = test_input($_POST['email']);
$csv = fopen('log.csv', 'a+');
$emailErr = 'no email';
$myArray = [];
$headers = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/html; charset=UTF-8' . "\r\n";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $emailErr = 'false';
  $myArray['error'] = true;
  $myArray['message'] = 'email is not valid' ;
}
else {
  $emailErr = 'true';
  $myArray['error'] = false;
  $myArray['message'] = 'email validated' ;
}
$myJSONString = json_encode($myArray);
$outcsv = date("d-m-Y H:i:s").",".$email.",".$emailErr."\r\n";
fwrite($csv, $bom =( chr(0xEF) . chr(0xBB) . chr(0xBF) ));
fwrite($csv, $outcsv);
echo $myJSONString;
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
