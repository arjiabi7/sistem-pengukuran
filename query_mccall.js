//Fungsi Correctness
$(document).ready(function(){
    $("#btnCorrect").click(function(){
        var getCorrect = $("#jmlCorrect").val();
        if(getCorrect == 0){
            alert("Masukkan jumlah kriteria lebih dari 0")
        }else{
            $("#correctnest").append("<div style='font-size: 15px; margin-top : 15px; padding-left: 190px; padding-right: 190px; '><p style='font-family: century schoolbook; margin-bottom: 0px;'>Jumlah responden</p><input id='jmlResponden' class='form-control' type='text' maxlength='4' placeholder='Masukkan jumlah responden' onkeypress='return hanyaAngka(event)'></input></div>")
            for(var i=0 ; i < getCorrect ; i++){
                $kriteria = "<div id=\'kriteriaCorrect"+i+"\' style='padding-bottom:10px;'><hr><div class='row'><div class='col-sm-3'></div><div class='col-sm-6'><p style='margin-bottom: 5px; font-size: 15px; font-family: century schoolbook;'>Kriteria</p><input class='form-control' list='datalistOptions kritCorrect' id='kriteriaC"+i+"' placeholder='Pilih Kriteria'><datalist id='datalistOptions kritCorrect'><option value='Completeness'><option value='Consistency'><option value='Tracebility'></datalist><div class='pertanyaanKrit'><a class='pertanyaanCorrect' style='font-size: 15px; font-family: century schoolbook; color: orange; cursor:pointer;'>Tambah pertanyaan</a></div><div class='col-sm-3'></div></div>";
                $("#correctnest").append($kriteria);
            }
            $("#tambahCorrectnest").remove();
            $("<div style='padding-top: 1px;'></div>").insertBefore("#correctnest");
            
            $(".pertanyaanCorrect").click(function(){
                var no = 1;
                var number = $( ".pertanyaanCorrect" ).index( this );
                var jmlPertanyaan = parseInt(prompt("Masukkan jumlah pertanyaan"));
                if(jmlPertanyaan == 0){
                    alert("Masukkan jumlah pertanyaan lebih dari 0")
                }else{
                    for(var i=0;i<jmlPertanyaan;i++){
                        $( this ).before("<div class='input-group'><input type='text' class='form-control' id='correctnest-k"+number+"-a"+no+"' placeholder='A' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='correctnest-k"+number+"-b"+no+"' placeholder='B' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='correctnest-k"+number+"-c"+no+"' placeholder='C' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='correctnest-k"+number+"-d"+no+"' placeholder='D' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='correctnest-k"+number+"-e"+no+"' placeholder='E' onkeypress='return hanyaAngka(event)'></div>");
                        no++;
                    }
                    no - jmlPertanyaan;
                    $(this, "a").hide();
                }
                $("#pengukuran_correctnest").click(function(){
                    var kalku = [];
                    
                    $("#hasil_correctnest").html("<div id='judul' style='background: black; color: white; font-size: 18px; padding: 10px;'><b>Correctnest</b></div><table style='border: 1px solid black;' class='table table-dark'><tbody id='correct'><tr><th rowspan='2'>Kriteria</th><th colspan='5'>Hasil Pertanyaan</th><th rowspan='2'>Jumlah</th><th rowspan='2'>Presentase</th></tr><tr><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr></tbody></table>");
                    for(i=0;i<getCorrect;i++){
                        
                        var kCorrect = $("#kriteriaC"+i).val();
                        for(j=1;j<=jmlPertanyaan;j++){

                            var jmlResponden = $("#jmlResponden").val();
                            var cA = $("#correctnest-k"+i+"-a"+j).val()*5;
                            var cB = $("#correctnest-k"+i+"-b"+j).val()*4;
                            var cC = $("#correctnest-k"+i+"-c"+j).val()*3;
                            var cD = $("#correctnest-k"+i+"-d"+j).val()*2;
                            var cE = $("#correctnest-k"+i+"-e"+j).val()*1;
                            var jml = cA + cB + cC + cD + cE;
                            var ave = 5 * jmlResponden;
                            var percent = ""+((jml / ave) * 100).toFixed(0)+"%";
                            
                            if(isNaN(cA) || isNaN(cB) || isNaN(cC) || isNaN(cD) || isNaN(cE)){
                                kCorrect="", cA="", cB="", cC="", cD="", cE="", jml="", ave="", percent="0";
                            }else{
                                $("#correct").append( "<tr id=\'kriteriaC"+i+""+j+"\'><td>"+kCorrect+"</td><td>"+cA+"</td><td>"+cB+"</td><td>"+cC+"</td><td>"+cD+"</td><td>"+cE+"</td><td>"+jml+"</td><td id=\'persen"+i+"\'>"+percent+"</td></tr>")    
                            }
                            kalku.push(parseInt(percent));
                            
                        }
                        
                    }
                    
                    var total = 0;
                    for(a = 0; a < kalku.length ; a++){
                        if(kalku[a] === 0){
                            kalku.splice(a, 1);
                        }
                        total += kalku[a];
                    }
                    
                    console.log(kalku)
                    var rata = (total/kalku.length).toFixed(0);
                    if(rata >= 81 && rata <= 100){
                        $("#correct").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Correctness terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah sangat baik</b></span></td></tr>")
                    }else if(rata >= 61 && rata <= 80){
                        $("#correct").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Correctness terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah baik</b></span></td></tr>")
                    }else if(rata >= 41 && rata <= 60){
                        $("#correct").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Correctness terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah cukup baik</b></span></td></tr>")
                    }else if(rata >= 21 && rata <= 40){
                        $("#correct").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Correctness terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan tidak baik</b></span></td></tr>")
                    }else if(rata <= 20){
                        $("#correct").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Correctness terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sangat tidak baik</b></span></td></tr>")
                    }
                    //$("#correct").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Jadil hasil yang didapat untuk faktor kualitas correctnest pada aplikasi yang diukur adalah "+rata+" </b></span></td></tr>")
                    $("#pengukuran_correctnest").attr('disabled', 'disabled')
                    document.getElementById('hasil_correctnest').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'})
                    
                });
            });
            
        }
        
    });
});

//Fungsi Reliability
$(document).ready(function(){
    $("#btnRelia").click(function(){
        var getRelia = $("#jmlRelia").val();
        if(getRelia == 0){
            alert("Masukkan jumlah kriteria lebih dari 0")
        }else{
            $("#reliability").append("<div style='font-size: 15px; margin-top : 15px; padding-left: 190px; padding-right: 190px; '><p style='font-family: century schoolbook; margin-bottom: 5px;'>Jumlah responden</p><input id='jmlResponden' class='form-control' type='text' maxlength='4' placeholder='Masukkan jumlah responden' onkeypress='return hanyaAngka(event)'></input></div>")
            for(var i=0 ; i < getRelia ; i++){
                $kriteria = "<div id=\'kriteriaRelia"+i+"\' style='padding-bottom:10px;'><hr><div class='row'><div class='col-sm-3'></div><div class='col-sm-6'><p style='margin-bottom: 5px; font-size: 15px; font-family: century schoolbook;'>Kriteria</p><input class='form-control' list='datalistOptions kritRelia' id='kriteriaR"+i+"' placeholder='Pilih Kriteria'><datalist id='datalistOptions kritRelia'><option value='Accuracy'><option value='Consistency'><option value='Error tolerance'><option value='Simplicity'></datalist><div class='pertanyaanKrit'><a class='pertanyaanRelia' style='font-size: 15px; font-family: century schoolbook; color: orange; cursor:pointer;'>Tambah pertanyaan</a></div><div class='col-sm-3'></div></div>";
                $("#reliability").append($kriteria);
            }
            $("#tambahReliability").remove();
            $("<div style='padding-top: 1px;'></div>").insertBefore("#reliability");
            
            $(".pertanyaanRelia").click(function(){
                var no = 1;
                var number = $( ".pertanyaanRelia" ).index( this );
                var jmlPertanyaan = parseInt(prompt("Masukkan jumlah pertanyaan"));
                if(jmlPertanyaan == 0){
                    alert("Masukkan jumlah pertanyaan lebih dari 0")
                }else{
                    for(var i=0;i<jmlPertanyaan;i++){
                        $( this ).before("<div class='input-group'><input type='text' class='form-control' id='reliability-k"+number+"-a"+no+"' placeholder='A' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='reliability-k"+number+"-b"+no+"' placeholder='B' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='reliability-k"+number+"-c"+no+"' placeholder='C' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='reliability-k"+number+"-d"+no+"' placeholder='D' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='reliability-k"+number+"-e"+no+"' placeholder='E' onkeypress='return hanyaAngka(event)'></div>");
                        no++;
                    }
                    no - jmlPertanyaan;
                    $(this, "a").hide();
                }
                $("#pengukuran_reliability").click(function(){
                    var kalku = [];

                    $("#hasil_reliability").html("<div id='judul' style='background: black; color: white; font-size: 18px; padding: 10px;'><b>Reliability</b></div><table style='border: 1px solid black;' class='table table-dark'><tbody id='relia'><tr><th rowspan='2'>Kriteria</th><th colspan='5'>Hasil Pertanyaan</th><th rowspan='2'>Jumlah</th><th rowspan='2'>Presentase</th></tr><tr><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr></tbody></table>");
                    for(i=0;i<getRelia;i++){

                        var kRelia = $("#kriteriaR"+i).val();
                        for(j=1;j<=jmlPertanyaan;j++){

                            var jmlResponden = $("#jmlResponden").val();
                            var cA = $("#reliability-k"+i+"-a"+j).val()*5;
                            var cB = $("#reliability-k"+i+"-b"+j).val()*4;
                            var cC = $("#reliability-k"+i+"-c"+j).val()*3;
                            var cD = $("#reliability-k"+i+"-d"+j).val()*2;
                            var cE = $("#reliability-k"+i+"-e"+j).val()*1;
                            var jml = cA + cB + cC + cD + cE;
                            var ave = 5 * jmlResponden;
                            var percent = ""+((jml / ave) * 100).toFixed(0)+"%";

                            if(isNaN(cA) || isNaN(cB) || isNaN(cC) || isNaN(cD) || isNaN(cE)){
                                kRelia="", cA="", cB="", cC="", cD="", cE="", jml="", ave="", percent=""
                            }else{
                                $("#relia").append( "<tr id=\'kriteriaR"+i+"\'><td>"+kRelia+"</td><td>"+cA+"</td><td>"+cB+"</td><td>"+cC+"</td><td>"+cD+"</td><td>"+cE+"</td><td>"+jml+"</td><td>"+percent+"</td></tr>")
                            }
                            kalku.push(parseInt(percent));

                        }     
                    }

                    var total = 0;
                    for(a = 0; a < kalku.length ; a++){
                        if(kalku[a] === 0){
                            kalku.splice(a, 1);
                        }
                        total += kalku[a];
                    }
                    var rata = (total/kalku.length).toFixed(0);
                    if(rata >= 81 && rata <= 100){
                        $("#relia").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Reliability terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah sangat baik</b></span></td></tr>")
                    }else if(rata >= 61 && rata <= 80){
                        $("#relia").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Reliability terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah baik</b></span></td></tr>")
                    }else if(rata >= 41 && rata <= 60){
                        $("#relia").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Reliability terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah cukup baik</b></span></td></tr>")
                    }else if(rata >= 21 && rata <= 40){
                        $("#relia").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Reliability terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan tidak baik</b></span></td></tr>")
                    }else if(rata <= 20){
                        $("#relia").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Reliability terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sangat tidak baik</b></span></td></tr>")
                    }
                    //$("#relia").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil reliability : "+percent+"</b></span></td></tr>")
                    $("#pengukuran_reliability").attr('disabled', 'disabled')
                    document.getElementById('hasil_reliability').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'})
                });
            });
            
        }
        
    });
});

//Fungsi Usability
$(document).ready(function(){
    $("#btnUsa").click(function(){
        var getUsa = $("#jmlUsa").val();
        if(getUsa == 0){
            alert("Masukkan jumlah kriteria lebih dari 0")
        }else{
            $("#usability").append("<div style='font-size: 15px; margin-top : 15px; padding-left: 190px; padding-right: 190px; '><p style='font-family: century schoolbook; margin-bottom: 5px;'>Jumlah responden</p><input id='jmlResponden' class='form-control' type='text' maxlength='4' placeholder='Masukkan jumlah responden' onkeypress='return hanyaAngka(event)'></input></div>")
            for(var i=0 ; i < getUsa ; i++){
                $kriteria = "<div id=\'kriteriaUsa"+i+"\' style='padding-bottom:10px;'><hr><div class='row'><div class='col-sm-3'></div><div class='col-sm-6'><p style='margin-bottom: 5px; font-size: 15px; font-family: century schoolbook;'>Kriteria</p><input class='form-control' list='datalistOptions kritUsa' id='kriteriaU"+i+"' placeholder='Pilih Kriteria'><datalist id='datalistOptions kritUsa'><option value='Communicativeness'><option value='Operability'><option value='Training'></datalist><div class='pertanyaanKrit'><a class='pertanyaanUsa' style='font-size: 15px; font-family: century schoolbook; color: orange; cursor:pointer;'>Tambah pertanyaan</a></div><div class='col-sm-3'></div></div>";
                $("#usability").append($kriteria);
            }
            $("#tambahUsability").remove();
            $("<div style='padding-top: 1px;'></div>").insertBefore("#usability");
            
            $(".pertanyaanUsa").click(function(){
                var no = 1;
                var number = $( ".pertanyaanUsa" ).index( this );
                var jmlPertanyaan = parseInt(prompt("Masukkan jumlah pertanyaan"));
                if(jmlPertanyaan == 0){
                    alert("Masukkan jumlah pertanyaan lebih dari 0")
                }else{
                    for(var i=0;i<jmlPertanyaan;i++){
                        $( this ).before("<div class='input-group'><input type='text' class='form-control' id='usability-k"+number+"-a"+no+"' placeholder='A' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='usability-k"+number+"-b"+no+"' placeholder='B' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='usability-k"+number+"-c"+no+"' placeholder='C' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='usability-k"+number+"-d"+no+"' placeholder='D' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='usability-k"+number+"-e"+no+"' placeholder='E' onkeypress='return hanyaAngka(event)'></div>");
                        no++;
                    }
                    no - jmlPertanyaan;
                    $(this, "a").hide();
                }
                $("#pengukuran_usability").click(function(){
                    var kalku = [];

                    $("#hasil_usability").html("<div id='judul' style='background: black; color: white; font-size: 18px; padding: 10px;'><b>Usability</b></div><table style='border: 1px solid black;' class='table table-dark'><tbody id='usa'><tr><th rowspan='2'>Kriteria</th><th colspan='5'>Hasil Pertanyaan</th><th rowspan='2'>Jumlah</th><th rowspan='2'>Presentase</th></tr><tr><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr></tbody></table>");
                    for(i=0;i<getUsa;i++){

                        var kUsa = $("#kriteriaU"+i).val();
                        for(j=1;j<=jmlPertanyaan;j++){

                            var jmlResponden = $("#jmlResponden").val();
                            var cA = $("#usability-k"+i+"-a"+j).val()*5;
                            var cB = $("#usability-k"+i+"-b"+j).val()*4;
                            var cC = $("#usability-k"+i+"-c"+j).val()*3;
                            var cD = $("#usability-k"+i+"-d"+j).val()*2;
                            var cE = $("#usability-k"+i+"-e"+j).val()*1;
                            var jml = cA + cB + cC + cD + cE;
                            var ave = 5 * jmlResponden;
                            var percent = ""+((jml / ave) * 100).toFixed(0)+"%";
                            if(isNaN(cA) || isNaN(cB) || isNaN(cC) || isNaN(cD) || isNaN(cE)){
                                kUsa="", cA="", cB="", cC="", cD="", cE="", jml="", ave="", percent=""
                            }else{
                                $("#usa").append( "<tr id=\'kriteriaU"+i+"\'><td>"+kUsa+"</td><td>"+cA+"</td><td>"+cB+"</td><td>"+cC+"</td><td>"+cD+"</td><td>"+cE+"</td><td>"+jml+"</td><td>"+percent+"</td></tr>")
                            }
                            kalku.push(parseInt(percent));

                        }
                    }

                    var total = 0;
                    for(a = 0; a < kalku.length ; a++){
                        if(kalku[a] === 0){
                            kalku.splice(a, 1);
                        }
                        total += kalku[a];
                    }
                    var rata = (total/kalku.length).toFixed(0);
                    if(rata >= 81 && rata <= 100){
                        $("#usa").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Usability terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah sangat baik</b></span></td></tr>")
                    }else if(rata >= 61 && rata <= 80){
                        $("#usa").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Usability terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah baik</b></span></td></tr>")
                    }else if(rata >= 41 && rata <= 60){
                        $("#usa").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Usability terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah cukup baik</b></span></td></tr>")
                    }else if(rata >= 21 && rata <= 40){
                        $("#usa").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Usability terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan tidak baik</b></span></td></tr>")
                    }else if(rata <= 20){
                        $("#usa").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Usability terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sangat tidak baik</b></span></td></tr>")
                    }
                    //$("#usa").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil Usability : "+percent+"</b></span></td></tr>")
                    $("#pengukuran_usability").attr('disabled', 'disabled')
                    document.getElementById('hasil_usability').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'})
                });
            });
            
        }
        
    });
});

//Fungsi efficiency
$(document).ready(function(){
    $("#btnEffi").click(function(){
        var getEffi = $("#jmlEffi").val();
        if(getEffi == 0){
            alert("Masukkan jumlah kriteria lebih dari 0")
        }else{
            $("#efficiency").append("<div style='font-size: 15px; margin-top : 15px; padding-left: 190px; padding-right: 190px; '><p style='font-family: century schoolbook; margin-bottom: 5px;'>Jumlah responden</p><input id='jmlResponden' class='form-control' type='text' maxlength='4' placeholder='Masukkan jumlah responden' onkeypress='return hanyaAngka(event)'></input></div>")
            for(var i=0 ; i < getEffi ; i++){
                $kriteria = "<div id=\'kriteriaEffi"+i+"\' style='padding-bottom:10px;'><hr><div class='row'><div class='col-sm-3'></div><div class='col-sm-6'><p style='margin-bottom: 5px; font-size: 15px; font-family: century schoolbook;'>Kriteria</p><input class='form-control' list='datalistOptions kritEffi' id='kriteriaE"+i+"' placeholder='Pilih Kriteria'><datalist id='datalistOptions kritEffi'><option value='Execution efficiency'><option value='Storage efficiency'></datalist><div class='pertanyaanKrit'><a class='pertanyaanEffi' style='font-size: 15px; font-family: century schoolbook; color: orange; cursor:pointer;'>Tambah pertanyaan</a></div><div class='col-sm-3'></div></div>";
                $("#efficiency").append($kriteria);
            }
            $("#tambahEfficiency").remove();
            $("<div style='padding-top: 1px;'></div>").insertBefore("#efficiency");
            
            $(".pertanyaanEffi").click(function(){
                var no = 1;
                var number = $( ".pertanyaanEffi" ).index( this );
                var jmlPertanyaan = parseInt(prompt("Masukkan jumlah pertanyaan"));
                if(jmlPertanyaan == 0){
                    alert("Masukkan jumlah pertanyaan lebih dari 0")
                }else{
                    for(var i=0;i<jmlPertanyaan;i++){
                        $( this ).before("<div class='input-group'><input type='text' class='form-control' id='efficiency-k"+number+"-a"+no+"' placeholder='A' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='efficiency-k"+number+"-b"+no+"' placeholder='B' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='efficiency-k"+number+"-c"+no+"' placeholder='C' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='efficiency-k"+number+"-d"+no+"' placeholder='D' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='efficiency-k"+number+"-e"+no+"' placeholder='E' onkeypress='return hanyaAngka(event)'></div>");
                        no++;
                    }
                    no - jmlPertanyaan;
                    $(this, "a").hide();
                }
                $("#pengukuran_efficiency").click(function(){
                    var kalku = [];

                    $("#hasil_efficiency").html("<div id='judul' style='background: black; color: white; font-size: 18px; padding: 10px;'><b>Efficiency</b></div><table style='border: 1px solid black;' class='table table-dark'><tbody id='effi'><tr><th rowspan='2'>Kriteria</th><th colspan='5'>Hasil Pertanyaan</th><th rowspan='2'>Jumlah</th><th rowspan='2'>Presentase</th></tr><tr><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr></tbody></table>");
                    for(i=0;i<getEffi;i++){

                        var kEffi = $("#kriteriaE"+i).val();
                        for(j=1;j<=jmlPertanyaan;j++){

                            var jmlResponden = $("#jmlResponden").val();
                            var cA = $("#efficiency-k"+i+"-a"+j).val()*5;
                            var cB = $("#efficiency-k"+i+"-b"+j).val()*4;
                            var cC = $("#efficiency-k"+i+"-c"+j).val()*3;
                            var cD = $("#efficiency-k"+i+"-d"+j).val()*2;
                            var cE = $("#efficiency-k"+i+"-e"+j).val()*1;
                            var jml = cA + cB + cC + cD + cE;
                            var ave = 5 * jmlResponden;
                            var percent = ""+((jml / ave) * 100).toFixed(0)+"%";
                            if(isNaN(cA) || isNaN(cB) || isNaN(cC) || isNaN(cD) || isNaN(cE)){
                                kEffi="", cA="", cB="", cC="", cD="", cE="", jml="", ave="", percent=""
                            }else{
                                $("#effi").append( "<tr id=\'kriteriaE"+i+"\'><td>"+kEffi+"</td><td>"+cA+"</td><td>"+cB+"</td><td>"+cC+"</td><td>"+cD+"</td><td>"+cE+"</td><td>"+jml+"</td><td>"+percent+"</td></tr>")
                            }
                            kalku.push(parseInt(percent));

                        }
                    }

                    var total = 0;
                    for(a = 0; a < kalku.length ; a++){
                        if(kalku[a] === 0){
                            kalku.splice(a, 1);
                        }
                        total += kalku[a];
                    }
                    var rata = (total/kalku.length).toFixed(0);
                    if(rata >= 81 && rata <= 100){
                        $("#effi").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Efficiency terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah sangat baik</b></span></td></tr>")
                    }else if(rata >= 61 && rata <= 80){
                        $("#effi").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Efficiency terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah baik</b></span></td></tr>")
                    }else if(rata >= 41 && rata <= 60){
                        $("#effi").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Efficiency terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah cukup baik</b></span></td></tr>")
                    }else if(rata >= 21 && rata <= 40){
                        $("#effi").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Efficiency terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan tidak baik</b></span></td></tr>")
                    }else if(rata <= 20){
                        $("#effi").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Efficiency terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sangat tidak baik</b></span></td></tr>")
                    }
                    //$("#effi").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil efficiency : "+percent+"</b></span></td></tr>")
                    $("#pengukuran_efficiency").attr('disabled', 'disabled')
                    document.getElementById('hasil_efficiency').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'})
                });
            });
            
        }
        
    });
});

//Fungsi integrity
$(document).ready(function(){
    $("#btnInteg").click(function(){
        var getInteg = $("#jmlInteg").val();
        if(getInteg == 0){
            alert("Masukkan jumlah kriteria lebih dari 0")
        }else{
            $("#integrity").append("<div style='font-size: 15px; margin-top : 15px; padding-left: 190px; padding-right: 190px; '><p style='font-family: century schoolbook; margin-bottom: 5px;'>Jumlah responden</p><input id='jmlResponden' class='form-control' type='text' maxlength='4' placeholder='Masukkan jumlah responden' onkeypress='return hanyaAngka(event)'></input></div>")
            for(var i=0 ; i < getInteg ; i++){
                $kriteria = "<div id=\'kriteriaInteg"+i+"\' style='padding-bottom:10px;'><hr><div class='row'><div class='col-sm-3'></div><div class='col-sm-6'><p style='margin-bottom: 5px; font-size: 15px; font-family: century schoolbook;'>Kriteria</p><input class='form-control' list='datalistOptions kritInteg' id='kriteriaI"+i+"' placeholder='Pilih Kriteria'><datalist id='datalistOptions kritInteg'><option value='Access control'><option value='Access Audit'></datalist><div class='pertanyaanKrit'><a class='pertanyaanInteg' style='font-size: 15px; font-family: century schoolbook; color: orange; cursor:pointer;'>Tambah pertanyaan</a></div><div class='col-sm-3'></div></div>";
                $("#integrity").append($kriteria);
            }
            $("#tambahIntegrity").remove();
            $("<div style='padding-top: 1px;'></div>").insertBefore("#integrity");
            
            $(".pertanyaanInteg").click(function(){
                var no = 1;
                var number = $( ".pertanyaanInteg" ).index( this );
                var jmlPertanyaan = parseInt(prompt("Masukkan jumlah pertanyaan"));
                if(jmlPertanyaan == 0){
                    alert("Masukkan jumlah pertanyaan lebih dari 0")
                }else{
                    for(var i=0;i<jmlPertanyaan;i++){
                        $( this ).before("<div class='input-group'><input type='text' class='form-control' id='integrity-k"+number+"-a"+no+"' placeholder='A' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='integrity-k"+number+"-b"+no+"' placeholder='B' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='integrity-k"+number+"-c"+no+"' placeholder='C' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='integrity-k"+number+"-d"+no+"' placeholder='D' onkeypress='return hanyaAngka(event)'><input type='text' class='form-control' id='integrity-k"+number+"-e"+no+"' placeholder='E' onkeypress='return hanyaAngka(event)'></div>");
                        no++;
                    }
                    no - jmlPertanyaan;
                    $(this, "a").hide();
                }
                $("#pengukuran_integrity").click(function(){
                    var kalku = [];

                    $("#hasil_integrity").html("<div id='judul' style='background: black; color: white; font-size: 18px; padding: 10px;'><b>integrity</b></div><table style='border: 1px solid black;' class='table table-dark'><tbody id='integ'><tr><th rowspan='2'>Kriteria</th><th colspan='5'>Hasil Pertanyaan</th><th rowspan='2'>Jumlah</th><th rowspan='2'>Presentase</th></tr><tr><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr></tbody></table>");
                    for(i=0;i<getInteg;i++){

                        var kInteg = $("#kriteriaI"+i).val();
                        for(j=1;j<=jmlPertanyaan;j++){
                            
                            var jmlResponden = $("#jmlResponden").val();
                            var cA = $("#integrity-k"+i+"-a"+j).val()*5;
                            var cB = $("#integrity-k"+i+"-b"+j).val()*4;
                            var cC = $("#integrity-k"+i+"-c"+j).val()*3;
                            var cD = $("#integrity-k"+i+"-d"+j).val()*2;
                            var cE = $("#integrity-k"+i+"-e"+j).val()*1;
                            var jml = cA + cB + cC + cD + cE;
                            var ave = 5 * jmlResponden;
                            var percent = ""+((jml / ave) * 100).toFixed(0)+"%";
                            if(isNaN(cA) || isNaN(cB) || isNaN(cC) || isNaN(cD) || isNaN(cE)){
                                kInteg="", cA="", cB="", cC="", cD="", cE="", jml="", ave="", percent=""
                            }else{
                                $("#integ").append( "<tr id=\'kriteriaI"+i+"\'><td>"+kInteg+"</td><td>"+cA+"</td><td>"+cB+"</td><td>"+cC+"</td><td>"+cD+"</td><td>"+cE+"</td><td>"+jml+"</td><td>"+percent+"</td></tr>")
                            }
                            kalku.push(parseInt(percent));

                        }
                    }

                    var total = 0;
                    for(a = 0; a < kalku.length ; a++){
                        if(kalku[a] === 0){
                            kalku.splice(a, 1);
                        }
                        total += kalku[a];
                    }
                    var rata = (total/kalku.length).toFixed(0);
                    if(rata >= 81 && rata <= 100){
                        $("#integ").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Integrity terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah sangat baik</b></span></td></tr>")
                    }else if(rata >= 61 && rata <= 80){
                        $("#integ").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Integrity terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah baik</b></span></td></tr>")
                    }else if(rata >= 41 && rata <= 60){
                        $("#integ").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Integrity terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sudah cukup baik</b></span></td></tr>")
                    }else if(rata >= 21 && rata <= 40){
                        $("#integ").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Integrity terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan tidak baik</b></span></td></tr>")
                    }else if(rata <= 20){
                        $("#integ").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil perhitungan faktor Integrity terhadap perangkat lunak yang diukur adalah "+rata+"% sehingga dapat dikatakan sangat tidak baik</b></span></td></tr>")
                    }
                    //$("#integ").append("<tr style='background: #FD9727;'><td colspan='9'><span><b>Hasil integrity : "+percent+"</b></span></td></tr>")
                    $("#pengukuran_integrity").attr('disabled', 'disabled')
                    document.getElementById('hasil_integrity').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'})
                });
            });
            
        }
        
    });
});

function hanyaAngka(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
     if (charCode > 31 && (charCode < 48 || charCode > 57))

      return false;
    return true;
}