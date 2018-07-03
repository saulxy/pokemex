var d = document.documentElement;
var offset = d.scrollTop + window.innerHeight;

var buildTiles = function(action){
       var options = { method: 'GET' };
       var after = function(err, data){
         u('#loading').remove();
         u('.container').html('<div class="row' + (action.indexOf('pages') < 0 ? ' result' : '') + '"></div>')
         u('.container .row').first().append(u('<div>').addClass('column').first())
         data.forEach(function(pokemon) {
           var types = function(types){
             var output = '';
             for(i=0;i < types.length;i++){
               output+= '<li class="type ' + types[i] + '"></i>';
             }
               return output;
           };
           var cb = function(txt){ return "<li class='stat'>" + txt + "</li>" };
           var stats = u("<ul>").append(cb, [
                  'HP:' + pokemon.base.hp,
                  'ATT: ' + pokemon.base.att,
                  'DEF: ' + pokemon.base.def,
                  'S. ATT: ' + pokemon.base.satt,
                  'S. DEF: ' + pokemon.base.sdef,
                  'SPD: ' + pokemon.base.spd]).first()
            
            u('.container .row .column').last().append(              
              u('<div>').addClass('profile')
              .append('<h2>' + pokemon.ename + '<span>' + pokemon.id +'</span></h2>')
              .append('<ul>' + types(pokemon.type) + '</ul>')
              .append(stats)
              .first()
            )
          });
       
       };
       var before = function(xhr){
         var loading = u('<div>')
         u(loading).attr({ id: 'loading' });
         u(loading).first().style.height = offset + "px"
         u("body").first().append(u(loading).first());
       };
      console.log(u('#pokesearch').first().value.trim())
      ajax(action, options, after, before);
}

u('#pokesearch').on('keyup', function(e){
  var action = '/'
  if(u('#pokesearch').first().value.trim() !== ''){
     action = '/search/' + u('#pokesearch').first().value.toLowerCase().trim()
    buildTiles(action)
  }else if(u(".row").hasClass("result")){
    action = '/pages/0';
    buildTiles(action)
  }
})