$(document).ready(function(){
    
    $("#prikaz").hide();
  
    $('#toggle-prikaz').click(function() {
        var barkod = $('#barkod').val().trim();
        var naziv = $('#naziv').val().trim();
        var opis = $('#opis').val().trim();
        var vrsta = $("#vrsta option:selected" ).text();
        
        var ocena = $('#ocena').val();
        var parsiranaOcena = parseInt(ocena);
        const PDV = 0.20;
        var novaCena = parsiranaOcena+ parsiranaOcena*PDV;
    
        var opis_regex = /^([a-zA-z\s]{1,200})$/;
        var barkod_cena_regex = /^[0-9]+$/;
        
        
          if (!barkod.match(barkod_cena_regex) || barkod.length === 0) { 
            $(".error").attr('hidden','hidden');   
            $('#errorBarkod').removeAttr('hidden');   
            }
           
            else if (naziv.length === 0) {
                $(".error").attr('hidden','hidden');
            $('#errorNaziv').removeAttr('hidden');            
            }
            
            else if (!opis.match(opis_regex) || opis.length === 0) {
                $(".error").attr('hidden','hidden');
            $('#errorOpis').removeAttr('hidden'); 
            }

            else if (ocena.length === 0) {
                $(".error").attr('hidden','hidden');
            $('#errorOcena').removeAttr('hidden'); 
            
            }
    
            else {
            
            $("#unos").hide();
            $("#prikaz").show();
            $(".error").attr('hidden','hidden');
            $("#tdBarkod").text(barkod).css("color","white");
            $("#tdNaziv").text(naziv).css("color","white");
            $("#tdOpis").text(opis).css("color","white");
            $("#tdVrsta").text(vrsta).css("color","white");
            $("#tdOcena").text(ocena).css("color","white");
            $("#tdPDV").text(novaCena).css("color","white");
            
            var datum = new Date();
		    var vreme = datum.getDate()+"/"+(datum.getMonth()+1)+"/"+datum.getFullYear()+" "+ datum.getHours() + ":" +datum.getMinutes ();
            $("#tdDatum").text(vreme).css("color","white");     
            
        }
            });

    $("#pic").change(function() {
        readURL(this);
        });
    
    $("#toggle-unos").click(function(){
        $("#prikaz").hide();
        $("#unos").show();
        });

        function readURL(input) {
          if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
              $('#miniPic').attr('src', e.target.result);
            }
        
            reader.readAsDataURL(input.files[0]);
          }
        }          
    
    });
        