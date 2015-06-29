$(document).on('pageinit', '#index', function(){ 
    var date = new Date();
    var y = date.getFullYear();
   $("#calendar").jqmCalendar({
        events: [{
            "ringkasan": "Distribusi Jadwal Ujian Akhir Semester Ganjil TA. 2014/2015",
            "begin": new Date(y,0, 19),
            "end": new Date(y, 0, 20)

        }, {
            "ringkasan": "Ujian Akhir Semester Ganjil TA. 2014/2015",
            "begin": new Date(y,0, 26),
            "end": new Date(y, 0, 27)

        }, {
            "ringkasan": "Penyerahan DPNA Semester Ganjil & Verifikasi Nilai Matakuliah",
            "begin": new Date(y, 0, 27),
            "end": new Date(y, 0, 28)
            
        }, {
            "ringkasan": "Pelaksanaan Semester Pendek (SP)",
            "begin": new Date(y, 1, 23),
            "end": new Date(y, 1, 24)
            
        }, {
            "ringkasan": "Persiapan Semester Genap",
            "begin": new Date(y, 1, 2),
            "end": new Date(y, 1, 3)
            
        }, {
            "ringkasan": "Pembayaran SPP Semester Genap",
            "begin": new Date(y, 0, 26),
            "end": new Date(y, 0, 27)
            
        }, {
            "ringkasan": "Pengambilan, Pengisian, Perubahan dan Pengembalian KRS",
            "begin": new Date(y, 0, 27),
            "end": new Date(y, 0, 28)
            
        }, {
            "ringkasan": "Input Nilai dan Cetak KHS Semester Ganjil 2014/2015",
            "begin": new Date(y, 1, 09),
            "end": new Date(y, 1, 10)
            
        }, {
            "ringkasan": "Distribusi Jadwal Kuliah Semester Genap TA. 2014/2015",
            "begin": new Date(y, 1, 23),
            "end": new Date(y, 1, 24)
            
        }, {
            "ringkasan": "Pertemuan Dosen",
            "begin": new Date(y, 1, 28),
            "end": new Date(y, 1, 29)
            
        }, {
            "ringkasan": "Persiapan dan Pelaporan PDPT (2014-1)",
            "begin": new Date(y, 2, 02),
            "end": new Date(y, 2, 03)
            
        }, {
            "ringkasan": "Perkuliahan Semester Genap",
            "begin": new Date(y, 2, 02),
            "end": new Date(y, 2, 03)
            
        }, {
            "ringkasan": "Distribusi Jadwal Ujian Tengah Semester Genap TA. 2014/2015",
            "begin": new Date(y, 3, 13),
            "end": new Date(y, 3, 14)
            
        }, {
            "ringkasan": "Ujian Tengah Semester Genap",
            "begin": new Date(y, 3, 20),
            "end": new Date(y, 3, 21)
            
        }, {
            "ringkasan": "Wisuda Sarjana Angkatan Ke XIII",
            "begin": new Date(y, 2, 14),
            "end": new Date(y, 2, 14)
            
        }, {
            "ringkasan": "Persiapan KKLP Angkatan ke - XIV",
            "begin": new Date(y, 2, 16),
            "end": new Date(y, 2, 17)
            
        }, {
            "ringkasan": "Distribusi Jadwal Ujian Akhir Semester Genap TA. 2014/2015",
            "begin": new Date(y, 5, 22),
            "end": new Date(y, 5, 23)
            
        }, {
            "ringkasan": "Ujian Akhir Semester Genap",
            "begin": new Date(y, 5, 29),
            "end": new Date(y, 5, 29)
            
        }, {
            "ringkasan": "Penyerahan DPNA Semester Genap TA. 2014/2015",
            "begin": new Date(y, 6, 01),
            "end": new Date(y, 6, 02)
            
        }, {
            "ringkasan": "Verifikasi Nilai Matakuliah dan Pendaftaran Semester Pendek",
            "begin": new Date(y, 6, 22),
            "end": new Date(y, 6, 23)
            
        }, {
            "ringkasan": "Pelaksanaan Semester Pendek (SP)",
            "begin": new Date(y, 6, 29),
            "end": new Date(y, 6, 30)
            
        }, {
            "ringkasan": "Pembekalan KKLP Angkatan Ke XIV",
            "begin": new Date(y, 6, 22),
            "end": new Date(y, 6, 23)
            
        }, {
            "ringkasan": "Pelaksanaan KKLP Angkatan Ke XIV",
            "begin": new Date(y, 6, 27),
            "end": new Date(y, 6, 28)
            
        }, {
            "ringkasan": "Pembahasan Kalender Akademik TA. 2015/2016",
            "begin": new Date(y, 7, 01),
            "end": new Date(y, 7, 02)
            
        },                      



        ],
        months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        days: ["Mi", "Se", "Sel", "Ra", "Ka", "Ju", "Sa"],
        startOfWeek: 0
        
    });

    $("#calendar").bind('change', function(event, date) {
        var events = $("#calendar").data("jqm-calendar").settings.events;
        for ( var i = 0; i < events.length; i++ ) {
            if ( events[i].begin.getFullYear() == date.getFullYear() && events[i].begin.getMonth() == date.getMonth() && events[i].begin.getDate() == date.getDate()){
                 if (events[i].ringkasan!=""){
                    $.mobile.changePage("#dialog", { role: "dialog" } );
                    $("#isiPeristiwa").html(events[i].ringkasan);
                 }
                 else{
                   
                 }
                 return false;
            }
        }
    });
});
