$.get("./getProfil.php?name=toto")
.done( function(data){
    profil = jQuery.parseJSON(data);
    $( "#result" ).text(profil.name );
    console.log(profil);
    console.log(profil.profileIconId);
    $("#sumIcon").attr('src', "http://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/"+profil.profileIconId+".png");
    $("#result").text(profil.name);
    $("#LVL").text(profil.summonerLevel);
});

$("#go").click( function(){
	pseudo = $("#Joueur").val();
	console.log("pseudo:"+pseudo);
});