/**
 * BlockBig object
 * Creates a one-color, one-frame BlockAnim based on passed width, height and color values.
 * 
 * @author Vince Allen 01-16-2009
 * 
 * Big Block Framework
 * Copyright (C) 2011 Foldi, LLC
 * 
 */

BigBlock.BlockBig = (function () {
	
	return {
		
		create: function (params) {
			
			if (typeof(params.width) == "undefined") {
				params.width = Math.pow(BigBlock.Grid.blk_dim, 2);
			}
			if (typeof(params.height) == "undefined") {
				params.height = Math.pow(BigBlock.Grid.blk_dim, 2);
			}
			if (typeof(params.color) == "undefined") {
				params.color = "white";
			}						
			
			var F = BigBlock.clone(BigBlock.Block);  // CLONE Block
			var obj = new F;
			
			obj.configure(); // run configure() to inherit Word properties

			//delete F.prototype.configure; // delete configure from the protoype

			obj.anim = [ // create empty anim property; filled via the loop below
				{'frm':
					{
						'duration' : 1,
						'pix' : [
									
						]	
					}
				}		
			];
			
			var i = 0;
			for (var h = 0; h < Math.floor(params.height/BigBlock.Grid.blk_dim); h++) { // loop thru height
				for (var w = 0; w < Math.floor(params.width/BigBlock.Grid.blk_dim); w++) { // loop thru width
					obj.anim[0].frm.pix[i] = {"c": params.color + "0","i": ((BigBlock.Grid.width/BigBlock.Grid.blk_dim)*h)+w}; // add a block to the anim property
					i++;
				}				
			}
			
			if (typeof(params) != "undefined") { // loop thru passed params to override above defaults
				for (var i in params) {
					if (params.hasOwnProperty(i)) {
						obj[i] = params[i];
					}
				}
			}

			obj.color_index = obj.color + '0';
			obj.img = obj.getBlocks(); // get pixels
																	
			obj.render_static = true;

			BigBlock.Blocks[obj.alias] = obj;
			BigBlock.BlocksKeys[BigBlock.BlocksKeys.length] = obj.alias;
						
		}
	};
	
})();