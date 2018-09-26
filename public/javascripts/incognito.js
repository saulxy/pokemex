u("#incognito").on('click', function(e) {
  u(".profile").toggleClass("profile-incognito");
  u(".profile h2").toggleClass("h2-incognito");
  u("body").toggleClass("body-incognito");
  u(".profile li").toggleClass("li-incognito");
  u("#incognito").toggleClass("button-black");
});
