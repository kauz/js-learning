<?php 
error_reporting(-1);

?>
<!DOCTYPE html>
<html>
  <head>
<style>
table {
margin: 10% 42%;
border-collapse: collapse;
background: mintcream;
}
td {
padding: 10px;
background: mintcream;
}
td:hover {
cursor: pointer;
}
td:first-child {
border-right: 1px solid black;
}
tr:first-child {
border-bottom: 1px solid black;
}
.hovered {
background: gold;
}
</style>
<title>Table</title>
</head>
<body>
<?php
echo "<table>\n";

for ($i = 1; $i <= 9; $i++) {
echo "\t<tr>\n";

for ($n = 1; $n <=9; $n++) {
$sum = $i * $n;
echo "\t\t<td data-value=\"$sum\">" . $sum . "</td>\n";
}

echo "\t</tr>\n";
}

echo "\n\t</table>\n";	

/*echo "\t<select>\n";
for ($year = 1900; $year <= 2017; $year++) {
echo "\t\t<option value=\"$year\">$year</option>\n";
}
echo "\t</select>\n";*/
?>
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script>
var selected = $("td").hover();

selected.hover(function(){
    $(this).css("background-color", "gold");
    }, function(){
    $(this).css("background-color", "mintcream");
});
</script>
</body>
</html>
