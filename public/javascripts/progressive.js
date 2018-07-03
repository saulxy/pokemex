u('#btnMore').on('click', function(e) {
       var offset = d.scrollTop + window.innerHeight;
       var action = '/pages/' + u(".container .row").length;
       var options = { method: 'GET' };
       var after = function(err, data){
         u('#loading').remove();
         u('.container').first().append(u('<div>').addClass('row').first())
         u('.container .row').last().append(u('<div>').addClass('column').first())
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
      ajax(action, options, after, before);
});