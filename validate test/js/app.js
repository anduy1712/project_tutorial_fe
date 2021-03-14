function Validator(form){

    var formRule={}

    var Rule={
        required:function(value){
            return value ? undefined : 'Vui long nhap truong nay';
        },
        email:function(value){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(value) ? undefined : 'Vui long nhap email nay';
        },
        min:function(min){
            return function(value){
                return value >= min ? undefined : `Vui long nhap toi thieu ${min} ki tu`
            }
        }
    }

    var formElement = document.querySelector(form);
    if(formElement)
    {
        var inputs = formElement.querySelectorAll('[name][rules]');
        for(var input of inputs){
            
            var rules = input.getAttribute('rules').split('|');
            for(var rule of rules)
            {
                if(rule.includes('min'))
                {
                    var ruleMin = rule.split(':');
                    rule = ruleMin[0];
                    
                }
                if(Array.isArray(formRule[input.name]))
                {
                    formRule[input.name].push(Rule[rule]);

                }   
                else{
                    formRule[input.name] = [Rule[rule]];

                }
            }
            
            
            
        }
        console.log(formRule);
    }
}
