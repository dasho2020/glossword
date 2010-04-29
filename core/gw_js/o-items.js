oItems = new function()
{
	this.cnt = 0;
	this.max_items = 64;
	
	/* HTML-form */
	this.blocks = ["subfieldset-source-localfile", "subfieldset-source-direct", "subfieldset-source-remotefile"];
	this.form_init = function()
	{
		for (var i = 0; i < this.blocks.length; i++)
		{
			fn_getElementById( this.blocks[i] ).style.display = "none";
		}
	};
	this.form_select = function(id)
	{
		this.form_init();
		fn_getElementById(id).style.display = "block";
	};
	
	/* */
	this.format_blocks = ["subfieldset-format-1", "subfieldset-format-2", "subfieldset-format-3", "subfieldset-format-4"];
	this.format_form_init = function()
	{
		for (var i = 0; i < this.format_blocks.length; i++)
		{
			fn_getElementById( this.format_blocks[i] ).style.display = "none";
		}
	};
	this.format_form_select = function( id )
	{
		this.format_form_init();
		fn_getElementById(id).style.display = "block";
	};

	/* Switch group of options */
	this.xml18_checkboxes = ["arp-gw18-is-az-", "arp-gw18-is-term-uri-"];
	this.xml19_checkboxes = ["arp-gw19-is-az-", "arp-gw19-is-term-uri-", "arp-gw19-is-cached-", "arp-gw19-is-si-"];
	/* Switch to a profile */
	this.xml_sub_options = function( profile )
	{
		if ( profile == "xml19" )
		{
			this.xml_sub_options_onoff( this.xml18_checkboxes, 0 );
			this.xml_sub_options_onoff( this.xml19_checkboxes, 1 );
		}
		else if ( profile == "xml18" )
		{
			this.xml_sub_options_onoff( this.xml18_checkboxes, 1 );
			this.xml_sub_options_onoff( this.xml19_checkboxes, 0 );
		}
	};
	/* Disable checkboxes and hide labels */
	this.xml_sub_options_onoff = function( ar, is_show )
	{
		for ( var i = 0; i < ar.length; i++ ) 
		{ 
			fn_getElementById( ar[i] ).disabled = ( is_show ? false : "disabled" ); 
			fn_getElementById( "l-" + ar[i] ).style.display = ( is_show ? "block" : "none" ); 
		}
	}

	/* Calls on clicking checkbox */
	this.select = function( id_num )
	{
		if ( fn_getElementById( "item-" + id_num ).checked )
		{
			/* Limit the maximum number of selected items */
			if ( this.cnt >= this.max_items )
			{
				fn_getElementById( "item-" + id_num ).checked = false;
				return false;
			}
			this.cnt++;
			fn_getElementById( "itemd-" + id_num ).className = "on";
		}
		else
		{
			this.cnt--;
			fn_getElementById( "itemd-" + id_num ).className = "";
		}
	};
	/* */
	this.remove_confirm = function( id_item )
	{
		if (confirm( jsF.Get( "oTkit_1043" ) + ':\u0020' + jsF.Get( "oTkit_1051" ) ))
		{
			/* Unselect */
			var checkbox = fn_getElementById( "item-" + id_item);
			if ( checkbox && checkbox.checked !== false )
			{
				this.cnt--;
				checkbox.checked = false;
				fn_getElementById( "itemd-" + id_item ).className = "";
			}
			this.remove( id_item );
		}
	};
	/* AJAX to remove Item */
	this.remove = function(id_item)
	{
		var params = [
			"arg[sef_output]=ajax", "arg[action]=remove", "arg[target]=items", "arg[sid]="+jsF.Get("id_sess"), 
			"arg[id_item]="+id_item, "arg[r]="+Math.random(), jsF.Get("sef_append"), jsF.Get("sef_append_ajax")
		];
		params = params.join("&");

		var oncompletefn = function(r)
		{
			var response = r.responseText;
			if (response && response.length > 0)
			{
				if ( response == "0" )
				{
					/* No such permissions */
					alert( "No such permissions . Error code: " + response );
				}
				else if ( response == "1" )
				{
					/* */
					var tbl = fn_getElementById( "itemd-" + id_item );
					if (tbl !== false)
					{
						var tbl_remove_len = tbl.childNodes.length;
						for (var i = 0; i < tbl_remove_len; i++)
						{
							tbl.removeChild( tbl.lastChild );
						}
						tbl.parentNode.removeChild( tbl );
					}
					/* Reload the current page */
					/*
					document.location.href = document.location.href.replace("#", "");
					*/
				}
				else if (response == "2")
				{
					/* No such item */
					alert( "No such item. Error code: " + response );
				}
				else
				{
					/* Unknown error */
					alert( response );
				}
			}
		};
		new oAjax.Request( jsF.Get("path_server_dir_admin")+'/'+jsF.Get("file_index"), {method: "get", parameters: params, onComplete: oncompletefn} );
	};
};