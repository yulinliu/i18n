var i18n = new function(){
    this.default_lang = "en";
    this.use_lang = "en";
    this.lang_arr = {"en": {}};
	
    this.lang = function (lang){
        if(!this.isNull(this.lang_arr[lang])){
            this.use_lang = lang;
        }
    };
  
    this.push = function (lang, resource){
        if(!this.isNull(resource)){
            var tmp = lang.split("-");
            if(this.isNull(this.lang_arr[tmp[0]])){
                this.lang_arr[tmp[0]] = resource;
            }

        this.lang_arr[lang] = resource;
            this.lang(lang);
        }
    };

    this.get = function (key){
        if(!this.isNull(this.lang_arr[this.use_lang]) && !this.isNull(this.lang_arr[this.use_lang][key])){
            return this.lang_arr[this.use_lang][key];
	
        }else{
            return this.lang_arr[this.default_lang][key];
        }
    };
  
    this.isNull = function (obj){
        return (typeof obj == 'undefined') || obj == null;
    };
};
