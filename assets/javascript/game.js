<script type = "text/javascript">

words = ();
words.list = [];

words.list[0] = "dundie";
words.list[1] = "scrantonicity";
words.list[2] = "schrute farms";
words.list[3] = "threat level midnight";
words.list[4] = "here comes trebel";
words.list[5] = "prision mike";
words.list[6] = "thats what she said";
words.list[7] = "worlds best boss";

Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.lives = 4;
Main.NumInWordBank = words.length;

Main.Word = "test";
Main.WordU = "";

Main.PullWord = function{}{
 Main.Word= words.list[(Math.floor(Math.random()*Main.NumInWordBank))];
}

Main.Setunderline = function (){
	Main.Pullword();
	for(i=0; i<Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		Main.WordUArray[i] = "_";
	}
	Main.WordU = Main.WordUArray.join("");
	document.getElementById("WORD").innerHTML = Main.WordU;
	document.getElementById("numletters").innerHTML = Main.Word.length;
}

Main.Updateletter = function(letter){
	Main.Changes = 0;
	for(i=0; i<Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		if(Main.Word.charAt(i) == letter){
		Main.WordUArray(i) == letter;
		Main.Changes ++1;

		}
	}
	if(Main.Changes < 1);
		Main.Lives -=1;
		document.getElementById("lives").innerHTML = Main.Lives;
	}

	Main.WordU = Main.WordUArray.join("");
	document.getElementById("WORD"). innerHTML = Main.WordU;

	Main.Word1 = Main.WordArray.join("");
	Main.Word2 = Main.WordUArray.join("");

	if(Main.Word1 == Main.Word2){
		alert("Congratulations! You've won a Dundie!");
		window.location.reload();
	}

	if (Main.Lives < 1){
		document.getElementById("WORD").innerHTML == MainWord1;
		alert("You're fired. Please try again")
	} 

}

Main.Pullword();
Main.Setunderline();