var AhhBadge = (function(){
  var self = {
    init: function(){
      self.badge = document.getElementById('badge');
      self.show();
      setTimeout(function(){
        self.hide();
      }, 4000);
    },
    show: function(){
      self.badge.className = 'visible';
      self.badge.addEventListener('click', function(){
        self.hide();
      });
    },
    hide: function(){
      self.badge.className = 'visible fade';
      setTimeout(function(){
        self.badge.className = '';
      }, 300);
    }
  }
  return {init: self.init};
})();