var editor; // use a global for the submit and return data rendering in the examples

$(document).ready(function () {
	editor = new $.fn.dataTable.Editor({
		ajax: "/clinic-list",
		table: "#clinic-list-table",
		fields: [ {
			label: "Clinic ID:",
			name: "clinic_id",  
		},{
			label: "Clinic Name:",
			name: "clinic_name"
		}, 	{
			label: "Clinic Address:",
			name: "clinic_address"
		},{
			label: "Created Date:",
			name: "created_date",
			type:"datetime",
			format: 'MM/DD/YYYY'
		},
		{
			label: "Email:",
			name: "email"
		},
		{
			label: "Active:",
			name: "active",
			type: "select",
			options: [
				{ label: "Yes", value: "Yes" },
				{ label: "No", value: "No" },
			]
		}

		],
		// formOptions: {
		// 	inline: {
		// 		onBlur: 'submit'
		// 	}
		// }
	});


	// editor.on( 'preSubmit', function ( e, o, action ) {
	// 	debugger;
	// 	if ( action !== 'remove' ) {
	// 		if ( o.data[0].First_Name === '' ) {
	// 			document.getElementById('DTE_Field_First_Name').style.backgroundColor = 'pink';
	// 			this.error('First_Name', 'A first name must be given');
	// 			return null;
	// 		} else if ( o.data[0].Last_Name === '' ) {
	// 			document.getElementById('DTE_Field_Last_Name').style.backgroundColor = 'pink';
	// 				this.error('Last_Name', 'A last name must be given');
	// 				return null;
	// 			} else if ( o.data[0].Patient_Id === '' ) {
	// 				document.getElementById('DTE_Field_Patient_Id').style.backgroundColor = 'pink';
	// 				this.error('Patient_Id', 'A patient Id must be given');
	// 				return null;
	// 			}
	// 		}
	// 	}
	// );

	var table = $('#clinic-list-table').DataTable({
		dom: "Bfrtip",
		ajax: "/clinic-list",
		"pageLength": 50,
		columns: [
			// {
			//     data: null,
			//     defaultContent: '',
			//     className: 'select-checkbox',
			//     orderable: false
			// },
			{ data: "clinic_id" },
			{ data: "clinic_name" },
			{ data: "clinic_address" },
			{ data: "created_date" },
			{ data: "email", "defaultContent": "<i>Null</i>" },
			{ data: "Active", "defaultContent": "Yes" },
		],
		order: [1, 'asc'],
		keys: {
			columns: ':not(:first-child)',
			keys: [9],
			editor: editor,
			editOnFocus: false
		},
		select: {
			style: 'os',
			selector: 'td:first-child'
		},
		buttons: [
			{ extend: "create", editor: editor },
			{ extend: "edit", editor: editor },
			{ extend: "remove", editor: editor }
		],
		// formOptions: {
		// 	inline: {
		// 		onBlur: 'submit'
		// 	}
		// }
	});

	// $('#clinic-list-table tbody').on( 'click', 'tr', function () {
    //     if ( $(this).hasClass('selected') ) {
    //         $(this).removeClass('selected');
    //     }
    //     else {
    //         table.$('tr.selected').removeClass('selected');
    //         $(this).addClass('selected');
    //     }
    // } );


	// $('#clinic-list-table').on('click', 'tbody td:not(:first-child)', function (e) {
	// 	editor.inline(this);
	// });

		
//	$('#clinic-list-table').off( 'click', 'tbody td:not(:first-child)' );

// editor.on('preSubmit', function (e, datacontent, action) {
// 	if (action == "create") {

// 	}
// })

});