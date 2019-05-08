u("#incognito").on('click', function(e) {
	u(".profile").toggleClass("profile-incognito");
	u(".profile h2").toggleClass("h2-incognito");
	u("body").toggleClass("body-incognito");
	u(".profile li").toggleClass("li-incognito");	
	u("#incognito").toggleClass("button-black");
  if(sessionStorage.key('theme'))
	sessionStorage.clear()
	else
	sessionStorage.setItem('theme','incognito')
});


if(sessionStorage.key('theme') && sessionStorage.getItem('theme') === 'incognito'){
	u(".profile").toggleClass("profile-incognito");
	u(".profile h2").toggleClass("h2-incognito");
	u("body").toggleClass("body-incognito");
	u(".profile li").toggleClass("li-incognito");
	u("#incognito").toggleClass("button-black");
}
