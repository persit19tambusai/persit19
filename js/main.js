let c = 0;
function menu(){
  if(c % 2 == 0) {
document.querySelector('.cont_drobpdown_menu').className = "cont_drobpdown_menu active";    
document.querySelector('.cont_icon_trg').className = "cont_icon_trg active";    
c++; 
  }else{
document.querySelector('.cont_drobpdown_menu').className = "cont_drobpdown_menu disable";        
document.querySelector('.cont_icon_trg').className = "cont_icon_trg disable";        
c++;
  }
}
const radios = document.querySelectorAll('input[name="acc"]');
radios.forEach(radio => {
  radio.addEventListener('click', function(e) {
    if(this.wasChecked) {
      this.checked = false; // uncheck radio saat sudah dicek sebelumnya, efek toggle
    }
    radios.forEach(r => r.wasChecked = false); // reset semua flag
    this.wasChecked = this.checked; // simpan status current checked
  });
});

(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

})(jQuery);