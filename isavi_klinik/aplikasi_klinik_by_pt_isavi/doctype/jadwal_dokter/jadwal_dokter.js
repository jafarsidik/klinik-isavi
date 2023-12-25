// Copyright (c) 2023, ISAVI and contributors
// For license information, please see license.txt

frappe.ui.form.on("Jadwal Dokter", {
 	
    before_save(frm){
        jam_buka = moment(frm.doc.jam_buka, 'HH:mm:ss');
        jam_tutup = moment(frm.doc.jam_tutup, 'HH:mm:ss')
        let total_menit = jam_tutup.diff(jam_buka, 'minutes');
        let slot = frm.doc.kapasitas_pasien__slot;
        let allTimes = [];
        for(let i=0;i<slot;i++){
            allTimes.push(jam_buka.format("HH:mm:ss"));
            jam_buka.add(frm.doc.estimasi_dilayanai, 'minutes');
        }

        frm.set_value('table_lypc','')
        allTimes.forEach(element => {
             frm.add_child('table_lypc',{
                 slot: element
            });
        });
        frm.refresh_field('table_lypc');
        console.log(allTimes)
        
        //frm.refresh_field('table_lypc');*/
    }
});
