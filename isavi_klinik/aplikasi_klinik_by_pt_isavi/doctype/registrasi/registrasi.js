// Copyright (c) 2023, ISAVI and contributors
// For license information, please see license.txt

frappe.ui.form.on("Registrasi", {
// 	refresh(frm) {

// 	},
    tanggal_berobat:function(frm){
        let poliklinik = frm.doc.poliklinik;
        let dokter = frm.doc.dokter
        let tanggal_berobat = frm.doc.tanggal_berobat
        
        frappe.db.get_doc('Jadwal Dokter',null, {poliklinik: frm.doc.poliklinik,dokter:frm.doc.dokter,hari:getDay(tanggal_berobat)})
        .then(rest => {
            let html_button = ``;
            console.log(rest);
            //$.each(rest, function (index, row) {
                html_button += "<span>"+rest.hari+" "+rest.jam_buka+"-"+rest.jam_tutup+"</span><br>";     
                $.each(rest.table_lypc, function (index, detail) {
                    html_button += `<button type="button" class="btn btn-sm btn-info"> `+detail.slot+`</button>&nbsp;`;
                });
                html_button += ``;
                $(frm.fields_dict.html_krdn.wrapper).on('click', 'button', function(x) {
                     alert(x)
                })
                //console.log(row['table_lypc'])
            //});

            $(frm.fields_dict.html_krdn.wrapper).html(html_button);
            
        })
        // frappe.call('frappe.core.doctype.user.user.get_role_profile', {
        //     role_profile: 'Test'
        // })
        // fetch('/api/resource/Jadwal Dokter?filters=[["poliklinik", "=", "'+poliklinik+'"], ["dokter", "=", "'+dokter+'"]]', {
        //     // headers: {
        //     //     'Authorization': 'Bearer access_token'
        //     // }
        // })
       
        // .then(r => {
        //     let html_button = ``;
		// 				//$.each(r.message.response, function (index, value) {
        //         for(i=1;i<10;i++){
		// 					html_button += `<button type="button" class="btn btn-sm btn-outline-info">08:30 `+i+`
		// 					</button>&nbsp;`;
        //     }
		// 				//});
		// 	html_button += ``;
        //     $(frm.fields_dict.html_krdn.wrapper).on('click', 'button', function() {})
        //     $(frm.fields_dict.html_krdn.wrapper).html(html_button);
        //     console.log(r);
        // })        
    }
});
function getDay(param_hari){
    const date = moment(param_hari);
    const day = date.day();
    if(day == 1){
        return 'Senin'
    }else if(day == 2){
        return 'Selasa'
    }else if(day == 3){
        return 'Rabu'
    }else if(day == 4){
        return 'Kamis'
    }else if(day == 5){
        return 'Jumat'
    }else if(day == 6){
        return 'Sabtu'
    }else if(day == 0){
        return 'Minggu'
    }
    //return out;
}