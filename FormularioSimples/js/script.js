var txtNome = document.getElementById("txtNome")
var txtTelefone = document.getElementById("idTelefone")
var txtIdade = document.getElementById("idade")
var txtSenha1 = document.getElementById("senha1")
var txtSenha2 = document.getElementById("senha2")
var txtEmail = document.getElementById("idEmail")
txtNome.onblur = function() {
    confirmarNome(txtNome.value);
};
txtTelefone.onblur = function() {
    confirmarTelefone(txtTelefone.value);
};
txtIdade.onblur = function() {
    txtIdade.value = confirmarIdade(txtIdade.value);
};
txtEmail.onblur = function(){
    confirmarEmail(txtEmail.value);
}
txtSenha2.onblur = function (){
    confirmarSenha();
}
function voltarFoco(campo)
{
    setTimeout(function() { campo.focus(); }, 10);        
}
function confirmarNome(nome) {
    if (nome =="") {
        alert(" Campo não pode estar vazio");
        voltarFoco(txtNome)
    } else if (nome.length < 4) {
        alert(nome + ' Preciso de um nome maior');
        voltarFoco(txtNome)  
    }
    return(nome); 
}
function confirmarSenha() {
    if(txtSenha1.value != txtSenha2.value) {
       alert (" Senhas não conferem");
       voltarFoco(txtSenha1)
       txtSenha1.value = ""
       txtSenha2.value = "" 
   }
}
function confirmarIdade(idade) {
    if (idade < 0) {
        alert (idade + " Não é uma idade válida");
        voltarFoco(txtIdade)
        return ('');
    } else {
        return idade;
    }
}
function confirmarEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) 
    {
        voltarFoco(txtEmail)
        alert("Digite um e-mail válido")
    }
}
function confirmarTelefone(fone){
    var regex = new RegExp('^\[0-9]{2}\((3[0-9]{7})|(9[0-9]{8}))$');
    if (!regex.test(fone))
    {
        voltarFoco(txtTelefone)
        alert("Digite um telefone válido")
    }
}       

