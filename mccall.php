<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="bootstrap.min.css">
    <script src="jquery.min.js"></script>
    <script src="query_mccall.js"></script>
    <title>McCall</title>
</head>
<body>
    <?php include_once('navbar.php'); ?>
    <div class="container" style="width: 40%;">
    
        <!-- Faktor Correctnest -->
        <div id="judul">
            <p>Correctnest</p>
        </div>
        <div id="isi">
            <div id="tambahCorrectnest" style="text-align: center; padding-top: 50px; padding-bottom: 50px; padding-left: 200px; padding-right: 200px;">
                <input id="jmlCorrect" class="form-control" type="text" maxlength="2" placeholder="Masukkan jumlah kriteria" onkeypress="return hanyaAngka(event)"></input>
                <button id="btnCorrect" class="btn form-control" style="width: 30%; margin-top: 5px; border-radius: 10px; background-color: #FD9727; color: white;">+</button>
            </div>
            <div id="correctnest"></div>
        </div>
        <div style="text-align: center;"><button id="pengukuran_correctnest" class="btn form-control" style="width: 80%; margin-top: 10px; border-radius: 10px; background-color: #FD9727; color: white;"><b>Mulai Pengukuran Correctnest</b></button></div>

        <!-- Faktor Reliability -->
        <div id="judul">
            <p>Reliability</p>
        </div>
        <div id="isi">
            <div id="tambahReliability" style="text-align: center; padding-top: 50px; padding-bottom: 50px; padding-left: 200px; padding-right: 200px;">
                <input id="jmlRelia" class="form-control" type="text" maxlength="2" placeholder="Masukkan jumlah kriteria" onkeypress="return hanyaAngka(event)"></input>
                <button id="btnRelia" class="btn form-control" style="width: 30%; margin-top: 5px; border-radius: 10px; background-color: #FD9727; color: white;">+</button>
            </div>
            <div id="reliability"></div>
        </div> 
        <div style="text-align: center;"><button id="pengukuran_reliability" class="btn form-control" style="width: 80%; margin-top: 10px; border-radius: 10px; background-color: #FD9727; color: white;"><b>Mulai Pengukuran Reliability</b></button></div>

        <!-- Faktor Usability -->
        <div id="judul">
            <p>Usability</p>
        </div>
        <div id="isi">
            <div id="tambahUsability" style="text-align: center; padding-top: 50px; padding-bottom: 50px; padding-left: 200px; padding-right: 200px;">
                <input id="jmlUsa" class="form-control" type="text" maxlength="2" placeholder="Masukkan jumlah kriteria" onkeypress="return hanyaAngka(event)"></input>
                <button id="btnUsa" class="btn form-control" style="width: 30%; margin-top: 5px; border-radius: 10px; background-color: #FD9727; color: white;">+</button>
            </div>
            <div id="usability"></div>
        </div>
        <div style="text-align: center;"><button id="pengukuran_usability" class="btn form-control" style="width: 80%; margin-top: 10px; border-radius: 10px; background-color: #FD9727; color: white;"><b>Mulai Pengukuran Usability</b></button></div>

        <!-- Faktor Efficiency -->
        <div id="judul">
            <p>Efficiency</p>
        </div>
        <div id="isi">
            <div id="tambahEfficiency" style="text-align: center; padding-top: 50px; padding-bottom: 50px; padding-left: 200px; padding-right: 200px;">
                <input id="jmlEffi" class="form-control" type="text" maxlength="2" placeholder="Masukkan jumlah kriteria" onkeypress="return hanyaAngka(event)"></input>
                <button id="btnEffi" class="btn form-control" style="width: 30%; margin-top: 5px; border-radius: 10px; background-color: #FD9727; color: white;">+</button>
            </div>
            <div id="efficiency"></div>
        </div> 
        <div style="text-align: center;"><button id="pengukuran_efficiency" class="btn form-control" style="width: 80%; margin-top: 10px; border-radius: 10px; background-color: #FD9727; color: white;"><b>Mulai Pengukuran Efficiency</b></button></div>

        <!-- Faktor Integrity -->
        <div id="judul">
            <p>Integrity</p>
        </div>
        <div id="isi">
            <div id="tambahIntegrity" style="text-align: center; padding-top: 50px; padding-bottom: 50px; padding-left: 200px; padding-right: 200px;">
                <input id="jmlInteg" class="form-control" type="text" maxlength="2" placeholder="Masukkan jumlah kriteria" onkeypress="return hanyaAngka(event)"></input>
                <button id="btnInteg" class="btn form-control" style="width: 30%; margin-top: 5px; border-radius: 10px; background-color: #FD9727; color: white;">+</button>
            </div>
            <div id="integrity"></div>
        </div> 
        <div style="text-align: center;"><button id="pengukuran_integrity" class="btn form-control" style="width: 80%; margin-top: 10px; border-radius: 10px; background-color: #FD9727; color: white;"><b>Mulai Pengukuran Integrity</b></button></div>
        
    </div>
    <br>
    <div id="hasil_pengukuran" style="padding: 50px; text-align: center;">
        <div id="hasil_correctnest"></div>
        <div id="hasil_reliability"></div>
        <div id="hasil_usability"></div>
        <div id="hasil_efficiency"></div>
        <div id="hasil_integrity"></div>
    </div>

</body>
</html>