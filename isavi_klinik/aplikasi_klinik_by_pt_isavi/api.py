# Copyright (c) 2023, ISAVI and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

@frappe.whitelist(allow_guest=True)
def getJadwalDokter(**kwargs):
    args = frappe._dict(kwargs)
    x = frappe.get_doc({
        'doctype':'Jadwal Dokter',
        'hari': 'Senin'
        #fields=['hari', 'jam_buka','jam_tutup','table_lypc'],
    })
    return x.as_dict()
    #return x