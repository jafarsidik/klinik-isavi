// Copyright (c) 2023, ISAVI and contributors
// For license information, please see license.txt

frappe.ui.form.on("Registrasi", {
// 	refresh(frm) {

// 	},
    tanggal_berobat:function(frm){
        let poliklinik = frm.doc.poliklinik;
        let dokter = frm.doc.dokter
        let tanggal_berobat = frm.doc.tanggal_berobat
        fetch('/api/resource/Jadwal Dokter?filters=[["poliklinik", "=", "'+poliklinik+'"], ["dokter", "=", "'+dokter+'"]]', {
            // headers: {
            //     'Authorization': 'Bearer access_token'
            // }
        })
       
        .then(r => {
            console.log(r);
        })        
    }
});
