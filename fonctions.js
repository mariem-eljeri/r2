function RemplirAnnees(){
    for (var i=1990;i<=2050;i++){
        var x=new Option(i,i);/*ajouter une option*/
        var L=F.Annee.length;
        F.Annee.options[L]=x;
    }
}
function verif(){
    var nom=F.T1.value;
    var prenom=F.T2.value;
    var email=F.T3.value;
    var pass=F.T4.value;
    if(nom==''|| prenom=='' || email=='' ||pass==''){
        alert("remplir tous les champs(nom,prenom,email,password)");
        return false;
    }else if(F.R1[0].checked==false && F.R1[1].checked==false){
        alert("cocher votre sexe");
        return false;
    }else if(F.R2[0].checked==false && F.R2[1].checked==false){
        alert("cocher votre etat civil");
        return false;
    }else if(F.C1.checked==false){
        alert("cocher la condition");
        return false;
    }else if(email.indexOf("@")!=email.lastIndexOf("@")){
        alert("vous avez plusieurs @ dans votre mail");
        return false;
    }


    /*password*/
    var maj=min=chif=0;
    for(let i=0;i<pass.length;i++){
        if(pass.charAt(i)>='A' && pass.charAt(i)<='Z'){
            maj++;
        }
        if(pass.charAt(i)>='a'&& pass.charAt(i)<='z'){
            min++;
        }
        if(pass.charAt(i)>='0'&& pass.charAt(i)<='9'){
            chif++;
        }
    }
    if(maj==0 || min==0 || chif==0 || pass.length<8){
        alert("votre mot de passe moins de 8 caractères ou bien ne contient pas un majuscule ,un minuscule et un chiffre");
        return false;
    }
}
    
