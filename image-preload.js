(function(exports){
	exports.imgPreloader = function(imgs, update, complete){
		var update = (typeof update == 'function')? update : function(){},
			complete = (typeof complete == 'function')? complete : update,
			imgs = (typeof imgs == 'string')? [imgs] : imgs,
			numCompleted = 0;
		
		function loaded()
		{
			numCompleted++;
			if(numCompleted == imgs.length)
				complete();
			else
				update(numCompleted, imgs.length);
		}
		
		function preload(img){
			var imgObj = new Image;
			imgObj.onload = loaded;
			imgObj.src = img;
		}		
			
		for( var i = 0; i < imgs.length; i++)
			preload(imgs[0]);
	}
})(window);